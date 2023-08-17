import { ShapeStyle } from "../gropiusModel";
import { Element } from "./element";

export interface IssueAffected extends Element {
    style: ShapeStyle;
    x: number;
    y: number;
    version?: string;
}
