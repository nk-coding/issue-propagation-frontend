<template>
    TODO:elements
</template>
<script setup lang="ts">
import { Schema, SchemaFormElements } from 'jtd';
import { PropType } from 'vue';

defineProps({
    schema: {
        type: Object as PropType<SchemaFormElements>,
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
})

defineEmits({
    'update:modelValue': (value: any) => true
})
</script>