<template>
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
            <v-btn-toggle class="segmented-button" multiple mandatory v-model="issueStateIndices">
                <v-btn class="issue-open" :prepend-icon="issueStateIndices.includes(0) ? 'mdi-check' : '$issue'">
                    Open
                </v-btn>
                <v-btn class="issue-closed" :prepend-icon="issueStateIndices.includes(1) ? 'mdi-check' : '$issue'">
                    Closed
                </v-btn>
            </v-btn-toggle>
        </template>
        <CreateIssueDialog :trackable="trackableId" @created-issue="(issue) => selectIssue(issue)" />
    </PaginatedList>
</template>
<script lang="ts" setup>
import { NodeReturnType, useClient } from "@/graphql/client";
import { computed, ref } from "vue";
import { RouteLocationRaw, useRoute, useRouter } from "vue-router";
import PaginatedList, { ItemManager } from "@/components/PaginatedList.vue";
import { IssueOrderField, OrderDirection } from "@/graphql/generated";
import CreateIssueDialog from "@/components/dialog/CreateIssueDialog.vue";
import IssueListItem from "@/components/IssueListItem.vue";

type Trackable = NodeReturnType<"getIssueList", "Component">;
type Issue = Trackable["issues"]["nodes"][0];

const client = useClient();
const router = useRouter();
const route = useRoute();

const issueStateIndices = ref([0]);

const stateFilterInput = computed(() => {
    if (issueStateIndices.value.length != 1) {
        return undefined;
    }
    const state = issueStateIndices.value[0] == 0;
    return { isOpen: { eq: state } };
});

const trackableId = computed(() => route.params.trackable as string);

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
        if (filter == undefined) {
            const res = await client.getIssueList({
                orderBy: {
                    field: sortFields[sortField],
                    direction: sortAscending ? OrderDirection.Asc : OrderDirection.Desc
                },
                count,
                skip: page * count,
                trackable: trackableId.value,
                stateFilter: stateFilterInput.value
            });
            const issues = (res.node as Trackable).issues;
            return [issues.nodes, issues.totalCount];
        } else {
            const res = await client.getFilteredIssueList({
                query: filter,
                count,
                trackable: trackableId.value,
                stateFilter: stateFilterInput.value
            });
            return [res.searchIssues, res.searchIssues.length];
        }
    }
};

function selectIssue(issue: { id: string }) {
    router.push(issueRoute(issue));
}

function issueRoute(issue: { id: string }): RouteLocationRaw {
    return {
        name: (route.name as string).slice(0, -1),
        params: { issue: issue.id, trackable: trackableId.value }
    };
}
</script>
<style scoped>
.issue-open :deep(.v-icon:not(.mdi-check)) {
    color: rgb(var(--v-theme-issue-open));
}

.issue-closed :deep(.v-icon:not(.mdi-check)) {
    color: rgb(var(--v-theme-issue-closed));
}
</style>
