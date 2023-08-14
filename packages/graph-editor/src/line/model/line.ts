import { Point } from "sprotty-protocol";
import { Segment } from "./segment";

/**
 * A line beginning at a start point, and consisting of a set of segments.
 * A line may be closed or not.
 * Note: mathematically, this is a path
 */
export interface Line {
    /**
     * The start position of the line
     */
    start: Point;
    /**
     * The segments of the line
     */
    segments: Segment[];
}
