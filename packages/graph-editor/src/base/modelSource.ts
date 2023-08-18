import { ActionHandlerRegistry, LocalModelSource } from "sprotty";
import {
    Graph,
    GraphLayout,
    ComponentVersion,
    Interface as GropiusInterface,
    Relation as GropiusRelation
} from "../gropiusModel";
import { Root } from "../model/root";
import { Component } from "../model/component";
import { Interface } from "../model/interface";
import { Label } from "../model/label";
import { Relation } from "../model/relation";
import { UpdateLayoutAction } from "../features/move/updateLayoutAction";
import { Action, SModelElement, UpdateModelAction } from "sprotty-protocol";
import { Element } from "../model/element";
import { VersionChip } from "../model/versionChip";

export abstract class GraphModelSource extends LocalModelSource {
    private layout?: GraphLayout;
    private graph?: Graph;

    protected abstract layoutUpdated(partialUpdate: GraphLayout, resultingLayout: GraphLayout): void;

    override initialize(registry: ActionHandlerRegistry): void {
        super.initialize(registry);

        registry.register(UpdateLayoutAction.KIND, this);
    }

    override handle(action: Action): void {
        switch (action.kind) {
            case UpdateLayoutAction.KIND: {
                const update = action as UpdateLayoutAction;
                this.layout = {
                    ...(this.layout ?? {}),
                    ...update.partialLayout
                };
                this.layoutUpdated(update.partialLayout, this.layout!);
                this.updateLayoutPartially(update.partialLayout);
            }
            default: {
                super.handle(action);
            }
        }
    }

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
        const pos = this.extractComponentLayout(component.id, layout).pos;
        const children: Element[] = component.interfaces.map((i) => this.createInterface(i, layout));
        let version: VersionChip | undefined;
        if (component.version != undefined) {
            version = this.createVersionChip(component.version, component.id);
        }
        if (component.version != undefined) {
            children.push(this.createVersionChip(component.version, component.id));
        }
        children.push(this.createNameLabel(component.name, component.id));
        return {
            type: "component",
            id: component.id,
            style: component.style,
            x: pos.x,
            y: pos.y,
            children
        };
    }

    private createInterface(gropiusInterface: GropiusInterface, layout: GraphLayout): Interface {
        const pos = this.extractInterfaceLayout(gropiusInterface.id, layout).pos;
        const children: Element[] = [];
        if (gropiusInterface.version != undefined) {
            children.push(this.createVersionChip(gropiusInterface.version, gropiusInterface.id));
        }
        children.push(this.createNameLabel(gropiusInterface.name, gropiusInterface.id));
        return {
            type: "interface",
            id: gropiusInterface.id,
            style: gropiusInterface.style,
            x: pos.x,
            y: pos.y,
            children
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

    private createVersionChip(version: string, parentId: string): VersionChip {
        return {
            type: "versionChip",
            id: `${parentId}-version`,
            version,
            children: []
        };
    }

    private extractComponentLayout(id: string, layout: GraphLayout) {
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

    private updateLayoutPartially(partialLayout: GraphLayout) {
        this.updateLayoutRecursively(this.model, partialLayout);
        this.actionDispatcher.dispatch(UpdateModelAction.create(this.model, { animate: false }));
    }

    private updateLayoutRecursively(element: SModelElement, partialLayout: GraphLayout) {
        const children = element.children;
        if (element.id in partialLayout) {
            const layout = partialLayout[element.id];
            if (element.type === Component.TYPE || element.type === Interface.TYPE) {
                const component = element as Component | Interface;
                const typedLayout = layout as { pos: { x: number; y: number } };
                component.x = typedLayout.pos.x;
                component.y = typedLayout.pos.y;
            }
        }
        if (children != undefined) {
            for (const child of children) {
                this.updateLayoutRecursively(child, partialLayout);
            }
        }
    }
}
