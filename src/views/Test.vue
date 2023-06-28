<template>
    <BaseLayout :title-segments="titleSegments" :tabs="tabs" />
</template>

<script lang="ts" setup>
import BaseLayout from "@/components/BaseLayout.vue";

const titleSegments = [
    { name: 'Gropius', path: '/' },
    { name: 'Test', path: '/test' },
];

const tabs = [
    { name: 'Tab 1', path: '/test/tab1' },
    { name: 'Tab 2', path: '/test/tab2' },
];
</script>
