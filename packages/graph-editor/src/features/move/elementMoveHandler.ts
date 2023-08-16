import { Action } from "sprotty-protocol";
import { Component } from "../../model/component";
import { Interface } from "../../model/interface";
import { MoveHandler } from "./moveHandler";
import { UpdateLayoutAction } from "./updateLayoutAction";
import { GraphLayout } from "../../gropiusModel";

export class ElementMoveHandler implements MoveHandler {
    private readonly elementLayouts: GraphLayout;

    constructor(elements: (Interface | Component)[]) {
        const layout: GraphLayout = {};
        for (const element of elements) {
            layout[element.id] = {
                x: element.x,
                y: element.y
            };
        }
        this.elementLayouts = layout;
    }

    generateAction(dx: number, dy: number, commited: boolean, event: MouseEvent): UpdateLayoutAction {
        let offsetX = dx;
        let offsetY = dy;
        if (event.shiftKey) {
            if (Math.abs(dx) > Math.abs(dy)) {
                offsetY = 0;
            } else {
                offsetX = 0;
            }
        }
        const partialLayout: GraphLayout = {};
        for (const [key, layout] of Object.entries(this.elementLayouts)) {
            const typedLayout = layout as { x: number; y: number };
            partialLayout[key] = {
                ...layout,
                pos: {
                    x: typedLayout.x + offsetX,
                    y: typedLayout.y + offsetY
                }
            };
        }
        return {
            kind: UpdateLayoutAction.KIND,
            partialLayout
        };
    }
}
