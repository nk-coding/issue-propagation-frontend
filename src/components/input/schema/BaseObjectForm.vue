<template>
    <v-field variant="outlined" class="px-3 pt-4 mb-3 wrapper-field" :label="name" :active="false">
        <slot v-if="!isNull" />
        <DefaultButton class="mb-4 mx-auto" variant="tonal" v-else @click="$emit('addValue')">Add value</DefaultButton>
    </v-field>
</template>
<script setup lang="ts">
defineProps({
    name: {
        type: String,
        required: false
    },
    isNull: {
        type: Boolean,
        required: true
    }
});

defineEmits<{
    (event: "addValue"): true;
}>();
</script>
<style scoped>
.wrapper-field :deep(> .v-field__outline > .v-field__outline__notch::before) {
    opacity: 0;
}

.wrapper-field :deep(> .v-field__outline > .v-field__outline__notch > .v-field-label) {
    visibility: unset;
}

.wrapper-field :deep(> .v-field__field > .v-field-label) {
    visibility: hidden;
}
</style>
