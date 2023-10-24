import { injectable } from "inversify";
import { VNode } from "snabbdom";
import { IView, RenderingContext, svg } from "sprotty";
import { SIssueRelation } from "../smodel/sIssueRelation";
import { SIssueAffected } from "../smodel/sIssueAffected";
import { Math2D } from "../line/math";

@injectable()
export class IssueRelationView implements IView {
    render(model: Readonly<SIssueRelation>, context: RenderingContext, args?: {} | undefined): VNode | undefined {
        const start = model.root.index.getById(model.start) as SIssueAffected;
        const end = model.root.index.getById(model.end) as SIssueAffected;
        const offset = { x: 21, y: 33 };
        const handleLength = 100;
        const startPos = Math2D.add(start.issueTypePos(model.startIndex), offset);
        const endPos = Math2D.add(end.issueTypePos(model.endIndex), offset);
        const c1 = Math2D.add(startPos, { y: handleLength, x: 0 });
        const c2 = Math2D.add(endPos, { y: handleLength, x: 0 });
        return svg("path", {
            attrs: {
                d: `M ${startPos.x} ${startPos.y} C ${c1.x} ${c1.y} ${c2.x} ${c2.y} ${endPos.x} ${endPos.y} m -6 12 l 6 -11 l 6 11`,
                stroke: "var(--shape-stroke-color)",
                fill: "none",
                "stroke-width": 1.5
            }
        });
    }
}
