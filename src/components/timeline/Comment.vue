<template>
    <TimelineItemBase>
        <div
            class="d-flex align-start"
            :class="{
                'mb-5': !newComment
            }"
        >
            <User v-if="item.createdBy" :user="item.createdBy" :show-name="false" size="x-large"></User>
            <v-icon
                v-else
                icon="mdi-account"
                color="background"
                size="x-large"
                class="backup-icon rounded-circle"
            ></v-icon>
            <v-hover>
                <template #default="{ isHovering, props }">
                    <v-sheet
                        :border="selected ? 'primary-container md medium-emphasis' : true"
                        class="flex-1-1 ml-2 comment-card pa-3"
                        rounded="lger"
                        v-bind="props"
                    >
                        <v-sheet
                            v-if="!newComment"
                            class="d-flex align-center mx-n3 mt-n3 px-3 py-1 comment-top-bar"
                            :color="selected ? 'primary-container' : 'surface-container'"
                            rounded="lg"
                        >
                            <div
                                class="text-subtitle text-medium-emphasis flex-1-1"
                                :class="{
                                    'text-on-primary-container': selected,
                                    'text-decoration-line-through': isDeleted
                                }"
                            >
                                <User v-if="item.createdBy != undefined" :user="item.createdBy" :show-avatar="false" />
                                commented
                                <RelativeTime :time="item.createdAt" />
                            </div>
                            <v-spacer />
                            <v-fade-transition>
                                <div v-show="issue?.comment && (isHovering || menuOpen)" class="flex-shrink-0">
                                    <IconButton :disabled="isDeleted || !issue?.comment" @click="reply">
                                        <v-icon icon="mdi-reply" />
                                        <v-tooltip activator="parent" location="top"> Reply </v-tooltip>
                                    </IconButton>
                                    <IconButton>
                                        <v-icon icon="mdi-dots-vertical" />
                                        <v-menu
                                            activator="parent"
                                            location="bottom end"
                                            @update:model-value="(isOpen) => (menuOpen = isOpen)"
                                        >
                                            <v-list>
                                                <v-list-item
                                                    :disabled="editMode || isDeleted"
                                                    @click="activateEditMode"
                                                >
                                                    <v-list-item-title>Edit</v-list-item-title>
                                                    <template #prepend>
                                                        <v-icon icon="mdi-pencil" />
                                                    </template>
                                                </v-list-item>
                                                <v-list-item
                                                    :disabled="editMode || item.__typename === 'Body' || isDeleted"
                                                    @click=""
                                                >
                                                    <v-list-item-title>Delete</v-list-item-title>
                                                    <template #prepend>
                                                        <v-icon icon="mdi-delete" />
                                                    </template>
                                                    <ConfirmationDialog
                                                        title="Delete comment?"
                                                        message="Are you sure you want to delete this comment?"
                                                        confirm-text="Delete"
                                                        @confirm="deleteComment"
                                                    />
                                                </v-list-item>
                                            </v-list>
                                        </v-menu>
                                    </IconButton>
                                </div>
                            </v-fade-transition>
                        </v-sheet>
                        <v-expand-transition>
                            <div v-if="answers">
                                <v-card
                                    color="surface-container"
                                    rounded="lg"
                                    elevation="1"
                                    class="answer-card pa-3 d-flex align-center"
                                    :class="{
                                        'mt-3': !newComment
                                    }"
                                    @click="selectAnswers"
                                >
                                    <div class="flex-1-1 answer-wrapper">
                                        <div
                                            class="text-medium-emphasis text-subtitle flex-1-1"
                                            :class="{
                                                'text-decoration-line-through': isItemDeleted(answers)
                                            }"
                                        >
                                            <User v-if="answers.createdBy != undefined" :user="answers.createdBy" />
                                            commented
                                            <RelativeTime :time="answers.createdAt" />
                                        </div>
                                        <div v-if="!isItemDeleted(answers)" class="answer-text">
                                            {{ markdownToText(answers.body) }}
                                        </div>
                                        <div v-else class="text-medium-emphasis font-italic answer-text">
                                            {{ deletedText }}
                                        </div>
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
                                        <v-icon icon="mdi-close-circle-outline" />
                                    </v-btn>
                                </v-card>
                            </div>
                        </v-expand-transition>
                        <Markdown
                            v-if="!isDeleted"
                            v-model="itemBody"
                            :edit-mode="editMode"
                            class="mt-2 ml-1"
                            @update:model-value="hasChanged = true"
                        />
                        <div v-else class="mt-2 ml-1 text-medium-emphasis font-italic">{{ deletedText }}</div>
                        <div v-if="editMode" class="mx-n3">
                            <v-divider />
                            <div class="d-flex justify-end mt-2">
                                <template v-if="!newComment">
                                    <DefaultButton
                                        variant="outlined"
                                        color="error"
                                        @click="!hasChanged && cancelComment()"
                                    >
                                        Cancel
                                        <ConfirmationDialog
                                            v-if="hasChanged"
                                            title="Discard changes?"
                                            message="Are you sure you want to discard your changes?"
                                            confirm-text="Discard"
                                            @confirm="cancelComment"
                                        />
                                    </DefaultButton>
                                    <DefaultButton color="primary" class="mx-3" @click="saveComment"
                                        >Save</DefaultButton
                                    >
                                </template>
                                <DefaultButton v-else color="primary" class="mx-3" @click="createComment">
                                    Comment
                                </DefaultButton>
                            </div>
                        </div>
                    </v-sheet>
                </template>
            </v-hover>
        </div>
    </TimelineItemBase>
