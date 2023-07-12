<template>
    <router-view />
</template>

<script lang="ts" setup>
//
</script>
<style>
body,
html,
#app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden !important;
}

::-webkit-scrollbar {
    width: 9px !important;
    height: 9px !important;
}

::-webkit-scrollbar-track {
    background: transparent;
}

::-webkit-scrollbar-thumb {
    border: 3px solid transparent;
    border-radius: 10px;
    background: rgba(var(--v-theme-on-surface), 0.25);
    background-clip: padding-box;
}

::-webkit-scrollbar-thumb:hover {
    border: 0;
}

::-webkit-scrollbar-corner {
    visibility: hidden;
}

.v-tooltip.rich-tooltip > .v-overlay__content {
    background: rgb(var(--v-theme-surface-container));
    color: rgb(var(--v-theme-on-surface-container));
    padding: 12px;
    border-radius: 12px;
    box-shadow: 0 3px 3px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)),
        0 3px 4px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)),
        0 1px 8px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12)) !important;
}

.text-variant {
    color: rgb(var(--v-theme-on-surface-variant));
}
</style>
