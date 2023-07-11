<template>
    <PaginatedList :item-manager="itemManager" :sort-fields="Object.keys(sortFields)" @item-selected="selectIssue">
        <template #item="{ item }">
            <ListItem :title="item.title" :subtitle="item.title">
                <template v-slot:prepend>
                    <IssueIcon :issue="item" height="40px" class="mr-2" />
                </template>
                <template v-slot:append>
                    <div class="text-medium-emphasis issue-container">
                        <v-icon color="on-surface-variant">mdi-comment-outline</v-icon>
                        {{ item.issueComments.totalCount }}
                    </div>
                </template>
                <template v-slot:subtitle>
                    <v-list-item-subtitle class="d-flex align-center">
                        was created&nbsp;
                        <RelativeTime :time="item.createdAt" />
                        &nbsp;by&nbsp;
                        <User :user="item.createdBy" class="subtitle-user" />
                    </v-list-item-subtitle>
                </template>
                <template v-slot:title-append>
                    <Label
                        v-for="(label, idx) in item.labels.nodes"
                        :key="idx"
                        :label="label"
                        class="ml-2"
                        size="small"
                    />
                </template>
            </ListItem>
        </template>
    </PaginatedList>
</template>
<script lang="ts" setup>
import { NodeReturnType, useClient } from "@/graphql/client";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import PaginatedList, { ItemManager } from "@/components/PaginatedList.vue";
import ListItem from "../component/ListItem.vue";
import { IssueOrderField, OrderDirection } from "@/graphql/generated";
import RelativeTime from "@/components/RelativeTime.vue";
import User from "@/components/User.vue";
import IssueIcon from "@/components/IssueIcon.vue";
import Label from "@/components/Label.vue";

type Trackable = NodeReturnType<"getIssues", "Component">;
type Issue = Trackable["issues"]["nodes"][0];

const client = useClient();
const router = useRouter();
const route = useRoute();

const trackableId = computed(() => route.params.trackable as string);

const sortFields = {
    Created: IssueOrderField.CreatedAt,
    Title: IssueOrderField.Title,
    Updated: IssueOrderField.LastUpdatedAt
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
        const res = await client.getIssues({
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

function selectIssue(issue: any) {
    router.push({
        name: (route.name as string).slice(0, -1),
        params: { issue: issue.id, trackable: trackableId.value }
    });
}
</script>
<style scoped>
.issue-container {
    min-width: 70px;
}
.subtitle-user {
    height: 1.3em;
}
</style>
