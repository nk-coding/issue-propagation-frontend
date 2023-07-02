<template>
    <v-btn>
        <v-icon>{{ icon }}</v-icon>
        <div>
            {{ text }}
        </div>
    </v-btn>
</template>
<script setup lang="ts">
const props = defineProps({
    icon: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
})
</script>