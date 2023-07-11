<template>
    <svg viewBox="0 0 100 100" preserve-aspect-ratio="">
        <path :d="issue.type.iconPath" :fill="iconFill" />
        <polygon
            v-if="issue.incomingRelations.totalCount > 0"
            fill="#00C6EB"
            points="3 11 3 21 10 16"
            transform="scale(3.125)"
        ></polygon>
        <polygon
            v-if="issue.outgoingRelations.totalCount > 0"
            fill="#FF8900"
            points="24 11 24 21 31 16"
            transform="scale(3.125)"
        ></polygon>
    </svg>
</template>
<script setup lang="ts">
import { DefaultIssueIconInfoFragment } from "@/graphql/generated";
import { computed } from "vue";
import { PropType } from "vue";

const props = defineProps({
    issue: {
        type: Object as PropType<DefaultIssueIconInfoFragment>,
        required: true
    }
});

const iconFill = computed(() => {
    if (props.issue.state.isOpen) {
        return "#00BA39";
    } else {
        return "#FF0036";
    }
});
</script>
