import { injectable } from "inversify";
import { VNode } from "snabbdom";
import { IView, RenderingContext, html } from "sprotty";
import { SContextMenu } from "../smodel/sContextMenu";

@injectable()
export class ContextMenuView implements IView {
    render(model: Readonly<SContextMenu>, context: RenderingContext, args?: {} | undefined): VNode | undefined {
        return html("div", {
            class: {
                "context-menu": true
            }
        });
    }
}
