import { injectable } from "inversify";
import { VNode } from "snabbdom";
import { IView, RenderingContext, html } from "sprotty";
import { SVersionChip } from "../smodel/sVersionChip";

@injectable()
export class VersionChipView implements IView {
    render(model: Readonly<SVersionChip>, context: RenderingContext, args?: {} | undefined): VNode | undefined {
        return html(
            "span",
            {
                class: { "version-chip": true }
            },
            model.version
        );
    }
}
