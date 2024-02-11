import { GraphQLClient, RequestMiddleware } from "graphql-request";
import { getSdk } from "./generated";
import { useAppStore } from "@/store/app";

export function useClient() {
    const store = useAppStore();

    const requestMiddleware: RequestMiddleware = async (request) => {
        return {
            ...request,
            headers: {
                ...request.headers,
                Authorization: `Bearer ${await store.getAccessToken()}`
            }
        };
    };

    const client = new GraphQLClient("/api/graphql", {
        requestMiddleware
    });

    return getSdk(client);
}

export type Client = ReturnType<typeof useClient>;
export type ClientReturnType<T extends keyof Client> = Awaited<ReturnType<Client[T]>>;
export type NodeReturnType<T extends keyof Client, N extends string> =
    ClientReturnType<T> extends { node?: infer X } ? (X extends { __typename?: N } ? X : never) : never;
