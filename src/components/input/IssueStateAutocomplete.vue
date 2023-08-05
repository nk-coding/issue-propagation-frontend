<template>
    <FetchingAutocomplete :fetch="searchIssueStates" :dependency="template" label="State" item-title="name">
        <template #item="{ props, item }">
            <v-list-item :title="item.raw.name" :subtitle="item.raw.description" v-bind="props">
                <template #prepend>
                    <v-icon :color="item.raw.isOpen ? 'issue-open' : 'issue-closed'" class="full-opacity">
                        mdi-circle
                    </v-icon>
                </template>
            </v-list-item>
        </template>
    </FetchingAutocomplete>
</template>
<script setup lang="ts">
import { NodeReturnType, useClient } from "@/graphql/client";
import { DefaultIssueStateInfoFragment } from "@/graphql/generated";
import { withErrorMessage } from "@/util/withErrorMessage";
import FetchingAutocomplete from "./FetchingAutocomplete.vue";

const props = defineProps({
    template: {
        type: String,
        required: false
    }
});

const client = useClient();

async function searchIssueStates(filter: string, count: number): Promise<DefaultIssueStateInfoFragment[]> {
    if (props.template == undefined) {
        return [];
    }
    const searchedIssue = await withErrorMessage(async () => {
        const res = await client.searchIssueStates({ template: props.template!, filter, count });
        return res.node as NodeReturnType<"searchIssueStates", "IssueTemplate">;
    }, "Error searching issue states");
    return searchedIssue.issueStates.nodes;
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
