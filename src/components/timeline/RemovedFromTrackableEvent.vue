<template>
    <DefaultIconTimelineItem
        :icon="mapAffectedByIssueTypeToIcon(item.removedFromTrackable?.__typename ?? 'Component')"
        :item="item"
    >
        removed this issue from
        <AffectedByIssue v-if="item.removedFromTrackable" :affected-entity="item.removedFromTrackable!" />
        <template v-else> a component or project </template>
    </DefaultIconTimelineItem>
</template>
<script setup lang="ts">
import { PropType } from "vue";
import { TimelineItemType } from "./TimelineItemBase.vue";
import DefaultIconTimelineItem from "./DefaultIconTimelineItem.vue";
import AffectedByIssue from "../info/AffectedByIssue.vue";
import { mapAffectedByIssueTypeToIcon } from "@/util/mapAffectedByIssueTypeToIcon";

defineProps({
    item: {
        type: Object as PropType<TimelineItemType<"RemovedFromTrackableEvent">>,
        required: true
    }
});
</script>
