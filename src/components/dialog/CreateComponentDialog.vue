<template>
    <v-dialog v-model="createComponentDialog" persistent width="auto">
        <v-card color="surface-elevated-3" rounded="lger" class="pa-3 create-component-dialog" elevation="0">
            <v-form @submit.prevent="createComponent">
                <v-card-title class="p4-3">Create component</v-card-title>
                <div class="pa-4">
                    <div class="d-flex flex-wrap mx-n2">
                        <v-text-field v-bind="name" label="Name" class="wrap-input mx-2 mb-1 flex-1-1-0" />
                        <ComponentTemplateAutocomplete v-bind="template" class="wrap-input mx-2 mb-1 flex-1-1-0" />
                    </div>
                    <v-textarea v-bind="description" label="Description" class="mb-1"/>
                    <v-text-field v-bind="repositoryURL" label="Repository URL" class="mb-1" />
                </div>
                <v-card-actions>
                    <v-spacer />
                    <DefaultButton variant="text" color="" @click="!isDirty && cancelCreateComponent()">
                        Cancel
                        <ConfirmationDialog
                            v-if="isDirty"
                            title="Discard component?"
                            message="Are you sure you want to discard this component?"
                            confirm-text="Discard"
                            @confirm="cancelCreateComponent"
                        />
                    </DefaultButton>
                    <DefaultButton variant="text" color="primary" type="submit">Create component</DefaultButton>
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
import ComponentTemplateAutocomplete from "../input/ComponentTemplateAutocomplete.vue";

const createComponentDialog = ref(false);
const client = useClient();

const emit = defineEmits<{
    (event: "created-component", component: { id: string }): void;
}>();

const schema = toTypedSchema(
    yup.object().shape({
        name: yup.string().required().label("Name"),
        template: yup.string().required().label("Template"),
        description: yup.string().notRequired().label("Description"),
        repositoryURL: yup.string().notRequired().label("Repository URL")
    })
);

const { defineComponentBinds, resetForm, handleSubmit, setValues } = useForm({
    validationSchema: schema
});
const isDirty = useIsFormDirty();

const defineBinds = wrapBinds(defineComponentBinds);

const name = defineBinds("name");
const template = defineBinds("template")
const description = defineBinds("description");
const repositoryURL = defineBinds("repositoryURL");

onEvent("create-component", () => {
    resetForm();
    createComponentDialog.value = true;
});

const createComponent = handleSubmit(async (state) => {
    const component = await withErrorMessage(async () => {
        const res = await client.createComponent({
            input: {
                ...state,
                description: state.description ?? "",
                templatedFields: []
            }
        });
        return res.createComponent!.component!;
    }, "Error creating component");
    createComponentDialog.value = false;
    emit("created-component", component);
});

function cancelCreateComponent() {
    createComponentDialog.value = false;
}
</script>
<style scoped lang="scss">
@use "@/styles/settings.scss";
.create-component-dialog {
    width: min(1000px, calc(100vw - 3 * settings.$side-bar-width));
}
</style>
