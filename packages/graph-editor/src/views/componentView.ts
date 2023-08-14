import { injectable } from "inversify";
import { VNode } from "snabbdom";
import { IView, IViewArgs, RenderingContext, svg } from "sprotty";
import { SComponent } from "../smodel/sComponent";
import { SLabel } from "../smodel/sLabel";
import { LineEngine } from "../line/engine/lineEngine";
import { Math2D } from "../line/math";
import { wrapForeignElement } from "./util";

@injectable()
export class ComponentView implements IView {
    render(model: Readonly<SComponent>, context: RenderingContext, args?: {} | undefined): VNode | undefined {
        let nameLabel: SLabel | undefined;
        const interfaces: (VNode | undefined)[] = [];
        for (const child of model.children) {
            if (child instanceof SLabel) {
                nameLabel = child;
            } else {
                interfaces.push(context.renderElement(child));
            }
        }
        const shape = model.shape;
        const component = svg(
            "g",
            null,
            svg("path", {
                attrs: {
                    d: LineEngine.DEFAULT.toPathString(shape.outline, { x: 0, y: 0 }),
                    ...model.generateShapeAttrs()
                }
            }),
            wrapForeignElement(context.renderElement(nameLabel!), {
                x: model.x - shape.innerBounds.width / 2,
                y: model.y - shape.innerBounds.height / 2
            })
        );
        return svg("g", null, component, ...interfaces);
    }
}
