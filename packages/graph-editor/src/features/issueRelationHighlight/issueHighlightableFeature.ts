import { SModelElementImpl } from "sprotty";
import { IssueRelationHighlightable } from "./IssueRelationHighlightable";

export const issueHighlightableFeature = Symbol("issueHighlightableFeature");

export function isIssueRelationHighlightable(
    element: SModelElementImpl
): element is SModelElementImpl & IssueRelationHighlightable {
    return element.hasFeature(issueHighlightableFeature) && IssueRelationHighlightable.is(element);
}
