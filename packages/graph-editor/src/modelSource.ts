import { LocalModelSource } from "sprotty";
import {
    Graph,
    GraphLayout,
    ComponentVersion,
    Interface as GropiusInterface,
    Relation as GropiusRelation
} from "./gropiusModel";
import { Root } from "./model/root";
import { Component } from "./model/component";
import { Interface } from "./model/interface";
import { Label } from "./model/label";
import { Relation } from "./model/relation";

export abstract class GraphModelSource extends LocalModelSource {
    private layout?: GraphLayout;
    private graph?: Graph;

    updateGraph(graphAndLayout: { graph?: Graph; layout?: GraphLayout }) {
        const { graph, layout } = graphAndLayout;
        if (this.graph == undefined) {
            if (graph == undefined || layout == undefined) {
                throw new Error("Partial updates are not supported initially");
            }
        }
        if (graph != undefined) {
            this.graph = graph;
        }
        if (layout != undefined) {
            this.layout = layout;
        }
        this.rebuildRoot();
    }

    private rebuildRoot() {
        if (this.graph == undefined || this.layout == undefined) {
            throw new Error("Graph and layout must be set");
        }
        const root = this.createRoot(this.graph, this.layout);
        this.updateModel(root);
    }

    private createRoot(graph: Graph, layout: GraphLayout): Root {
        const components = graph.components.map((component) => this.createComponent(component, layout));
        const relations = graph.relations.map((relation) => this.createRelation(relation, layout));
        return {
            type: "root",
            id: "root",
            children: [...components, ...relations]
        };
    }

    private createComponent(component: ComponentVersion, layout: GraphLayout): Component {
        const pos = this.extractionComponentLayout(component.id, layout).pos;
        const interfaces = component.interfaces.map((i) => this.createInterface(i, layout));
        return {
            type: "component",
            id: component.id,
            version: component.version,
            style: component.style,
            x: pos.x,
            y: pos.y,
            children: [...interfaces, this.createNameLabel(component.name, component.id)]
        };
    }

    private createInterface(gropiusInterface: GropiusInterface, layout: GraphLayout): Interface {
        const pos = this.extractInterfaceLayout(gropiusInterface.id, layout).pos;
        return {
            type: "interface",
            id: gropiusInterface.id,
            version: gropiusInterface.version,
            style: gropiusInterface.style,
            x: pos.x,
            y: pos.y,
            children: [this.createNameLabel(gropiusInterface.name, gropiusInterface.id)]
        };
    }

    private createRelation(relation: GropiusRelation, layout: GraphLayout): Relation {
        return {
            type: "relation",
            id: relation.id,
            style: relation.style,
            start: relation.start,
            end: relation.end,
            children: [this.createNameLabel(relation.name, relation.id)]
        };
    }

    private createNameLabel(name: string, parentId: string): Label {
        return {
            type: "label",
            id: `${parentId}-name`,
            text: name,
            children: []
        };
    }

    private extractionComponentLayout(id: string, layout: GraphLayout) {
        const componentLayout = layout[id];
        if (componentLayout != undefined && "pos" in componentLayout) {
            return componentLayout;
        } else {
            return { pos: { x: 0, y: 0 } };
        }
    }

    private extractInterfaceLayout(id: string, layout: GraphLayout) {
        const interfaceLayout = layout[id];
        if (interfaceLayout != undefined && "pos" in interfaceLayout) {
            return interfaceLayout;
        } else {
            return { pos: { x: 0, y: 0 } };
        }
    }
}
