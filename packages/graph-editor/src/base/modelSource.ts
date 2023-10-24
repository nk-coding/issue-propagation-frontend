import { ActionHandlerRegistry, LocalModelSource } from "sprotty";
import {
    Graph,
    GraphLayout,
    ComponentVersion,
    Interface as GropiusInterface,
    Relation as GropiusRelation,
    IssueType as GropiusIssueType,
    IssueRelation as GropiusIssueRelation
} from "../gropiusModel";
import { Root } from "../model/root";
import { Component } from "../model/component";
import { Interface } from "../model/interface";
import { Label } from "../model/label";
import { Relation } from "../model/relation";
import { UpdateLayoutAction } from "../features/move/updateLayoutAction";
import { Action, Bounds, SModelElement, UpdateModelAction } from "sprotty-protocol";
import { Element } from "../model/element";
import { Chip } from "../model/chip";
import { IssueType } from "../model/issueType";
import { Math2D } from "../line/math";
import { IssueRelation } from "../model/issueRelation";

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

    updateGraph(graphAndLayout: { graph?: Graph; layout?: GraphLayout; fitToBounds: boolean }) {
        const { graph, layout, fitToBounds } = graphAndLayout;
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
        this.rebuildRoot(fitToBounds);
    }

    private rebuildRoot(fitToBounds: boolean) {
        if (this.graph == undefined || this.layout == undefined) {
            throw new Error("Graph and layout must be set");
        }
        const root = this.createRoot(this.graph, this.layout, fitToBounds);
        this.updateModel(root);
    }

    private createRoot(graph: Graph, layout: GraphLayout, fitToBounds: boolean): Root {
        const components = graph.components.map((component) => this.createComponent(component, layout));
        const relations = graph.relations.map((relation) => this.createRelation(relation, layout));
        const issueTypeLookup = this.extractIssueTypeLookup(graph);
        const issueRelations = graph.issueRelations
            .map((issueRelation) => this.createIssueRelation(issueRelation, issueTypeLookup))
            .filter((r) => r != undefined) as IssueRelation[];
        let targetBounds: Bounds | undefined;
        if (fitToBounds) {
            const centerBounds = this.computeCenterBounds(components);
            // for now this is a good enough estimate
            const offset = 200;
            targetBounds = {
                x: centerBounds.x - offset,
                y: centerBounds.y - offset,
                width: centerBounds.width + 2 * offset,
                height: centerBounds.height + 2 * offset
            };
        }
        return {
            type: "root",
            id: "root",
            children: [...components, ...relations, ...issueRelations],
            targetBounds
        };
    }

    private computeCenterBounds(components: Component[]): Bounds {
        if (components.length === 0) {
            return { x: 0, y: 0, width: 0, height: 0 };
        }
        let minX = Number.MAX_VALUE;
        let minY = Number.MAX_VALUE;
        let maxX = Number.MIN_VALUE;
        let maxY = Number.MIN_VALUE;
        for (const component of components) {
            minX = Math.min(minX, component.x);
            minY = Math.min(minY, component.y);
            maxX = Math.max(maxX, component.x);
            maxY = Math.max(maxY, component.y);
            for (const child of component.children) {
                if (Interface.is(child)) {
                    const x = component.x + child.x;
                    const y = component.y + child.y;
                    minX = Math.min(minX, x);
                    minY = Math.min(minY, y);
                    maxX = Math.max(maxX, x);
                    maxY = Math.max(maxY, y);
                }
            }
        }
        return {
            x: minX,
            y: minY,
            width: maxX - minX,
            height: maxY - minY
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

    private extractIssueTypeLookup(graph: Graph): Map<string, [string, number]> {
        const result = new Map<string, [string, number]>();
        for (const component of graph.components) {
            for (const affectedByIssue of [component, ...component.interfaces]) {
                affectedByIssue.issueTypes.forEach((issueType, index) => {
                    result.set(issueType.id, [affectedByIssue.id, index]);
                });
            }
        }
        return result;
    }

    private createIssueRelation(
        relation: GropiusIssueRelation,
        issueTypeLookup: Map<string, [string, number]>
    ): IssueRelation | undefined {
        const start = issueTypeLookup.get(relation.start);
        const end = issueTypeLookup.get(relation.end);
        if (start == undefined || end == undefined) {
            return undefined;
        }
        return {
            type: "issueRelation",
            id: `${relation.start}-${relation.end}`,
            start: start[0],
            end: end[0],
            startIndex: start[1],
            endIndex: end[1],
            count: relation.count,
            children: []
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
            isOpen: type.isOpen,
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
