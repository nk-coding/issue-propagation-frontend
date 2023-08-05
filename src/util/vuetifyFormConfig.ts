import { ComponentBindsConfig } from "vee-validate";

const vuetifyFormConfig: Partial<
    ComponentBindsConfig<
        unknown,
        {
            "error-messages": string | string[];
        }
    >
> = {
    mapProps: (state) => ({
        "error-messages": state.errors
    })
};

export function wrapBinds<T extends (...args: any[]) => any>(
    defineComponentBinds: T
): (path: Parameters<T>[0]) => ReturnType<T> {
    return (path: string) => (defineComponentBinds as any)(path, vuetifyFormConfig);
}
