<template>
    <BaseLayout
        :title-segments="titleSegments"
        :tabs="tabs"
        :right-sidebar-items="rightSidebarItems"
        :left-sidebar-items="leftSidebarItems"
    >
        <template #content>
            <GraphEditor :graph="graph" v-model:layout="layout" />
        </template>
    </BaseLayout>
</template>

<script lang="ts" setup>
import BaseLayout from "@/components/BaseLayout.vue";
import PaginatedList, { ItemManager } from "@/components/PaginatedList.vue";
import { SideBarItem } from "@/components/SideBar.vue";
import { useAppStore } from "@/store/app";
import { Graph, GraphLayout, GraphModelSource, createContainer } from "@gropius/graph-editor";
import { ref } from "vue";
import { reactive } from "vue";
import GraphEditor from "@/components/GraphEditor.vue";

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

const graph = ref<Graph>({
    components: [
        {
            id: "1",
            name: "Component 1",
            version: "2.1.0",
            style: {
                shape: "circle",
                stroke: {}
            },
            interfaces: [
                {
                    id: "1_1",
                    name: "Interface 1",
                    version: "0.1",
                    style: {
                        shape: "rhombus",
                        stroke: {}
                    },
                    issueTypes: []
                }
            ],
            issueTypes: []
        },
        {
            id: "2",
            name: "Component 2 and this is a very long and very stupid name",
            version: "2.0",
            style: {
                shape: "rect",
                radius: 10,
                stroke: {}
            },
            interfaces: [
                {
                    id: "2_1",
                    name: "Interface 2",
                    style: {
                        shape: "rect",
                        radius: 10,
                        stroke: {}
                    },
                    issueTypes: []
                }
            ],
            issueTypes: []
        },
        {
            id: "3",
            name: "Testing",
            style: {
                shape: "rhombus",
                radius: 3,
                stroke: {
                }
            },
            interfaces: [],
            issueTypes: []
        }
    ],
    relations: [],
    issueRelations: []
});
const layout = ref<GraphLayout>({
    "1": {
        pos: {
            x: 0,
            y: 0
        }
    },
    "1_1": {
        pos: {
            x: -100,
            y: -200
        }
    },
    "2": {
        pos: {
            x: 0,
            y: 150
        }
    },
    "2_1": {
        pos: {
            x: 200,
            y: -50
        }
    },
    "3": {
        pos: {
            x: 0,
            y: 300
        }
    }
});
</script>
