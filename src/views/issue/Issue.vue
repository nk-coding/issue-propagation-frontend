<template>
    <div v-if="issue" class="pl-3 pt-3 fill-height d-flex flex-column">
        <div class="mb-5">
            <div class="d-flex">
                <IssueIcon :issue="issue" height="50px" class="mr-3"></IssueIcon>
                <div>
                    <div class="text-h4">{{ issue.title }}</div>
                    <div class="text-medium-emphasis text-subtitle-1">
                        Opened by&nbsp;
                        <User :user="issue.createdBy" />
                        &nbsp;
                        <RelativeTime :time="issue.createdAt" />
                        &nbsp;· last updated&nbsp;
                        <RelativeTime :time="issue.lastUpdatedAt" />
                    </div>
                </div>
            </div>
        </div>
        <div class="content d-flex flex-fill">
            <div class="timeline">
                <TimelineItem
                    v-for="item in timeline"
                    :ref="(el: any) => registerItemElement(item.id, el)"
                    :item="item"
                    :selected="item.id == selectedItem"
                    @replyTo="replyToComment"
                    @updateItem="updateItem"
                />
                <TimelineBreak />
                <Comment
                    v-if="store.isLoggedIn"
                    ref="newComment"
                    :item="newCommentItem"
                    :new-comment="true"
                    class="mt-3"
                    @addItem="addComment"
                    @resetAnswers="resetAnswers"
                />
                <div class="pt-3" />
            </div>
            <v-sheet class="sidebar ml-8 mr-3 mb-3" color="surface-container" rounded="xl">
                <EditableCompartment name="Type" :editable="!!issue.manageIssues" :close-hierarchy="false">
                    <template #display>
                        <IssueType :type="issue.type" />
                    </template>
                    <template #edit>
                        <FetchingAutocomplete
                            :fetch="searchIssueTypes"
                            variant="outlined"
                            density="comfortable"
                            label="Type"
                            auto-select-first
                            item-title="name"
                            item-value="id"
                            autofocus
                            menu
                            :initial-items="[issue.type]"
                            :model-value="issue.type.id"
                            @update:model-value="updateIssueType"
                        >
                            <template #item="{ props, item }">
                                <v-list-item :title="item.raw.name" :subtitle="item.raw.description" v-bind="props">
                                    <template #prepend>
                                        <IssueTypeIcon
                                            :path="item.raw.iconPath"
                                            fill="rgb(var(--v-theme-primary))"
                                            class="type-icon mr-2"
                                        />
                                    </template>
                                </v-list-item>
                            </template>
                        </FetchingAutocomplete>
                    </template>
                </EditableCompartment>
                <v-divider />
                <EditableCompartment name="State" :editable="!!issue.manageIssues" :close-hierarchy="false">
                    <template #display>
                        <IssueState :state="issue.state" />
                    </template>
                    <template #edit>
                        <FetchingAutocomplete
                            :fetch="searchIssueStates"
                            variant="outlined"
                            density="comfortable"
                            label="State"
                            auto-select-first
                            item-title="name"
                            item-value="id"
                            autofocus
                            menu
                            :initial-items="[issue.state]"
                            :model-value="issue.state.id"
                            @update:model-value="updateIssueState"
                        >
                            <template #item="{ props, item }">
                                <v-list-item :title="item.raw.name" :subtitle="item.raw.description" v-bind="props">
                                    <template #prepend>
                                        <v-icon
                                            :color="item.raw.isOpen ? 'issue-open' : 'issue-closed'"
                                            class="full-opacity"
                                        >
                                            mdi-circle
                                        </v-icon>
                                    </template>
                                </v-list-item>
                            </template>
                        </FetchingAutocomplete>
                    </template>
                </EditableCompartment>
                <v-divider />
                <EditableCompartment name="Labels" :editable="!!issue.manageIssues">
                    <template #display>
                        <Label v-for="label in labels" :label="label" />
                    </template>
                    <template #edit>
                        <div v-for="label in labels">
                            <ListItem :title="label.name" :subtitle="label.description">
                                <template #prepend>
                                    <v-icon :color="label.color" class="mr-2"> mdi-circle </v-icon>
                                </template>
                                <template #append>
                                    <IconButton @click="() => removeLabel(label.id)">
                                        <v-icon>mdi-close</v-icon>
                                    </IconButton>
                                </template>
                            </ListItem>
                            <v-divider />
                        </div>
                        <FetchingAutocomplete
                            :fetch="searchLabels"
                            :dependencies="[labels]"
                            variant="outlined"
                            density="comfortable"
                            class="mt-3 mb-n3"
                            label="Add label"
                            autofocus
                            auto-select-first
                            item-title="name"
                            item-value="id"
                            multiple
                            menu
                            v-model="addedLabels"
                        >
                            <template #item="{ props, item: label }">
                                <v-list-item :title="label.raw.name" :subtitle="label.raw.description" v-bind="props">
                                    <template #prepend>
                                        <v-icon :color="label.raw.color" class="full-opacity"> mdi-circle </v-icon>
                                    </template>
                                </v-list-item>
                            </template>
                        </FetchingAutocomplete>
                    </template>
                </EditableCompartment>
                <v-divider />
                <EditableCompartment name="Assignees" :editable="!!issue.manageIssues">
                    <template #display>
                        <Assignment
                            v-for="assignment in issue.assignments.nodes"
                            :assignment="assignment"
                            class="d-block my-2"
                        />
                    </template>
                </EditableCompartment>
            </v-sheet>
        </div>
    </div>
