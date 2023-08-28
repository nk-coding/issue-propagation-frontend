import { RelationStyle, StrokeStyle } from "../gropiusModel";
import { Element } from "./element";

export interface Relation extends Element {
    type: typeof Relation.TYPE;
    start: string;
    end: string;
    style: RelationStyle;
}

export namespace Relation {
    export const TYPE = "relation";

    export function is(element: Element): element is Relation {
        return element.type === TYPE;
    }
}
