<template>
    <v-card color="surface-elevated-3" rounded="lger" class="pa-3 import-dialog" elevation="0">
        <v-card-title class="pl-4">Import {{ itemName }}</v-card-title>
        <div class="pa-4">
            <slot v-if="itemToImport == undefined" name="select" :selected-item="selectedItem" />
            <v-sheet v-else class="pa-4 d-flex align-center" :border="true" rounded="lger" color="surface-elevated-3">
                <div class="flex-grow-1 min-width-0">
                    <slot name="display" :item="itemToImport" />
                </div>
                <IconButton @click="itemToImport = undefined">
                    <v-icon icon="mdi-close" />
                    <v-tooltip activator="parent">Select other {{ itemName }}</v-tooltip>
                </IconButton>
            </v-sheet>
        </div>
        <v-card-actions>
            <v-spacer />
            <DefaultButton variant="text" color="" @click="$emit('cancel')"> Cancel </DefaultButton>
            <DefaultButton
                variant="text"
                color="primary"
                @click="importItem"
                :disabled="itemToImport == undefined || submitDisabled"
            >
                {{ confirmationMessage }}
            </DefaultButton>
        </v-card-actions>
    </v-card>
</template>
<script setup lang="ts" generic="T">
import { ref } from "vue";

defineProps({
    itemName: {
        type: String,
        required: true
    },
    confirmationMessage: {
        type: String,
        required: true
    },
    submitDisabled: {
        type: Boolean,
        default: false,
        required: false
    }
});

const emit = defineEmits<{
    (event: "cancel"): void;
    (event: "import", item: T): void;
}>();

const itemToImport = ref<T>();

function selectedItem(item: T) {
    itemToImport.value = item;
}

function importItem() {
    emit("import", itemToImport.value!);
}
</script>
<style scoped lang="scss">
@use "@/styles/settings.scss";
.import-dialog {
    width: min(500px, calc(100vw - 3 * settings.$side-bar-width));
}

.min-width-0 {
    min-width: 0;
}
</style>
