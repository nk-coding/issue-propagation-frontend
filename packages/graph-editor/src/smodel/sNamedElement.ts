import { SElement } from "./sElement";
import { SLabel } from "./sLabel";

export abstract class SNamedElement extends SElement {
    nameLabel!: SLabel;

    constructor() {
        super();
        this.cachedProperty<SLabel>("nameLabel", () => {
            return this.children.find((child) => child.type === "label") as SLabel;
        });
    }
}
