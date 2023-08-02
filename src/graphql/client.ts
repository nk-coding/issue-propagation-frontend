import { GraphQLClient } from "graphql-request";
import { getSdk } from "./generated";
import { useAppStore } from "@/store/app";

export function useClient() {
    const store = useAppStore();
    const client = new GraphQLClient("/api/graphql");

    function setHeaders() {
        const headers: Record<string, string> = {};
        if (store.token) {
            headers.Authorization = `Bearer ${store.token}`;
        }
        client.setHeaders(headers);
    }

    // remove demo code
    if (!store.token) {
        store.loginDemoUser().then(() => {
            setHeaders();
        });
    } else {
        setHeaders();
    }

    return getSdk(client);
}

export type Client = ReturnType<typeof useClient>;
export type ClientReturnType<T extends keyof Client> = Awaited<ReturnType<Client[T]>>;
export type NodeReturnType<T extends keyof Client, N extends string> = ClientReturnType<T> extends { node?: infer X }
    ? X extends { __typename?: N }
        ? X
        : never
    : never;
