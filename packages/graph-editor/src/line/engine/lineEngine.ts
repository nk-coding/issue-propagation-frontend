import { Point } from "sprotty-protocol";
import { ArcSegment } from "../model/arcSegment";
import { BezierSegment } from "../model/bezierSegment";
import { Line } from "../model/line";
import { LineSegment } from "../model/lineSegment";
import { Segment } from "../model/segment";
import { ArcSegmentEngine } from "./arcSegmentEngine";
import { BezierSegmentEngine } from "./bezierSegmentEngine";
import { LineSegmentEngine } from "./lineSegmentEngine";
import { SegmentEngine } from "./segmentEngine";

/**
 * Helper to get closest points to a line, and calculate the position of a point on the line
 */
export class LineEngine {
    /**
     * Default instance, can be shared as the engine is stateless
     */
    static DEFAULT = new LineEngine();

    /**
     * Map of all known engines
     */
    private engines = new Map<string, SegmentEngine<any>>([
        [LineSegment.TYPE, new LineSegmentEngine()],
        [BezierSegment.TYPE, new BezierSegmentEngine()],
        [ArcSegment.TYPE, new ArcSegmentEngine()]
    ]);

    /**
     * Finds the nearest point on the provided line to point.
     *
     * @param point the point to which the nearest point should be found
     * @param transformedLine line with associated transform
     * @returns the position of the closest point on the line
     */
    projectPoint(point: Point, line: Line): ProjectionResult {
        if (line.segments.length == 0) {
            return {
                pos: 0,
                relativePos: 0,
                segment: 0,
                distance: 0
            };
        }
        const localPoint = point;
        const lengthPerSegment = 1 / line.segments.length;
        let minDistance = Number.POSITIVE_INFINITY;
        let relativePosition = 0;
        let segmentIndex = 0;
        let distance = 0;
        let startPosition = line.start;
        for (let i = 0; i < line.segments.length; i++) {
            const segment = line.segments[i];
            const engine = this.getEngine(segment);
            const candidate = engine.projectPoint(localPoint, segment, startPosition);
            if (candidate.distance < minDistance) {
                minDistance = candidate.distance;
                relativePosition = candidate.position;
                segmentIndex = i;
                const normal = engine.getNormalVector(candidate.position, segment, startPosition);
                const d2 = normal.x ** 2 + normal.y ** 2;
                distance = ((point.x - candidate.point.x) * normal.x + (point.y - candidate.point.y) * normal.y) / d2;
            }
            startPosition = segment.end;
        }
        return {
            pos: lengthPerSegment * (segmentIndex + relativePosition),
            relativePos: relativePosition,
            segment: segmentIndex,
            distance
        };
    }

    getPoint(position: number, distance: number, line: Line): Point {
        if (line.segments.length == 0) {
            return line.start;
        }
        const segmentIndex = this.calcSegmentIndex(position, line.segments.length);
        const relativePosition = position * line.segments.length - segmentIndex;

        const segmentStartPos = segmentIndex == 0 ? line.start : line.segments[segmentIndex - 1].end;
        const lineSegment = line.segments[segmentIndex];
        const engine = this.getEngine(lineSegment);
        const localPoint = engine.getPoint(relativePosition, distance, lineSegment, segmentStartPos);
        return localPoint;
    }

    getNormal(position: number, line: Line): Point {
        const segmentIndex = this.calcSegmentIndex(position, line.segments.length);
        const relativePosition = position * line.segments.length - segmentIndex;
        const lineSegment = line.segments[segmentIndex];
        const engine = this.getEngine(lineSegment);
        const segmentStartPos = segmentIndex == 0 ? line.start : line.segments[segmentIndex - 1].end;
        return engine.getNormalVector(relativePosition, lineSegment, segmentStartPos);
    }

    toPathString(line: Line, offset: Point): string {
        const startPosition = line.start;
        let path = `M ${startPosition.x + offset.x} ${startPosition.y + offset.y}`;
        for (const segment of line.segments) {
            const engine = this.getEngine(segment);
            path += engine.toPathString(segment, offset);
        }
        path += "Z";
        return path;
    }

    private getEngine<T extends Segment>(segment: T): SegmentEngine<T> {
        const engine = this.engines.get(segment.type);
        if (engine) {
            return engine;
        } else {
            throw new Error(`Unknown segment type: ${segment.type}`);
        }
    }

    private calcSegmentIndex(position: number, segmentCount: number): number {
        return Math.min(Math.max(Math.floor(position * segmentCount), 0), segmentCount - 1);
    }
}

/**
 * Result of a point projection
 */
export interface ProjectionResult {
    /**
     * Position on the line which is closest to the provided point
     */
    pos: number;
    /**
     * The relative position on the segment
     */
    relativePos: number;
    /**
     * The segment index
     */
    segment: number;
    /**
     * Distance for relative LinePoints.
     * This is the distance to the line which results in the lowest distance to the point.
     * This is not the distance to the provided point!
     */
    distance: number;
}
