import { VersionChip } from "../model/versionChip";
import { SHtmlElement } from "./SHtmlElement";
import { SElement } from "./sElement";

export class SVersionChip extends SHtmlElement implements VersionChip {
    declare type: typeof VersionChip.TYPE;
    version!: string;
}
