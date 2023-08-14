import { LinearAnimatable } from "../features/animation/model";
import { Interface } from "../model/interface";
import { SIssueAffected } from "./sIssueAffected";

const interfaceAnimatedFields = new Set(SIssueAffected.defaultAnimatedFields);

export class SInterface extends SIssueAffected implements Interface, LinearAnimatable {
    declare type: typeof Interface.TYPE;
    readonly animatedFields = interfaceAnimatedFields;
}