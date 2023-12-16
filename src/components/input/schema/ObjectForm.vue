<template>
    TODO
</template>
<script setup lang="ts">
import { Schema, SchemaFormDiscriminator, SchemaFormProperties, SchemaFormValues } from 'jtd';
import { PropType } from 'vue';

defineProps({
    schema: {
        type: Object as PropType<SchemaFormDiscriminator | SchemaFormProperties | SchemaFormValues>,
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