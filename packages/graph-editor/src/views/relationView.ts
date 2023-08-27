import { injectable } from "inversify";
import { VNode } from "snabbdom";
import { IView, IViewArgs, RenderingContext, svg } from "sprotty";
import { SRelation } from "../smodel/sRelation";
import { SIssueAffected } from "../smodel/sIssueAffected";
import { Bounds } from "sprotty-protocol";
import { LineEngine } from "../line/engine/lineEngine";
import { Math2D } from "../line/math";

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
        return svg("path", {
            attrs: {
                d: `M ${startPoint.x} ${startPoint.y} L ${endPoint.x} ${endPoint.y}`,
                stroke: "var(--shape-stroke-color)",
                fill: "none",
                "stroke-width": 2
            }
        });
    }
}
