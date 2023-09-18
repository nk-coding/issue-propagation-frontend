<template>
    <v-autocomplete
        v-model:search="search"
        v-model:menu="menu"
        v-model="proxiedModel"
        :items="items"
        item-value="id"
        no-filter
        @update:focused="resetFromFocus"
    >
        <template v-for="(_, name) in $slots" #[name]="slotData">
            <slot :name="name" v-bind="slotData" />
        </template>
    </v-autocomplete>
</template>
<script setup lang="ts" generic="T extends { id: string }">
import { onMounted, Ref, watch, ref, PropType, computed, nextTick } from "vue";
import { VAutocomplete } from "vuetify/lib/components/index.mjs";

const props = defineProps({
    mode: {
        type: String as PropType<"model" | "add" | "add-context">,
        required: true
    },
    menuMode: {
        type: String as PropType<"initial" | "repeating">,
        required: false
    },
    modelValue: {
        type: String,
        required: false
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
    (event: "selected-item", value: T): void;
    (event: "update:modelValue", value: string | undefined): void;
}>();

const items = ref(props.initialItems) as Ref<T[]>;
const search = ref<undefined | string>("");
const menu = ref<boolean>(!!props.menuMode)
const updatedModelValue = ref(false);

const proxiedModel = ref(props.modelValue);
watch(
    () => props.modelValue,
    (model) => {
        proxiedModel.value = model;
    }
);
watch(
    () => proxiedModel.value,
    (model) => {
        if (model != props.modelValue) {
            selectedElement(model);
        }
    }
);

const hasSelection = computed(() => {
    return props.mode == "model" && proxiedModel.value != undefined;
});

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
    if (focused && hasSelection) {
        resetSearch();
    }
}

async function resetSearch() {
    updatedModelValue.value = true;
    updateSearch("");
}

function selectedElement(value: any) {
    let id: string | undefined;
    if (typeof value === "string") {
        id = value;
    } else if (Array.isArray(value)) {
        // TODO
        id = undefined;
    } else {
        id = undefined;
    }
    if (props.mode != "model") {
        const item = items.value.find((item) => item.id == id);
        if (item != undefined) {
            emit("selected-item", item);
        }
    } else {
        emit("update:modelValue", id);
    }
    if (props.mode == "add") {
        nextTick(() =>{
            proxiedModel.value = undefined;
            search.value = "";
        })
    }
    if (props.menuMode == "repeating") {
        nextTick(() => {
            menu.value = true;
        })
    }
    resetSearch();
}

onMounted(async () => {
    await updateSearch("");
});
</script>
