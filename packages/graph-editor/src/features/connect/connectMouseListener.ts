import { injectable } from "inversify";
import { IActionHandler, ICommand, MouseListener, SModelElementImpl, findParentByFeature, isViewport } from "sprotty";
import { Action, Point } from "sprotty-protocol";
import { ConnectAction } from "./connectAction";
import { CancelConnectAction } from "./cancelConnectAction";
import { isConnectable } from "./connectFeature";
import { CreateRelationAction } from "./createRelationAction";
import { UpdateRelationEndAction } from "./updateRelationEndAction";

@injectable()
export class ConnectMouseListener extends MouseListener implements IActionHandler {
    private connectAction: ConnectAction | undefined;

    private lastMouseMoveEvent?: MouseEvent;
    private lastMouseMoveTarget?: SModelElementImpl;

    handle(action: Action): void | Action | ICommand {
        if (ConnectAction.is(action)) {
            this.connectAction = action;
            if (this.lastMouseMoveEvent != undefined) {
                const updateAction: UpdateRelationEndAction = {
                    kind: UpdateRelationEndAction.KIND,
                    relation: action.relation,
                    end: this.getLastPoint()
                };
                return updateAction;
            }
        }
    }

    override mouseUp(target: SModelElementImpl, event: MouseEvent): Action[] {
        return this.commitConnection(target);
    }

    override mouseEnter(target: SModelElementImpl, event: MouseEvent): Action[] {
        if (this.connectAction == undefined) {
            return [];
        }
        if (event.buttons === 0) {
            return this.commitConnection(target);
        }
        return [];
    }

    override mouseMove(target: SModelElementImpl, event: MouseEvent): Action[] {
        this.lastMouseMoveEvent = event;
        this.lastMouseMoveTarget = target;
        if (this.connectAction == undefined) {
            return [];
        }
        const point = this.getLastPoint();
        const updateAction: UpdateRelationEndAction = {
            kind: UpdateRelationEndAction.KIND,
            relation: this.connectAction.relation,
            end: point
        };
        return [updateAction];
    }

    private commitConnection(target: SModelElementImpl): Action[] {
        const connectable = findParentByFeature(target, isConnectable);
        if (connectable == undefined || this.connectAction == undefined) {
            return this.cancel();
        }
        const targetId = connectable?.id;
        if (targetId == this.connectAction.start) {
            return this.cancel();
        }
        const connectAction: CreateRelationAction = {
            kind: CreateRelationAction.KIND,
            relation: this.connectAction.relation,
            start: this.connectAction.start,
            end: targetId
        };
        return [connectAction];
    }

    private cancel(): Action[] {
        if (this.connectAction == undefined) {
            return [];
        }
        const cancelAction: CancelConnectAction = {
            kind: CancelConnectAction.KIND,
            relation: this.connectAction.relation
        };
        this.connectAction = undefined;
        return [cancelAction];
    }

    private getLastPoint(): Point {
        let x = this.lastMouseMoveEvent!.pageX;
        let y = this.lastMouseMoveEvent!.pageY;
        const canvasBounds = this.lastMouseMoveTarget!.root.canvasBounds;
        x -= canvasBounds.x;
        y -= canvasBounds.y;
        const viewport = findParentByFeature(this.lastMouseMoveTarget!, isViewport);
        const zoom = viewport?.zoom ?? 1;
        if (viewport != undefined) {
            x = x / zoom + viewport.scroll.x;
            y = y / zoom + viewport.scroll.y;
        }
        return {
            x,
            y
        };
    }
}
