import { GraphQLClient } from "graphql-request";
import { getSdk } from "./generated";
import { useAppStore } from "@/store/app";

export function useClient() {
    const store = useAppStore();
    // remove demo code
    if (!store.isLoggedIn) {
        store.loginDemoUser();
    }

    const headers: Record<string, string> = {};
    if (store.token) {
        headers.Authorization = `Bearer ${store.token}`;
    }
    return getSdk(
        new GraphQLClient("/api/graphql", {
            headers
        })
    );
}

export type Client = ReturnType<typeof useClient>;
export type ClientReturnType<T extends keyof Client> = Awaited<ReturnType<Client[T]>>;
export type NodeReturnType<T extends keyof Client, N extends string> = ClientReturnType<T> extends { node?: infer X }
    ? X extends { __typename?: N }
        ? X
        : never
    : never;
