<template>
    <div v-if="issue" class="pl-3 pt-3 fill-height d-flex flex-column">
        <div class="mb-5">
            <div class="d-flex">
                <IssueIcon :issue="issue" height="50px" class="mr-3"></IssueIcon>
                <div>
                    <div class="text-h4">{{ issue.title }}</div>
                    <div class="d-flex align-center text-variant text-subtitle-1">
                        Opened by&nbsp;
                        <User :user="issue.createdBy" />
                        &nbsp;
                        <RelativeTime :time="issue.createdAt" />
                        &nbsp;· last updated&nbsp;
                        <RelativeTime :time="issue.lastUpdatedAt" />
                    </div>
                </div>
            </div>
        </div>
        <div class="content d-flex flex-fill">
            <div class="timeline">
                <TimelineItem v-for="item in issue.timelineItems.nodes" :item="item" />
            </div>
            <v-sheet class="sidebar ml-8 mr-3 mb-3" color="surface-container-high" rounded="xl">
                Hello world
                <div style="height: 500px" class="ma-5">content placeholder</div>
            </v-sheet>
        </div>
    </div>
</template>
<script setup lang="ts">
import { NodeReturnType, useClient } from "@/graphql/client";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useAsyncState } from "@vueuse/core";
import TimelineItem from "@/components/timeline/TimelineItem";
import IssueIcon from "@/components/IssueIcon.vue";
import User from "@/components/User.vue";
import RelativeTime from "@/components/RelativeTime.vue";
import { provide } from "vue";
import { withErrorMessage } from "@/util/withErrorMessage";

export type Issue = NodeReturnType<"getIssue", "Issue">;

const client = useClient();
const route = useRoute();
const issueId = computed(() => route.params.issue as string);

const { state: issue, isReady } = useAsyncState(async () => {
    const res = await withErrorMessage(() => client.getIssue({ id: issueId.value }), "Error loading issue");
    return res.node as Issue;
}, null);

provide("issue", issue);
</script>
<style scoped lang="scss">
.fill-height {
    height: 100%;
}

.content {
    position: relative;
    overflow: auto;
}
.timeline {
    flex: 1 1;
}
.sidebar {
    position: sticky;
    top: 0;
    right: 0;
    min-width: min(40%, 300px);
    max-height: calc(100% - 12px);
    height: fit-content;
    overflow-y: auto;
}
</style>
