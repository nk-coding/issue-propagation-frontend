import { VersionChip } from "../model/versionChip";
import { SElement } from "./sElement";

export class SVersionChip extends SElement implements VersionChip {
    declare type: typeof VersionChip.TYPE;
    version!: string;
}
