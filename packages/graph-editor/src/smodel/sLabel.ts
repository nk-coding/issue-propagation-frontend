import { BoundsAware } from "sprotty-protocol";
import { Label } from "../model/label";
import { SHtmlElement } from "./sHtmlElement";

export class SLabel extends SHtmlElement implements Label, BoundsAware {
    declare type: typeof Label.TYPE;
    text!: string;
}
