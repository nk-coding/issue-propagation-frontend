import { Element } from "./element";

export interface VersionChip extends Element {
    type: typeof VersionChip.TYPE;
    version: string;
}

export namespace VersionChip {
    export const TYPE = "versionChip";

    export function is(element: Element): element is VersionChip {
        return element.type === TYPE;
    }
}