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
        }
    },
    actions: {
        async setNewTokenPair(accessToken: string, refreshToken: string): Promise<void> {
            await this.tokenLock.acquire();
            this.accessToken = accessToken;
            this.refreshToken = refreshToken;
            this.tokenLock.release()
        },
        async getAccessToken(): Promise<string | undefined> {
            if (!this.isLoggedIn) {
                throw new Error("Not logged in");
            }
            await this.tokenLock.acquire();
            const decoded = jwtDecode(this.accessToken);
            if (decoded.exp != undefined && decoded.exp * 1000 < Date.now()) {
                try {
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
                } catch (err) {
                    useRouter().push({
                        name: "login"
                    });
                }
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
