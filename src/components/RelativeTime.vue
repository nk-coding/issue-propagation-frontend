<template>
    <span>
        {{ formatRelativeTime(new Date(), new Date(time)) }}
        <v-tooltip activator="parent" location="bottom">
            {{ formatAbsoluteTime(new Date(time)) }}
        </v-tooltip>
    </span>
</template>
<script lang="ts" setup>
defineProps({
    time: {
        type: String,
        required: true
    }
});

const units = {
    year: 365 * 24 * 60 * 60 * 1000,
    month: (365 / 12) * 24 * 60 * 60 * 1000,
    week: 7 * 24 * 60 * 60 * 1000,
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    minute: 60 * 1000,
    second: 1000
};

const relativeTime = new Intl.RelativeTimeFormat("en-GB", { numeric: "auto" });
const absoluteTime = new Intl.DateTimeFormat("en-GB", { dateStyle: "short", timeStyle: "short" });

function formatRelativeTime(from: Date, to: Date): string {
    const elapsed = to.getTime() - from.getTime();
    for (const [unit, unitLength] of Object.entries(units)) {
        if (Math.abs(elapsed) > unitLength || unit == "second") {
            return relativeTime.format(Math.round(elapsed / unitLength), unit as Intl.RelativeTimeFormatUnit);
        }
    }
    throw new Error("unreachable");
}

function formatAbsoluteTime(date: Date): string {
    return absoluteTime.format(date);
}
</script>
