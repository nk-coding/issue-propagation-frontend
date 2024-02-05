<template>
    <ListItem :title="item.title" :subtitle="item.title">
        <template #prepend>
            <IssueIcon :issue="item" height="40px" class="mr-2 flex-0-0" />
        </template>
        <template #append>
            <div class="mr-7 user-stack-container">
                <UserStack
                    :users="item.assignments.nodes.map((assignment) => assignment.user)"
                    size="small"
                    class="pa-3"
                />
            </div>
            <div class="text-medium-emphasis icon-container d-flex align-center">
                <v-icon color="issue-incoming" class="triangle-right mr-1" size="x-small" icon="mdi-triangle" />
                {{ item.incomingRelations.totalCount }}
            </div>
            <div class="text-medium-emphasis icon-container d-flex align-center">
                {{ item.outgoingRelations.totalCount }}
                <v-icon color="issue-outgoing" class="triangle-right ml-1" size="x-small" icon="mdi-triangle" />
            </div>
            <div class="text-medium-emphasis icon-container">
                <v-icon icon="mdi-comment-outline" />
                {{ item.issueComments.totalCount }}
            </div>
        </template>
        <template #subtitle>
            <div class="text-medium-emphasis text-body-2">
                was created <RelativeTime :time="item.createdAt" /> by
                <User :user="item.createdBy" size="small" />
            </div>
        </template>
        <template #title-append>
            <Label v-for="(label, idx) in item.labels.nodes" :key="idx" :label="label" class="ml-2 flex-shrink-0" size="small" />
        </template>
    </ListItem>
</template>
<script lang="ts" setup>
import { IssueListItemInfoFragment } from "@/graphql/generated";
import { PropType } from "vue";
import UserStack from "./UserStack.vue";
import IssueIcon from "./IssueIcon.vue";
import ListItem from "./ListItem.vue";
import RelativeTime from "./RelativeTime.vue";
import Label from "./info/Label.vue";
import User from "./info/User.vue";

defineProps({
    item: {
        type: Object as PropType<IssueListItemInfoFragment>,
        required: true
    }
});
</script>
<style scoped lang="scss">
@use "@/styles/settings.scss";
.icon-container {
    min-width: settings.$icon-with-number-width;
}
.triangle-right {
    rotate: 90deg;
}
.user-stack-container {
    background: transparent;
}
</style>