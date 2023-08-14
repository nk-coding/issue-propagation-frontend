import { Element } from "./element";

export interface Label extends Element {
    type: typeof Label.TYPE;
    text: string;
}

export namespace Label {
    export const TYPE = "label";

    export function is(element: Element): element is Label {
        return element.type === TYPE;
    }
}