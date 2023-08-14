import { ContainerModule } from "inversify";
import { TYPES } from "sprotty";
import { HiddenBoundsUpdater } from "./hiddenBoundsUpdater";

export const boundsModule = new ContainerModule((bind, _unbind, isBound, rebind) => {
    bind(HiddenBoundsUpdater).toSelf().inSingletonScope();
    rebind(TYPES.HiddenVNodePostprocessor).toService(HiddenBoundsUpdater);
});
