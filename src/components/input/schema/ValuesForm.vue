<template>
    <BaseObjectForm :name="name" :is-null="modelValue == undefined" @add-value="$emit('update:modelValue', {})">
        <div class="full-width">
            <div class="d-flex align-center mb-3">
                <v-text-field
                    v-model="addName"
                    label="Add value"
                    placeholder="Name"
                    @keydown.enter="addElement"
                    hide-details
                >
                    <template #append-inner>
                        <IconButton color="primary" :disabled="!validKey" @click="addElement">
                            <v-icon icon="mdi-plus" />
                        </IconButton>
                    </template>
                </v-text-field>
                <v-spacer />
                <IconButton v-if="schema.nullable" @click="$emit('update:modelValue', null)">
                    <v-icon icon="mdi-delete" />
                    <v-tooltip activator="parent" location="bottom"> Set to null </v-tooltip>
                </IconButton>
            </div>
            <v-divider v-if="Object.keys(modelValue ?? {}).length > 0" class="mb-3" />
            <div v-for="property in Object.keys(modelValue ?? {})" class="d-flex">
                <MetaForm
                    :key="property"
                    :schema="schema.values"
                    :root-schema="rootSchema"
                    :name="property"
                    v-model="modelValue![property]"
                />
                <IconButton class="ml-2 mt-1" @click="removeElement(property)">
                    <v-icon icon="mdi-close" />
                    <v-tooltip activator="parent" location="bottom"> Remove element </v-tooltip>
                </IconButton>
            </div>
        </div>
    </BaseObjectForm>
</template>
<script setup lang="ts">
import { Schema, SchemaFormValues } from "jtd";
import { PropType, computed, ref } from "vue";
import { generateDefaultData } from "./generateDefaultData";
import BaseObjectForm from "./BaseObjectForm.vue";
import MetaForm from "./MetaForm.vue";

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
        type: Object as PropType<Record<string, any>>,
        required: false
    }
});

defineEmits({
    "update:modelValue": (value: any) => true
});

const addName = ref("");

const validKey = computed(() => {
    if (addName.value == "") {
        return false;
    }
    return !(addName.value in (props.modelValue ?? {}));
});

function addElement() {
    if (props.modelValue != undefined && validKey.value) {
        const defaultData = generateDefaultData(props.schema.values, props.rootSchema);
        props.modelValue[addName.value] = defaultData;
        addName.value = "";
    }
}

function removeElement(name: string) {
    if (props.modelValue != undefined) {
        delete props.modelValue[name];
    }
}
</script>
