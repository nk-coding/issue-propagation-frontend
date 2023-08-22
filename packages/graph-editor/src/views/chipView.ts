import { injectable } from "inversify";
import { VNode } from "snabbdom";
import { IView, RenderingContext, html } from "sprotty";
import { SChip } from "../smodel/sChip";

@injectable()
export class ChipView implements IView {
    render(model: Readonly<SChip>, context: RenderingContext, args?: {} | undefined): VNode | undefined {
        return html(
            "span",
            {
                class: { chip: true }
            },
            model.text
        );
    }
}
