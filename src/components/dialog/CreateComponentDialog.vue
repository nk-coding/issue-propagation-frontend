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
                        <v-text-field
                            v-model="name"
                            v-bind="nameProps"
                            label="Name"
                            class="wrap-input mx-2 mb-1 flex-1-1-0"
                        />
                        <ComponentTemplateAutocomplete
                            v-model="template"
                            v-bind="templateProps"
                            class="wrap-input mx-2 mb-1 flex-1-1-0"
                        />
                    </div>
                    <v-textarea v-model="description" v-bind="descriptionProps" label="Description" class="mb-1" />
                    <v-text-field
                        v-model="repositoryURL"
                        v-bind="repositoryURLProps"
                        label="Repository URL"
                        class="mb-1"
                    />
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
import { fieldConfig } from "@/util/vuetifyFormConfig";
import { withErrorMessage } from "@/util/withErrorMessage";
import { NodeReturnType, useClient } from "@/graphql/client";
import { toTypedSchema } from "@vee-validate/yup";
import ComponentTemplateAutocomplete from "../input/ComponentTemplateAutocomplete.vue";
import TemplatedNodeDialogContent from "./TemplatedNodeDialogContent.vue";
import TemplatedFieldsInput, { Field } from "../input/schema/TemplatedFieldsInput.vue";
import { asyncComputed } from "@vueuse/core";
import { generateDefaultData } from "../input/schema/generateDefaultData";
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

const { defineField, resetForm, handleSubmit, meta, validate } = useForm({
    validationSchema: schema
});

const [name, nameProps] = defineField("name", fieldConfig);
const [template, templateProps] = defineField("template", fieldConfig);
const [description, descriptionProps] = defineField("description", fieldConfig);
const [repositoryURL, repositoryURLProps] = defineField("repositoryURL", fieldConfig);

const templatedFields = ref<Field[]>([]);
const templateValue = asyncComputed(
    async () => {
        if (template.value == null) {
            return null;
        }
        const templateRes = await withErrorMessage(async () => {
            return client.getComponentTemplate({ id: template.value! });
        }, "Error loading template");
        const templateNode = templateRes.node as NodeReturnType<"getComponentTemplate", "ComponentTemplate">;
        return templateNode;
    },
    null,
    { shallow: false }
);
watch(templateValue, (newValue, oldValue) => {
    if (newValue != null && newValue.id != oldValue?.id) {
        templatedFields.value = newValue.templateFieldSpecifications.map((spec) => ({
            name: spec.name,
            value: generateDefaultData(spec.value, spec.value)
        }));
    }
});

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
                templatedFields: templatedFields.value
            }
        });
        return res.createComponent.component;
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
