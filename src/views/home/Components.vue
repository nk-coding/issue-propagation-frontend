<template>
    <PaginatedList :item-manager="itemManager" :sort-fields="Object.keys(sortFields)" @item-selected="selectComponent">
        <template #item="{ item }">
            <ListItem :title="item.name" :subtitle="item.description">
                <template v-slot:append>
                    <div class="text-medium-emphasis issue-container">
                        <v-icon color="on-surface-variant">mdi-alert-circle-outline</v-icon>
                        {{ item.openIssues.totalCount }}
                    </div>
                </template>
            </ListItem>
        </template>
    </PaginatedList>
</template>
<script lang="ts" setup>
import PaginatedList, { ItemManager } from "@/components/PaginatedList.vue";
import { ClientReturnType, useClient } from "@/graphql/client";
import { ComponentOrderField, OrderDirection } from "@/graphql/generated";
import { useRouter } from "vue-router";
import ListItem from "../component/ListItem.vue";

type Component = ClientReturnType<"getComponents">["components"]["nodes"][0];

const client = useClient();
const router = useRouter();

const sortFields = {
    "[Default]": ComponentOrderField.Id,
    Name: ComponentOrderField.Name
};

const itemManager: ItemManager<Component, keyof typeof sortFields> = {
    filterLocal: function (item: Component, filter: string): boolean {
        return item.name.includes(filter);
    },
    fetchItems: async function (
        filter: string,
        sortField: keyof typeof sortFields,
        sortAscending: boolean,
        count: number,
        page: number
    ): Promise<[Component[], number]> {
        const res = await client.getComponents({
            filter,
            orderBy: {
                field: sortFields[sortField],
                direction: sortAscending ? OrderDirection.Asc : OrderDirection.Desc
            },
            count,
            skip: page * count
        });
        return [res.components.nodes, res.components.totalCount];
    }
};

function selectComponent(component: any) {
    router.push({ name: "component", params: { trackable: component.id } });
}
</script>
<style scoped>
.issue-container {
    min-width: 70px;
}
</style>
