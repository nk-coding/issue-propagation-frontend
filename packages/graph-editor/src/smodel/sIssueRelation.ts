import { IssueRelation } from "../model/issueRelation";
import { SElement } from "./sElement";

export class SIssueRelation extends SElement implements IssueRelation {
    declare type: typeof IssueRelation.TYPE;
    start!: string;
    end!: string;
    startIndex!: number;
    endIndex!: number;
    count!: number;
}
