<template>
    <v-dialog v-model="createComponentVersionDialog" persistent width="auto">
        <v-card color="surface-elevated-3" rounded="lger" class="pa-3 create-component-dialog" elevation="0">
            <v-form @submit.prevent="createComponentVersion">
                <v-card-title class="p4-3">Create component</v-card-title>
                <div class="pa-4">
                    <div class="d-flex flex-wrap mx-n2">
                        <v-text-field v-bind="name" label="Name" class="wrap-input mx-2 mb-1 flex-1-1-0" />
                        <v-text-field v-bind="version" label="Version" class="wrap-input mx-2 mb-1 flex-1-1-0" />
                    </div>
                    <v-textarea v-bind="description" label="Description" class="mb-1" />
                </div>
                <v-card-actions>
                    <v-spacer />
                    <v-btn variant="text" color="" @click="!isDirty && cancelCreateComponentVersion()">
                        Cancel
                        <ConfirmationDialog
                            v-if="isDirty"
                            title="Discard component version?"
                            message="Are you sure you want to discard this component version?"
                            confirm-text="Discard"
                            @confirm="cancelCreateComponentVersion"
                        />
                    </v-btn>
                    <v-btn variant="text" color="primary" type="submit">Create component version</v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-dialog>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { onEvent } from "@/util/eventBus";
import * as yup from "yup";
import { useForm, useIsFormDirty } from "vee-validate";
import { wrapBinds } from "@/util/vuetifyFormConfig";
import { withErrorMessage } from "@/util/withErrorMessage";
import { useClient } from "@/graphql/client";
import { toTypedSchema } from "@vee-validate/yup";
import ConfirmationDialog from "./ConfirmationDialog.vue";

const createComponentVersionDialog = ref(false);
const client = useClient();

const props = defineProps({
    component: {
        type: String,
        required: true
    }
});

const emit = defineEmits<{
    (event: "created-component-version", componentVersion: { id: string }): void;
}>();

const schema = toTypedSchema(
    yup.object().shape({
        name: yup.string().required().label("Name"),
        version: yup.string().required().label("Version"),
        description: yup.string().notRequired().label("Description")
    })
);

const { defineComponentBinds, resetForm, handleSubmit, setValues } = useForm({
    validationSchema: schema
});
const isDirty = useIsFormDirty();

const defineBinds = wrapBinds(defineComponentBinds);

const name = defineBinds("name");
const version = defineBinds("version");
const description = defineBinds("description");

onEvent("create-component-version", () => {
    resetForm();
    createComponentVersionDialog.value = true;
});

const createComponentVersion = handleSubmit(async (state) => {
    const component = await withErrorMessage(async () => {
        const res = await client.createComponentVersion({
            input: {
                ...state,
                description: state.description ?? "",
                templatedFields: [],
                component: props.component
            }
        });
        return res.createComponentVersion!.componentVersion!;
    }, "Error creating component");
    createComponentVersionDialog.value = false;
    emit("created-component-version", component);
});

function cancelCreateComponentVersion() {
    createComponentVersionDialog.value = false;
}
</script>
<style scoped lang="scss">
@use "@/styles/settings.scss";
.create-component-dialog {
    width: min(1000px, calc(100vw - 3 * settings.$side-bar-width));
}
</style>
