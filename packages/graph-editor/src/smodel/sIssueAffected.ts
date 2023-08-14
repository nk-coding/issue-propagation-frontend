import { Selectable } from "sprotty";
import { ShapeStyle, StrokeStyle } from "../gropiusModel";
import { IssueAffected } from "../model/issueAffected";
import { SNamedElement } from "./sNamedElement";

export abstract class SIssueAffected extends SNamedElement implements IssueAffected, Selectable {
    style!: ShapeStyle;
    x!: number;
    y!: number;
    version?: string;
    selected = false

    generateShapeAttrs(): Record<string, number | string> {
        const res: Record<string, number | string> = {};
        if (this.style.fill != undefined) {
            const fill = this.style.fill;
            res.fill = fill.color;
        }
        if (this.style.stroke != undefined) {
            const stroke = this.style.stroke;
            if (stroke.dash != undefined) {
                res["stroke-dasharray"] = stroke.dash.join(" ");
            }
            const strokeWidth = StrokeStyle.strokeWidth(this.style);
            res["stroke-width"] = strokeWidth;
            res.stroke = stroke.color ?? "var(--shape-stroke-color)";
        }
        return res;
    }
}

export namespace SIssueAffected {
    export const defaultAnimatedFields = ["x", "y"];
}
