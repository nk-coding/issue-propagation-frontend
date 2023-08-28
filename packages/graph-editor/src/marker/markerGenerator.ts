import { ArrowEngine } from "./engines/arrowEngine";
import { MarkerEngine } from "./engines/markerEngine";
import { Marker as GropiusMarker, RelationStyle, StrokeStyle } from "../gropiusModel";
import { DiamondEngine } from "./engines/diamondEngine";
import { TriangleEngine } from "./engines/triangleEngine";

export class MarkerGenerator {
    static readonly DEFAULT = new MarkerGenerator();

    readonly engines: Map<GropiusMarker, MarkerEngine> = new Map([
        ["ARROW", new ArrowEngine()],
        ["DIAMOND", new DiamondEngine(false)],
        ["FILLED_DIAMOND", new DiamondEngine(true)],
        ["TRIANGLE", new TriangleEngine(false)],
        ["FILLED_TRIANGLE", new TriangleEngine(true)]
    ]);

    getMarkerInfo(style: RelationStyle): MarkerInfo {
        const strokeWidth = StrokeStyle.strokeWidth(style);
        const engine = this.getEngine(style.marker);
        return {
            path: engine.path,
            startOffset: engine.startOffset(strokeWidth),
            lineOffset: engine.lineOffset(strokeWidth),
            filled: engine.filled
        };
    }

    private getEngine(shape: GropiusMarker): MarkerEngine {
        const engine = this.engines.get(shape);
        if (engine) {
            return engine;
        } else {
            throw new Error(`No engine found for shape ${shape}`);
        }
    }
}

export interface MarkerInfo {
    path: string;
    startOffset: number;
    lineOffset: number;
    filled: boolean;
}
