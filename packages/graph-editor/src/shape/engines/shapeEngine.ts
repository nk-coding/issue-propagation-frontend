import { Bounds } from "sprotty-protocol";
import { Shape } from "../shape";
import { ShapeStyle } from "../../gropiusModel";

export abstract class ShapeEngine {
    abstract generateForBounds(bounds: Bounds, style: ShapeStyle): Shape;
    abstract generateForInnerBounds(bounds: Bounds, style: ShapeStyle): Shape;
}
