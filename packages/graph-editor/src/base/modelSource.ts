import { ActionHandlerRegistry, LocalModelSource } from "sprotty";
import {
    Graph,
    GraphLayout,
    ComponentVersion,
    Interface as GropiusInterface,
    Relation as GropiusRelation,
    IssueType as GropiusIssueType
} from "../gropiusModel";
import { Root } from "../model/root";
import { Component } from "../model/component";
import { Interface } from "../model/interface";
import { Label } from "../model/label";
import { Relation } from "../model/relation";
import { UpdateLayoutAction } from "../features/move/updateLayoutAction";
import { Action, SModelElement, UpdateModelAction } from "sprotty-protocol";
import { Element } from "../model/element";
import { Chip } from "../model/chip";
import { IssueType } from "../model/issueType";

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
        let version: Chip | undefined;
        if (component.version != undefined) {
            version = this.createChip(component.version, component.id);
        }
        if (component.version != undefined) {
            children.push(this.createChip(component.version, component.id));
        }
        children.push(...component.issueTypes.map((issueType) => this.createIssueType(issueType)));
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
            children.push(this.createChip(gropiusInterface.version, gropiusInterface.id));
        }
        children.push(...gropiusInterface.issueTypes.map((issueType) => this.createIssueType(issueType)));
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

    private createChip(version: string, parentId: string): Chip {
        return {
            type: "chip",
            id: `${parentId}-version`,
            text: `v${version}`,
            children: []
        };
    }

    private createIssueType(type: GropiusIssueType): IssueType {
        const countChip: Chip = {
            type: Chip.TYPE,
            id: `${type.id}-count`,
            text: `${type.count}`,
            children: []
        };
        return {
            type: IssueType.TYPE,
            id: type.id,
            iconPath: type.iconPath,
            children: [countChip]
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
        const model = this.model as Root;
        model.animated = false;
        this.actionDispatcher.dispatch(UpdateModelAction.create(this.model));
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
