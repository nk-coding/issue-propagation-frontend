<template>
    <div class="root d-flex flex-column">
        <div class="header d-flex align-center ma-2">
            <v-btn class="mr-3 d-flex" variant="text" icon size="small" @click="router.push('/')">
                <img src="@/assets/logo.svg" width="40" />
            </v-btn>
            <slot name="header-title">
                <div v-for="(segment, index) in titleSegments" :key="index" class="d-flex align-center">
                    <span v-if="index != 0" class="text-h6">/</span>
                    <v-btn variant="text" class="px-1" min-width="0" @click="router.push(segment.path)" rounded="lger">
                        <span v-if="'name' in segment" class="text-h6">{{ segment.name }}</span>
                        <v-icon size="large" v-else>{{ segment.icon }}</v-icon>
                    </v-btn>
                </div>
            </slot>
            <slot name="header-content">
                <v-tabs v-if="tabs.length > 0" color="primary" density="compact" class="ml-5">
                    <v-tab v-for="(tab, index) in tabs" :value="tab.name" :to="tab.path" exact>{{ tab.name }}</v-tab>
                </v-tabs>
            </slot>
            <v-spacer />
            <v-btn icon variant="outlined" size="small" @click="toggleDarkMode()">
                <v-icon>
                    {{ lightMode ? "mdi-weather-sunny" : "mdi-weather-night" }}
                </v-icon>
                <v-tooltip activator="parent" location="bottom"> Toggle light/dark mode </v-tooltip>
            </v-btn>
        </div>
        <div class="content d-flex flex-grow-1 mb-3">
            <div class="left-bar">
                <slot name="left-bar">
                    <SideBar :items="leftSidebarItems" class="full-width" />
                </slot>
            </div>
            <v-sheet color="surface" class="main-sheet flex-grow-1" rounded="xl">
                <slot name="content"></slot>
            </v-sheet>
            <div class="right-bar">
                <slot name="right-bar">
                    <SideBar :items="rightSidebarItems" class="full-width" />
                </slot>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useLocalStorage } from "@vueuse/core";
import { PropType, ref } from "vue";
import { useRouter } from "vue-router";
import { useTheme } from "vuetify/lib/framework.mjs";
import SideBar, { SideBarItem } from "./SideBar.vue";

export type TitleSegment = {
    path: string;
} & (
    | {
          name: string;
      }
    | {
          icon: string;
      }
);
export interface TabSegment {
    name: string;
    path: string;
}

const props = defineProps({
    titleSegments: {
        type: Array as PropType<TitleSegment[]>,
        default: () => [{ name: "Gropius", path: "/" }]
    },
    tabs: {
        type: Array as PropType<TabSegment[]>,
        default: () => []
    },
    leftSidebarItems: {
        type: Array as PropType<SideBarItem[][]>,
        default: () => []
    },
    rightSidebarItems: {
        type: Array as PropType<SideBarItem[][]>,
        default: () => []
    }
});

const theme = useTheme();
const lightMode = useLocalStorage("lightMode", true);
const router = useRouter();

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
    background: rgb(var(--v-theme-surface-container));
}

.left-bar,
.right-bar {
    width: 80px;
    height: 100%;
}

.main-sheet {
    height: 100%;
    width: 0px;
}

.content {
    height: 0px;
}

.main-sheet {
    overflow: hidden;
}

.full-width {
    width: 100%;
}
</style>
