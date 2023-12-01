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
import { asyncComputed } from "@vueuse/core";
import { computed, provide } from "vue";
import { RouteLocationRaw, useRoute } from "vue-router";
import { withErrorMessage } from "@/util/withErrorMessage";
import { eventBusKey, trackableKey } from "@/util/keys";
import { inject } from "vue";

type Project = NodeReturnType<"getProject", "Project">;

const client = useClient();
const route = useRoute();
const projectId = computed(() => route.params.trackable as string);
const eventBus = inject(eventBusKey);

const project = asyncComputed(
    async () => {
        if (!projectId.value) {
            return null;
        }
        const res = await withErrorMessage(() => client.getProject({ id: projectId.value }), "Error loading project");
        return res.node as Project;
    },
    null,
    { shallow: false }
);

provide(trackableKey, project);

function projectPath(name: string): RouteLocationRaw {
    return {
        name,
        params: { trackable: projectId.value }
    };
}

const titleSegments = computed(() => [
    { icon: "mdi-alpha-p-circle-outline", path: "/projects" },
    { name: project.value?.name ?? "", path: projectPath("") }
]);

const tabs = computed(() => [
    { name: "Home", path: projectPath("project") },
    { name: "Details", path: projectPath("project-details-general"), exact: false },
    { name: "Issues", path: projectPath("project-issues"), exact: false }
]);

const leftSidebarItems = computed(() => {
    if (route.path.includes("/details")) {
        return [
            [
                {
                    icon: "mdi-home",
                    name: "General",
                    color: "secondary",
                    to: projectPath("project-details-general")
                }
            ]
        ];
    } else {
        return [];
    }
});

const rightSidebarItems = computed(() => {
    if (route.name == "project-issues") {
        return [
            [
                {
                    icon: "mdi-plus",
                    description: `Create issue`,
                    color: "secondary",
                    disabled: !(project?.value?.createIssues ?? false),
                    onClick: () => {
                        eventBus?.emit("create-issue", undefined);
                    }
                }
            ]
        ];
    } else if (route.name == "project") {
        return [
            [
                {
                    icon: "mdi-plus",
                    description: "Add component version",
                    color: "secondary",
                    disabled: !(project?.value?.manageComponents ?? false),
                    onClick: () => {
                        eventBus?.emit("add-component-version-to-project", undefined);
                    }
                },
                {
                    icon: "mdi-auto-fix",
                    description: "Layout graph",
                    color: "secondary",
                    onClick: () => {
                        eventBus?.emit("layout-component-graph", undefined);
                    }
                }
            ]
        ];
    } else {
        return [];
    }
});
</script>
