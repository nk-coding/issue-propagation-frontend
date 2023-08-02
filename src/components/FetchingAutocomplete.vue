<template>
    <v-autocomplete :items="items" v-model:search="search">
        <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
            <slot :name="name" v-bind="slotData" />
        </template>
    </v-autocomplete>
</template>
<script setup lang="ts" generic="T">
import { onMounted } from "vue";
import { Ref, watch } from "vue";
import { PropType, ref } from "vue";
import { VAutocomplete } from "vuetify/lib/components/index.mjs";

const props = defineProps({
    fetch: {
        type: Function as PropType<(filter: string, count: number) => Promise<T[]>>,
        required: true
    },
    dependencies: {
        type: Array as PropType<unknown[]>,
        required: false,
        default: () => []
    },
    initialItems: {
        type: Array as PropType<T[]>,
        required: false,
        default: () => []
    }
});

const items = ref(props.initialItems) as Ref<T[]>;
const search = ref<null | string>(null);

watch(search, async (search, oldSearch) => {
    if (oldSearch != null) {
        await updateSearch(search ?? "");
    }
});

watch(
    () => props.dependencies,
    async () => {
        await updateSearch(search.value ?? "");
    }
);

async function updateSearch(search: string) {
    if (search !== "\u200B") {
        const newItems = await props.fetch(search, 10);
        items.value = newItems;
    }
}

onMounted(async () => {
    await updateSearch("");
});
</script>
