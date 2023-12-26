// Utilities
import { defineStore } from "pinia";
import axios from "axios";
import { useLocalStorage } from "@vueuse/core";
import { jwtDecode } from "jwt-decode";
import { withErrorMessage } from "@/util/withErrorMessage";
import { useRouter } from "vue-router";
import { OAuthRespose, TokenScope } from "@/views/auth/model";
import { ClientReturnType, useClient } from "@/graphql/client";

interface GlobalUserPermissions {
    canCreateProjects: boolean;
    canCreateComponents: boolean;
    canCreateIMSs: boolean;
    canCreateTemplates: boolean;
}

export const useAppStore = defineStore("app", {
    state: () => ({
        user: undefined as undefined | (ClientReturnType<"getCurrentUser">["currentUser"] & GlobalUserPermissions),
        accessToken: useLocalStorage<string>("accessToken", ""),
        refreshToken: useLocalStorage<string>("refreshToken", ""),
        errors: [] as string[],
        clientId: import.meta.env.VITE_LOGIN_OAUTH_CLIENT_ID as string | undefined
    }),
    getters: {
        tokenValidityDuration(): number {
            if (!this.accessToken) {
                return 0;
            }
            const payload = jwtDecode(this.accessToken);
            const exp = payload.exp;
            if (exp === undefined) {
                return Infinity;
            }
            const nbf = payload.nbf ?? payload.iat ?? Date.now() / 1000;
            return (exp - nbf) * 1000;
        }
    },
    actions: {
        async setNewTokenPair(accessToken: string, refreshToken: string): Promise<void> {
            this.accessToken = accessToken;
            this.refreshToken = refreshToken;
            await this.validateUser();
        },
        async validateUser(): Promise<void> {
            if (!(await this.isLoggedIn())) {
                this.user = undefined;
            } else {
                const client = useClient();
                const userRes = await client.getCurrentUser();
                if (userRes.currentUser != undefined) {
                    this.user = {
                        ...userRes.currentUser,
                        canCreateProjects: userRes.canCreateProjects,
                        canCreateComponents: userRes.canCreateComponents,
                        canCreateIMSs: userRes.canCreateIMSs,
                        canCreateTemplates: userRes.canCreateTemplates
                    };
                } else {
                    this.user = undefined;
                }
            }
        },
        async forceTokenRefresh(): Promise<void> {
            const tokenResponse: OAuthRespose = await withErrorMessage(
                async () =>
                    (
                        await axios.post("/api/login/authenticate/oauth/this-does-not-matter/token", {
                            grant_type: "refresh_token",
                            refresh_token: this.refreshToken,
                            client_id: await this.getClientId()
                        })
                    ).data,
                "Could not refresh access token."
            );
            this.accessToken = tokenResponse.access_token;
            this.refreshToken = tokenResponse.refresh_token;
        },
        async getAccessToken(): Promise<string | undefined> {
            if (!this.refreshToken || !this.accessToken) {
                return undefined;
            }
            const decoded = jwtDecode(this.accessToken);
            if (decoded.exp != undefined && decoded.exp * 1000 - Date.now() < 30 * 1000) {
                try {
                    await this.forceTokenRefresh();
                } catch (err) {
                    return undefined;
                }
            }
            return this.accessToken!;
        },
        async isLoggedIn(): Promise<boolean> {
            try {
                return (await this.getValidTokenScopes()).includes(TokenScope.BACKEND);
            } catch {
                return false;
            }
        },
        async getValidTokenScopes(): Promise<TokenScope[]> {
            try {
                const token = await this.getAccessToken();
                if (token == undefined) {
                    return [];
                }
                const payload = jwtDecode(token);
                const audience = payload.aud;
                if (typeof audience == "string") {
                    return [audience as TokenScope];
                }
                return audience as TokenScope[];
            } catch {
                return [];
            }
        },
        pushError(error: string) {
            this.errors = [...this.errors, error];
        },
        popError(): string | undefined {
            return this.errors.pop();
        },
        async getClientId(): Promise<string> {
            if (this.clientId == undefined) {
                this.clientId = (await axios.get("/api/login-client-id")).data;
            }
            return this.clientId!;
        }
    }
});
