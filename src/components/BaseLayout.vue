<template>
    <div class="root d-flex flex-column">
        <div class="header d-flex align-center my-1 mx-2">
            <v-btn @click="router.push('/')" class="mr-3 d-flex" variant="text" icon size="small">
                <img src="@/assets/logo.svg" width="40" />
            </v-btn>
            <slot name="header-title">
                <div v-for="(segment, index) in titleSegments" :key="index" class="d-flex align-center">
                    <span class="text-h6 mx-1" v-if="index != 0">/</span>
                    <v-btn @click="router.push(segment.path)" variant="text" class="px-0" min-width="0">
                        <span class="text-h6">{{ segment.name }}</span>
                    </v-btn>
                </div>
            </slot>
            <slot name="header-content">
                <v-tabs color="primary" v-model="currentTab" v-if="tabs.length > 0" density="compact" class="ml-5">
                    <v-tab v-for="(tab, index) in tabs" :value="tab.name">{{ tab.name }}</v-tab>
                </v-tabs>
            </slot>
            <v-spacer />
            <v-btn icon @click="toggleDarkMode()" variant="outlined" size="small">
                <v-icon>
                    {{ lightMode ? "mdi-weather-sunny" : "mdi-weather-night" }}
                </v-icon>
                <v-tooltip activator="parent" location="bottom"> Toggle light/dark mode </v-tooltip>
            </v-btn>
        </div>
        <div class="content d-flex flex-grow-1 mb-3">
            <div class="left-bar">
                <slot name="left-bar">
                    TODO
                </slot>
            </div>
            <v-sheet color="surface" class="main-sheet flex-grow-1" rounded="xl">
                <slot name="content"></slot>
            </v-sheet>
            <div class="right-bar">
                <slot name="right-bar">
                    TODO
                </slot>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core';
import { PropType, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useTheme } from 'vuetify/lib/framework.mjs';

export interface TitleSegment {
    name: string,
    path: string,
}
export interface TabSegment {
    name: string,
    path: string,
}

const props = defineProps({
    titleSegments: {
        type: Array as PropType<TitleSegment[]>,
        default: () => [{ name: 'Gropius', path: '/' }],
    },
    tabs: {
        type: Array as PropType<TabSegment[]>,
        default: () => [],
    },
})

const currentTab = ref('slo');
const theme = useTheme();
const lightMode = useLocalStorage('lightMode', true);
const router = useRouter()

function toggleDarkMode() {
    lightMode.value = !lightMode.value;
    updateColorMode();
}

function updateColorMode() {
    theme.global.name.value = lightMode.value ? "light" : "dark";
}

updateColorMode();
</script>
<style scoped>
.root {
    width: 100%;
    height: 100%;
    background: rgb(var(--v-theme-surface-container))
}

.left-bar, .right-bar {
    width: 50px;
    height: 100%;
}

.main-sheet {
    height: 100%;
}
</style>
