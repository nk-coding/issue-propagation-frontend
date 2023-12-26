<template>
    <BaseObjectForm
        :name="name"
        :is-null="modelValue == undefined"
        @add-value="$emit('update:modelValue', [])"
    >
        <div class="full-width">
            <div class="d-flex align-center mb-3">
                <v-btn variant="tonal" @click="addElement">
                    Add element
                </v-btn>
                <v-spacer />
                <IconButton v-if="schema.nullable" @click="$emit('update:modelValue', null)">
                    <v-icon icon="mdi-delete" />
                    <v-tooltip activator="parent" location="bottom"> Set to null </v-tooltip>
                </IconButton>
            </div>
            <v-divider v-if="modelValue?.length" class="mb-3" />
            <div v-for="(element, index) in (modelValue ?? [])" class="d-flex">
                <MetaForm
                    :key="index"
                    :schema="schema.elements"
                    :root-schema="rootSchema"
                    v-model="modelValue![index]"
                />
                <IconButton class="ml-2 mt-1" @click="removeElement(index)">
                    <v-icon icon="mdi-close" />
                    <v-tooltip activator="parent" location="bottom"> Remove element </v-tooltip>
                </IconButton>
            </div>
        </div>
    </BaseObjectForm>
</template>
<script setup lang="ts">
import { Schema, SchemaFormElements } from 'jtd';
import { PropType } from 'vue';
import { generateDefaultData } from './generateDefaultData';
import BaseObjectForm from './BaseObjectForm.vue';
import MetaForm from './MetaForm.vue';

const props = defineProps({
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
        type: Array,
        required: false
    }
})

defineEmits({
    'update:modelValue': (value: any) => true
})

function addElement() {
    const defaultData = generateDefaultData(props.schema.elements, props.rootSchema)
    props.modelValue!.push(defaultData)
}

function removeElement(index: number) {
    props.modelValue!.splice(index, 1)
}
</script>