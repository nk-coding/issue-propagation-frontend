<template>
    <GraphEditor
        v-if="graph != undefined"
        v-model:layout="layout"
        :graph="graph"
        @remove-component="removeComponentVersion"
        @create-relation="beginCreateRelation"
    >
        <FilterChip v-model="showOpenIssues" label="Open Issues" icon="mdi-bug" class="mr-2 open-issue-chip" />
        <FilterChip v-model="showClosedIssues" label="Closed Issues" icon="mdi-bug" class="mr-2 closed-issue-chip" />
        <FilterChip v-model="showIssueRelations" label="Issue Relations" />
    </GraphEditor>
    <v-dialog v-model="showAddComponentVersionDialog" :scrim="false" width="auto" class="autocomplete-dialog">
        <v-sheet :elevation="10">
            <ComponentVersionAutocomplete
                hide-details
                autofocus
                auto-select-first
                bg-color="background"
                menu-mode="repeating"
                hide-no-data
                @selected-item="addComponentVersion"
            />
        </v-sheet>
    </v-dialog>
    <v-dialog v-model="showSelectRelationTemplateDialog" :scrim="false" width="auto" class="autocomplete-dialog">
        <v-sheet :elevation="10">
            <RelationTemplateAutocomplete
                hide-details
                autofocus
                auto-select-first
                bg-color="background"
                menu-mode="initial"
                :relation-template-filter="relationTemplateFilter"
                @selected-item="createRelation"
            />
        </v-sheet>
    </v-dialog>
