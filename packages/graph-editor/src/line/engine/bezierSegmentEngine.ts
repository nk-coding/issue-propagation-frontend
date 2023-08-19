import { Bezier } from "bezier-js";
import { Math2D } from "../math";
import { Point } from "sprotty-protocol";
import { BezierSegment } from "../model/bezierSegment";
import { NearestPointResult, SegmentEngine } from "./segmentEngine";

/**
 * Segment engine for BezierSegment
 */
export class BezierSegmentEngine extends SegmentEngine<BezierSegment> {
    override projectPoint(point: Point, segment: BezierSegment, segmentStartPoint: Point): NearestPointResult {
        const curve = new Bezier(segmentStartPoint, segment.startControlPoint, segment.endControlPoint, segment.end);
        const projection = curve.project(point);
        return {
            distance: Math2D.distance(projection, point),
            position: projection.t!,
            point: projection
        };
    }

    override getPoint(position: number, distance: number, segment: BezierSegment, segmentStartPoint: Point): Point {
        const curve = new Bezier(segmentStartPoint, segment.startControlPoint, segment.endControlPoint, segment.end);
        const linePoint = curve.get(position);
        if (distance != 0) {
            const normal = curve.normal(position);
            linePoint.x += normal.x * distance;
            linePoint.y += normal.y * distance;
        }
        return linePoint;
    }

    override getNormalVector(position: number, segment: BezierSegment, segmentStartPoint: Point): Point {
        const curve = new Bezier(segmentStartPoint, segment.startControlPoint, segment.endControlPoint, segment.end);
        return curve.normal(position);
    }

    override toPathString(segment: BezierSegment): string {
        return `C ${segment.startControlPoint.x} ${segment.startControlPoint.y} ${segment.endControlPoint.x} ${segment.endControlPoint.y} ${segment.end.x} ${segment.end.y}`;
    }
}
