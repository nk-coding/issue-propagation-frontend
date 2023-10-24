import { MouseListener, SModelElementImpl } from "sprotty";
import { Action } from "sprotty-protocol";
import { IssueRelationHighlightable } from "./IssueRelationHighlightable";
import { HoverHighlightAction } from "./hoverHighlightAction";
import { SRoot } from "../../smodel/sRoot";

export class HighlightMouseListener extends MouseListener {
    override mouseEnter(target: SModelElementImpl, event: MouseEvent): Action[] {
        if (IssueRelationHighlightable.is(target as never)) {
            const root = target.root as SRoot;
            const action: HoverHighlightAction = {
                kind: HoverHighlightAction.KIND,
                cause: target.id,
                affected: root.getRelatedHighlightable(target.id),
                unaffected: []
            };
            return [action];
        }
        return [];
    }

    override mouseLeave(target: SModelElementImpl, event: MouseEvent): Action[] {
        if (IssueRelationHighlightable.is(target as never)) {
            const root = target.root as SRoot;
            const action: HoverHighlightAction = {
                kind: HoverHighlightAction.KIND,
                cause: target.id,
                unaffected: root.getRelatedHighlightable(target.id),
                affected: []
            };
            return [action];
        }
        return [];
    }
}