</template>
<script setup lang="ts">
import { NodeReturnType, useClient } from "@/graphql/client";
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useAsyncState } from "@vueuse/core";
import TimelineItem from "@/components/timeline/TimelineItem";
import IssueIcon from "@/components/IssueIcon.vue";
import User from "@/components/info/User.vue";
import RelativeTime from "@/components/RelativeTime.vue";
import { provide } from "vue";
import { withErrorMessage } from "@/util/withErrorMessage";
import TimelineBreak from "@/components/timeline/TimelineBreak.vue";
import { useAppStore } from "@/store/app";
import Comment from "@/components/timeline/Comment.vue";
import { TimelineItemType } from "@/components/timeline/TimelineItemBase.vue";
import { nextTick } from "vue";
import EditableCompartment from "@/components/EditableCompartment.vue";
import Label from "@/components/info/Label.vue";
import IssueState from "@/components/info/IssueState.vue";
import IssueType from "@/components/info/IssueType.vue";
import Assignment from "@/components/info/Assignment.vue";
import ListItem from "@/components/ListItem.vue";
import FetchingAutocomplete from "@/components/FetchingAutocomplete.vue";
import { DefaultIssueStateInfoFragment, DefaultLabelInfoFragment } from "@/graphql/generated";
import { DefaultIssueTypeInfoFragment } from "@/graphql/generated";
import IssueTypeIcon from "@/components/IssueTypeIcon.vue";

export type Issue = NodeReturnType<"getIssue", "Issue">;

const client = useClient();
const route = useRoute();
const store = useAppStore();
const issueId = computed(() => route.params.issue as string);
const selectedItem = computed(() => route.query.item as string | undefined);

const { state: issue, isReady } = useAsyncState(
    async () => {
        const res = await withErrorMessage(() => client.getIssue({ id: issueId.value }), "Error loading issue");
        return res.node as Issue;
    },
    null,
    { shallow: false }
);

const answers = ref<string | null>(null);
const newCommentItem = computed(() => {
    return {
        __typename: "IssueComment",
        body: "",
        createdBy: store.user,
        answers: answers.value ? { id: answers.value } : undefined
    } as TimelineItemType<"IssueComment">;
});
const newComment = ref<InstanceType<typeof Comment> | null>(null);

const itemElementLookup = new Map<string, any>();

provide("issue", issue);

const timeline = computed(() => issue.value!.timelineItems.nodes);
const labels = computed(() => issue.value!.labels.nodes);

function addComment(comment: TimelineItemType<"IssueComment">) {
    timeline.value.push(comment);
    answers.value = null;
}

async function replyToComment(id: string) {
    answers.value = id;
    await nextTick();
    newComment.value?.$el?.scrollIntoView({ behavior: "smooth", block: "end" });
}

function resetAnswers() {
    answers.value = null;
}

function registerItemElement(id: string, element: any) {
    itemElementLookup.set(id, element);
}

