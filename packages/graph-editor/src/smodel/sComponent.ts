import { LinearAnimatable } from "../features/animation/model";
import { Component } from "../model/component";
import { Shape } from "../shape/shape";
import { ShapeGenerator } from "../shape/shapeGenerator";
import { SIssueAffected } from "./sIssueAffected";

const componentAnimatedFields = new Set(SIssueAffected.defaultAnimatedFields);

export class SComponent extends SIssueAffected implements Component, LinearAnimatable {
    declare type: typeof Component.TYPE;
    readonly animatedFields = componentAnimatedFields;
    shape!: Shape;

    constructor() {
        super();
        this.cachedProperty<Shape>("shape", () => {
            const label = this.nameLabel;
            return ShapeGenerator.DEFAULT.generateForInnerBounds(
                this.style.shape,
                {
                    ...label.size,
                    x: this.x - label.size.width / 2,
                    y: this.y - label.size.height / 2
                },
                this.style
            );
        });
    }
}
