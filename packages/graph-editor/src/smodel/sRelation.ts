import { Selectable } from "sprotty";
import { RelationStyle } from "../gropiusModel";
import { Relation } from "../model/relation";
import { SSelectable } from "./sSelectable";
import { Point } from "sprotty-protocol";

export class SRelation extends SSelectable implements Relation, Selectable {
    declare type: typeof Relation.TYPE;
    start!: string;
    end!: string;
    style!: RelationStyle;
    selected = false;

    get contextMenuPos(): Point {
        return Point.ORIGIN;
    }
}
