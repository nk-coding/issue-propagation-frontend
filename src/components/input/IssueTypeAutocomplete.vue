<template>
    <FetchingAutocomplete :fetch="searchIssueTypes" :dependency="template" label="Type" item-title="name">
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
    const searchedIssue = await withErrorMessage(async () => {
        const res = await client.searchIssueTypes({ template: props.template!, filter, count });
        return res.node as NodeReturnType<"searchIssueTypes", "IssueTemplate">;
    }, "Error searching issue types");
    return searchedIssue.issueTypes.nodes;
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
