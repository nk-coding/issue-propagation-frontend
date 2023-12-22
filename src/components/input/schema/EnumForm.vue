<template>
    <v-select
        :items="schema.enum"
        :label="name"
        :model-value="modelValue"
        @update:model-value="$emit('update:modelValue', $event)"
        :clearable="schema.nullable"
        :rules="rules"
    />
</template>
<script setup lang="ts">
import { Schema, SchemaFormEnum } from 'jtd';
import { computed } from 'vue';
import { PropType } from 'vue';
import { Rule, requiredRule } from './rules';

const props = defineProps({
    schema: {
        type: Object as PropType<SchemaFormEnum>,
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
        type: String,
        required: false
    }
})

defineEmits({
    'update:modelValue': (value: any) => true
})

const rules = computed(() => {
    const rules: Rule[] = [];
    if (!props.schema.nullable) {
        rules.push(requiredRule)
    }
    return rules;
})
</script>