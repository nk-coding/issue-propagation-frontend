import { Locateable, RenderingContext, Selectable, svg } from "sprotty";
import { VNode } from "snabbdom";
import { ShapeStyle, StrokeStyle } from "../gropiusModel";
import { IssueAffected } from "../model/issueAffected";
import { SNamedElement } from "./sNamedElement";
import { Point } from "sprotty-protocol";
import { Shape } from "../shape/shape";
import { wrapForeignElement } from "../views/util";
import { LineEngine } from "../line/engine/lineEngine";
import { SChip } from "./sChip";
import { Math2D } from "../line/math";
import { IssueType } from "../model/issueType";
import { SIssueType } from "./sIssueType";

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
                },
                class: {
                    shape: true
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

    renderVersionLabel(context: RenderingContext, chip: SChip): VNode | undefined {
        const shape = this.shape;
        const shapeBounds = shape.bounds;
        const topRight = {
            x: shapeBounds.x + shapeBounds.width,
            y: shapeBounds.y
        };
        const topRightProjected = LineEngine.DEFAULT.projectPoint(topRight, shape.outline).pos;
        const labelPos = LineEngine.DEFAULT.getPoint(topRightProjected, 0, shape.outline);
        return wrapForeignElement(
            context.renderElement(chip),
            Math2D.add(labelPos, {
                x: -chip.size.width / 3,
                y: -chip.size.height / 2
            })
        );
    }

    renderIssueTypes(context: RenderingContext, centerTop: Point): VNode[] {
        const issueTypes = this.children.filter((child) => child.type === IssueType.TYPE) as SIssueType[];
        const result: VNode[] = [];
        const width = 42;
        const margin = 8;
        const count = issueTypes.length;
        for (let i = count - 1; i >= 0; i--) {
            const issueType = issueTypes[i];
            let offsetX: number;
            offsetX = -(count * width + (count - 1) * margin) / 2 + i * (width + margin);
            result.push(
                svg(
                    "g",
                    {
                        attrs: {
                            transform: `translate(${centerTop.x + offsetX}, ${centerTop.y})`
                        }
                    },
                    context.renderElement(issueType)
                )
            );
        }
        return result;
    }

    get position(): Point {
        return { x: this.x, y: this.y };
    }
}

export namespace SIssueAffected {
    export const defaultAnimatedFields = ["x", "y"];
}
