<template>
    <BaseLayout :title-segments="titleSegments" :tabs="tabs" :right-sidebar-items="rightSidebarItems">
        <template #content>
            <router-view />
        </template>
    </BaseLayout>
</template>

<script lang="ts" setup>
import BaseLayout, { TabSegment } from "@/components/BaseLayout.vue";
import { NodeReturnType, useClient } from "@/graphql/client";
import { useAsyncState } from "@vueuse/core";
import { computed } from "vue";
import { RouteLocationRaw, useRoute } from "vue-router";

type Component = NodeReturnType<"getComponent", "Component">;

const client = useClient();
const route = useRoute();
const componentId = computed(() => route.params.trackable as string);

const { state: component, isReady } = useAsyncState(async () => {
    const res = await client.getComponent({ id: componentId.value });
    return res.node as Component;
}, null);

function componentPath(name: string): RouteLocationRaw {
    return {
        name,
        params: { trackable: componentId.value }
    };
}

const titleSegments = computed(() => [
    { icon: "mdi-note-multiple", path: "/components" },
    { name: component.value?.name ?? "", path: componentPath("") }
]);

const tabs: TabSegment[] = [
    { name: "Home", path: componentPath("component") },
    { name: "Details", path: componentPath("component-details") },
    { name: "Issues", path: componentPath("component-issues"), exact: false }
];

const rightSidebarItems = computed(() => {
    if (route.name != "component-issues") {
        return [];
    } else {
        return [
            [
                {
                    icon: "mdi-plus",
                    description: `Create issue`,
                    color: "secondary",
                    onClick: () => {}
                }
            ]
        ];
    }
});
</script>
