import { GraphQLClient } from "graphql-request";
import { getSdk } from "./generated";

export function useClient() {
    return getSdk(new GraphQLClient("/api"));
}

export type Client = ReturnType<typeof useClient>;
export type ClientReturnType<T extends keyof Client> = Awaited<ReturnType<Client[T]>>;
export type NodeReturnType<T extends keyof Client, N extends string> = ClientReturnType<T> extends { node?: infer X }
    ? X extends { __typename?: N }
        ? X
        : never
    : never;
