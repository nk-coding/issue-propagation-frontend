import { ViewportRootElement } from "sprotty";
import { Root } from "../model/root";

export class SRoot extends ViewportRootElement {
    override type: typeof Root.TYPE = Root.TYPE

    changeRevision = 0;

    generateStyle(): string {
        return `
        `
    }
}