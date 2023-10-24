import { Element } from "./element";

export interface IssueRelation extends Element {
    type: typeof IssueRelation.TYPE;
    start: string;
    end: string;
    startIndex: number;
    endIndex: number;
    count: number;
}

export namespace IssueRelation {
    export const TYPE = "issueRelation";

    export function is(element: Element): element is IssueRelation {
        return element.type === TYPE;
    }
}
