<template>
    <BaseLayout :title-segments="titleSegments" :tabs="tabs" :right-sidebar-items="rightSidebarItems"
        :left-sidebar-items="leftSidebarItems">
        <template #content>
            <PaginatedList :sort-fields="['id', 'name']" :item-manager="itemManager">
                <template #item="{ item }">
                    <v-list-item :title="item.name" :subtitle="item.id"></v-list-item>
                </template>
            </PaginatedList>
        </template>
    </BaseLayout>
</template>

<script lang="ts" setup>
import BaseLayout from "@/components/BaseLayout.vue";
import PaginatedList, { ItemManager } from "@/components/PaginatedList.vue";
import { SideBarItem } from "@/components/SideBar.vue";

const titleSegments = [
    { name: 'Gropius', path: '/' },
    { name: 'Test', path: '/test' },
];

const tabs = [
    { name: 'Tab 1', path: '/test/tab1' },
    { name: 'Tab 2', path: '/test/tab2' },
];

const rightSidebarItems: SideBarItem[][] = [
    [
        {
            icon: 'mdi-plus',
            description: 'Add element',
            color: "secondary-container",
            onClick: () => { },
        },
    ],
    [
        {
            icon: 'mdi-plus',
            description: 'Add element',
            color: "tertiary-container",
            onClick: () => { },
        },
    ],
];

const leftSidebarItems: SideBarItem[][] = [
    [
        {
            icon: 'mdi-plus',
            name: 'Add',
            color: "secondary-container",
            onClick: () => { },
        },
    ],
    [
        {
            icon: 'mdi-plus',
            name: 'Remove',
            color: "tertiary-container",
            onClick: () => { },
        },
    ],
];

interface Item {
    name: string,
    id: string,
}

const itemManager: ItemManager<Item> = {
    filterLocal: function (item: Item, filter: string): boolean {
        return item.name.includes(filter);
    },
    fetchItems: async function (filter: string, sortField: string, sortAscending: boolean, count: number, page: number): Promise<[Item[], number]> {
        const items: Item[] = [];
        let offset = page * count;
        for (let i = 0; i < 1000; i++) {
            items.push({
                name: `Item ${i}`,
                id: `${i}`,
            });
        }
        const filteredItems = items.filter(item => item.name.includes(filter));
        let sortedItems = filteredItems;
        if (!sortAscending) {
            sortedItems = sortedItems.reverse();
        }
        const currentPage = sortedItems.slice(offset, offset + count);
        return [currentPage, filteredItems.length];
    }
}
</script>
