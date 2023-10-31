import { ContainerModule } from "inversify";
import { ConnectMouseListener } from "./connectMouseListener";
import { TYPES, configureActionHandler, configureCommand } from "sprotty";
import { ConnectAction } from "./connectAction";
import { UpdateRelationEndCommand } from "./updateRelationEndCommand";

export const connectModule = new ContainerModule((bind, _unbind, isBound, rebind) => {
    bind(ConnectMouseListener).toSelf().inSingletonScope();
    bind(TYPES.MouseListener).toService(ConnectMouseListener);
    configureActionHandler({ bind, isBound }, ConnectAction.KIND, ConnectMouseListener);
    configureCommand({ bind, isBound }, UpdateRelationEndCommand);
});
