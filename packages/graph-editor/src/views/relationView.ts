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

@injectable()
export class RelationView implements IView {
    render(model: Readonly<SRelation>, context: RenderingContext, args?: {} | undefined): VNode | undefined {
        const start = model.root.index.getById(model.start) as SIssueAffected;
        const end = model.root.index.getById(model.end) as SIssueAffected;
        const startShape = start.shape;
        const endShape = end.shape;
        const startCenter = Bounds.center(startShape.bounds);
        const endCenter = Bounds.center(endShape.bounds);
        const endPos = LineEngine.DEFAULT.projectPoint(startCenter, endShape.outline).pos;
        const endPoint = LineEngine.DEFAULT.getPoint(endPos, 0, endShape.outline);
        const startPos = LineEngine.DEFAULT.projectPoint(endCenter, startShape.outline).pos;
        const startPoint = LineEngine.DEFAULT.getPoint(startPos, 0, startShape.outline);
        const startVector = LineEngine.DEFAULT.getNormal(startPos, startShape.outline);
        const endVector = LineEngine.DEFAULT.getNormal(endPos, endShape.outline);
        const distance = Math2D.distance(startPoint, endPoint);
        const controlPointDistance = Math.min(distance / 2, 75);
        const controlPoint1 = Math2D.add(startPoint, Math2D.scaleTo(startVector, controlPointDistance));
        const controlPoint2 = Math2D.add(endPoint, Math2D.scaleTo(endVector, controlPointDistance));
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
        const line = svg("path", {
            attrs: {
                d: `M ${startPoint.x} ${startPoint.y} L ${lineEndPoint.x} ${lineEndPoint.y}`,
                ...pathStyle,
                fill: "none"
            }
        });
        return svg("g", null, line, endMarker);
    }
}
