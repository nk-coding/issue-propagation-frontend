<template>
    <TimelineItemBase>
        <div class="mb-5 main-wrapper">
            <div class="d-flex align-center">
                <div class="mr-2 pa-1 rounded-circle timeline-icon-wrapper flex-0-0">
                    <v-icon class="timeline-icon" size="large" :icon="icon" />
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

$icon-container-size: 36px;

.timeline-icon-wrapper {
    background-color: rgb(var(--v-theme-surface-container-highest));
    width: $icon-container-size;
    height: $icon-container-size;
    position: relative;
}

.timeline-icon {
    color: rgba(var(--v-theme-on-surface-container), 0.35);
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.main-wrapper {
    margin-left: calc(settings.$timeline-offset - $icon-container-size / 2);
}

.content-wrapper {
    margin-left: calc($icon-container-size + 2 * 4px);
}
</style>
