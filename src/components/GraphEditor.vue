<template>
    <div class="sprotty-wrapper">
        <div :id="editorId" class="sprotty" />
        <div class="ui-container">
            <v-btn icon variant="text" @click="format">
                <v-icon icon="mdi-auto-fix" />
                <v-tooltip activator="parent" location="bottom"> Auto-layout </v-tooltip>
            </v-btn>
        </div>
    </div>
</template>
<script setup lang="ts">
import "reflect-metadata";
import { Graph, GraphLayout, GraphModelSource, createContainer } from "@gropius/graph-editor";
import { TYPES } from "sprotty";
import { PropType, onMounted, shallowRef, watch, ref } from "vue";
import { v4 as uuidv4 } from "uuid";

const props = defineProps({
    graph: {
        type: Object as PropType<Graph>,
        required: true
    },
    layout: {
        type: Object as PropType<GraphLayout>,
        required: true
    }
});

const emit = defineEmits<{
    (event: "update:layout", value: GraphLayout): void;
}>();

class ModelSource extends GraphModelSource {
    protected layoutUpdated(partialUpdate: GraphLayout, resultingLayout: GraphLayout): void {
        // TODO
    }
}

const editorId = ref(`graph-editor-${uuidv4()}`);
const modelSource = shallowRef<ModelSource | undefined>();

onMounted(async () => {
    const container = createContainer(editorId.value);
    container.bind(ModelSource).toSelf().inSingletonScope();
    container.bind(TYPES.ModelSource).toService(ModelSource);
    modelSource.value = container.get(ModelSource);
    modelSource.value!.updateGraph({ graph: props.graph, layout: props.layout });
});

watch(
    () => props.graph,
    () => {
        modelSource.value!.updateGraph({ graph: props.graph });
    }
);
watch(
    () => props.layout,
    () => {
        modelSource.value!.updateGraph({ layout: props.layout });
    }
);

function format() {
    modelSource.value!.autolayout();
}
</script>
<style scoped>
.sprotty-wrapper {
    height: 100%;
    position: relative;
}

.ui-container {
    position: absolute;
    top: 0;
    right: 0;
}

/* Sprotty */
:deep(.sprotty) {
    display: flex;
    height: 100%;
}

:deep(.sprotty-hidden) {
    height: 0px !important;
}

:deep(.sprotty svg) {
    width: 100%;
    flex: 1;
    border-style: none;
    border-width: 0px;
    outline: none;
    --diagram-grid: rgba(var(--v-theme-on-surface), 0.2);
    --shape-stroke-color: rgb(var(--v-theme-on-surface));
    --version-chip-background: rgb(var(--v-theme-primary-container));
    --version-chip-color: rgb(var(--v-theme-on-primary-container));
    --selected-shape-stroke-color: rgb(var(--v-theme-primary));
    --selected-shape-fill-color: rgba(var(--v-theme-primary), 0.2);
}
</style>
