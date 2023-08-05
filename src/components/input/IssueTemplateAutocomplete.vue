<template>
    <FetchingAutocomplete :fetch="searchIssueTemplates" label="Template" item-title="name">
        <template #item="{ props, item }">
            <v-list-item :title="item.raw.name" :subtitle="item.raw.description" v-bind="props"> </v-list-item>
        </template>
    </FetchingAutocomplete>
</template>
<script setup lang="ts">
import { useClient } from "@/graphql/client";
import { DefaultIssueTemplateInfoFragment } from "@/graphql/generated";
import { withErrorMessage } from "@/util/withErrorMessage";
import FetchingAutocomplete from "./FetchingAutocomplete.vue";

const client = useClient();

async function searchIssueTemplates(filter: string, count: number): Promise<DefaultIssueTemplateInfoFragment[]> {
    return await withErrorMessage(async () => {
        const res = await client.searchIssueTemplates({ filter, count });
        return res.issueTemplates.nodes;
    }, "Error searching issue templates");
}
</script>
