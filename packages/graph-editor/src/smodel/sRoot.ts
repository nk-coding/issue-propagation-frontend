import { ViewportRootElement } from "sprotty";
import { Root } from "../model/root";
import { Bounds } from "sprotty-protocol";
import { LinearAnimatable } from "../features/animation/model";
import { Math2D } from "../line/math";

const rootAnimatedFields = new Set(["zoom, scrollX, scrollY"]);

export class SRoot extends ViewportRootElement implements LinearAnimatable {
    readonly animatedFields = rootAnimatedFields;
    override type: typeof Root.TYPE = Root.TYPE;
    animated?: boolean;
    targetBounds?: Bounds;

    changeRevision = 0;

    get scrollX(): number {
        return this.scroll.x;
    }
    set scrollX(value: number) {
        this.scroll = { ...this.scroll, x: value };
    }
    get scrollY(): number {
        return this.scroll.y;
    }
    set scrollY(value: number) {
        this.scroll = { ...this.scroll, y: value };
    }

    updateToTargetBounds(): void {
        if (this.targetBounds) {
            const targetZoomX = this.canvasBounds.width / this.targetBounds.width;
            const targetZoomY = this.canvasBounds.height / this.targetBounds.height;
            this.zoom = Math.min(targetZoomX, targetZoomY);
            const targetCenter = Bounds.center(this.targetBounds);
            const currentCenter = Math2D.scale(
                {
                    x: this.canvasBounds.width / 2,
                    y: this.canvasBounds.height / 2
                },
                1 / this.zoom
            );
            this.scroll = Math2D.sub(targetCenter, currentCenter);
        }
    }

    generateStyle(): string {
        return `
            .sprotty .label {
                display: inline-block;
                min-width: 50px;
                max-width: 200px;
                word-wrap: break-word;
                text-align: center;
                user-select: none;
                font-size: 1.2em;
            }

            .sprotty svg {
                background:
                  conic-gradient(from 90deg at 1px 1px, transparent 90deg, var(--diagram-grid) 0) 
                  calc(var(--diagram-scroll-x) * -1 * var(--diagram-zoom))
                  calc(var(--diagram-scroll-y) * -1 * var(--diagram-zoom)) /
                  calc(150px * var(--diagram-zoom-normalized)) calc(150px * var(--diagram-zoom-normalized));
            }

            .sprotty foreignObject {
                pointer-events: none;
            }

            .sprotty .chip {
                user-select: none;
                border-radius: 9999px;
                display: table;
                min-height: 0;
                line-height: 1;
            }

            .sprotty .issue-affected .chip {
                font-size: 0.75em;
                padding: 5px 0.5em;
                background: var(--version-chip-background);
                color: var(--version-chip-color);
            }

            .sprotty .issue-affected .issue-type .chip {
                font-size: 0.6em;
                padding: 3px 0.5em;
            }

            .sprotty .selected-shape {
                fill: var(--selected-shape-fill-color);
                stroke: var(--selected-shape-stroke-color);
                stroke-width: calc(6px / var(--diagram-zoom));
                stroke-dasharray: calc(16px / var(--diagram-zoom));
                cursor: pointer;
            }

            .sprotty .shape {
                cursor: pointer;
            }

            .sprotty .issue-type-folder {
                stroke: var(--shape-stroke-color);
                stroke-width: 2px;
                fill: none;
            }

            .sprotty .issue-type-icon {
                fill: var(--shape-stroke-color);
            }
        `;
    }
}
