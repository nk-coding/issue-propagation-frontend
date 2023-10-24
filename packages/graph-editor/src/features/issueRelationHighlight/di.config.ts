import { ContainerModule } from "inversify";
import { TYPES, configureCommand } from "sprotty";
import { HighlightMouseListener } from "./highlightMouseListener";
import { HoverHighlightCommand } from "./hoverHighlightCommand";

export const hoverHighlightModule = new ContainerModule((bind, _unbind, isBound) => {
    bind(HighlightMouseListener).toSelf().inSingletonScope();
    bind(TYPES.MouseListener).toService(HighlightMouseListener);
    const context = { bind, isBound };
    configureCommand(context, HoverHighlightCommand);
});
