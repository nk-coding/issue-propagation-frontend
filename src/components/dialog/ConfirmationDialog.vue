<template>
    <v-dialog v-model="dialog" activator="parent" persistent width="auto">
        <v-card color="surface-elevated-3" rounded="lger" class="pa-3" elevation="0">
            <v-card-title>{{ title }}</v-card-title>
            <v-card-text>
                {{ message }}
            </v-card-text>
            <v-card-actions>
                <v-spacer />
                <v-btn variant="text" color="" @click="cancel">{{ cancelText }}</v-btn>
                <v-btn variant="text" color="error" @click="confirm">{{ confirmText }}</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script setup lang="ts">
import { ref } from "vue";

defineProps({
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    confirmText: {
        type: String,
        default: "Confirm"
    },
    cancelText: {
        type: String,
        default: "Cancel"
    }
});

const emit = defineEmits(["confirm", "cancel"]);

const dialog = ref(false);

function cancel() {
    dialog.value = false;
    emit("cancel");
}

function confirm() {
    dialog.value = false;
    emit("confirm");
}

defineExpose({
    dialog
});
</script>
