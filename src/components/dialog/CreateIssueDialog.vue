<template>
    <v-dialog v-model="createIssueDialog" persistent width="auto">
        <v-card color="surface-elevated-3" rounded="lger" class="pa-3 create-issue-dialog" elevation="0">
            <v-form @submit.prevent="createIssue">
                <v-card-title class="pl-4">Create issue</v-card-title>
                <div class="pa-4">
                    <div class="d-flex">
                        <v-card
                            v-if="icon"
                            variant="outlined"
                            rounded="default"
                            height="52px"
                            width="52px"
                            class="mr-2 icon-container"
                        >
                            <IssueIcon :issue="icon" class="issue-icon" />
                        </v-card>
                        <v-text-field v-bind="title" label="Title" class="mb-1" />
                    </div>
                    <div class="d-flex flex-wrap mx-n2">
                        <IssueTemplateAutocomplete v-bind="template" class="wrap-input mx-2 mb-1 flex-1-1-0" />
                        <IssueTypeAutocomplete
                            v-bind="type"
                            :template="template.modelValue"
                            :disabled="!template.modelValue"
                            class="wrap-input mx-2 mb-1 flex-1-1-0"
                            @selected-items="onSelectedTypes"
                        />
                        <IssueStateAutocomplete
                            v-bind="state"
                            :template="template.modelValue"
                            :disabled="!template.modelValue"
                            class="wrap-input mx-2 mb-1 flex-1-1-0"
                            @selected-items="onSelectedStates"
                        />
                    </div>
                    <SimpleField v-bind="body" variant="outlined" label="Body" color="primary" class="markdown-field">
                        <Markdown v-bind="body" edit-mode class="full-width ma-2" />
                    </SimpleField>
                </div>
                <v-card-actions>
                    <v-spacer />
                    <DefaultButton variant="text" color="" @click="!isDirty && cancelCreateIssue()">
                        Cancel
                        <ConfirmationDialog
                            v-if="isDirty"
                            title="Discard issue?"
                            message="Are you sure you want to discard this issue?"
                            confirm-text="Discard"
                            @confirm="cancelCreateIssue"
                        />
                    </DefaultButton>
                    <DefaultButton variant="text" color="primary" type="submit">Create issue</DefaultButton>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-dialog>
</template>
<script setup lang="ts">
import SimpleField from "@/components/input/SimpleField.vue";
import IssueTemplateAutocomplete from "@/components/input/IssueTemplateAutocomplete.vue";
import Markdown from "@/components/Markdown.vue";
import { ref, watch } from "vue";
import { onEvent } from "@/util/eventBus";
import IssueTypeAutocomplete from "../input/IssueTypeAutocomplete.vue";
import IssueStateAutocomplete from "../input/IssueStateAutocomplete.vue";
import * as yup from "yup";
import { useForm, useIsFormDirty } from "vee-validate";
import { wrapBinds } from "@/util/vuetifyFormConfig";
import { withErrorMessage } from "@/util/withErrorMessage";
import { useClient } from "@/graphql/client";
import { toTypedSchema } from "@vee-validate/yup";
import ConfirmationDialog from "./ConfirmationDialog.vue";
import IssueIcon from "../IssueIcon.vue";
import { DefaultIssueIconInfoFragment } from "@/graphql/generated";
import { computed } from "vue";

const createIssueDialog = ref(false);
const client = useClient();
const typePath = ref<string | undefined>(undefined);
const isOpen = ref<boolean | undefined>(undefined);

const emit = defineEmits<{
    (event: "created-issue", issue: { id: string }): void;
}>();

const props = defineProps({
    trackable: {
        type: String,
        required: true
    }
});

const schema = toTypedSchema(
    yup.object().shape({
        title: yup.string().required().label("Title"),
        template: yup.string().required().label("Template"),
        type: yup.string().required().label("Type"),
        state: yup.string().required().label("State"),
        body: yup.string().label("Body")
    })
);

const { defineComponentBinds, resetForm, handleSubmit, setValues } = useForm({
    validationSchema: schema
});
const isDirty = useIsFormDirty();

const defineBinds = wrapBinds(defineComponentBinds);

const title = defineBinds("title");
const template = defineBinds("template");
const type = defineBinds("type");
const state = defineBinds("state");
const body = defineBinds("body");

const icon = computed<DefaultIssueIconInfoFragment | undefined>(() => {
    if (typePath.value != undefined && isOpen.value != undefined) {
        return {
            type: {
                iconPath: typePath.value
            },
            state: {
                isOpen: isOpen.value
            },
            incomingRelations: {
                totalCount: 0
            },
            outgoingRelations: {
                totalCount: 0
            }
        };
    }
    return undefined;
});

onEvent("create-issue", () => {
    resetForm();
    createIssueDialog.value = true;
});

watch(
    () => template.value.modelValue,
    () => {
        setValues({ type: undefined, state: undefined }, false);
    }
);

const createIssue = handleSubmit(async (state) => {
    const issue = await withErrorMessage(async () => {
        const res = await client.createIssue({
            input: {
                ...state,
                body: state.body ?? "",
                templatedFields: [],
                trackables: [props.trackable]
            }
        });
        return res.createIssue!.issue!;
    }, "Error creating issue");
    createIssueDialog.value = false;
    emit("created-issue", issue);
});

function cancelCreateIssue() {
    createIssueDialog.value = false;
}

function onSelectedTypes(types: { iconPath: string }[]) {
    if (types.length > 0) {
        typePath.value = types[0].iconPath;
    } else {
        typePath.value = undefined;
    }
}

function onSelectedStates(states: { isOpen: boolean }[]) {
    if (states.length > 0) {
        isOpen.value = states[0].isOpen;
    } else {
        isOpen.value = undefined;
    }
}
</script>
<style scoped lang="scss">
@use "@/styles/settings.scss";
.create-issue-dialog {
    width: min(1000px, calc(100vw - 3 * settings.$side-bar-width));
}

.wrap-input {
    min-width: 200px;
}

.issue-icon {
    height: 50px;
    width: 50px;
    margin: 1px;
}

.icon-container {
    color: rgba(var(--v-theme-on-surface), 0.38);
}

:deep(.markdown-field .v-field-label) {
    top: 65px;
}
</style>
