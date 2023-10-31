import { Element } from "../../model/element";

export interface IssueRelationHighlightable extends Element {
    highlightedBecause: Set<string>;
}

export namespace IssueRelationHighlightable {
    export function is(element: any): element is IssueRelationHighlightable {
        return "highlightedBecause" in element;
    }
}
