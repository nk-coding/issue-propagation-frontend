<template>
    <DefaultIconTimelineItem icon="mdi-triangle" icon-size="x-small" :item="item">
        added an <span class="text-high-emphasis">outgoing relation</span>
        <template v-if="item.type">
            with type <Type :type="item.type"/>
        </template>
        <template #content v-if="item.relatedIssue">
            <Issue :issue="item.relatedIssue"/>
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
        type: Object as PropType<TimelineItemType<"IssueRelation">>,
        required: true
    }
})
</script>
<style scoped>
:deep(.timeline-icon-wrapper > i) {
    transform: scale(0.8) rotate(90deg);
}
</style>