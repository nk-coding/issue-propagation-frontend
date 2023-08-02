<template>
    <v-autocomplete :items="items" ref="auto" v-model:search="search" :autofocus="autofocus" multiple>
        <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
            <slot :name="name" v-bind="slotData" />
        </template>
    </v-autocomplete>
</template>
<script setup lang="ts" generic="T">
import { onMounted } from "vue";
import { nextTick } from "vue";
import { Ref, watch } from "vue";
import { PropType, ref } from "vue";
import { VAutocomplete } from "vuetify/lib/components/index.mjs";

const props = defineProps({
    fetch: {
        type: Function as PropType<(filter: string, count: number) => Promise<T[]>>,
        required: true
    },
    autofocus: {
        type: Boolean,
        default: false
    },
    dependencies: {
        type: Array as PropType<unknown[]>,
        required: false,
        default: () => []
    }
});

const auto = ref<VAutocomplete>();
const items = ref([]) as Ref<T[]>;
const search = ref("");

watch(search, async (search) => {
    await updateSearch(search);
});

watch(
    () => props.dependencies,
    async () => {
        await updateSearch(search.value);
    }
);

async function updateSearch(search: string) {
    if (search !== "\u200B") {
        const newItems = await props.fetch(search, 10);
        items.value = newItems;
    }
}

onMounted(async () => {
    if (props.autofocus) {
        await nextTick();
        auto.value!.isFocused = true;
        await nextTick();
        search.value = "\u200B";
        await nextTick();
        search.value = "";
    }
});
</script>
