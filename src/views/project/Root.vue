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
import BaseLayout, { TabSegment } from "@/components/BaseLayout.vue";
import { NodeReturnType, useClient } from "@/graphql/client";
import { useAsyncState } from "@vueuse/core";
import { computed } from "vue";
import { RouteLocationRaw, useRoute } from "vue-router";
import { withErrorMessage } from "@/util/withErrorMessage";

type Project = NodeReturnType<"getProject", "Project">;

const client = useClient();
const route = useRoute();
const projectId = computed(() => route.params.trackable as string);

const { state: project, isReady } = useAsyncState(async () => {
    const res = await withErrorMessage(() => client.getProject({ id: projectId.value }), "Error loading project");
    return res.node as Project;
}, null);

function projectPath(name: string): RouteLocationRaw {
    return {
        name,
        params: { trackable: projectId.value }
    };
}

const titleSegments = computed(() => [
    { icon: "mdi-note-multiple", path: "/projects" },
    { name: project.value?.name ?? "", path: projectPath("") }
]);

const tabs: TabSegment[] = [
    { name: "Home", path: projectPath("project") },
    { name: "Details", path: projectPath("project-details-general"), exact: false },
    { name: "Issues", path: projectPath("project-issues"), exact: false }
];

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
    if (route.name != "project-issues") {
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