</template>
<script setup lang="ts">
import { PropType, inject, ref, computed } from "vue";
import TimelineItemBase, { TimelineItemType } from "./TimelineItemBase.vue";
import User from "@/components/info/User.vue";
import RelativeTime from "../RelativeTime.vue";
import Markdown from "@/components/Markdown.vue";
import { useClient } from "@/graphql/client";
import { withErrorMessage } from "@/util/withErrorMessage";
import ConfirmationDialog from "@/components/dialog/ConfirmationDialog.vue";
import { markdownToText } from "@/util/markdownToText";
import { useRouter } from "vue-router";
import { issueKey } from "@/util/keys";

export type Comment = (
    | Omit<TimelineItemType<"IssueComment">, "createdBy">
    | Omit<TimelineItemType<"Body">, "createdBy">
) &
    Partial<Pick<TimelineItemType<"IssueComment">, "createdBy">>;

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

const issue = inject(issueKey);
const menuOpen = ref(false);
const editMode = ref(props.newComment);
const itemBody = ref(props.item.body);
const hasChanged = ref(false);
const client = useClient();
const router = useRouter();

const deletedText = "This comment has been deleted";

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
const isDeleted = computed(() => {
    const item = props.item;
    return isItemDeleted(item);
});

function isItemDeleted(item: Comment) {
    return item.__typename === "IssueComment" && item.isDeleted;
}

function activateEditMode() {
    editMode.value = true;
}

async function saveComment() {
    if (props.item.__typename === "Body") {
        const newBody = await withErrorMessage(
            () => client.updateBody({ id: props.item.id, body: itemBody.value }),
            "Error updating body"
        );
        emit("updateItem", newBody.updateBody.body!);
    } else {
        const newComment = await withErrorMessage(
            () => client.updateIssueComment({ id: props.item.id, body: itemBody.value }),
            "Error updating comment"
        );
        emit("updateItem", newComment.updateIssueComment.issueComment!);
    }
    editMode.value = false;
}

async function createComment() {
    const newComment = await withErrorMessage(
        () => client.createIssueComment({ issue: issue?.value?.id!, body: itemBody.value, answers: answersId.value }),
        "Error creating comment"
    );
    emit("addItem", newComment.createIssueComment.issueComment!);
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

async function deleteComment() {
    const newItem = await withErrorMessage(
        () => client.deleteIssueComment({ id: props.item.id }),
        "Error deleting comment"
    );
    emit("updateItem", newItem.deleteIssueComment.issueComment!);
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

.backup-icon {
    background: rgb(var(--v-theme-secondary));
}
</style>
