<template>
    <PaginatedList
        :item-manager="itemManager"
        :sort-fields="Object.keys(sortFields)"
        :to="(component: Component) => componentRoute(component)"
    >
        <template #item="{ item }">
            <ListItem :title="item.name" :subtitle="item.description">
                <template #append>
                    <div class="text-medium-emphasis issue-container">
                        <v-icon icon="mdi-alert-circle-outline" />
                        {{ item.openIssues.totalCount }}
                    </div>
                </template>
            </ListItem>
        </template>
        <CreateComponentDialog @created-component="(component) => selectComponent(component)"/>
    </PaginatedList>
</template>
<script lang="ts" setup>
import PaginatedList, { ItemManager } from "@/components/PaginatedList.vue";
import { ClientReturnType, useClient } from "@/graphql/client";
import { ComponentOrderField, OrderDirection } from "@/graphql/generated";
import { RouteLocationRaw, useRouter } from "vue-router";
import ListItem from "@/components/ListItem.vue";
import CreateComponentDialog from "@/components/dialog/CreateComponentDialog.vue";

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

function selectComponent(component: { id: string }) {
    router.push(componentRoute(component))
}

function componentRoute(component: { id: string }): RouteLocationRaw {
    return {
        name: "component",
        params: {
            trackable: component.id
        }
    }
}

</script>
<style scoped lang="scss">
@use "@/styles/settings";
.issue-container {
    min-width: settings.$icon-with-number-width;
}
</style>
