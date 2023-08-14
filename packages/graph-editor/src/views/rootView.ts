import { injectable } from "inversify";
import { IView, IViewArgs, RenderingContext, svg } from "sprotty";
import { SRoot } from "../smodel/sRoot";
import { VNode } from "snabbdom";

@injectable()
export class RootView implements IView {

    render(model: Readonly<SRoot>, context: RenderingContext, _args?: IViewArgs | undefined): VNode {
        const transform = `scale(${model.zoom}) translate(${-model.scroll.x},${-model.scroll.y})`;
        return svg(
            "svg",
            null,
            svg("style", null, model.generateStyle()),
            svg(
                "g",
                {
                    attrs: {
                        transform
                    },
                    class: {
                        "sprotty-root": true
                    }
                },
                ...context.renderChildren(model, undefined)
            )
        );
    }

}