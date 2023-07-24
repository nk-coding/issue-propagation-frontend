// Utilities
import { defineStore } from "pinia";
import axios from "axios";
import { useClient } from "@/graphql/client";
import { DefaultUserInfoFragment } from "@/graphql/generated";

export const useAppStore = defineStore("app", {
    state: () => ({
        user: undefined as undefined | DefaultUserInfoFragment,
        token: undefined as string | undefined,
        errors: [] as string[]
    }),
    getters: {
        isLoggedIn(): boolean {
            return !!this.token && !!this.user;
        }
    },
    actions: {
        async loginDemoUser() {
            const tokenResponse = await axios.get(`/api/login/token`, {
                params: {
                    username: "test-user"
                }
            });
            this.token = tokenResponse.data;
            const client = useClient();
            const currentUser = await client.getCurrentUser();
            this.user = currentUser.currentUser ?? undefined;
        },
        pushError(error: string) {
            this.errors = [...this.errors, error];
        },
        popError(): string | undefined {
            return this.errors.pop();
        }
    }
});
