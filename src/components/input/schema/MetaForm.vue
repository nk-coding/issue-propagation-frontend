<template>
    <ElementsForm
        v-if="isElementsForm(derefSchema)"
        :schema="(derefSchema as any)"
        :root-schema="props.rootSchema"
        :name="props.name"
        :modelValue="props.modelValue"
        @update:model-value="$emit('update:modelValue', $event)"
    />
    <ObjectForm
        v-else-if="isPropertiesForm(schema) || isDiscriminatorForm(schema) || isValuesForm(schema)"
        :schema="(derefSchema as any)"
        :root-schema="props.rootSchema"
        :name="props.name"
        :modelValue="props.modelValue"
        @update:model-value="$emit('update:modelValue', $event)"
    />
    <TypeForm
        v-else-if="isTypeForm(schema)"
        :schema="(derefSchema as any)"
        :root-schema="props.rootSchema"
        :name="props.name"
        :modelValue="props.modelValue"
        @update:model-value="$emit('update:modelValue', $event)"
    />
    <EnumForm
        v-else-if="isEnumForm(schema)"
        :schema="(derefSchema as any)"
        :root-schema="props.rootSchema"
        :name="props.name"
        :modelValue="(props.modelValue as string | undefined)"
        @update:model-value="$emit('update:modelValue', $event)"
    />
</template>
<script setup lang="ts">
import {
    Schema,
    isElementsForm,
    isRefForm,
    isPropertiesForm,
    isDiscriminatorForm,
    isValuesForm,
    isTypeForm,
    isEnumForm
} from "jtd";
import { computed } from "vue";
import { PropType } from "vue";
import ElementsForm from "./ElementsForm.vue";
import ObjectForm from "./ObjectForm.vue";
import EnumForm from "./EnumForm.vue";
import TypeForm from "./TypeForm.vue";

const props = defineProps({
    schema: {
        type: Object as PropType<Schema>,
        required: true
    },
    rootSchema: {
        type: Object as PropType<Schema>,
        required: true
    },
    name: {
        type: String,
        required: false
    },
    modelValue: {
        required: false
    }
});

defineEmits({
    "update:modelValue": (value: any) => true
});

const derefSchema = computed(() => {
    if (isRefForm(props.schema)) {
        return props.rootSchema.definitions![props.schema.ref];
    }
    return props.schema;
});
</script>
