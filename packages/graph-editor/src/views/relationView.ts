import { injectable } from "inversify";
import { VNode } from "snabbdom";
import { IView, RenderingContext, svg } from "sprotty";
import { SRelation } from "../smodel/sRelation";
import { SIssueAffected } from "../smodel/sIssueAffected";
import { Bounds } from "sprotty-protocol";
import { LineEngine } from "../line/engine/lineEngine";
import { Math2D } from "../line/math";
import { StrokeStyle } from "../gropiusModel";
import { MarkerGenerator } from "../marker/markerGenerator";
import { Point } from "bezier-js";

@injectable()
export class RelationView implements IView {
    render(model: Readonly<SRelation>, context: RenderingContext, args?: {} | undefined): VNode | undefined {
        if (model.start == undefined || model.end == undefined) {
            return undefined;
        }
        let initialStartPos: Point;
        let initialEndPos: Point;
        if (typeof model.start === "string") {
            const start = model.root.index.getById(model.start) as SIssueAffected;
            initialStartPos = Bounds.center(start.shape.bounds);
        } else {
            initialStartPos = model.start;
        }
        if (typeof model.end === "string") {
            const end = model.root.index.getById(model.end) as SIssueAffected;
            initialEndPos = Bounds.center(end.shape.bounds);
        } else {
            initialEndPos = model.end;
        }
        let startPoint: Point;
        let endPoint: Point;
        if (typeof model.start === "string") {
            const start = model.root.index.getById(model.start) as SIssueAffected;
            const startShape = start.shape;
            const startPos = LineEngine.DEFAULT.projectPoint(initialEndPos, startShape.outline).pos;
            startPoint = LineEngine.DEFAULT.getPoint(startPos, 0, startShape.outline);
        } else {
            startPoint = initialStartPos;
        }
        if (typeof model.end === "string") {
            const end = model.root.index.getById(model.end) as SIssueAffected;
            const endShape = end.shape;
            const endPos = LineEngine.DEFAULT.projectPoint(initialStartPos, endShape.outline).pos;
            endPoint = LineEngine.DEFAULT.getPoint(endPos, 0, endShape.outline);
        } else {
            endPoint = initialEndPos;
        }
        let endVector = Math2D.sub(startPoint, endPoint);
        if (Math2D.length(endVector) == 0) {
            endVector = { x: 1, y: 0 };
        }
        const markerAngle = Math2D.angle(endVector) + Math.PI;
        const strokeWidth = StrokeStyle.strokeWidth(model.style);
        const pathStyle = {
            "stroke-width": strokeWidth,
            stroke: model.style.stroke?.color ?? "var(--shape-stroke-color)"
        };
        const markerInfo = MarkerGenerator.DEFAULT.getMarkerInfo(model.style);
        const markerStartPoint = Math2D.add(endPoint, Math2D.scaleTo(endVector, markerInfo.startOffset));
        const endMarker = svg("path", {
            attrs: {
                d: markerInfo.path,
                ...pathStyle,
                transform: `translate(${markerStartPoint.x}, ${markerStartPoint.y}) rotate(${
                    (markerAngle * 180) / Math.PI
                })`,
                fill: markerInfo.filled ? pathStyle.stroke : "none"
            }
        });
        const lineEndPoint = Math2D.add(
            endPoint,
            Math2D.scaleTo(endVector, markerInfo.startOffset - markerInfo.lineOffset)
        );
        const pathAttributes: Record<string, string | number> = {
            d: `M ${startPoint.x} ${startPoint.y} L ${lineEndPoint.x} ${lineEndPoint.y}`,
            ...pathStyle,
            fill: "none"
        };
        if (model.style.stroke?.dash != undefined) {
            pathAttributes["stroke-dasharray"] = model.style.stroke.dash.join(" ");
        }
        const line = svg("path", {
            attrs: pathAttributes
        });
        return svg("g", null, line, endMarker);
    }
}
