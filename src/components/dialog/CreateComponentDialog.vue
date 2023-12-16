<template>
    <v-dialog v-model="createComponentDialog" persistent width="auto">
        <v-card color="surface-elevated-3" rounded="lger" class="pa-3 create-component-dialog" elevation="0">
            <TemplatedNodeDialogContent
                item-name="component"
                confirmation-message="Create component"
                :form-meta="meta"
                :form-validate="validate"
                color="surface-elevated-3"
                @cancel="cancelCreateComponent"
                @confirm="createComponent"
            >
                <template #general>
                    <div class="d-flex flex-wrap mx-n2">
                        <v-text-field v-bind="name" label="Name" class="wrap-input mx-2 mb-1 flex-1-1-0" />
                        <ComponentTemplateAutocomplete v-bind="template" class="wrap-input mx-2 mb-1 flex-1-1-0" />
                    </div>
                    <v-textarea v-bind="description" label="Description" class="mb-1" />
                    <v-text-field v-bind="repositoryURL" label="Repository URL" class="mb-1" />
                </template>
                <template #templatedFields>
                    <TemplatedFieldsInput
                        v-if="templateValue != undefined"
                        :schema="templateValue.templateFieldSpecifications"
                        :model-value="templatedFields"
                    />
                </template>
            </TemplatedNodeDialogContent>
        </v-card>
    </v-dialog>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { onEvent } from "@/util/eventBus";
import * as yup from "yup";
import { useForm } from "vee-validate";
import { wrapBinds } from "@/util/vuetifyFormConfig";
import { withErrorMessage } from "@/util/withErrorMessage";
import { NodeReturnType, useClient } from "@/graphql/client";
import { toTypedSchema } from "@vee-validate/yup";
import ComponentTemplateAutocomplete from "../input/ComponentTemplateAutocomplete.vue";
import { computed } from "vue";
import TemplatedNodeDialogContent from "./TemplatedNodeDialogContent.vue";
import TemplatedFieldsInput, { Field } from "../input/schema/TemplatedFieldsInput.vue";
import { asyncComputed } from "@vueuse/core";
import { watch } from "vue";

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

const { defineComponentBinds, resetForm, handleSubmit, meta, validate } = useForm({
    validationSchema: schema
});
const defineBinds = wrapBinds(defineComponentBinds);

const name = defineBinds("name");
const template = defineBinds("template");
const description = defineBinds("description");
const repositoryURL = defineBinds("repositoryURL");

const templatedFields = ref<Field[]>([])
const templateValue = asyncComputed(
    async () => {
        if (template.value.modelValue == null) {
            return null;
        }
        const templateRes = await withErrorMessage(async () => {
            return client.getComponentTemplate({ id: template.value.modelValue });
        }, "Error loading template");
        const templateNode = templateRes.node as NodeReturnType<"getComponentTemplate", "ComponentTemplate">;
        templatedFields.value = templateNode.templateFieldSpecifications.map((spec) => ({
            name: spec.name,
            value: null
        }));
        return templateNode;
    },
    null,
    { shallow: false }
);

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
