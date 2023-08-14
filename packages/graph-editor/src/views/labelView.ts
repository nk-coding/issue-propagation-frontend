import { injectable } from "inversify";
import { VNode } from "snabbdom";
import { IView, IViewArgs, RenderingContext, svg } from "sprotty";
import { SLabel } from "../smodel/sLabel";

@injectable()
export class LabelView implements IView {
    render(model: Readonly<SLabel>, context: RenderingContext, args?: {} | undefined): VNode | undefined {
        //return svg("foreignObject", {}, svg("span", { class: { label: true } }, model.text));
        return svg("text", null, model.text)
    }
}
