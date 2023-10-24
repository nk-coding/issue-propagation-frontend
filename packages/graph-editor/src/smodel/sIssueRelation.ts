import { IssueRelationHighlightable } from "../features/issueRelationHighlight/IssueRelationHighlightable";
import { IssueRelation } from "../model/issueRelation";
import { SElement } from "./sElement";

export class SIssueRelation extends SElement implements IssueRelation, IssueRelationHighlightable {
    declare type: typeof IssueRelation.TYPE;
    start!: string;
    end!: string;
    startIndex!: number;
    endIndex!: number;
    startType!: string;
    endType!: string;
    count!: number;
    highlightedBecause = new Set<string>();
}
