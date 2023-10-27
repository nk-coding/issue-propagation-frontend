<template>
    <BaseLayout :title-segments="titleSegments" :tabs="tabs" :right-sidebar-items="rightSidebarItems">
        <template #content>
            <router-view />
        </template>
    </BaseLayout>
</template>

<script lang="ts" setup>
import BaseLayout, { TabSegment } from "@/components/BaseLayout.vue";
import { Events } from "@/util/eventBus";
import { eventBusKey } from "@/util/keys";
import { computed, inject } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const eventBus = inject(eventBusKey);

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
        let name: string;
        let eventName: keyof Events;
        switch (route.name) {
            case "projects": {
                name = "project";
                eventName = "create-project";
                break;
            }
            case "components": {
                name = "component";
                eventName = "create-component";
                break;
            }
            case "imss": {
                name = "IMS";
                eventName = "create-ims";
                break;
            }
            default: {
                throw new Error("Unknown route");
            }
        }
        return [
            [
                {
                    icon: "mdi-plus",
                    description: `Add ${name}`,
                    color: "secondary",
                    onClick: () => {
                        eventBus?.emit(eventName);
                    }
                }
            ]
        ];
    }
});
</script>
