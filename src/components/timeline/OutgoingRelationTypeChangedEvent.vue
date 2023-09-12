<template>
    <DefaultIconTimelineItem icon="mdi-pencil" :item="item">
        changed the type of an <span class="text-high-emphasis">outgoing relation</span> from
        <Type :type="item.oldRelationType ?? undefined" /> to <Type :type="item.newRelationType ?? undefined" />
        <template #content v-if="item.issueRelation.relatedIssue">
            <Issue :issue="item.issueRelation.relatedIssue" />
        </template>
    </DefaultIconTimelineItem>
</template>
<script setup lang="ts">
import { PropType } from "vue";
import { TimelineItemType } from "./TimelineItemBase.vue";
import DefaultIconTimelineItem from "./DefaultIconTimelineItem.vue";
import Issue from "../info/Issue.vue";
import Type from "../info/Type.vue";

defineProps({
    item: {
        type: Object as PropType<TimelineItemType<"OutgoingRelationTypeChangedEvent">>,
        required: true
    }
});
</script>