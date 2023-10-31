<template>
    <FetchingAutocomplete
        mode="add"
        :fetch="searchRelationTemplates"
        :label="label"
        placeholder="Search relation template"
        item-title="name"
    >
        <template #item="{ props, item }">
            <v-list-item :title="item.raw.name" :subtitle="item.raw.description" v-bind="props"> </v-list-item>
        </template>
    </FetchingAutocomplete>
</template>
<script setup lang="ts">
import { useClient } from "@/graphql/client";
import { RelationTemplateFilterInput, DefaultRelationTemplateInfoFragment } from "@/graphql/generated";
import { withErrorMessage } from "@/util/withErrorMessage";
import FetchingAutocomplete from "./FetchingAutocomplete.vue";
import { transformSearchQuery } from "@/util/searchQueryTransformer";
import { PropType } from "vue";

const props = defineProps({
    label: {
        type: String,
        required: false,
        default: "Relation template"
    },
    relationTemplateFilter: {
        type: Object as PropType<RelationTemplateFilterInput>,
        required: false
    }
});

const client = useClient();

async function searchRelationTemplates(filter: string, count: number): Promise<DefaultRelationTemplateInfoFragment[]> {
    return await withErrorMessage(async () => {
        const query = transformSearchQuery(filter);
        if (query != undefined) {
            const res = await client.searchRelationTemplates({ query, count, filter: props.relationTemplateFilter });
            return res.searchRelationTemplates;
        } else {
            const res = await client.getRelationTemplates({ count: count - 1, filter: props.relationTemplateFilter });
            return res.relationTemplates.nodes;
        }
    }, "Error searching relation templates");
}
</script>
