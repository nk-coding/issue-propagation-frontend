<template>
    TODO
</template>
<script setup lang="ts">
import { Schema, SchemaFormValues } from 'jtd';
import { PropType } from 'vue';
import { generateDefaultData } from './generateDefaultData';

const props = defineProps({
    schema: {
        type: Object as PropType<SchemaFormValues>,
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
        type: Object as PropType<Record<string, unknown>>,
        required: false
    }
})

defineEmits({
    'update:modelValue': (value: any) => true
})
</script>