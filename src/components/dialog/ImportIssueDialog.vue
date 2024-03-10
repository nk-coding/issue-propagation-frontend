<template>
    <v-dialog v-model="importIssueDialog" persistent width="auto">
        <ImportDialogContent
            item-name="issue"
            confirmation-message="Import issue"
            :submit-disabled="submitDisabled"
            @cancel="importIssueDialog = false"
            @import="importIssue($event as IdObject)"
        >
            <template #select="{ selectedItem }">
                <ExternalIssueAutocomplete
                    hide-details
                    autofocus
                    menu-mode="repeating"
                    :menu-delay="350"
                    @selected-item="selectedItem"
                />
            </template>
            <template #display="{ item }">
                <Issue :issue="<DefaultIssueInfoFragment>item" class="d-block" />
            </template>
        </ImportDialogContent>
    </v-dialog>
</template>
<script setup lang="ts">
import { useClient } from "@/graphql/client";
import { onEvent } from "@/util/eventBus";
import { ref } from "vue";
import ImportDialogContent from "./ImportDialogContent.vue";
import ExternalIssueAutocomplete from "../input/ExternalIssueAutocomplete.vue";
import Issue from "../info/Issue.vue";
import { DefaultIssueInfoFragment } from "@/graphql/generated";
import { useBlockingWithErrorMessage, withErrorMessage } from "@/util/withErrorMessage";
import { IdObject } from "@/util/types";

const importIssueDialog = ref(false);
const client = useClient();
const [blockWithErrorMessage, submitDisabled] = useBlockingWithErrorMessage();

const emit = defineEmits<{
    (event: "imported-issue", issue: IdObject): void;
}>();

const props = defineProps({
    trackable: {
        type: String,
        required: true
    }
});

onEvent("import-issue", () => {
    importIssueDialog.value = true;
});

async function importIssue(issue: IdObject) {
    blockWithErrorMessage(async () => {
        await client.addIssueToTrackable({
            issue: issue.id,
            trackable: props.trackable
        });
        importIssueDialog.value = false;
        emit("imported-issue", issue);
    }, "Error importing issue");
}
</script>
