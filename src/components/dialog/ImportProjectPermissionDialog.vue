<template>
    <v-dialog v-model="importProjectPermissionDialog" persistent width="auto">
        <ImportDialogContent
            item-name="project permission"
            confirmation-message="Import permission"
            :submit-disabled="submitDisabled"
            @cancel="importProjectPermissionDialog = false"
            @import="importProjectPermission($event as IdObject)"
        >
            <template #select="{ selectedItem }">
                <ExternalProjectPermissionAutocomplete
                    hide-details
                    autofocus
                    menu-mode="repeating"
                    :menu-delay="350"
                    @selected-item="selectedItem"
                />
            </template>
            <template #display="{ item }">
                <Permission :permission="<DefaultProjectPermissionInfoFragment>item" />
            </template>
        </ImportDialogContent>
    </v-dialog>
</template>
<script setup lang="ts">
import { useClient } from "@/graphql/client";
import { onEvent } from "@/util/eventBus";
import { ref } from "vue";
import ImportDialogContent from "./ImportDialogContent.vue";
import ExternalProjectPermissionAutocomplete from "../input/ExternalProjectPermissionAutocomplete.vue";
import { DefaultProjectPermissionInfoFragment } from "@/graphql/generated";
import { useBlockingWithErrorMessage, withErrorMessage } from "@/util/withErrorMessage";
import Permission from "../info/Permission.vue";
import { IdObject } from "@/util/types";

const importProjectPermissionDialog = ref(false);
const client = useClient();
const [blockWithErrorMessage, submitDisabled] = useBlockingWithErrorMessage();

const emit = defineEmits<{
    (event: "imported-project-permission", projectPermission: IdObject): void;
}>();

const props = defineProps({
    project: {
        type: String,
        required: true
    }
});

onEvent("import-permission", () => {
    importProjectPermissionDialog.value = true;
});

async function importProjectPermission(projectPermission: IdObject) {
    blockWithErrorMessage(async () => {
        await client.addProjectPermissionToProject({
            projectPermission: projectPermission.id,
            project: props.project
        });
        importProjectPermissionDialog.value = false;
        emit("imported-project-permission", projectPermission);
    }, "Error importing projectpermission");
}
</script>
