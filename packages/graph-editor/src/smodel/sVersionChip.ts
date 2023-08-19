import { VersionChip } from "../model/versionChip";
import { SHtmlElement } from "./sHtmlElement";

export class SVersionChip extends SHtmlElement implements VersionChip {
    declare type: typeof VersionChip.TYPE;
    version!: string;
}
