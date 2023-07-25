<template>
    <TimelineItemBase>
        <div
            class="d-flex align-start"
            :class="{
                'mb-6': !newComment
            }"
        >
            <User :user="item.createdBy" :show-name="false" size="xx-large"></User>
            <v-hover>
                <template v-slot:default="{ isHovering, props }">
                    <v-sheet
                        :border="selected ? 'primary-container md medium-emphasis' : true"
                        class="flex-1-1 ml-2 comment-card pa-3"
                        rounded="lger"
                        v-bind="props"
                    >
                        <v-sheet
                            class="d-flex align-center mx-n3 mt-n3 px-3 py-1 comment-top-bar"
                            :color="selected ? 'primary-container' : 'surface-container'"
                            rounded="lg"
                            v-if="!newComment"
                        >
                            <div
                                class="text-subtitle d-flex align-center flex-1-1"
                                :class="{
                                    'text-variant': !selected,
                                    'text-on-primary-container': selected
                                }"
                            >
                                <User :user="item.createdBy" :show-avatar="false"></User>
                                &nbsp;commented&nbsp;
                                <RelativeTime :time="item.createdAt"></RelativeTime>
                            </div>
                            <v-spacer />
                            <v-fade-transition>
                                <div v-show="issue?.comment && (isHovering || menuOpen)">
                                    <v-btn icon variant="text" density="comfortable" color="tertiary" @click="reply">
                                        <v-icon>mdi-reply</v-icon>
                                        <v-tooltip activator="parent" location="top"> Reply </v-tooltip>
                                    </v-btn>
                                    <v-btn icon variant="text" density="comfortable" color="tertiary">
                                        <v-icon>mdi-dots-vertical</v-icon>
                                        <v-menu
                                            activator="parent"
                                            location="bottom end"
                                            @update:model-value="(isOpen) => (menuOpen = isOpen)"
                                        >
                                            <v-list>
                                                <v-list-item @click="activateEditMode" :disabled="editMode">
                                                    <v-list-item-title>Edit</v-list-item-title>
                                                    <template v-slot:prepend>
                                                        <v-icon>mdi-pencil</v-icon>
                                                    </template>
                                                </v-list-item>
                                                <v-list-item
                                                    :disabled="editMode || item.__typename === 'Body'"
                                                    @click=""
                                                >
                                                    <v-list-item-title>Delete</v-list-item-title>
                                                    <template v-slot:prepend>
                                                        <v-icon>mdi-delete</v-icon>
                                                    </template>
                                                    <ConfirmationDialog
                                                        title="Delete comment?"
                                                        message="Are you sure you want to delete this comment?"
                                                        confirm-text="Delete"
                                                        @confirm=""
                                                    />
                                                </v-list-item>
                                            </v-list>
                                        </v-menu>
                                    </v-btn>
                                </div>
                            </v-fade-transition>
                        </v-sheet>
                        <v-expand-transition>
                            <div v-if="answers">
                                <v-card
                                    color="surface-container"
                                    rounded="lg"
                                    elevation="1"
                                    @click="selectAnswers"
                                    class="answer-card pa-3 d-flex align-center"
                                    :class="{
                                        'mt-3': !newComment
                                    }"
                                >
                                    <div class="flex-1-1 answer-wrapper">
                                        <div class="text-variant text-subtitle d-flex flex-1-1">
                                            <User :user="answers.createdBy"></User>
                                            &nbsp;commented&nbsp;
                                            <RelativeTime :time="answers.createdAt"></RelativeTime>
                                        </div>
                                        <div class="answer-text">{{ markdownToText(answers.body) }}</div>
                                    </div>
                                    <v-btn
                                        v-if="newComment"
                                        icon
                                        variant="plain"
                                        size="x-large"
                                        density="compact"
                                        class="mr-n3"
                                        color="error"
                                        @click="resetAnswers"
                                    >
                                        <v-icon>mdi-close-circle-outline</v-icon>
                                    </v-btn>
                                </v-card>
                            </div>
                        </v-expand-transition>
                        <Markdown :editMode="editMode" v-model="itemBody" class="mt-2 ml-1" />
                        <div class="mx-n3" v-if="editMode">
                            <v-divider />
                            <div class="d-flex justify-end mt-2">
                                <template v-if="!newComment">
                                    <v-btn variant="outlined" color="error">
                                        Cancel
                                        <ConfirmationDialog
                                            title="Discard changes?"
                                            message="Are you sure you want to discard your changes?"
                                            confirm-text="Discard"
                                            @confirm="cancelComment"
                                        />
                                    </v-btn>
                                    <v-btn @click="saveComment" color="primary" class="mx-3">Save</v-btn>
                                </template>
                                <v-btn v-else @click="createComment" color="primary" class="mx-3"> Comment </v-btn>
                            </div>
                        </div>
                    </v-sheet>
                </template>
            </v-hover>
        </div>
    </TimelineItemBase>
