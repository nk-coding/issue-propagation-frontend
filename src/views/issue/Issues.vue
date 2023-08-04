<template>
    <PaginatedList :item-manager="itemManager" :sort-fields="Object.keys(sortFields)" @item-selected="selectIssue">
        <template #item="{ item }">
            <ListItem :title="item.title" :subtitle="item.title">
                <template #prepend>
                    <IssueIcon :issue="item" height="40px" class="mr-2 flex-0-0" />
                </template>
                <template #append>
                    <div class="mr-7 user-stack-container">
                        <UserStack
                            :users="item.assignments.nodes.map((assignment) => assignment.user)"
                            size="small"
                            class="pa-3"
                        />
                    </div>
                    <div class="text-medium-emphasis icon-container d-flex align-center">
                        <v-icon color="issue-incoming" class="triangle-right mr-1" size="x-small">mdi-triangle</v-icon>
                        {{ item.incomingRelations.totalCount }}
                    </div>
                    <div class="text-medium-emphasis icon-container d-flex align-center">
                        {{ item.outgoingRelations.totalCount }}
                        <v-icon color="issue-outgoing" class="triangle-right ml-1" size="x-small">mdi-triangle</v-icon>
                    </div>
                    <div class="text-medium-emphasis icon-container">
                        <v-icon>mdi-comment-outline</v-icon>
                        {{ item.issueComments.totalCount }}
                    </div>
                </template>
                <template #subtitle>
                    <div class="text-medium-emphasis text-body-2">
                        was created&nbsp;
                        <RelativeTime :time="item.createdAt" />
                        &nbsp;by&nbsp;
                        <User :user="item.createdBy" size="small" />
                    </div>
                </template>
                <template #title-append>
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
        <v-dialog v-model="createIssueDialog" persistent width="auto">
            <v-card color="surface-elevated-3" rounded="lger" class="pa-3 create-issue-dialog">
                <v-card-title class="p4-3">Create issue</v-card-title>
                <div class="pa-4">
                    <v-text-field v-model="newIssueTitle" label="Title" color="primary"/>
                    <SimpleField :model-value="newIssueBody" variant="outlined" label="Body" color="primary" class="markdown-field">
                        <Markdown v-model="newIssueBody" edit-mode class="full-width ma-2"/>
                    </SimpleField>
                </div>
                <v-card-actions>
                    <v-spacer />
                    <v-btn variant="text" color="" @click="cancelCreateIssue">Cancel</v-btn>
                    <v-btn variant="text" color="primary" @click="createIssue">Create issue</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </PaginatedList>
</template>
<script lang="ts" setup>
import { NodeReturnType, useClient } from "@/graphql/client";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import PaginatedList, { ItemManager } from "@/components/PaginatedList.vue";
import ListItem from "@/components/ListItem.vue";
import { IssueOrderField, OrderDirection } from "@/graphql/generated";
import RelativeTime from "@/components/RelativeTime.vue";
import User from "@/components/info/User.vue";
import IssueIcon from "@/components/IssueIcon.vue";
import Label from "@/components/info/Label.vue";
import UserStack from "@/components/UserStack.vue";
import Markdown from "@/components/Markdown.vue";
import { onEvent } from "@/util/eventBus";
import SimpleField from "@/components/SimpleField.vue";

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

const createIssueDialog = ref(false);
const newIssueTitle = ref("");
const newIssueBody = ref("");
const newIssueTemplate = ref<undefined | string>(undefined);
const newIssueType = ref<undefined | string>(undefined);
const newIssueState = ref<undefined | string>(undefined);

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

onEvent("create-issue", () => {
    createIssueDialog.value = true;
});

async function createIssue() {
    createIssueDialog.value = false;
}

function cancelCreateIssue() {
    createIssueDialog.value = false;
}
</script>
<style scoped lang="scss">
@use "@/styles/settings.scss";
.icon-container {
    min-width: settings.$icon-with-number-width;
}
.triangle-right {
    rotate: 90deg;
}
.user-stack-container {
    background: transparent;
}

.create-issue-dialog {
    width: min(1000px, calc(100vw - 3 * settings.$side-bar-width));
}

:deep(.markdown-field .v-field-label) {
    top: 65px;
}
</style>