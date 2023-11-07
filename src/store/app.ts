// Utilities
import { defineStore } from "pinia";
import axios from "axios";
import { DefaultUserInfoFragment } from "@/graphql/generated";
import { useLocalStorage } from "@vueuse/core";
import { Lock } from "@/util/lock";
import { jwtDecode } from "jwt-decode";

export const useAppStore = defineStore("app", {
    state: () => ({
        user: undefined as undefined | DefaultUserInfoFragment,
        accessToken: useLocalStorage("accessToken", ""),
        refreshToken: useLocalStorage("refreshToken", ""),
        tokenLock: new Lock(),
        errors: [] as string[]
    }),
    getters: {
        isLoggedIn(): boolean {
            return !!this.accessToken && !!this.user;
        }
    },
    actions: {
        async getAccessToken(): Promise<string> {
            if (!this.isLoggedIn) {
                throw new Error("Not logged in");
            }
            await this.tokenLock.acquire();
            const decoded = jwtDecode(this.accessToken);
            if (decoded.exp != undefined && decoded.exp * 1000 < Date.now()) {
                const response = await axios.post(`/api/login/authenticate/oauth/a/token`, {
                    grant_type: "refresh_token",
                    refresh_token: this.refreshToken,
                    client_id: import.meta.env.VITE_LOGIN_OAUTH_CLIENT_ID
                });
                this.accessToken = response.data.accessToken;
                this.refreshToken = response.data.refreshToken;
            }
            this.tokenLock.release();
            return this.accessToken!;
        },
        pushError(error: string) {
            this.errors = [...this.errors, error];
        },
        popError(): string | undefined {
            return this.errors.pop();
        }
    }
});
