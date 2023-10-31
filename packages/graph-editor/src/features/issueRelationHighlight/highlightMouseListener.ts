import { MouseListener, SModelElementImpl, findParentByFeature } from "sprotty";
import { Action } from "sprotty-protocol";
import { HoverHighlightAction } from "./hoverHighlightAction";
import { SRoot } from "../../smodel/sRoot";
import { isIssueRelationHighlightable } from "./issueHighlightableFeature";

export class HighlightMouseListener extends MouseListener {
    lastHighlighted?: string;

    override mouseOver(target: SModelElementImpl, event: MouseEvent): Action[] {
        const highlightable = findParentByFeature(target, isIssueRelationHighlightable);
        if (highlightable != undefined && event.buttons === 0) {
            this.lastHighlighted = highlightable.id;
            const root = target.root as SRoot;
            const action: HoverHighlightAction = {
                kind: HoverHighlightAction.KIND,
                cause: highlightable.id,
                affected: root.getRelatedHighlightable(highlightable.id),
                unaffected: []
            };
            return [action];
        } else if (highlightable == undefined && this.lastHighlighted != undefined) {
            const root = target.root as SRoot;
            const action: HoverHighlightAction = {
                kind: HoverHighlightAction.KIND,
                cause: this.lastHighlighted,
                unaffected: root.getRelatedHighlightable(this.lastHighlighted),
                affected: []
            };
            return [action];
        }
        return [];
    }
}
