import { Chip } from "../model/chip";
import { SHtmlElement } from "./sHtmlElement";

export class SChip extends SHtmlElement implements Chip {
    declare type: typeof Chip.TYPE;
    text!: string;
}
