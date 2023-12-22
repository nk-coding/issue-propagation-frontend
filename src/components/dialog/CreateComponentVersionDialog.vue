<template>
    <v-dialog v-model="createComponentVersionDialog" persistent width="auto">
        <v-card color="surface-elevated-3" rounded="lger" class="pa-3 create-component-dialog" elevation="0">
            <TemplatedNodeDialogContent
                item-name="component version"
                confirmation-message="Create component version"
                :form-meta="meta"
                :form-validate="validate"
                color="surface-elevated-3"
                @cancel="cancelCreateComponentVersion"
                @confirm="createComponentVersion"
            >
                <template #general>
                    <div class="d-flex flex-wrap mx-n2">
                        <v-text-field v-bind="name" label="Name" class="wrap-input mx-2 mb-1 flex-1-1-0" />
                        <v-text-field v-bind="version" label="Version" class="wrap-input mx-2 mb-1 flex-1-1-0" />
                    </div>
                    <v-textarea v-bind="description" label="Description" class="mb-1" />
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
import TemplatedNodeDialogContent from "./TemplatedNodeDialogContent.vue";
import TemplatedFieldsInput, { Field } from "../input/schema/TemplatedFieldsInput.vue";
import { asyncComputed } from "@vueuse/core";

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

const { defineComponentBinds, resetForm, handleSubmit, meta, validate } = useForm({
    validationSchema: schema
});

const defineBinds = wrapBinds(defineComponentBinds);

const name = defineBinds("name");
const version = defineBinds("version");
const description = defineBinds("description");

const templatedFields = ref<Field[]>([])
const templateValue = asyncComputed(
    async () => {
        const templateRes = await withErrorMessage(async () => {
            return client.getComponentVersionTemplate({ component: props.component });
        }, "Error loading template");
        const componentNode = templateRes.node as NodeReturnType<"getComponentVersionTemplate", "Component">;
        const templateNode = componentNode.template.componentVersionTemplate;
        templatedFields.value = templateNode.templateFieldSpecifications.map((spec) => ({
            name: spec.name,
            value: null
        }));
        return templateNode;
    },
    null,
    { shallow: false }
);

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
                templatedFields: templatedFields.value,
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
