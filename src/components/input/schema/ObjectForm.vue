<template>
    <BaseObjectForm
        :name="name"
        :is-null="modelValue == undefined"
        @add-value="$emit('update:modelValue', generateDefaultData(schema, rootSchema, true))"
    >
        <div class="full-width">
            <div v-if="isDiscriminatorForm(schema) || availableOptionalProperties.length > 0 || schema.nullable">
                <div class="d-flex align-center mb-2">
                    <v-autocomplete
                        v-if="isDiscriminatorForm(schema)"
                        class="mr-3"
                        :items="Object.keys(schema.mapping)"
                        :label="schema.discriminator"
                        :model-value="(modelValue![schema.discriminator] as string | undefined)"
                        hide-details
                        @update:model-value="updateDiscriminator"
                    />
                    <v-btn v-if="availableOptionalProperties.length > 0" variant="tonal">
                        Add property
                        <v-menu activator="parent">
                            <v-list>
                                <v-list-item
                                    v-for="property in availableOptionalProperties"
                                    :key="property[0]"
                                    @click="addOptionalProprty(property)"
                                >
                                    <v-list-item-title>{{ property[0] }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-btn>
                    <v-spacer />
                    <IconButton v-if="schema.nullable" @click="$emit('update:modelValue', null)">
                        <v-icon icon="mdi-delete" />
                        <v-tooltip activator="parent" location="bottom"> Set to null </v-tooltip>
                    </IconButton>
                </div>
                <v-divider v-if="currentSchema != undefined" class="mb-2" />
            </div>
            <template v-if="currentSchema != undefined">
                <MetaForm
                    v-for="property in Object.entries(currentSchema.properties!)"
                    :key="property[0]"
                    :schema="property[1]"
                    :root-schema="rootSchema"
                    :name="property[0]"
                    v-model="modelValue![property[0]]"
                />
                <div v-for="property in addedOptionalProperties" class="d-flex">
                    <MetaForm
                        :key="property[0]"
                        :schema="property[1]"
                        :root-schema="rootSchema"
                        :name="property[0]"
                        v-model="modelValue![property[0]]"
                    />
                    <IconButton class="ml-2" @click="removeOptionalProperty(property[0])">
                        <v-icon icon="mdi-close" />
                        <v-tooltip activator="parent" location="bottom"> Remove optional property </v-tooltip>
                    </IconButton>
                </div>
            </template>
        </div>
    </BaseObjectForm>
</template>
<script setup lang="ts">
import { Schema, SchemaFormDiscriminator, SchemaFormProperties, SchemaFormValues, isDiscriminatorForm } from "jtd";
import { PropType, computed } from "vue";
import BaseObjectForm from "./BaseObjectForm.vue";
import { derefSchemaRecursive, generateDefaultData } from "./generateDefaultData";
import MetaForm from "./MetaForm.vue";

const props = defineProps({
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
        type: Object as PropType<Record<string, unknown>>,
        required: false
    }
});

const emit = defineEmits({
    "update:modelValue": (value: any) => true
});

const currentSchema = computed(() => {
    if (isDiscriminatorForm(props.schema)) {
        const discriminator = props.modelValue?.[props.schema.discriminator] as string | undefined;
        if (discriminator == undefined) {
            return undefined;
        } else {
            return derefSchemaRecursive(props.schema.mapping[discriminator], props.rootSchema) as SchemaFormProperties;
        }
    } else {
        return props.schema as SchemaFormProperties;
    }
});

const optionalProperties = computed(() => {
    if (currentSchema.value == undefined) {
        return [];
    } else {
        const properties = currentSchema.value.optionalProperties;
        if (properties == undefined || Object.keys(properties).length == 0) {
            return [];
        }
        return Object.entries(properties);
    }
});

const addedOptionalProperties = computed(() => {
    const modelValue = props.modelValue;
    return optionalProperties.value.filter((property) => modelValue?.[property[0]] !== undefined);
})

const availableOptionalProperties = computed(() => {
    const modelValue = props.modelValue;
    return optionalProperties.value.filter((property) => modelValue?.[property[0]] === undefined);
})

function addOptionalProprty(property: [string, Schema]) {
    props.modelValue![property[0]] = generateDefaultData(property[1], props.rootSchema);
}

function removeOptionalProperty(name: string) {
    delete props.modelValue![name];
}

function updateDiscriminator(discriminator: string) {
    const discriminatorSchema = props.schema as SchemaFormDiscriminator;
    const discriminatorSchemaValue = (props.schema as SchemaFormDiscriminator).mapping[discriminator];
    const newModelValue = {
        [discriminatorSchema.discriminator]: discriminator,
        ...generateDefaultData(discriminatorSchemaValue, props.rootSchema)
    };
    emit("update:modelValue", newModelValue);
}

</script>
