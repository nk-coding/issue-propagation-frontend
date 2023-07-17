<template>
    <TimelineItemBase>
        <div class="d-flex align-start mb-6">
            <User :user="item.createdBy" :show-name="false" size="xx-large"></User>
            <v-sheet color="surface-container-high" class="flex-1-1 ml-3 comment-card pa-3" rounded="lger">
                <Viewer :value="item.body" :plugins="plugins"></Viewer>
            </v-sheet>
        </div>
    </TimelineItemBase>
</template>
<script setup lang="ts">
import { PropType } from "vue";
import TimelineItemBase, { TimelineItemType } from "./TimelineItemBase.vue";
import User from "@/components/User.vue";
import { Editor, Viewer } from "@bytemd/vue-next";
import gfm from "@bytemd/plugin-gfm";
import "bytemd/dist/index.css";

defineProps({
    item: {
        type: Object as PropType<TimelineItemType<"IssueComment"> | TimelineItemType<"Body">>,
        required: true
    }
});

const plugins = [gfm()];
</script>
<style lang="scss">
.comment-card {
    overflow: hidden;
    &.v-theme--light {
        @import "github-markdown-css/github-markdown-light";
    }
    &.v-theme--dark {
        @import "github-markdown-css/github-markdown-dark";
    }
}
.markdown-body {
    background: none !important;
}
</style>
