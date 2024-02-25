<template>
    <v-dialog v-model="createLabelDialog" persistent width="auto">
        <LabelDialogContent
            title="Create label"
            discard-title="Discard label?"
            discard-message="Are you sure you want to discard this label?"
            submit-action="Create label"
            :trackable="trackable"
            :initial-value="initialValue"
            @submit="createLabel"
            @cancel="createLabelDialog = false"
        />
    </v-dialog>
</template>
<script lang="ts" setup>
import { onEvent } from "@/util/eventBus";
import { useClient } from "@/graphql/client";
import { ref } from "vue";
import { withErrorMessage } from "@/util/withErrorMessage";
import LabelDialogContent, { Label } from "./LabelDialogContent.vue";
import { IdObject } from "@/util/types";

const createLabelDialog = ref(false);
const client = useClient();

const emit = defineEmits<{
    (event: "created-label", label: IdObject): void;
}>();

const props = defineProps({
    trackable: {
        type: String,
        required: true
    }
});

const initialValue = ref({
    name: "",
    description: "",
    color: ""
});

onEvent("create-label", () => {
    createLabelDialog.value = true;
});

async function createLabel(state: Label) {
    const label = await withErrorMessage(async () => {
        const res = await client.createLabel({
            input: {
                ...state,
                trackables: [props.trackable]
            }
        });
        return res.createLabel.label;
    }, "Error creating label");
    createLabelDialog.value = false;
    emit("created-label", label);
}
</script>
