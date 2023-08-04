<template>
    <v-field @focusin="focused = true" @focusout="focused = false" :active="focused || !!modelValue" :focused="focused" :model-value="'test'">
        <slot/>
    </v-field>
</template>
<script setup lang="ts">
import { ref } from 'vue';

defineProps({
    modelValue: {
        type: String,
        required: false
    }
})

const focused = ref(false);
</script>