import { GraphQLClient } from "graphql-request";
import { getSdk } from "./generated";

export function getClient() {
    return getSdk(new GraphQLClient("/api"));
}
