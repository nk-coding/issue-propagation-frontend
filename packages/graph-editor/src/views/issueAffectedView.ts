import { VNode } from "snabbdom";
import { SIssueAffected } from "../smodel/sIssueAffected";
import { LineEngine } from "../line/engine/lineEngine";
import { wrapForeignElement } from "./util";
import { html } from "sprotty";

export abstract class IssueAffectedView {
    renderVersionLabel(model: Readonly<SIssueAffected>): VNode | undefined {
        const version = model.version;
        if (version == undefined) {
            return undefined;
        }
        const shape = model.shape;
        const shapeBounds = shape.bounds;
        const topRight = {
            x: shapeBounds.x + shapeBounds.width,
            y: shapeBounds.y
        };
        const topRightProjected = LineEngine.DEFAULT.projectPoint(topRight, shape.outline).pos;
        const labelPos = LineEngine.DEFAULT.getPoint(topRightProjected, 0, shape.outline);
        return wrapForeignElement(
            html(
                "span",
                {
                    class: { "version-chip": true }
                },
                version
            ),
            labelPos
        );
    }
}
