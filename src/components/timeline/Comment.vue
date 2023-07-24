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
                    <v-sheet border class="flex-1-1 ml-3 comment-card pa-3" rounded="lger" v-bind="props">
                        <v-sheet
                            class="d-flex align-center mx-n3 mt-n3 px-3 py-1 comment-top-bar"
                            color="surface-container"
                            rounded="lg"
                            v-if="!newComment"
                        >
                            <div class="text-variant text-subtitle d-flex align-center flex-1-1">
                                <User :user="item.createdBy" :show-avatar="false"></User>
                                &nbsp;commented&nbsp;
                                <RelativeTime :time="item.createdAt"></RelativeTime>
                            </div>
                            <v-spacer />
                            <v-fade-transition>
                                <div v-show="issue?.comment && (isHovering || menuOpen)">
                                    <v-btn icon variant="text" density="comfortable" color="tertiary">
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
                        <Markdown :editMode="editMode" v-model="itemBody" />
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
import { PropType, Ref, inject, ref } from "vue";
import TimelineItemBase, { TimelineItemType } from "./TimelineItemBase.vue";
import User from "@/components/User.vue";
import "bytemd/dist/index.css";
import RelativeTime from "../RelativeTime.vue";
import { Issue } from "@/views/issue/Issue.vue";
import Markdown from "@/components/Markdown.vue";
import { useClient } from "@/graphql/client";
import { withErrorMessage } from "@/util/withErrorMessage";
import ConfirmationDialog from "@/components/ConfirmationDialog.vue";

const props = defineProps({
    item: {
        type: Object as PropType<TimelineItemType<"IssueComment"> | TimelineItemType<"Body">>,
        required: true
    },
    newComment: {
        type: Boolean,
        default: false
    }
});
const emit = defineEmits<{
    (event: "updateItem", value: TimelineItemType<"IssueComment"> | TimelineItemType<"Body">): void;
    (event: "addItem", value: TimelineItemType<"IssueComment">): void;
}>();

const issue = inject<Ref<Issue | null>>("issue");
const menuOpen = ref(false);
const editMode = ref(props.newComment);
const itemBody = ref(props.item.body);
const client = useClient();

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
        () => client.createIssueComment({ issue: issue?.value?.id!, body: itemBody.value }),
        "Error creating comment"
    );
    emit("addItem", newComment.createIssueComment?.issueComment!);
    itemBody.value = "";
}

function cancelComment() {
    itemBody.value = props.item.body;
    editMode.value = false;
}
</script>
<style scoped>
.comment-top-bar {
    min-height: 45px;
}

.comment-card {
    overflow: hidden;
}
</style>
