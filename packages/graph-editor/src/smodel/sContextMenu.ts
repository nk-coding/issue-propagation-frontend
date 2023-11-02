import { SElement } from "./sElement";
import { ContextMenu } from "../model/contextMenu";
import { Point } from "sprotty-protocol";
import { SSelectable } from "./sSelectable";

export class SContextMenu extends SElement implements ContextMenu {
    declare type: typeof ContextMenu.TYPE;
    targetId!: string;
    pos!: Point;

    constructor() {
        super();
        this.cachedProperty("pos", () => {
            const target = this.root.index.getById(this.targetId) as SSelectable;
            return target.contextMenuPos;
        });
    }
}
