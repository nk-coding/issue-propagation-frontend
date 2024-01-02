<template>
    <v-card-title class="pl-4">Create component</v-card-title>
    <v-stepper class="stepper d-flex flex-column" v-model="step" :items="['General', 'Templated fields']" hide-actions :bg-color="color" flat>
        <template v-slot:item.1>
            <v-form v-model="form1Valid" validate-on="blur">
                <slot name="general" />
            </v-form>
        </template>
        <template v-slot:item.2>
            <v-form ref="form2" v-model="form2Valid">
                <slot name="templatedFields"/>
            </v-form>
        </template>
    </v-stepper>
    <v-card-actions>
        <DefaultButton variant="text" color="" :disabled="step == 1" @click="previous">Previous</DefaultButton>
        <v-spacer />
        <DefaultButton variant="text" color="" @click="!isDirty && $emit('cancel')">
            Cancel
            <ConfirmationDialog
                v-if="isDirty"
                :title="`Discard ${itemName}?`"
                :message="`Are you sure you want to discard this ${itemName}?`"
                confirm-text="Discard"
                @confirm="$emit('cancel')"
            />
        </DefaultButton>
        <DefaultButton variant="text" color="primary" @click="next">
            {{ step == 1 ? 'Next' : confirmationMessage }}
        </DefaultButton>
    </v-card-actions>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import ConfirmationDialog from './ConfirmationDialog.vue';
import { computed } from 'vue';

const props = defineProps({
    itemName: {
        type: String,
        required: true
    },
    confirmationMessage: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    formMeta: {
        type: Object,
        required: true
    },
    formValidate: {
        type: Function,
        required: true
    }
});

const emit = defineEmits<{
    (event: "cancel"): void;
    (event: "confirm"): void;
}>();

const step = ref(1)
const form1Valid = ref(false)
const form2Valid = ref(true)

const isDirty = computed(() => {
    return step.value > 1 || props.formMeta.dirty;
})

const form2 = ref<any>(null)

function next() {
    if (step.value == 1) {
        if (props.formMeta.valid) {
            step.value = step.value + 1;
        } else {
            props.formValidate()
        }
    } else {
        if (form2Valid.value) {
            emit('confirm');
        } else {
            form2.value.validate()
        }
    }
}

function previous() {
    step.value = step.value - 1;
}
</script>
<style scoped>
.stepper :deep(.v-window) {
    overflow-y: auto;
    margin: 10px;
    padding: 10px;
}

.stepper :deep(.v-stepper-header) {
    box-shadow: none;
    border-bottom: thin solid rgba(var(--v-border-color), var(--v-border-opacity));
    flex-shrink: 0;
}
</style>