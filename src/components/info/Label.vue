<template>
    <v-chip :color="label.color">
        {{ label.name }}
        <v-tooltip v-if="label.description" activator="parent" location="bottom">
            {{ label.description }}
        </v-tooltip>
    </v-chip>
</template>
<script lang="ts" setup>
import { DefaultLabelInfoFragment } from "@/graphql/generated";
import { PropType } from "vue";

defineProps({
    label: {
        type: Object as PropType<DefaultLabelInfoFragment>,
        required: true
    }
});
</script>