</template>
<script setup lang="ts">
import { PropType, Ref, inject, ref, computed } from "vue";
import TimelineItemBase, { TimelineItemType } from "./TimelineItemBase.vue";
import User from "@/components/User.vue";
import "bytemd/dist/index.css";
import RelativeTime from "../RelativeTime.vue";
import { Issue } from "@/views/issue/Issue.vue";
import Markdown from "@/components/Markdown.vue";
import { useClient } from "@/graphql/client";
import { withErrorMessage } from "@/util/withErrorMessage";
import ConfirmationDialog from "@/components/ConfirmationDialog.vue";
import { markdownToText } from "@/util/markdownToText";
import { useRouter } from "vue-router";

type Comment = TimelineItemType<"IssueComment"> | TimelineItemType<"Body">;

const props = defineProps({
    item: {
        type: Object as PropType<Comment>,
        required: true
    },
    newComment: {
        type: Boolean,
        default: false
    },
    selected: {
        type: Boolean,
        default: false
    }
});
const emit = defineEmits<{
    (event: "updateItem", value: Comment): void;
    (event: "addItem", value: TimelineItemType<"IssueComment">): void;
    (event: "replyTo", value: string): void;
    (event: "resetAnswers"): void;
}>();

const issue = inject<Ref<Issue | null>>("issue");
const menuOpen = ref(false);
const editMode = ref(props.newComment);
const itemBody = ref(props.item.body);
const client = useClient();
const router = useRouter();

const answersId = computed(() => {
    const item = props.item;
    if (item.__typename === "IssueComment" && issue != undefined && item.answers?.id != undefined) {
        return item.answers?.id;
    }
    return null;
});
const answers = computed(() => {
    const id = answersId.value;
    if (id != undefined) {
        return issue?.value?.timelineItems?.nodes?.find((c) => c.id === id) as Comment;
    }
    return null;
});

function activateEditMode() {
    editMode.value = true;
}

async function saveComment() {
    if (props.item.__typename === "Body") {
        const newBody = await withErrorMessage(
            () => client.updateBody({ id: props.item.id, body: props.item.body }),
            "Error updating body"
        );
        emit("updateItem", newBody.updateBody?.body!);
    } else {
        const newComment = await withErrorMessage(
            () => client.updateIssueComment({ id: props.item.id, body: props.item.body }),
            "Error updating comment"
        );
        emit("updateItem", newComment.updateIssueComment?.issueComment!);
    }
    editMode.value = false;
}

async function createComment() {
    const newComment = await withErrorMessage(
        () => client.createIssueComment({ issue: issue?.value?.id!, body: itemBody.value, answers: answersId.value }),
        "Error creating comment"
    );
    emit("addItem", newComment.createIssueComment?.issueComment!);
    itemBody.value = "";
}

function cancelComment() {
    itemBody.value = props.item.body;
    editMode.value = false;
}

function reply() {
    emit("replyTo", props.item.id);
}

function resetAnswers() {
    emit("resetAnswers");
}

function selectAnswers() {
    router.replace({
        query: {
            item: answersId.value
        }
    });
}
</script>
<style scoped>
.comment-top-bar {
    min-height: 45px;
}

.comment-card {
    overflow: hidden;
}

.answer-text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.answer-card {
    border-left: solid 5px rgb(var(--v-theme-tertiary));
}

.answer-wrapper {
    min-width: 0;
}
</style>
