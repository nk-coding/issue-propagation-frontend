// Utilities
import { defineStore } from "pinia";
import axios from "axios";
import { DefaultUserInfoFragment } from "@/graphql/generated";
import { useLocalStorage } from "@vueuse/core";
import { Lock } from "@/util/lock";
import { jwtDecode } from "jwt-decode";
import { withErrorMessage } from "@/util/withErrorMessage";
import { useRouter } from "vue-router";
import { OAuthRespose, TokenScope } from "@/views/auth/model";
import { shallowReactive } from "vue";

export const useAppStore = defineStore("app", {
    state: () => ({
        user: undefined as undefined | DefaultUserInfoFragment,
        accessToken: useLocalStorage("accessToken", ""),
        refreshToken: useLocalStorage("refreshToken", ""),
        errors: [] as string[]
    }),
    getters: {
        isLoggedIn(): boolean {
            return this.validTokenScope.includes(TokenScope.BACKEND);
        },
        validTokenScope(): TokenScope[] {
            if (!this.accessToken || this.accessToken.length <= 0) {
                return [];
            }
            const payload = jwtDecode(this.accessToken);
            const now = Date.now() / 1000;
            if ((payload.exp ?? now) < now || (payload.nbf ?? now) > now) {
                return [];
            }
            const audience = payload.aud;
            if (typeof audience == "string") {
                return [audience as TokenScope];
            }
            return audience as TokenScope[];
        },
        tokenValidityDuration(): number {
            if (!this.accessToken || this.accessToken.length <= 0) {
                return 0;
            }
            const payload = jwtDecode(this.accessToken);
            const exp = payload.exp;
            if (exp === undefined) {
                return Infinity;
            }
            const nbf = payload.nbf ?? payload.iat ?? (Date.now() / 1000);
            return (exp - nbf) * 1000;
        }
    },
    actions: {
        async setNewTokenPair(accessToken: string, refreshToken: string): Promise<void> {
            this.accessToken = accessToken;
            this.refreshToken = refreshToken;
        },
        async forceTokenRefresh(): Promise<void> {
            console.log("Refreshing token")
            const tokenResponse: OAuthRespose = await withErrorMessage(
                async () => (await axios.post("/api/login/authenticate/oauth/this-does-not-matter/token", {
                    grant_type: "refresh_token",
                    refresh_token: this.refreshToken,
                    client_id: import.meta.env.VITE_LOGIN_OAUTH_CLIENT_ID
                })).data,
                "Could not refresh access token."
            );
            console.log(tokenResponse)
            this.accessToken = tokenResponse.access_token;
            this.refreshToken = tokenResponse.refresh_token;
        },
        async getAccessToken(): Promise<string | undefined> {
            if (!this.refreshToken || this.refreshToken.length <= 0) {
                throw new Error("Not logged in");
            }
            const decoded = jwtDecode(this.accessToken);
            if (decoded.exp != undefined && (decoded.exp * 1000) - Date.now() < 30 * 1000) {
                try {
                    await this.forceTokenRefresh();
                } catch (err) {
                    useRouter().push({
                        name: "login"
                    });
                }
            }
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
