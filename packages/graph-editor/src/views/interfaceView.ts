import { injectable } from "inversify";
import { VNode } from "snabbdom";
import { IView, IViewArgs, RenderingContext, svg } from "sprotty";
import { SInterface } from "../smodel/sInterface";

@injectable()
export class InterfaceView implements IView {
    render(model: Readonly<SInterface>, context: RenderingContext, args?: {} | undefined): VNode | undefined {
        return undefined;
    }
}