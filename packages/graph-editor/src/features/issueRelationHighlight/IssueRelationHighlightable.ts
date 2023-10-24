import { Element } from "../../model/element";

export interface IssueRelationHighlightable extends Element {
    highlightedBecause: Set<string>;
}

export namespace IssueRelationHighlightable {
    export function is(element: Element): element is IssueRelationHighlightable {
        return "highlightedBecause" in element;
    }
}
