import { Bounds, BoundsAware, Dimension, Point } from "sprotty-protocol";
import { Label } from "../model/label";
import { SElement } from "./sElement";
import { SHtmlElement } from "./SHtmlElement";

export class SLabel extends SHtmlElement implements Label, BoundsAware {
    declare type: typeof Label.TYPE;
    text!: string;
}
