<template>
    <DefaultIconTimelineItem icon="mdi-pencil" :item="item">
        &nbsp;changed the state from&nbsp;
        <IssueState :state="item.oldState" />
        &nbsp;to&nbsp;
        <IssueState :state="item.newState" />&nbsp;
    </DefaultIconTimelineItem>
</template>
<script setup lang="ts">
import { PropType } from "vue";
import { TimelineItemType } from "./TimelineItemBase.vue";
import DefaultIconTimelineItem from "./DefaultIconTimelineItem.vue";
import IssueState from "../info/IssueState.vue";

defineProps({
    item: {
        type: Object as PropType<TimelineItemType<"StateChangedEvent">>,
        required: true
    }
});
</script>
