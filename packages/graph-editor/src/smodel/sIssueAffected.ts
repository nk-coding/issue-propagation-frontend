import { Locateable, RenderingContext, Selectable, svg } from "sprotty";
import { VNode } from "snabbdom";
import { ShapeStyle, StrokeStyle } from "../gropiusModel";
import { IssueAffected } from "../model/issueAffected";
import { SNamedElement } from "./sNamedElement";
import { Point } from "sprotty-protocol";
import { Shape } from "../shape/shape";
import { wrapForeignElement } from "../views/util";
import { LineEngine } from "../line/engine/lineEngine";
import { SVersionChip } from "./sVersionChip";
import { Math2D } from "../line/math";

export abstract class SIssueAffected extends SNamedElement implements IssueAffected, Selectable, Locateable {
    style!: ShapeStyle;
    x!: number;
    y!: number;
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

    generateShape(): VNode[] {
        const result: VNode[] = [];
        const pathString = LineEngine.DEFAULT.toPathString(this.shape.outline);
        result.push(
            svg("path", {
                attrs: {
                    d: pathString,
                    ...this.generateShapeAttrs()
                }
            })
        );
        if (this.selected) {
            result.push(
                svg("path", {
                    attrs: {
                        d: pathString
                    },
                    class: {
                        "selected-shape": true
                    }
                })
            );
        }
        return result;
    }

    renderVersionLabel(context: RenderingContext, versionChip: SVersionChip): VNode | undefined {
        const shape = this.shape;
        const shapeBounds = shape.bounds;
        const topRight = {
            x: shapeBounds.x + shapeBounds.width,
            y: shapeBounds.y
        };
        const topRightProjected = LineEngine.DEFAULT.projectPoint(topRight, shape.outline).pos;
        const labelPos = LineEngine.DEFAULT.getPoint(topRightProjected, 0, shape.outline);
        return wrapForeignElement(
            context.renderElement(versionChip),
            Math2D.add(labelPos, {
                x: -versionChip.size.width / 3,
                y: -versionChip.size.height / 2
            })
        );
    }

    get position(): Point {
        return { x: this.x, y: this.y };
    }
}

export namespace SIssueAffected {
    export const defaultAnimatedFields = ["x", "y"];
}
