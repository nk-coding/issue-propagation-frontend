<template>
    <BaseLayout :title-segments="titleSegments" :tabs="tabs" :right-sidebar-items="rightSidebarItems">
        <template #content>
            <router-view />
        </template>
    </BaseLayout>
</template>

<script lang="ts" setup>
import BaseLayout, { TabSegment } from "@/components/BaseLayout.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const titleSegments = [{ name: "Gropius", path: "/" }];

const tabs: TabSegment[] = [
    { name: "Home", path: "/" },
    { name: "Components", path: "/components" },
    { name: "Projects", path: "/projects" },
    { name: "IMSs", path: "/imss" }
];

const rightSidebarItems = computed(() => {
    if (route.name === "home") {
        return [];
    } else {
        return [
            [
                {
                    icon: "mdi-plus",
                    description: `Add ${route.name?.toString().slice(0, -1)}`,
                    color: "secondary",
                    onClick: () => {}
                }
            ]
        ];
    }
});
</script>
