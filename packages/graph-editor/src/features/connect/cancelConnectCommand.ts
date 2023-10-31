import { injectable, inject } from "inversify";
import { CommandExecutionContext, CommandReturn, SChildElementImpl, SystemCommand, TYPES } from "sprotty";
import { CancelConnectAction } from "./cancelConnectAction";

@injectable()
export class CancelConnectCommand extends SystemCommand {
    static readonly KIND = CancelConnectAction.KIND;

    constructor(@inject(TYPES.Action) protected readonly action: CancelConnectAction) {
        super();
    }

    override execute(context: CommandExecutionContext): CommandReturn {
        const root = context.root;
        const toRemove = root.index.getById(this.action.relation);
        if (toRemove != undefined) {
            root.remove(toRemove as SChildElementImpl);
        }
        return root;
    }

    override undo(context: CommandExecutionContext): CommandReturn {
        return context.root;
    }

    override redo(context: CommandExecutionContext): CommandReturn {
        return context.root;
    }
}
