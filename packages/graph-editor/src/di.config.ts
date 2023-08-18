import {
    configureModelElement,
    loadDefaultModules,
    overrideViewerOptions,
    selectFeature,
    updateModule as sprottyUpdateModule,
    moveModule as sprottyMoveModule,
    zorderModule as sprottyZOrderModule,
    moveFeature,
    decorationModule,
    undoRedoModule,
    boundsFeature,
    TYPES,
    ConsoleLogger
} from "sprotty";
import { Container, ContainerModule } from "inversify";
import { Root } from "./model/root";
import { SRoot } from "./smodel/sRoot";
import { RootView } from "./views/rootView";
import { Component } from "./model/component";
import { SComponent } from "./smodel/sComponent";
import { ComponentView } from "./views/componentView";
import { Interface } from "./model/interface";
import { SInterface } from "./smodel/sInterface";
import { InterfaceView } from "./views/interfaceView";
import { Relation } from "./model/relation";
import { SRelation } from "./smodel/sRelation";
import { RelationView } from "./views/relationView";
import { Label } from "./model/label";
import { LabelView } from "./views/labelView";
import { zorderModule } from "./features/zorder/di.config";
import { updateModule } from "./features/update/di.config";
import { SLabel } from "./smodel/sLabel";
import { boundsModule } from "./features/bounds/di.config";
import { moveModule } from "./features/move/di.config";
import { CommandStack } from "./base/commandStack";
import { VersionChip } from "./model/versionChip";
import { SVersionChip } from "./smodel/sVersionChip";
import { VersionChipView } from "./views/versionChipView";

const diagramModule = new ContainerModule((bind, unbind, isBound, rebind) => {
    const context = { bind, unbind, isBound, rebind };

    rebind(TYPES.ICommandStack).to(CommandStack).inSingletonScope();
    rebind(TYPES.ILogger).toConstantValue(new ConsoleLogger());

    configureModelElement(context, Root.TYPE, SRoot, RootView);
    configureModelElement(context, Component.TYPE, SComponent, ComponentView, {
        enable: [selectFeature, moveFeature]
    });
    configureModelElement(context, Interface.TYPE, SInterface, InterfaceView, {
        enable: [selectFeature, moveFeature]
    });
    configureModelElement(context, Relation.TYPE, SRelation, RelationView);
    configureModelElement(context, Label.TYPE, SLabel, LabelView, {
        enable: [boundsFeature]
    });
    configureModelElement(context, VersionChip.TYPE, SVersionChip, VersionChipView)
});

/**
 * Creates the module for the diagram ui
 *
 * @param widgetId the id of the div to use
 * @returns the container
 */
export function createContainer(widgetId: string): Container {
    const container = new Container();
    loadDefaultModules(container, {
        exclude: [sprottyUpdateModule, sprottyMoveModule, sprottyZOrderModule, decorationModule, undoRedoModule]
    });

    container.load(zorderModule, updateModule, boundsModule, moveModule);

    container.load(diagramModule);

    overrideViewerOptions(container, {
        needsClientLayout: true,
        needsServerLayout: false,
        baseDiv: widgetId
    });
    return container;
}
