<template>
    <PaginatedList
        name="permissions"
        :item-manager="itemManager"
        :sort-fields="Object.keys(permissionSortFields)"
        :to="() => undefined"
        :dependencies="[permissionDependencyCounter]"
    >
        <template #item="{ item }">
            <ListItem
                :title="item.name"
                :subtitle="item.description || 'No description provided'"
                :italic-subtitle="!item.description"
            >
                <template #append-line>
                    <div class="d-flex flex-wrap chip-container">
                        <v-chip v-for="entry in item.entries" color="primary" size="small" class="flex-shrink-0">
                            {{ enumToRegularCase(entry) }}
                        </v-chip>
                    </div>
                </template>
                <template #append>
                    <v-chip
                        v-if="item.allUsers"
                        color="error"
                        size="small"
                        class="flex-shrink-0 mr-5"
                        icon="mdi-account-multiple"
                        >All users</v-chip
                    >
                    <div class="text-medium-emphasis icon-container mr-5">
                        <v-icon icon="mdi-account" />
                        {{ item.users.totalCount }}
                    </div>
                    <IconButton @click="permissionToEdit = item" class="mr-2">
                        <v-icon icon="mdi-pencil" />
                        <v-tooltip activator="parent" location="bottom">Edit permission</v-tooltip>
                    </IconButton>
                    <IconButton @click="permissionToManageUsers = item" class="mr-2">
                        <v-icon icon="mdi-account-edit" />
                        <v-tooltip activator="parent" location="bottom">Manage users</v-tooltip>
                    </IconButton>
                    <IconButton>
                        <v-icon icon="mdi-close" />
                        <ConfirmationDialog
                            :title="`Remove permission from ${nodeName}?`"
                            :message="`Are you sure you want to remove the permission from this ${nodeName}?`"
                            confirm-text="Remove"
                            @confirm="removePermission(item.id)"
                        />
                        <v-tooltip activator="parent" location="bottom"
                            >Remove permission from {{ nodeName }}</v-tooltip
                        >
                    </IconButton>
                </template>
            </ListItem>
        </template>
        <ManagePermissionUsersDialog
            v-model="permissionToManageUsers"
            :update-permission="updatePermission"
            @updated-permission="permissionDependencyCounter++"
        />
        <slot name="import-dialog" :imported-permission="importedPermission" />
    </PaginatedList>
</template>
<script
    lang="ts"
    setup
    generic="
        E extends string,
        T extends {
            id: string;
            name: string;
            description: string;
            entries: E[];
            allUsers: boolean;
            users: { totalCount: number };
        }
    "
>
import ListItem from "@/components/ListItem.vue";
import PaginatedList, { ItemManager } from "@/components/PaginatedList.vue";
import ConfirmationDialog from "@/components/dialog/ConfirmationDialog.vue";
import { enumToRegularCase } from "@/util/casingTransformers";
import { permissionSortFields } from "@/util/permissionSortFields";
import { withErrorMessage } from "@/util/withErrorMessage";
import { PropType } from "vue";
import { ref } from "vue";
import ManagePermissionUsersDialog from "./dialog/ManagePermissionUsersDialog.vue";
import { IdObject } from "@/util/types";

export type PermissionUpdateFunctionInput<T> = IdObject &
    Partial<{
        addedEntries: T[];
        removedEntries: T[];
        allUsers: boolean;
        addedUsers: string[];
        removedUsers: string[];
    }>;

export type PermissionUpdateFunction<T> = (input: PermissionUpdateFunctionInput<T>) => Promise<void>;

const props = defineProps({
    nodeName: {
        type: String,
        required: true
    },
    itemManager: {
        type: Object as PropType<ItemManager<T, keyof typeof permissionSortFields>>,
        required: true
    },
    permissionEntries: {
        type: Array as PropType<string[]>,
        required: true
    },
    removePermission: {
        type: Function as PropType<(permissionId: string) => Promise<void>>,
        required: true
    },
    updatePermission: {
        type: Function as PropType<PermissionUpdateFunction<E>>,
        required: true
    }
});

const permissionDependencyCounter = ref<number>(0);
const permissionToEdit = ref<T | undefined>();
const permissionToManageUsers = ref<T | undefined>();

async function removePermission(permissionId: string) {
    await withErrorMessage(async () => {
        await props.removePermission(permissionId);
    }, `Error removing permission from ${props.nodeName}`);
    permissionDependencyCounter.value++;
}

function importedPermission(permission: IdObject) {
    permissionDependencyCounter.value++;
}
</script>
<style scoped lang="scss">
@use "@/styles/settings.scss";
.icon-container {
    min-width: settings.$icon-with-number-width;
}

.chip-container {
    row-gap: 0.5rem;
    column-gap: 0.25rem;
}
</style>
