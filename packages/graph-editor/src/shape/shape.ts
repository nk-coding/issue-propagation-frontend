import { Bounds } from "sprotty-protocol";
import { Line } from "../line/model/line";
import { Shape as GropiusShape } from "../gropiusModel";

export interface Shape {
    bounds: Bounds;
    innerBounds: Bounds;
    shape: GropiusShape;
    outline: Line;
}
