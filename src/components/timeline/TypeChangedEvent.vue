<template>
    <DefaultIconTimelineItem icon="mdi-pencil" :item="item">
        &nbsp;changed the type from&nbsp;
        <IssueType :type="item.oldIssueType" />
        &nbsp;to&nbsp;
        <IssueType :type="item.newIssueType" />&nbsp;
    </DefaultIconTimelineItem>
</template>
<script setup lang="ts">
import { PropType } from "vue";
import { TimelineItemType } from "./TimelineItemBase.vue";
import DefaultIconTimelineItem from "./DefaultIconTimelineItem.vue";
import IssueType from "../info/IssueType.vue";

defineProps({
    item: {
        type: Object as PropType<TimelineItemType<"TypeChangedEvent">>,
        required: true
    }
});
</script>
