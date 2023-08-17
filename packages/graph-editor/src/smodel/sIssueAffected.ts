import { Locateable, Selectable } from "sprotty";
import { ShapeStyle, StrokeStyle } from "../gropiusModel";
import { IssueAffected } from "../model/issueAffected";
import { SNamedElement } from "./sNamedElement";
import { Point } from "sprotty-protocol";
import { Shape } from "../shape/shape";

export abstract class SIssueAffected extends SNamedElement implements IssueAffected, Selectable, Locateable {
    style!: ShapeStyle;
    x!: number;
    y!: number;
    version?: string;
    selected = false;
    abstract shape: Shape;

    generateShapeAttrs(): Record<string, number | string> {
        const res: Record<string, number | string> = {};
        if (this.style.fill != undefined) {
            const fill = this.style.fill;
            res.fill = fill.color;
        } else {
            res.fill = "transparent";
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

    get position(): Point {
        return { x: this.x, y: this.y };
    }
}

export namespace SIssueAffected {
    export const defaultAnimatedFields = ["x", "y"];
}
