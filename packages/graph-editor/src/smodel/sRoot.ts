import { ViewportRootElement } from "sprotty";
import { Root } from "../model/root";

export class SRoot extends ViewportRootElement {
    override type: typeof Root.TYPE = Root.TYPE;
    animated?: boolean;

    changeRevision = 0;

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
