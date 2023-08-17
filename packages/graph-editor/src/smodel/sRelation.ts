import { StrokeStyle } from "../gropiusModel";
import { Relation } from "../model/relation";
import { SNamedElement } from "./sNamedElement";

export class SRelation extends SNamedElement implements Relation {
    declare type: typeof Relation.TYPE;
    start!: string;
    end!: string;
    style!: StrokeStyle;
}
