<template>
    <v-autocomplete
        v-model:search="search"
        :items="items"
        item-value="id"
        no-filter
        @update:focused="resetFromFocus"
        @update:model-value="selectedElement"
    >
        <template v-for="(_, name) in $slots" #[name]="slotData">
            <slot :name="name" v-bind="slotData" />
        </template>
    </v-autocomplete>
</template>
<script setup lang="ts" generic="T extends { id: string }">
import { onMounted, Ref, watch, ref, PropType } from "vue";
import { VAutocomplete } from "vuetify/lib/components/index.mjs";

const props = defineProps({
    hasSelection: {
        type: Boolean,
        required: true
    },
    fetch: {
        type: Function as PropType<(filter: string, count: number) => Promise<T[]>>,
        required: true
    },
    dependency: {
        type: [String, Number, Array, Object],
        required: false,
        default: () => []
    },
    initialItems: {
        type: Array as PropType<T[]>,
        required: false,
        default: () => []
    }
});

const emit = defineEmits<{
    (event: "selected-items", value: T[]): void;
}>();

const items = ref(props.initialItems) as Ref<T[]>;
const search = ref<undefined | string>("");
const updatedModelValue = ref(false);

watch(search, async (search) => {
    if (!updatedModelValue.value) {
        await updateSearch(search ?? "");
    } else {
        updatedModelValue.value = false;
    }
});

watch(
    () => props.dependency,
    async () => {
        await updateSearch(search.value ?? "");
    }
);

async function updateSearch(search: string) {
    const newItems = await props.fetch(search, 10);
    items.value = newItems;
}

function resetFromFocus(focused: boolean) {
    if (focused && props.hasSelection) {
        resetSearch();
    }
}

async function resetSearch() {
    updatedModelValue.value = true;
    updateSearch("");
}

function selectedElement(value: any) {
    let ids: string[];
    if (typeof value === "string") {
        ids = [value];
    } else if (Array.isArray(value)) {
        ids = value;
    } else {
        ids = [];
    }
    emit(
        "selected-items",
        items.value.filter((item) => ids.includes(item.id))
    );
    resetSearch();
}

onMounted(async () => {
    await updateSearch("");
});
</script>
