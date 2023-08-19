import { Element } from "./element";

export interface Root extends Element {
    type: typeof Root.TYPE;
    animated?: boolean;
}

export namespace Root {
    export const TYPE = "root";

    export function is(element: Element): element is Root {
        return element.type === TYPE;
    }
}
