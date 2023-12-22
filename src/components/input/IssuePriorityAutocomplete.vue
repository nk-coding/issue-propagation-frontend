<template>
    <FetchingAutocomplete
        mode="model"
        :fetch="searchIssuePriorities"
        :dependency="template"
        label="Priority"
        item-title="name"
        item-subtitle="description"
    >
    </FetchingAutocomplete>
</template>
<script setup lang="ts">
import { NodeReturnType, useClient } from "@/graphql/client";
import { DefaultIssuePriorityInfoFragment } from "@/graphql/generated";
import { withErrorMessage } from "@/util/withErrorMessage";
import FetchingAutocomplete from "./FetchingAutocomplete.vue";
import { transformSearchQuery } from "@/util/searchQueryTransformer";

const props = defineProps({
    template: {
        type: String,
        required: false
    }
});

const client = useClient();

async function searchIssuePriorities(filter: string, count: number): Promise<DefaultIssuePriorityInfoFragment[]> {
    if (props.template == undefined) {
        return [];
    }
    return await withErrorMessage(async () => {
        const query = transformSearchQuery(filter);
        if (query != undefined) {
            const res = await client.searchIssuePriorities({ template: props.template!, query, count });
            return res.searchIssuePriorities;
        } else {
            const res = await client.firstIssuePriorities({ template: props.template!, count });
            const nodeRes = res.node as NodeReturnType<"firstIssuePriorities", "IssueTemplate">;
            return nodeRes.issuePriorities.nodes;
        }
    }, "Error searching issue priorities");
}
</script>