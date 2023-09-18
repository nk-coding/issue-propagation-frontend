<template>
    <FetchingAutocomplete
        mode="model"
        :fetch="searchIssueTypes"
        :dependency="template"
        label="Type"
        item-title="name"
    >
        <template #item="{ props, item }">
            <v-list-item :title="item.raw.name" :subtitle="item.raw.description" v-bind="props">
                <template #prepend>
                    <IssueTypeIcon
                        :path="item.raw.iconPath"
                        fill="rgb(var(--v-theme-primary))"
                        class="type-icon mr-2"
                    />
                </template>
            </v-list-item>
        </template>
    </FetchingAutocomplete>
</template>
<script setup lang="ts">
import { NodeReturnType, useClient } from "@/graphql/client";
import { DefaultIssueTypeInfoFragment } from "@/graphql/generated";
import { withErrorMessage } from "@/util/withErrorMessage";
import FetchingAutocomplete from "./FetchingAutocomplete.vue";
import IssueTypeIcon from "../IssueTypeIcon.vue";
import { transformSearchQuery } from "@/util/searchQueryTransformer";

const props = defineProps({
    template: {
        type: String,
        required: false
    }
});

const client = useClient();

async function searchIssueTypes(filter: string, count: number): Promise<DefaultIssueTypeInfoFragment[]> {
    if (props.template == undefined) {
        return [];
    }
    return await withErrorMessage(async () => {
        const query = transformSearchQuery(filter);
        if (query != undefined) {
            const res = await client.searchIssueTypes({ template: props.template!, query, count });
            return res.searchIssueTypes;
        } else {
            const res = await client.firstIssueTypes({ template: props.template!, count });
            const nodeRes = res.node as NodeReturnType<"firstIssueTypes", "IssueTemplate">;
            return nodeRes.issueTypes.nodes;
        }
    }, "Error searching issue types");
}
</script>
<style scoped lang="scss">
@use "@/styles/settings.scss";
@use "sass:map";

.type-icon {
    width: map.get(settings.$avatar-sizes, "large");
    height: map.get(settings.$avatar-sizes, "large");
}
</style>
