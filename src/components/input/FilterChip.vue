<template>
    <v-chip
        :color="modelValue ? 'primary' : undefined"
        :variant="modelValue ? 'tonal' : 'outlined'"
        :prepend-icon="prependIcon"
        rounded="lg"
        class="filter-chip"
        @click="$emit('update:modelValue', !modelValue)"
        >{{ label }}</v-chip
    >
</template>
<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
    modelValue: {
        type: Boolean,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: false
    }
});

defineEmits<{
    (event: "update:modelValue", value: boolean): void;
}>();

const prependIcon = computed(() => (props.modelValue ? "mdi-check" : props.icon));
</script>
<style scoped>
.filter-chip {
    user-select: none;
}
</style>