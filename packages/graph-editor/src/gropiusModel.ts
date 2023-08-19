import { Point } from "sprotty-protocol";

export interface Graph {
    components: ComponentVersion[];
    relations: Relation[];
    issueRelations: IssueRelation[];
}

export interface Node {
    id: string;
}

export interface IssueType extends Node {
    name: string;
    iconPath: string;
}

export interface IssueAffected extends Node {
    name: string;
    version?: string;
    style: ShapeStyle;
    issueTypes: IssueType[];
}

export interface ComponentVersion extends IssueAffected {
    interfaces: Interface[];
}

export interface Relation extends Node {
    name: string;
    start: string;
    end: string;
    style: StrokeStyle;
}

export interface IssueRelation {
    from: string;
    to: string;
    fromType: string;
    toType: string;
}

export interface Interface extends IssueAffected {}

export interface StrokeStyle {
    stroke?: {
        color?: string;
        width?: number;
        dash?: number[];
    };
}

export namespace StrokeStyle {
    export function strokeWidth(style: StrokeStyle): number {
        return style.stroke?.width ?? 2;
    }
}

export interface FillStyle {
    fill?: {
        color: string;
    };
}

export interface ShapeStyle extends StrokeStyle, FillStyle {
    shape: Shape;
    radius?: number;
}

export type Shape = "rect" | "circle" | "ellipse" | "rhombus" | "triangle" | "hexagon" | "parallelogram" | "trapeze";

export interface GraphLayout {
    [id: string]:
        | {
              pos: Point;
          }
        | {}
        | undefined;
}
