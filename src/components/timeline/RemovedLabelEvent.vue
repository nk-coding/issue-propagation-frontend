<template>
    <DefaultIconTimelineItem icon="mdi-label" :item="item">
        &nbsp;removed&nbsp;
        <Label v-if="item.removedLabel" :label="item.removedLabel!" />
        <template v-else> a label </template>
        &nbsp;
    </DefaultIconTimelineItem>
</template>
<script setup lang="ts">
import { PropType } from "vue";
import { TimelineItemType } from "./TimelineItemBase.vue";
import DefaultIconTimelineItem from "./DefaultIconTimelineItem.vue";
import Label from "../Label.vue";

defineProps({
    item: {
        type: Object as PropType<TimelineItemType<"RemovedLabelEvent">>,
        required: true
    }
});
</script>
