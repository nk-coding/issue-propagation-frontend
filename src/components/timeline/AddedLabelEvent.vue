<template>
    <DefaultIconTimelineItem icon="mdi-label" :item="item">
        &nbsp;added&nbsp;
        <Label v-if="item.addedLabel" :label="item.addedLabel!" />
        <template v-else> a label </template>&nbsp;
    </DefaultIconTimelineItem>
</template>
<script setup lang="ts">
import { PropType } from "vue";
import { TimelineItemType } from "./TimelineItemBase.vue";
import DefaultIconTimelineItem from "./DefaultIconTimelineItem.vue";
import Label from "../info/Label.vue";

defineProps({
    item: {
        type: Object as PropType<TimelineItemType<"AddedLabelEvent">>,
        required: true
    }
});
</script>
