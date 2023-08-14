<template>
    <BaseLayout
        :title-segments="titleSegments"
        :tabs="tabs"
        :right-sidebar-items="rightSidebarItems"
        :left-sidebar-items="leftSidebarItems"
    >
        <template #content>
            <div id="graph-editor"/>
        </template>
    </BaseLayout>
</template>

<script lang="ts" setup>
import "reflect-metadata";
import BaseLayout from "@/components/BaseLayout.vue";
import PaginatedList, { ItemManager } from "@/components/PaginatedList.vue";
import { SideBarItem } from "@/components/SideBar.vue";
import { useAppStore } from "@/store/app";
import { GraphModelSource, createContainer } from "@gropius/graph-editor";
import { ref } from "vue";
import { reactive } from "vue";
import { TYPES } from "sprotty";

const store = useAppStore();

const titleSegments = [
    { name: "Gropius", path: "/" },
    { name: "Test", path: "/test" }
];

const tabs = [
    { name: "Tab 1", path: "/test/tab1" },
    { name: "Tab 2", path: "/test/tab2" }
];

const rightSidebarItems: SideBarItem[][] = [
    [
        {
            icon: "mdi-plus",
            description: "Add element",
            color: "secondary",
            onClick: () => {}
        }
    ],
    [
        {
            icon: "mdi-plus",
            description: "Add element",
            color: "tertiary",
            onClick: () => {}
        }
    ]
];

const leftSidebarItems = reactive([
    [
        {
            icon: "mdi-plus",
            name: "Add",
            to: "/"
        },
        {
            icon: "mdi-cog",
            name: "Settings",
            to: "/"
        }
    ]
]);

interface Item {
    name: string;
    id: string;
}

const itemManager: ItemManager<Item, string> = {
    filterLocal: function (item: Item, filter: string): boolean {
        return item.name.includes(filter);
    },
    fetchItems: async function (
        filter: string,
        sortField: string,
        sortAscending: boolean,
        count: number,
        page: number
    ): Promise<[Item[], number]> {
        const items: Item[] = [];
        const offset = page * count;
        for (let i = 0; i < 1000; i++) {
            items.push({
                name: `Item ${i}`,
                id: `${i}`
            });
        }
        const filteredItems = items.filter((item) => item.name.includes(filter));
        let sortedItems = filteredItems;
        if (!sortAscending) {
            sortedItems = sortedItems.reverse();
        }
        const currentPage = sortedItems.slice(offset, offset + count);
        return [currentPage, filteredItems.length];
    }
};

const errorCounter = ref(0);

function showError() {
    store.pushError(`Error ${errorCounter.value++}`);
}

class ModelSource extends GraphModelSource {

}

const container = createContainer("graph-editor");
container.bind(ModelSource).toSelf().inSingletonScope();
container.bind(TYPES.ModelSource).toService(ModelSource);
const modelSource = container.get(ModelSource);
modelSource.updateGraph({
    graph: {
        components: [
            {
                id: "1",
                name: "Component 1",
                style: {
                    shape: "ellipse",
                    fill: {
                        color: "#00ffff"
                    }
                },
                interfaces: [],
                issueTypes: []
            }
        ],
        relations: [],
        issueRelations: []
    },
    layout: {
        "1": {
            pos: {
                x: 0,
                y: 0
            }
        }
    }
})
</script>
