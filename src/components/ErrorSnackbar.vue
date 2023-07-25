<template>
    <v-snackbar v-model="showSnackbar" :timeout="2500" color="inverse-surface" @after-leave="showError">
        {{ currentError }}
    </v-snackbar>
</template>
<script setup lang="ts">
import { useAppStore } from "@/store/app";
import { storeToRefs } from "pinia";
import { nextTick } from "vue";
import { ref, watch } from "vue";

const store = useAppStore();
const { errors } = storeToRefs(store);

const showSnackbar = ref(false);
const currentError = ref<string>("");

watch(
    () => errors.value,
    async () => {
        if (!showSnackbar.value) {
            await nextTick();
            showError();
        }
    }
);

function showError() {
    const error = store.popError();
    if (error != undefined) {
        currentError.value = error;
        showSnackbar.value = true;
    }
}
</script>
