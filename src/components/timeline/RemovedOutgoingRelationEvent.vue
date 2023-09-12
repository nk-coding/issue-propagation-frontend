<template>
    <DefaultIconTimelineItem icon="mdi-delete" icon-size="x-small" :item="item">
        removed an <span class="text-high-emphasis">outgoing relation</span>
        <template v-if="item.removedRelation?.type">
            with type <Type :type="item.removedRelation.type"/>
        </template>
        <template #content v-if="item.removedRelation?.relatedIssue">
            <Issue :issue="item.removedRelation.relatedIssue"/>
        </template>
    </DefaultIconTimelineItem>
</template>
<script setup lang="ts">
import { PropType } from 'vue';
import { TimelineItemType } from './TimelineItemBase.vue';
import DefaultIconTimelineItem from './DefaultIconTimelineItem.vue';
import Issue from '../info/Issue.vue';
import Type from '../info/Type.vue';

defineProps({
    item: {
        type: Object as PropType<TimelineItemType<"RemovedOutgoingRelationEvent">>,
        required: true
    }
})
</script>