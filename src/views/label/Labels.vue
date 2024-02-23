<template>
    <PaginatedList
        name="labels"
        :item-manager="itemManager"
        :sort-fields="Object.keys(sortFields)"
        :to="() => undefined"
        :dependencies="modifiedLabels"
    >
        <template #item="{ item }">
            <ListItem
                :title="item.name"
                :subtitle="item.description || 'No description provided'"
                :italic-subtitle="!item.description"
            >
                <template #prepend>
                    <v-icon :color="item.color" class="mr-2" icon="mdi-circle" />
                </template>
                <template #append>
                    <IconButton
                        :disabled="!(trackable?.manageLabels ?? false)"
                        @click="labelToUpdate = item"
                        class="mr-2"
                    >
                        <v-icon icon="mdi-pencil" />
                    </IconButton>
                    <IconButton :disabled="!(trackable?.manageLabels ?? false)">
                        <v-icon icon="mdi-close" />
                        <ConfirmationDialog
                            title="Remove label from trackable?"
                            message="Are you sure you want to remove the label from this trackable?"
                            confirm-text="Remove"
                            @confirm="removeLabel(item.id)"
                        />
                    </IconButton>
                </template>
            </ListItem>
        </template>
        <CreateLabelDialog :trackable="trackableId" @created-label="modifiedLabels.push($event.id)" />
        <UpdateLabelDialog
            :trackable="trackableId"
            v-model="labelToUpdate"
            @updated-label="modifiedLabels.push($event.id)"
        />
        <ImportLabelDialog :trackable="trackableId" @imported-label="modifiedLabels.push($event.id)" />
    </PaginatedList>
</template>
<script lang="ts" setup>
import ListItem from "@/components/ListItem.vue";
import PaginatedList, { ItemManager } from "@/components/PaginatedList.vue";
import ConfirmationDialog from "@/components/dialog/ConfirmationDialog.vue";
import CreateLabelDialog from "@/components/dialog/CreateLabelDialog.vue";
import ImportLabelDialog from "@/components/dialog/ImportLabelDialog.vue";
import UpdateLabelDialog from "@/components/dialog/UpdateLabelDialog.vue";
import { NodeReturnType, useClient } from "@/graphql/client";
import { LabelOrderField, OrderDirection } from "@/graphql/generated";
import { trackableKey } from "@/util/keys";
import { withErrorMessage } from "@/util/withErrorMessage";
import { inject } from "vue";
import { watch } from "vue";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

type Trackable = NodeReturnType<"getLabelList", "Component">;
type Label = Trackable["labels"]["nodes"][0];

const client = useClient();
const route = useRoute();

const trackableId = computed(() => route.params.trackable as string);
const trackable = inject(trackableKey);
const modifiedLabels = ref<string[]>([]);
const labelToUpdate = ref<Label | undefined>();

watch(
    modifiedLabels,
    () => {
        console.log("Modified labels", modifiedLabels.value);
    },
    { deep: true }
);

const sortFields = {
    Name: LabelOrderField.Name,
    Color: LabelOrderField.Color
};

const itemManager: ItemManager<Label, keyof typeof sortFields> = {
    fetchItems: async function (
        filter: string | undefined,
        sortField: keyof typeof sortFields,
        sortAscending: boolean,
        count: number,
        page: number
    ): Promise<[Label[], number]> {
        if (filter == undefined) {
            const res = await client.getLabelList({
                orderBy: {
                    field: sortFields[sortField],
                    direction: sortAscending ? OrderDirection.Asc : OrderDirection.Desc
                },
                count,
                skip: page * count,
                trackable: trackableId.value
            });
            const labels = (res.node as Trackable).labels;
            return [labels.nodes, labels.totalCount];
        } else {
            const res = await client.getFilteredLabelList({
                query: filter,
                count,
                trackable: trackableId.value
            });
            return [res.searchLabels, res.searchLabels.length];
        }
    }
};

async function removeLabel(labelId: string) {
    await withErrorMessage(async () => {
        await client.removeLabelFromTrackable({
            label: labelId,
            trackable: trackableId.value
        });
    }, "Error removing label from trackable");
    modifiedLabels.value.push(labelId);
}
</script>
