<template>
        <v-card color="surface-elevated-3" rounded="lger" class="pa-3 create-component-dialog" elevation="0">
            <v-form @submit.prevent="submitChanges">
                <v-card-title class="pl-4">{{ title }}</v-card-title>
                <div class="pa-4">
                    <div class="d-flex flex-wrap mx-n2">
                        <v-text-field v-bind="name" label="Name" class="wrap-input mx-2 mb-1 flex-1-1-0" />
                        <v-text-field v-bind="color" label="Color" class="wrap-input mx-2 mb-1 flex-1-1-0">
                            <template #append-inner v-if="isFieldValid('color')">
                                <v-icon :color="color.modelValue" icon="mdi-circle" class="full-opacity" />
                            </template>
                            <v-menu activator="parent" :close-on-content-click="false">
                                <v-color-picker class="mt-1" rounded="lger" v-model="pickerColor" :modes="['rgb']"/>
                            </v-menu>
                        </v-text-field>
                    </div>
                    <v-textarea v-bind="description" label="Description" class="mb-1" />
                </div>
                <v-card-actions>
                    <v-spacer />
                    <DefaultButton variant="text" color="" @click="!meta.dirty && $emit('cancel')">
                        Cancel
                        <ConfirmationDialog
                            v-if="meta.dirty"
                            :title="discardTitle"
                            :message="discardMessage"
                            confirm-text="Discard"
                            @confirm="$emit('cancel')"
                        />
                    </DefaultButton>
                    <DefaultButton variant="text" color="primary" type="submit">{{ submitAction }}</DefaultButton>
                </v-card-actions>
            </v-form>
        </v-card>
</template>
<script lang="ts" setup>
import * as yup from "yup";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import { wrapBinds } from "@/util/vuetifyFormConfig";
import ConfirmationDialog from "./ConfirmationDialog.vue";
import { PropType, computed } from "vue";
import { fallbackColor } from "@/util/fallbackColor";
import { watch } from "vue";

export interface Label {
    name: string;
    description: string;
    color: string;
}

const emit = defineEmits<{
    (event: "submit", label: Label): void;
    (event: "cancel"): void;
}>();

const props = defineProps({
    trackable: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    discardTitle: {
        type: String,
        required: true
    },
    discardMessage: {
        type: String,
        required: true
    },
    submitAction: {
        type: String,
        required: true
    },
    initialValue: {
        type: Object as PropType<Label>,
        required: true
    }
});

watch(() => props.initialValue, (value) => {
    resetForm({
        values: value
    });
});

const schema = toTypedSchema(
    yup.object().shape({
        name: yup.string().required().label("Name"),
        description: yup.string().notRequired().label("Description"),
        color: yup.string().required().label("Color").matches(/^#[0-9a-f]{6}$/i, "Is not a valid hex color code #RRGGBB"),
    })
);

const { defineComponentBinds, handleSubmit, meta, isFieldValid, setFieldValue, resetForm } = useForm({
    validationSchema: schema,
    initialValues: props.initialValue
});
const defineBinds = wrapBinds(defineComponentBinds);

const name = defineBinds("name");
const description = defineBinds("description");
const color = defineBinds("color");

const pickerColor = computed({
    get() {
        return fallbackColor(color.value.modelValue);
    },
    set(value: string) {
        setFieldValue("color", value);
    }
});

const submitChanges = handleSubmit(async (state) => {
    emit("submit", {
        ...state,
        description: state.description ?? "",
    });
});
</script>
<style scoped lang="scss">
@use "@/styles/settings.scss";
.create-label-dialog {
    width: min(1000px, calc(100vw - 3 * settings.$side-bar-width));
}

.wrap-input {
    min-width: 250px;
}
</style>