</template>
<script lang="ts" setup>
import { NodeReturnType, useClient } from "@/graphql/client";
import {
    GraphRelationPartnerTemplateInfoFragment,
    GraphRelationPartnerInfoFragment,
    GraphComponentVersionInfoFragment,
    GraphRelationTemplateInfoFragment
} from "@/graphql/generated";
import { withErrorMessage } from "@/util/withErrorMessage";
import { asyncComputed } from "@vueuse/core";
import GraphEditor, { ContextMenuData, GraphLayoutWrapper } from "@/components/GraphEditor.vue";
import {
    Graph,
    ShapeStyle,
    StrokeStyle,
    FillStyle,
    ComponentVersion,
    IssueType,
    Interface,
    Relation,
    RelationStyle,
    IssueRelation,
    GraphLayout,
    LayoutEngine
} from "@gropius/graph-editor";
import { computed, ref, watch, nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";
import { onEvent } from "@/util/eventBus";
import FilterChip from "@/components/input/FilterChip.vue";
import ComponentVersionAutocomplete from "@/components/input/ComponentVersionAutocomplete.vue";
import { inject } from "vue";
import { eventBusKey } from "@/util/keys";
import RelationTemplateAutocomplete from "@/components/input/RelationTemplateAutocomplete.vue";

type ProjectGraph = NodeReturnType<"getProjectGraph", "Project">;

const client = useClient();
const router = useRouter();
const route = useRoute();
const eventBus = inject(eventBusKey);

const trackableId = computed(() => route.params.trackable as string);
const graphVersionCounter = ref(0);

const evaluating = ref(false);
const originalGraph = asyncComputed(
    async () => {
        graphVersionCounter.value;
        if (!trackableId.value) {
            return null;
        }
        const res = await withErrorMessage(
            () => client.getProjectGraph({ project: trackableId.value }),
            "Error loading project graph"
        );
        return res.node as ProjectGraph;
    },
    null,
    { shallow: false, evaluating }
);

const relationPartnerTemplateLookup = computed(() => {
    const res = new Map<string, GraphRelationPartnerTemplateInfoFragment>();
    if (originalGraph.value != undefined) {
        originalGraph.value.components.nodes.forEach((component) => {
            res.set(component.id, component.component.template);
            component.interfaceDefinitions.nodes.forEach((definition) => {
                if (definition.visibleInterface != undefined) {
                    res.set(
                        definition.visibleInterface.id,
                        definition.interfaceSpecificationVersion.interfaceSpecification.template
                    );
                }
            });
        });
    }
    return res;
});

const showOpenIssues = ref(true);
const showClosedIssues = ref(false);
const showIssueRelations = ref(true);

const showAddComponentVersionDialog = ref(false);
const showSelectRelationTemplateDialog = ref(false);
const currentRelationStart = ref<string | undefined>(undefined);
const currentRelationEnd = ref<string | undefined>(undefined);
const relationTemplateFilter = computed(() => {
    if (currentRelationStart.value == undefined || currentRelationEnd.value == undefined) {
        return undefined;
    }
    return {
        relationConditions: {
            any: {
                from: {
                    any: {
                        id: {
                            eq: currentRelationStart.value
                        }
                    }
                },
                to: {
                    any: {
                        id: {
                            eq: currentRelationEnd.value
                        }
                    }
                }
            }
        }
    };
});

const graph = computed<Graph | null>(() => {
    if (!originalGraph.value) {
        return null;
    }
    const components = originalGraph.value.components.nodes;
    const mappedComponents = components.map<ComponentVersion>((component) => extractComponent(component));
    const mappedRelations = components.flatMap((component) => {
        const res = [...extractRelations(component)];
        for (const definition of component.interfaceDefinitions.nodes) {
            if (definition.visibleInterface != undefined) {
                res.push(...extractRelations(definition.visibleInterface));
            }
        }
        return res;
    });
    let mappedIssueRelations: IssueRelation[] = [];
    if (showIssueRelations.value) {
        components.forEach((component) => {
            mappedIssueRelations.push(...extractIssueRelations(component));
            for (const definition of component.interfaceDefinitions.nodes) {
                if (definition.visibleInterface != undefined) {
                    mappedIssueRelations.push(...extractIssueRelations(definition.visibleInterface));
                }
            }
        });
    }
    return {
        components: mappedComponents,
        relations: mappedRelations,
        issueRelations: mappedIssueRelations
    };
});

const layout = ref<GraphLayoutWrapper>({
    layout: {},
    resetViewport: true
});

watch(evaluating, async (newValue, oldValue) => {
    if (!newValue && oldValue) {
        layout.value = {
            layout: await autolayout(graph.value!),
            resetViewport: true
        };
    }
});

onEvent("layout-component-graph", async () => {
    if (graph.value != undefined) {
        layout.value = {
            layout: await autolayout(graph.value),
            resetViewport: true
        };
    }
});

async function autolayout(graph: Graph): Promise<GraphLayout> {
    const layoutEngine = new LayoutEngine(graph);
    const coordinates = await layoutEngine.layout();
    const resultingLayout: GraphLayout = {};
    coordinates.forEach((pos, id) => {
        resultingLayout![id] = { pos };
    });
    return resultingLayout;
}

function extractRelations(relationPartner: GraphRelationPartnerInfoFragment): Relation[] {
    return relationPartner.outgoingRelations.nodes.map((relation) => {
        return {
            id: relation.id,
            name: relation.template.name,
            start: relationPartner.id,
            end: relation.end!.id,
            style: extractRelationStyle(relation.template)
        };
    });
}

function extractIssueRelations(relationPartner: GraphRelationPartnerInfoFragment): IssueRelation[] {
    const aggregatedRelations = new Map<string, { start: string; end: string; count: number }>();
    relationPartner.aggregatedIssues.nodes.forEach((aggregatedIssue) => {
        aggregatedIssue.outgoingRelations.nodes.forEach((relation) => {
            const key = `${aggregatedIssue.id}-${relation.end!.id}`;
            if (aggregatedRelations.has(key)) {
                const existing = aggregatedRelations.get(key)!;
                existing.count += aggregatedIssue.count;
            } else {
                aggregatedRelations.set(key, {
                    start: aggregatedIssue.id,
                    end: relation.end!.id,
                    count: aggregatedIssue.count
                });
            }
        });
    });
    return Array.from(aggregatedRelations.values());
}

function extractComponent(component: GraphComponentVersionInfoFragment): ComponentVersion {
    const interfaces: Interface[] = component.interfaceDefinitions.nodes
        .filter((definition) => definition.visibleInterface != undefined)
        .map((definition) => {
            const inter = definition.visibleInterface!;
            return {
                id: inter.id,
                name: definition.interfaceSpecificationVersion.name,
                version: definition.interfaceSpecificationVersion.version,
                style: extractShapeStyle(definition.interfaceSpecificationVersion.interfaceSpecification.template),
                issueTypes: extractIssueTypes(inter)
            };
        });
    return {
        id: component.id,
        name: component.name,
        version: component.version,
        style: extractShapeStyle(component.component.template),
        issueTypes: extractIssueTypes(component),
        interfaces,
        contextMenu: {
            type: "component",
            remove: true,
            createRelation: true
        } satisfies ContextMenuData
    };
}

function extractRelationStyle(template: GraphRelationTemplateInfoFragment): RelationStyle {
    let stroke: StrokeStyle["stroke"] = undefined;
    if (template.stroke != undefined) {
        stroke = {
            color: template.stroke.color ?? undefined,
            dash: template.stroke.dash ?? undefined
        };
    }
    return {
        stroke,
        marker: template.markerType
    };
}

function extractShapeStyle(template: GraphRelationPartnerTemplateInfoFragment): ShapeStyle {
    let stroke: StrokeStyle["stroke"] = undefined;
    let fill: FillStyle["fill"] = undefined;
    if (template.fill != undefined) {
        fill = {
            color: template.fill.color ?? undefined
        };
    }
    if (template.stroke != undefined) {
        stroke = {
            color: template.stroke.color ?? undefined,
            dash: template.stroke.dash ?? undefined
        };
    }
    return {
        fill,
        stroke,
        radius: template.shapeRadius ?? undefined,
        shape: template.shapeType
    };
}

function extractIssueTypes(relationPartner: GraphRelationPartnerInfoFragment): IssueType[] {
    return relationPartner.aggregatedIssues.nodes
        .filter((aggregatedIssue) => {
            return (
                (showOpenIssues.value && aggregatedIssue.isOpen) || (showClosedIssues.value && !aggregatedIssue.isOpen)
            );
        })
        .map((aggregatedIssue) => {
            const type = aggregatedIssue.type;
            return {
                id: aggregatedIssue.id,
                name: type.name,
                iconPath: type.iconPath,
                count: aggregatedIssue.count,
                isOpen: aggregatedIssue.isOpen
            };
        })
        .sort((a, b) => {
            if (a.isOpen && !b.isOpen) {
                return -1;
            } else if (!a.isOpen && b.isOpen) {
                return 1;
            } else {
                return a.name.localeCompare(b.name);
            }
        });
}

eventBus?.on("add-component-version-to-project", () => {
    showAddComponentVersionDialog.value = true;
});

async function addComponentVersion(componentVersion: { id: string }) {
    showAddComponentVersionDialog.value = false;
    await withErrorMessage(async () => {
        await client.addComponentVersionToProject({
            componentVersion: componentVersion.id,
            project: trackableId.value
        });
    }, "Error adding component version to project");
    graphVersionCounter.value++;
}

async function removeComponentVersion(componentVersion: string) {
    await withErrorMessage(async () => {
        await client.removeComponentVersionFromProject({
            componentVersion,
            project: trackableId.value
        });
    }, "Error removing component version from project");
    graphVersionCounter.value++;
}

function beginCreateRelation(start: string, end: string) {
    currentRelationStart.value = start;
    currentRelationEnd.value = end;
    showSelectRelationTemplateDialog.value = true;
}

async function createRelation(relationTemplate: string) {
    await withErrorMessage(async () => {
        await client.createRelation({
            start: currentRelationStart.value!,
            end: currentRelationEnd.value!,
            template: relationTemplate
        });
    }, "Error creating relation");
}
</script>
<style scoped lang="scss">
@use "@/styles/settings.scss";

.autocomplete-dialog {
    :deep(.v-overlay__content) {
        top: 120px;
    }

    .v-sheet {
        width: min(1000px, calc(100vw - 3 * settings.$side-bar-width));
        overflow-y: visible !important;
    }
}

.open-issue-chip :deep(.v-icon.mdi-bug) {
    color: rgb(var(--v-theme-issue-open));
}
.closed-issue-chip :deep(.v-icon.mdi-bug) {
    color: rgb(var(--v-theme-issue-closed));
}
</style>
