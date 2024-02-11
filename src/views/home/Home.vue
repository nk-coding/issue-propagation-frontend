<template>
    <div class="full-height d-flex flex-column mt-3">
        <div class="d-flex align-center mb-3 mx-3">
            <div class="text-h6">Recent issues</div>
            <v-spacer />
            <v-btn-toggle class="segmented-button ml-2" mandatory v-model="issueFilterIndex">
                <v-btn :prepend-icon="issueFilterIndex == 0 ? 'mdi-check' : 'mdi-pencil'"> Participated </v-btn>
                <v-btn :prepend-icon="issueFilterIndex == 1 ? 'mdi-check' : 'mdi-plus'"> Created </v-btn>
                <v-btn :prepend-icon="issueFilterIndex == 2 ? 'mdi-check' : 'mdi-account'"> Assigned </v-btn>
            </v-btn-toggle>
        </div>
        <div class="flex-1-1">
            <PaginatedList
                :item-manager="itemManager"
                :sort-fields="Object.keys(sortFields)"
                :to="(issue: Issue) => issueRoute(issue)"
                :sort-ascending-initially="false"
                :dependencies="[stateFilterInput]"
            >
                <template #item="{ item }">
                    <IssueListItem :item="item" />
                </template>
                <template #search-append>
                    <IssueStateSegmentedButton v-model="issueStateIndices" />
                </template>
            </PaginatedList>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useClient } from "@/graphql/client";
import { computed, ref } from "vue";
import { RouteLocationRaw, useRouter } from "vue-router";
import PaginatedList, { ItemManager } from "@/components/PaginatedList.vue";
import {
    IssueFilterInput,
    IssueOrderField,
    OrderDirection,
    ParticipatingIssueListItemInfoFragment
} from "@/graphql/generated";
import IssueListItem from "@/components/IssueListItem.vue";
import IssueStateSegmentedButton from "@/components/input/IssueStateSegmentedButton.vue";
import { useAppStore } from "@/store/app";

type Issue = ParticipatingIssueListItemInfoFragment;

const client = useClient();
const router = useRouter();
const store = useAppStore();

const issueStateIndices = ref([0]);
const issueFilterIndex = ref(0);

const userId = computed(() => store.user!.id);
const userFilter = computed(() => ({
    id: {
        eq: userId.value
    }
}));

const stateFilterInput = computed(() => {
    if (issueStateIndices.value.length != 1) {
        return undefined;
    }
    const state = issueStateIndices.value[0] == 0;
    return { isOpen: { eq: state } };
});

const sortFields = {
    Updated: IssueOrderField.LastUpdatedAt,
    Created: IssueOrderField.CreatedAt,
    Title: IssueOrderField.Title
};

const itemManager: ItemManager<Issue, keyof typeof sortFields> = {
    fetchItems: async function (
        filter: string | undefined,
        sortField: keyof typeof sortFields,
        sortAscending: boolean,
        count: number,
        page: number
    ): Promise<[Issue[], number]> {
        const issueFilter: IssueFilterInput = {
            state: stateFilterInput.value
        };
        if (issueFilterIndex.value == 1) {
            issueFilter.createdBy = userFilter.value;
        } else if (issueFilterIndex.value == 2) {
            issueFilter.assignments = {
                any: {
                    user: userFilter.value
                }
            };
        }
        if (filter == undefined) {
            const res = await client.getParticipatingIssueList({
                orderBy: {
                    field: sortFields[sortField],
                    direction: sortAscending ? OrderDirection.Asc : OrderDirection.Desc
                },
                count,
                skip: page * count,
                filter: issueFilter
            });
            const issues = res.currentUser!.participatedIssues;
            return [issues.nodes, issues.totalCount];
        } else {
            if (issueFilterIndex.value == 0) {
                issueFilter.participants = {
                    any: userFilter.value
                };
            }
            const res = await client.getParticipatingFilteredIssueList({
                query: filter,
                count,
                filter: issueFilter
            });
            return [res.searchIssues, res.searchIssues.length];
        }
    }
};

function issueRoute(issue: Issue): RouteLocationRaw {
    const trackable = issue.trackables.nodes[0];
    return {
        name: trackable.__typename == "Component" ? "component-issue" : "project-issue",
        params: { issue: issue.id, trackable: trackable.id }
    };
}
</script>
