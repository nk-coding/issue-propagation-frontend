<template>
    <FetchingAutocomplete :fetch="searchIssues" :has-selection="hasSelection" :label="label" item-title="title">
        <template #item="{ props, item }">
            <v-list-item :title="item.raw.title" :subtitle="generateSubtitle(item.raw)" v-bind="props">
            </v-list-item>
        </template>
    </FetchingAutocomplete>
</template>
<script setup lang="ts">
import { NodeReturnType, useClient } from "@/graphql/client";
import { DefaultIssueInfoFragment } from "@/graphql/generated";
import { withErrorMessage } from "@/util/withErrorMessage";
import FetchingAutocomplete from "./FetchingAutocomplete.vue";
import { transformSearchQuery } from "@/util/searchQueryTransformer";

const props = defineProps({
    label: {
        type: String,
        required: false,
        default: "Issue"
    },
    hasSelection: {
        type: Boolean,
        required: true
    }
});

const client = useClient();

function generateSubtitle(issue: DefaultIssueInfoFragment): string {
    return issue.trackables.nodes.map(trackable => trackable.name).join(", ");
}

async function searchIssues(filter: string, count: number): Promise<DefaultIssueInfoFragment[]> {
    return await withErrorMessage(async () => {
        const query = transformSearchQuery(filter);
        if (query != undefined) {
            const res = await client.searchIssues({ query, count });
            return res.searchIssues;
        } else {
            return [];
        }
    }, "Error searching issues");
}
</script>
<style scoped lang="scss">
@use "@/styles/settings.scss";
@use "sass:map";

.state-icon {
    width: map.get(settings.$avatar-sizes, "large");
    height: map.get(settings.$avatar-sizes, "large");
}
</style>