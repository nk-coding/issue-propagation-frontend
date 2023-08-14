import { VNode } from "snabbdom";
import { svg } from "sprotty";
import { Point } from "sprotty-protocol";

export function wrapForeignElement(element: VNode | undefined, offset: Point): VNode {
    return svg(
        "foreignObject",
        {
            attrs: {
                width: "100vw",
                height: "100vh",
                x: 0,
                y: 0,
                transform: `translate(${offset.x}, ${offset.y})`
            }
        },
        element
    );
}
