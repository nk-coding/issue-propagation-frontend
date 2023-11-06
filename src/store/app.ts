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
                
            }
            // refresh if necessary
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
