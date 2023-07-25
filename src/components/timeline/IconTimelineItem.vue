<template>
    <TimelineItemBase>
        <div class="mb-5 main-wrapper">
            <div class="d-flex align-center">
                <div class="mr-2 pa-1 rounded-circle timeline-icon-wrapper">
                    <v-icon class="timeline-icon" size="large">{{ icon }}</v-icon>
                </div>
                <slot></slot>
            </div>
            <div class="content-wrapper">
                <slot name="content"> </slot>
            </div>
        </div>
    </TimelineItemBase>
</template>
<script setup lang="ts">
import TimelineItemBase from "./TimelineItemBase.vue";

defineProps({
    icon: {
        type: String,
        required: true
    }
});
</script>
<style scoped lang="scss">
@use "@/styles/settings.scss";

.timeline-icon-wrapper {
    background-color: rgb(var(--v-theme-surface-container-highest));
}

.timeline-icon {
    color: rgba(var(--v-theme-on-surface-container), 0.35);
}

.main-wrapper {
    margin-left: calc(settings.$timeline-offset - 36px / 2);
}

.content-wrapper {
    margin-left: calc(36px + 2 * 4px);
}
</style>
