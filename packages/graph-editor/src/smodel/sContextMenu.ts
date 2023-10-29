import { SElement } from "./sElement";
import { ContextMenu } from "../model/contextMenu";

export class SContextMenu extends SElement implements ContextMenu {
    declare type: typeof ContextMenu.TYPE;
    targetId!: string;
}
