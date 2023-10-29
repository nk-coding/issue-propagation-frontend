import { RenderingContext, svg } from "sprotty";
import { SElement } from "./sElement";
import { SLabel } from "./sLabel";
import { Point } from "sprotty-protocol";
import { VNode } from "snabbdom";
import { SContextMenu } from "./sContextMenu";
import { Selectable } from "../model/selectable";

export abstract class SSelectable extends SElement implements Selectable {
    nameLabel!: SLabel;
    abstract contextMenuPos: Point;
    contextMenuData?: any;

    constructor() {
        super();
        this.cachedProperty<SLabel>("nameLabel", () => {
            return this.children.find((child) => child.type === "label") as SLabel;
        });
    }

    renderContextMenuContainer(context: RenderingContext, contextMenu: SContextMenu): VNode {
        const pos = this.contextMenuPos;
        return svg(
            "foreignObject",
            {
                attrs: {
                    width: "100vw",
                    height: "100vh"
                },
                style: {
                    transform: ` translate(${pos.x}px, ${pos.y}px) scale(calc(1 / var(--diagram-zoom)))`
                }
            },
            context.renderElement(contextMenu)
        );
    }
}
