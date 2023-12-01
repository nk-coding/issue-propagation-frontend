<template>
    <BaseLayout :title-segments="titleSegments" :tabs="tabs" :right-sidebar-items="rightSidebarItems">
        <template #content>
            <router-view />
        </template>
    </BaseLayout>
</template>

<script lang="ts" setup>
import BaseLayout, { TabSegment } from "@/components/BaseLayout.vue";
import { useAppStore } from "@/store/app";
import { Events } from "@/util/eventBus";
import { eventBusKey } from "@/util/keys";
import { computed, inject } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const eventBus = inject(eventBusKey);
const store = useAppStore();

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
        const currentUser = store.user;
        let name: string;
        let eventName: keyof Events;
        let disabled: boolean;
        switch (route.name) {
            case "projects": {
                name = "project";
                eventName = "create-project";
                disabled = !(store.user?.canCreateProjects ?? false);
                break;
            }
            case "components": {
                name = "component";
                eventName = "create-component";
                disabled = !(store.user?.canCreateComponents ?? false);
                break;
            }
            case "imss": {
                name = "IMS";
                eventName = "create-ims";
                disabled = !(store.user?.canCreateIMSs ?? false);
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
                    disabled,
                    onClick: () => {
                        eventBus?.emit(eventName);
                    }
                }
            ]
        ];
    }
});
</script>
