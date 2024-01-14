<template>
    <PaginatedList
        :item-manager="itemManager"
        :sort-fields="Object.keys(sortFields)"
        :to="(issue: Issue) => issueRoute(issue)"
        :sort-ascending-initially="false"
    >
        <template #item="{ item }">
            <IssueListItem :item="item"/>
        </template>
        <CreateIssueDialog :trackable="trackableId" @created-issue="(issue) => selectIssue(issue)" />
    </PaginatedList>
</template>
<script lang="ts" setup>
import { NodeReturnType, useClient } from "@/graphql/client";
import { computed } from "vue";
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

const trackableId = computed(() => route.params.trackable as string);

const sortFields = {
    Updated: IssueOrderField.LastUpdatedAt,
    Created: IssueOrderField.CreatedAt,
    Title: IssueOrderField.Title,
};

const itemManager: ItemManager<Issue, keyof typeof sortFields> = {
    filterLocal: function (item: Issue, filter: string): boolean {
        return item.title.includes(filter);
    },
    fetchItems: async function (
        filter: string,
        sortField: keyof typeof sortFields,
        sortAscending: boolean,
        count: number,
        page: number
    ): Promise<[Issue[], number]> {
        const res = await client.getIssueList({
            filter,
            orderBy: {
                field: sortFields[sortField],
                direction: sortAscending ? OrderDirection.Asc : OrderDirection.Desc
            },
            count,
            skip: page * count,
            trackable: trackableId.value
        });
        const issues = (res.node as Trackable).issues;
        return [issues.nodes, issues.totalCount];
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
