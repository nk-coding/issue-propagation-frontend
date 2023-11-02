import { Element } from "../../model/element";

export interface IssueRelationHighlightable extends Element {
    highlighted: boolean;
}

export namespace IssueRelationHighlightable {
    export function is(element: any): element is IssueRelationHighlightable {
        return "highlighted" in element;
    }
}
