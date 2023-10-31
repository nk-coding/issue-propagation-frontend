<template>
    <div class="sprotty-wrapper">
        <div :id="editorId" class="sprotty" />
        <Teleport v-if="selecteds.length == 1" :key="selected.id" :to="`#${selected.contextMenuContainerId}`">
            <div class="context-menu ml-2">
                <template v-if="selected.contextMenuData.type == 'component'">
                    <SmallFAB
                        class="d-block"
                        icon
                        color="primary-container"
                        :disabled="!selected.contextMenuData.createRelation"
                        @mousedown="() => modelSource!.startRelation(selected.id)"
                    >
                        <v-icon icon="mdi-arrow-top-right" />
                        <v-tooltip activator="parent">Create relation</v-tooltip>
                    </SmallFAB>
                    <SmallFAB
                        class="d-block mt-2"
                        icon
                        color="primary-container"
                        :disabled="!selected.contextMenuData.remove"
                        @click="$emit('removeComponent', selected.id)"
                    >
                        <v-icon icon="mdi-close" />
                        <v-tooltip activator="parent">Remove component version from project</v-tooltip>
                    </SmallFAB>
                </template>
                <template v-else-if="selected.contextMenuData.type == 'interface'">
                    <SmallFAB
                        class="d-block"
                        icon
                        color="primary-container"
                        :disabled="!selected.contextMenuData.createRelation"
                    >
                        <v-icon icon="mdi-arrow-top-right" />
                        <v-tooltip activator="parent">Create relation</v-tooltip>
                    </SmallFAB>
                </template>
            </div>
        </Teleport>
        <div class="ui-container ma-3">
            <slot />
        </div>
    </div>
</template>
<script setup lang="ts">
import "reflect-metadata";
import { Graph, GraphLayout, GraphModelSource, SelectedElement, createContainer } from "@gropius/graph-editor";
import { TYPES } from "sprotty";
import { PropType, onMounted, shallowRef, watch, ref, computed } from "vue";
import { v4 as uuidv4 } from "uuid";

export interface GraphLayoutWrapper {
    layout: GraphLayout;
    resetViewport: boolean;
}

export type ContextMenuData =
    | {
          type: "component";
          remove: boolean;
          createRelation: boolean;
      }
    | {
          type: "interface";
          createRelation: boolean;
      }
    | {
          type: "relation";
          delete: boolean;
      };

const props = defineProps({
    graph: {
        type: Object as PropType<Graph>,
        required: true
    },
    layout: {
        type: Object as PropType<GraphLayoutWrapper>,
        required: true
    }
});

const emit = defineEmits<{
    (event: "update:layout", value: GraphLayout): void;
    (event: "removeComponent", value: string): void;
}>();

class ModelSource extends GraphModelSource {
    protected handleCreateRelation(start: string, end: string): void {}

    protected layoutUpdated(partialUpdate: GraphLayout, resultingLayout: GraphLayout): void {
        // TODO
    }

    protected handleSelectionChanged(selectedElements: SelectedElement<any>[]): void {
        selecteds.value = selectedElements;
    }
}

const editorId = ref(`graph-editor-${uuidv4()}`);
const modelSource = shallowRef<ModelSource | undefined>();
const selecteds = ref<SelectedElement<ContextMenuData>[]>([]);
const selected = computed(() => selecteds.value[0]);
const hideShit = ref(false);

onMounted(async () => {
    const container = createContainer(editorId.value);
    container.bind(ModelSource).toSelf().inSingletonScope();
    container.bind(TYPES.ModelSource).toService(ModelSource);
    modelSource.value = container.get(ModelSource);
    modelSource.value!.updateGraph({ graph: props.graph, layout: props.layout.layout, fitToBounds: true });
});

watch(
    () => props.graph,
    () => {
        modelSource.value!.updateGraph({ graph: props.graph, fitToBounds: false });
    }
);
watch(
    () => props.layout,
    () => {
        modelSource.value!.updateGraph({ layout: props.layout.layout, fitToBounds: props.layout.resetViewport });
    }
);
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

.context-menu {
    pointer-events: all;
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
    --issue-closed-color: rgb(var(--v-theme-issue-closed));
    --issue-open-color: rgb(var(--v-theme-issue-open));
    --issue-relation-stroke-color: rgba(var(--v-theme-on-surface), 0.4);
    --highlight-stroke-color: rgb(var(--v-theme-primary));
    --highlight-fill-color: rgba(var(--v-theme-primary), 0.2);
}
</style>
