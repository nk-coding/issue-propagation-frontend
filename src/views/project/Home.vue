<template>
    <GraphEditor v-if="graph != undefined" v-model:layout="layout" :graph="graph" />
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
import GraphEditor, { GraphLayoutWrapper } from "@/components/GraphEditor.vue";
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

type ProjectGraph = NodeReturnType<"getProjectGraph", "Project">;

const client = useClient();
const router = useRouter();
const route = useRoute();

const trackableId = computed(() => route.params.trackable as string);

const evaluating = ref(false);
const originalGraph = asyncComputed(
    async () => {
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
    const mappedIssueRelations = components.flatMap((component) => {
        const res = [...extractIssueRelations(component)];
        for (const definition of component.interfaceDefinitions.nodes) {
            if (definition.visibleInterface != undefined) {
                res.push(...extractIssueRelations(definition.visibleInterface));
            }
        }
        return res;
    });
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
    return relationPartner.aggregatedIssues.nodes.flatMap((aggregatedIssue) => {
        return aggregatedIssue.outgoingRelations.nodes.map((relation) => {
            return {
                from: relationPartner.id,
                to: relation.end!.relationPartner.id,
                fromType: aggregatedIssue.type.id,
                toType: relation.end!.type.id
            };
        });
    });
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
        interfaces
    };
}

function extractRelationStyle(template: GraphRelationTemplateInfoFragment): RelationStyle {
    let stroke: StrokeStyle["stroke"] = undefined;
    if (template.stroke != undefined) {
        stroke = {
            color: template.stroke.color ?? undefined,
            width: template.stroke.width ?? undefined,
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
            width: template.stroke.width ?? undefined,
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
    return relationPartner.aggregatedIssues.nodes.map((aggregatedIssue) => {
        const type = aggregatedIssue.type;
        return {
            id: type.id,
            name: type.name,
            iconPath: type.iconPath,
            count: aggregatedIssue.count
        };
    });
}
</script>
