<template>
    <custom-router-link v-if="isLinkable" :to="location" :text="title" :tooltip="affectedEntity.description" class="text-high-emphasis" />
    <span v-else class="text-high-emphasis">{{ title }}</span>
</template>
<script setup lang="ts">
import { DefaultAffectedByIssueInfoFragment } from "@/graphql/generated";
import { computed } from "vue";
import { PropType } from "vue";
import { RouteLocationRaw } from "vue-router";
import CustomRouterLink from "../CustomRouterLink.vue";

const props = defineProps({
    affectedEntity: {
        type: Object as PropType<DefaultAffectedByIssueInfoFragment>,
        required: true
    }
});

const isLinkable = computed(() => {
    const type = props.affectedEntity.__typename;
    return type === "Component" || type === "Project";
});

const title = computed(() => {
    return `${props.affectedEntity.name} [${props.affectedEntity.__typename}]`;
})

const location = computed<RouteLocationRaw>(() => {
    const type = props.affectedEntity.__typename;
    const id = props.affectedEntity.id;
    if (type === "Component") {
        return {
            name: "component",
            params: {
                trackable: id
            }
        };
    } else if (type === "Project") {
        return {
            name: "project",
            params: {
                trackable: id
            }
        };
    } else {
        throw new Error(`Unknown affected entity type: ${type}`);
    }
});
</script>
