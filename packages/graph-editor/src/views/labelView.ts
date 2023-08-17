import { injectable } from "inversify";
import { VNode } from "snabbdom";
import { IView, IViewArgs, RenderingContext, html } from "sprotty";
import { SLabel } from "../smodel/sLabel";

@injectable()
export class LabelView implements IView {
    render(model: Readonly<SLabel>, context: RenderingContext, args?: {} | undefined): VNode | undefined {
        return html(
            "span",
            {
                class: {
                    label: true
                }
            },
            model.text
        );
    }
}
