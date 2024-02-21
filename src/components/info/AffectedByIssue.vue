<template>
    <v-chip color="primary" :prepend-icon="icon" :to="location">
        {{ affectedEntity.name }}
        <v-tooltip v-if="affectedEntity.description" activator="parent" location="bottom">
            {{ affectedEntity.description }}
        </v-tooltip>
    </v-chip>
</template>
<script setup lang="ts">
import { DefaultAffectedByIssueInfoFragment } from "@/graphql/generated";
import { mapAffectedByIssueTypeToIcon } from "@/util/mapAffectedByIssueTypeToIcon";
import { computed } from "vue";
import { PropType } from "vue";
import { RouteLocationRaw } from "vue-router";

const props = defineProps({
    affectedEntity: {
        type: Object as PropType<DefaultAffectedByIssueInfoFragment>,
        required: true
    }
});

const icon = computed(() => {
    return mapAffectedByIssueTypeToIcon(props.affectedEntity.__typename);
});

const location = computed<RouteLocationRaw | undefined>(() => {
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
        return undefined;
    }
});
</script>
