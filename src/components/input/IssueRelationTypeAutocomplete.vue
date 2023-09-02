<template>
    <FetchingAutocomplete :fetch="searchIssueRelationTypes" :dependency="template" label="Relation type" item-title="name">
        <template #item="{ props, item }">
            <v-list-item :title="item.raw.name" :subtitle="item.raw.description" v-bind="props">
            </v-list-item>
        </template>
    </FetchingAutocomplete>
</template>
<script setup lang="ts">
import { NodeReturnType, useClient } from "@/graphql/client";
import { DefaultIssueRelationTypeInfoFragment } from "@/graphql/generated";
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

async function searchIssueRelationTypes(filter: string, count: number): Promise<DefaultIssueRelationTypeInfoFragment[]> {
    if (props.template == undefined) {
        return [];
    }
    return await withErrorMessage(async () => {
        const query = transformSearchQuery(filter);
        if (query != undefined) {
            const res = await client.searchIssueRelationTypes({ template: props.template!, query, count });
            return res.searchIssueRelationTypes;
        } else {
            const res = await client.firstIssueRelationTypes({ template: props.template!, count })
            const nodeRes = res.node as NodeReturnType<"firstIssueRelationTypes", "IssueTemplate">
            return nodeRes.relationTypes.nodes
        }
    }, "Error searching issue types");
}
</script>
