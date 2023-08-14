import { ViewportRootElement } from "sprotty";
import { Root } from "../model/root";

export class SRoot extends ViewportRootElement {
    override type: typeof Root.TYPE = Root.TYPE;

    changeRevision = 0;

    generateStyle(): string {
        return `
            .label {
                display: inline-block;
                min-width: 50px;
                max-width: 200px;
                word-wrap: break-word;
                text-align: center;
                user-select: none;
            }

            .sprotty svg {
                background:
                  conic-gradient(from 90deg at 1px 1px, transparent 90deg, var(--diagram-grid) 0) 
                  calc(var(--diagram-scroll-x) * -1 * var(--diagram-zoom))
                  calc(var(--diagram-scroll-y) * -1 * var(--diagram-zoom)) /
                  calc(150px * var(--diagram-zoom-normalized)) calc(150px * var(--diagram-zoom-normalized));
            }
        `;
    }
}
