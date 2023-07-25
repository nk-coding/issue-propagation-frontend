<template>
    <DefaultIconTimelineItem icon="mdi-pencil" :item="item">
        &nbsp;changed the title from&nbsp;
        <span class="text-decoration-line-through">{{ item.oldTitle }}</span>
        &nbsp;to&nbsp;
        <span>{{ item.newTitle }}</span
        >&nbsp;
    </DefaultIconTimelineItem>
</template>
<script setup lang="ts">
import { PropType } from "vue";
import { TimelineItemType } from "./TimelineItemBase.vue";
import DefaultIconTimelineItem from "./DefaultIconTimelineItem.vue";

defineProps({
    item: {
        type: Object as PropType<TimelineItemType<"TitleChangedEvent">>,
        required: true
    }
});
</script>
