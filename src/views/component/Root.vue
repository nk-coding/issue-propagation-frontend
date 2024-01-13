<template>
    <BaseLayout
        :title-segments="titleSegments"
        :tabs="tabs"
        :right-sidebar-items="rightSidebarItems"
        :left-sidebar-items="leftSidebarItems"
    >
        <template #content>
            <router-view />
        </template>
    </BaseLayout>
</template>

<script lang="ts" setup>
import BaseLayout from "@/components/BaseLayout.vue";
import { NodeReturnType, useClient } from "@/graphql/client";
import { computedAsync } from "@vueuse/core";
import { computed } from "vue";
import { RouteLocationRaw, useRoute } from "vue-router";
import { withErrorMessage } from "@/util/withErrorMessage";
import { inject } from "vue";
import { eventBusKey, trackableKey } from "@/util/keys";
import { provide } from "vue";

type Component = NodeReturnType<"getComponent", "Component">;

const client = useClient();
const route = useRoute();
const componentId = computed(() => route.params.trackable as string);
const eventBus = inject(eventBusKey);

const component = computedAsync(
    async () => {
        if (!componentId.value) {
            return null;
        }
        const res = await withErrorMessage(
            () => client.getComponent({ id: componentId.value }),
            "Error loading component"
        );
        return res.node as Component;
    },
    null,
    { shallow: false }
);

provide(trackableKey, component);

function componentPath(name: string): RouteLocationRaw {
    return {
        name,
        params: { trackable: componentId.value }
    };
}

const titleSegments = computed(() => [
    { icon: "mdi-alpha-c-circle-outline", path: "/components" },
    { name: component.value?.name ?? "", path: componentPath("") }
]);

const tabs = computed(() => [
    { name: "Home", path: componentPath("component") },
    { name: "Details", path: componentPath("component-details-general"), exact: false },
    { name: "Versions", path: componentPath("component-versions"), exact: false },
    { name: "Issues", path: componentPath("component-issues"), exact: false }
]);

const leftSidebarItems = computed(() => {
    if (route.path.includes("/details")) {
        return [
            [
                {
                    icon: "mdi-home",
                    name: "General",
                    color: "secondary",
                    to: componentPath("component-details-general")
                },
                {
                    icon: "mdi-source-commit-start",
                    name: "Interfaces",
                    color: "secondary",
                    to: componentPath("component-details-interfaces")
                },
                {
                    icon: "mdi-label",
                    name: "Labels",
                    color: "secondary",
                    to: componentPath("component-details-labels")
                }
            ]
        ];
    } else {
        return [];
    }
});

const rightSidebarItems = computed(() => {
    if (route.name == "component-issues") {
        return [
            [
                {
                    icon: "mdi-plus",
                    description: `Create issue`,
                    color: "secondary",
                    disabled: !(component?.value?.createIssues ?? false),
                    onClick: () => {
                        eventBus?.emit("create-issue", undefined);
                    }
                }
            ]
        ];
    } else if (route.name == "component-versions") {
        return [
            [
                {
                    icon: "mdi-plus",
                    description: `Create component version`,
                    color: "secondary",
                    disabled: !(component?.value?.admin ?? false),
                    onClick: () => {
                        eventBus?.emit("create-component-version", undefined);
                    }
                }
            ]
        ];
    } else if (route.name == "component-details-labels") {
        return [
            [
                {
                    icon: "mdi-plus",
                    description: `Create label`,
                    color: "secondary",
                    disabled: !(component?.value?.manageLabels ?? false),
                    onClick: () => {
                        eventBus?.emit("create-label", undefined);
                    }
                }
            ]
        ];
    } else {
        return [];
    }
});
</script>
