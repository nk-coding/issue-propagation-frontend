import { ShapeStyle } from "../gropiusModel";
import { Selectable } from "./selectable";

export interface IssueAffected extends Selectable {
    style: ShapeStyle;
    x: number;
    y: number;
}
