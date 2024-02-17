<template>
    <span>
        <relative-time :datetime="time" title="" />
        <v-tooltip activator="parent" location="bottom">
            {{ formatAbsoluteTime(new Date(time)) }}
        </v-tooltip>
    </span>
</template>
<script lang="ts" setup>
import "@github/relative-time-element";

defineProps({
    time: {
        type: String,
        required: true
    }
});

const absoluteTime = new Intl.DateTimeFormat("en-GB", { dateStyle: "short", timeStyle: "short" });

function formatAbsoluteTime(date: Date): string {
    return absoluteTime.format(date);
}
</script>
