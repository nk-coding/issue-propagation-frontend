<template>
    <div class="d-flex align-center mx-3 my-2">
        <slot name="prepend" />
        <div class="flex-1-1">
            <div class="mb-1 d-flex align-center">
                <slot name="title">
                    <v-list-item-title>{{ title }}</v-list-item-title>
                    <slot name="title-append" />
                </slot>
            </div>
            <slot name="subtitle">
                <div class="text-variant text-body-2">{{ subtitle }}</div>
            </slot>
        </div>
        <slot name="append" />
    </div>
</template>
<script lang="ts" setup>
defineProps({
    title: {
        type: String,
        required: false,
        default: ""
    },
    subtitle: {
        type: String,
        required: false,
        default: ""
    }
});
</script>
