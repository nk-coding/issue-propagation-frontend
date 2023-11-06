export interface StrategyInstanceBase {
    type: "credential" | "redirect";
    id: string;
    name: string;
    isLoginActive: boolean;
    isSelfRegistrationActive: boolean;
    isSyncActive: boolean;
    doesImplicitRegister: boolean;
}

export interface Field {
    name: string;
    isPassword: boolean;
}

export interface CredentialStrategyInstance extends StrategyInstanceBase {
    type: "credential";
    loginFields: Field[];
    registerFields: Field[];
}

export interface RedirectStrategyInstance extends StrategyInstanceBase {
    type: "redirect";
}

export type StrategyInstance = CredentialStrategyInstance | RedirectStrategyInstance;

export interface GroupedStrategyInstances {
    credential: CredentialStrategyInstance[];
    redirect: RedirectStrategyInstance[];
}