watch([isReady, selectedItem], async ([newIsReady], [oldIsReady]) => {
    await nextTick();
    if (isReady.value && selectedItem.value) {
        const behavior = oldIsReady ? "smooth" : "auto";
        itemElementLookup.get(selectedItem.value)?.scrollIntoView({ behavior });
    }
});

function updateItem(item: TimelineItemType<any>) {
    const index = timeline.value.findIndex((i) => i.id == item.id);
    if (index != -1) {
        timeline.value.splice(index, 1, item);
    }
}

async function searchIssueTypes(filter: string, count: number): Promise<DefaultIssueTypeInfoFragment[]> {
    const searchedIssue = await withErrorMessage(async () => {
        const res = await client.searchIssueTypes({ issue: issueId.value, filter, count });
        return res.node as NodeReturnType<"searchIssueTypes", "Issue">;
    }, "Error searching issue types");
    return searchedIssue.template.issueTypes.nodes;
}

async function updateIssueType(type: string | null) {
    if (!type) {
        return;
    }
    const event = await withErrorMessage(async () => {
        const res = await client.changeIssueType({ issue: issueId.value, type });
        return res.changeIssueType!.typeChangedEvent!;
    }, "Error updating issue type");
    timeline.value.push(event);
    issue.value!.type = event.newIssueType;
}

async function searchIssueStates(filter: string, count: number): Promise<DefaultIssueStateInfoFragment[]> {
    const searchedIssue = await withErrorMessage(async () => {
        const res = await client.searchIssueStates({ issue: issueId.value, filter, count });
        return res.node as NodeReturnType<"searchIssueStates", "Issue">;
    }, "Error searching issue states");
    return searchedIssue.template.issueStates.nodes;
}

async function updateIssueState(state: string | null) {
    if (!state) {
        return;
    }
    const event = await withErrorMessage(async () => {
        const res = await client.changeIssueState({ issue: issueId.value, state });
        return res.changeIssueState!.stateChangedEvent!;
    }, "Error updating issue state");
    timeline.value.push(event);
    issue.value!.state = event.newState;
}

async function searchLabels(filter: string, count: number): Promise<DefaultLabelInfoFragment[]> {
    const searchedIssue = await withErrorMessage(async () => {
        const res = await client.searchLabels({ issue: issueId.value, filter, count });
        return res.node as NodeReturnType<"searchLabels", "Issue">;
    }, "Error searching labels");
    const searchedLabels = new Map(
        searchedIssue.trackables.nodes.flatMap((trackable) => trackable.labels.nodes.map((label) => [label.id, label]))
    );
    const currentLabels = new Set(labels.value.map((label) => label.id));
    return [...searchedLabels.values()].filter((label) => !currentLabels.has(label.id));
}

const addedLabels = ref<string[]>([]);
watch(addedLabels, async (newLabels) => {
    if (newLabels.length > 0) {
        for (const labelId of newLabels) {
            const event = await withErrorMessage(async () => {
                const res = await client.addLabelToIssue({ issue: issueId.value, label: labelId });
                return res.addLabelToIssue!.addedLabelEvent!;
            }, "Error adding label to issue");
            timeline.value.push(event);
            labels.value.push(event.addedLabel!);
        }
        addedLabels.value = [];
    }
});

async function removeLabel(labelId: string) {
    const event = await withErrorMessage(async () => {
        const res = await client.removeLabelFromIssue({ issue: issueId.value, label: labelId });
        return res.removeLabelFromIssue!.removedLabelEvent!;
    }, "Error removing label from issue");
    timeline.value.push(event);
    const index = labels.value.findIndex((label) => label.id == labelId);
    if (index != -1) {
        labels.value.splice(index, 1);
    }
}
</script>
<style scoped lang="scss">
@use "@/styles/settings.scss";
@use "sass:map";

.type-icon {
    width: map.get(settings.$avatar-sizes, "large");
    height: map.get(settings.$avatar-sizes, "large");
}

.fill-height {
    height: 100%;
}

.content {
    position: relative;
    overflow: auto;
}

.timeline {
    flex: 1 1;
    min-width: 0;
}

.sidebar {
    position: sticky;
    top: 0;
    right: 0;
    width: min(40%, 350px);
    max-height: calc(100% - 12px);
    height: fit-content;
    overflow-y: auto;
}
</style>
