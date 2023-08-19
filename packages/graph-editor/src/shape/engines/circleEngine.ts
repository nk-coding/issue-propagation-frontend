import { Bounds } from "sprotty-protocol";
import { ShapeStyle, StrokeStyle } from "../../gropiusModel";
import { Shape } from "../shape";
import { EllipseEngine } from "./ellipseEngine";
import { ShapeEngine } from "./shapeEngine";

export class CircleEngine extends EllipseEngine {
    override generateForBounds(bounds: Bounds, style: ShapeStyle): Shape {
        const strokeWidth = StrokeStyle.strokeWidth(style);
        const radius = Math.min(bounds.width, bounds.height) / 2 - strokeWidth / 2;
        const center = Bounds.center(bounds);
        return {
            bounds,
            shape: "circle",
            outline: this.outline(center, radius, radius)
        };
    }

    override generateForInnerBounds(bounds: Bounds, style: ShapeStyle): Shape {
        const strokeWidth = StrokeStyle.strokeWidth(style);
        const radius =
            Math.sqrt(bounds.width * bounds.width + bounds.height * bounds.height) / 2 +
            strokeWidth / 2 +
            ShapeEngine.DEFAULT_MARGIN;
        const center = Bounds.center(bounds);
        const outerRadius = radius + strokeWidth / 2;
        return {
            bounds: {
                x: center.x - outerRadius,
                y: center.y - outerRadius,
                width: outerRadius * 2,
                height: outerRadius * 2
            },
            shape: "circle",
            outline: this.outline(center, radius, radius)
        };
    }
}
