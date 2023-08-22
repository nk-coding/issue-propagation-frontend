import { IssueType } from "../model/issueType";
import { SElement } from "./sElement";

export class SIssueType extends SElement implements IssueType {
    declare type: typeof IssueType.TYPE;
    iconPath!: string;
}
