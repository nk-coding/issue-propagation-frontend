<template>
    <div class="d-flex fill-height flex-column">
        <div class="d-flex align-center my-3 ml-3 top-bar">
            <v-text-field
                v-model="searchString"
                label="Search"
                class="mr-2 search-field"
                prepend-inner-icon="mdi-magnify"
            >
            </v-text-field>
            <v-select
                v-model="currentSortField"
                label="Sort by"
                class="mx-2 sort-select"
                variant="outlined"
                :items="sortFields"
            ></v-select>
            <v-btn icon class="mx-2" variant="outlined" @click="toggleSortDirection()">
                <v-icon>
                    {{ sortAscending ? "mdi-sort-ascending" : "mdi-sort-descending" }}
                </v-icon>
                <v-tooltip activator="parent" location="bottom"> Toggle sort sort </v-tooltip>
            </v-btn>
        </div>
        <div class="list-container flex-grow-1 px-3">
            <div v-for="(item, index) in currentItems">
                <v-divider v-if="index != 0" />
                <v-card variant="text" rounded="0" class="px-3" @click="$emit('itemSelected', item)">
                    <slot name="item" :item="item" />
                </v-card>
            </div>
            <div v-if="pageCount > 1" class="d-flex justify-center">
                <v-pagination v-model="currentPage" :length="pageCount" class="pagination"></v-pagination>
            </div>
        </div>
        <slot />
    </div>
</template>
<script setup lang="ts" generic="T, S extends string">
import { watch } from "vue";
import { Ref, onMounted } from "vue";
import { PropType, ref } from "vue";

export interface ItemManager<I, J> {
    filterLocal(item: I, filter: string): boolean;
    fetchItems(
        filter: string,
        sortField: J,
        sortAscending: boolean,
        count: number,
        page: number
    ): Promise<[I[], number]>;
}

const props = defineProps({
    sortFields: {
        type: Array as PropType<S[]>,
        required: true
    },
    itemManager: {
        type: Object as PropType<ItemManager<T, S>>,
        required: true
    },
    itemCount: {
        type: Number,
        required: false,
        default: 25
    }
});

defineEmits<{
    (event: "itemSelected", item: T): void;
}>();

const searchString = ref("");
const currentSortField = ref(props.sortFields[0]) as Ref<S>;
const sortAscending = ref(true);

const pageCount = ref(0);
const currentPage = ref(1);
const currentItems = ref<T[]>([]) as Ref<T[]>;

function toggleSortDirection() {
    sortAscending.value = !sortAscending.value;
}

onMounted(async () => {
    await updateItems(false);
});

watch([searchString, currentSortField, sortAscending], async () => {
    await updateItems(true);
});

watch(currentPage, async () => {
    await updateItems(false);
});

async function updateItems(resetPage: boolean) {
    if (resetPage) {
        currentPage.value = 1;
    }
    const [items, count] = await props.itemManager.fetchItems(
        searchString.value,
        currentSortField.value,
        sortAscending.value,
        props.itemCount,
        currentPage.value - 1
    );
    currentItems.value = items;
    pageCount.value = Math.ceil(count / props.itemCount);
}
</script>
<style scoped>
.sort-select {
    flex: 0 1 250px;
}

.search-field {
    flex: 1 1 250px;
}

.top-bar :deep(.v-input__details) {
    display: none !important;
}

.list-container {
    overflow-y: auto;
    height: 0px;
}

.fill-height {
    height: 100%;
}

.pagination {
    max-width: 600px;
}
</style>
