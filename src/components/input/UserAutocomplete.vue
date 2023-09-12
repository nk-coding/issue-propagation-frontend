<template>
    <FetchingAutocomplete :fetch="fetch" :has-selection="hasSelection" :label="label" item-title="displayName">
        <template #item="{ props, item }">
            <v-list-item :title="item.raw.displayName" :subtitle="item.raw.username" v-bind="props">
                <template #prepend>
                    <User :user="item.raw" :show-name="false" class="mr-2" />
                </template>
            </v-list-item>
        </template>
    </FetchingAutocomplete>
</template>
<script setup lang="ts">
import { DefaultUserInfoFragment } from "@/graphql/generated";
import FetchingAutocomplete from "./FetchingAutocomplete.vue";
import User from "../info/User.vue";
import { PropType } from "vue";

defineProps({
    label: {
        type: String,
        required: false,
        default: "Issue"
    },
    hasSelection: {
        type: Boolean,
        required: true
    },
    fetch: {
        type: Function as PropType<(filter: string, count: number) => Promise<DefaultUserInfoFragment[]>>,
        required: true
    }
});
</script>
