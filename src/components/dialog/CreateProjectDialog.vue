<template>
    <v-dialog v-model="createProjectDialog" persistent width="auto">
        <v-card color="surface-elevated-3" rounded="lger" class="pa-3 create-project-dialog" elevation="0">
            <v-form @submit.prevent="createproject">
                <v-card-title class="p4-3">Create project</v-card-title>
                <div class="pa-4">
                    <v-text-field v-bind="name" label="Name" class="mb-1" />
                    <v-textarea v-bind="description" label="Description" class="mb-1"/>
                    <v-text-field v-bind="repositoryURL" label="Repository URL" class="mb-1" />
                </div>
                <v-card-actions>
                    <v-spacer />
                    <v-btn variant="text" color="" @click="!isDirty && cancelCreateproject()">
                        Cancel
                        <ConfirmationDialog
                            v-if="isDirty"
                            title="Discard project?"
                            message="Are you sure you want to discard this project?"
                            confirm-text="Discard"
                            @confirm="cancelCreateproject"
                        />
                    </v-btn>
                    <v-btn variant="text" color="primary" type="submit">Create project</v-btn>
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

const createProjectDialog = ref(false);
const client = useClient();
const typePath = ref<string | undefined>(undefined);
const isOpen = ref<boolean | undefined>(undefined);

const emit = defineEmits<{
    (event: "created-project", project: { id: string }): void;
}>();

const schema = toTypedSchema(
    yup.object().shape({
        name: yup.string().required().label("Name"),
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
const description = defineBinds("description");
const repositoryURL = defineBinds("repositoryURL");

onEvent("create-project", () => {
    resetForm();
    createProjectDialog.value = true;
});

const createproject = handleSubmit(async (state) => {
    const project = await withErrorMessage(async () => {
        const res = await client.createProject({
            input: {
                ...state,
                description: state.description ?? ""
            }
        });
        return res.createProject!.project!;
    }, "Error creating project");
    createProjectDialog.value = false;
    emit("created-project", project);
});

function cancelCreateproject() {
    createProjectDialog.value = false;
}
</script>
<style scoped lang="scss">
@use "@/styles/settings.scss";
.create-project-dialog {
    width: min(1000px, calc(100vw - 3 * settings.$side-bar-width));
}
</style>
