<template>
    <IconTimelineItem :icon="icon">
        <div class="text-medium-emphasis">
            <User :user="item.createdBy" />
            <slot />
            <RelativeTime :time="item.createdAt" />
        </div>
    </IconTimelineItem>
</template>
<script setup lang="ts">
import { PropType } from "vue";
import IconTimelineItem from "./IconTimelineItem.vue";
import User from "@/components/info/User.vue";
import { TimelineItemType } from "./TimelineItemBase.vue";
import RelativeTime from "../RelativeTime.vue";

defineProps({
    item: {
        type: Object as PropType<TimelineItemType<any>>,
        required: true
    },
    icon: {
        type: String,
        required: true
    }
});
</script>
