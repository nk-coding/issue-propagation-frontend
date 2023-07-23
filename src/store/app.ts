// Utilities
import { defineStore } from "pinia";
import axios from "axios";
import { reactive } from "vue";

export const useAppStore = defineStore("app", {
    state: () => ({
        user: undefined,
        token: undefined as string | undefined,
        errors: [] as string[]
    }),
    getters: {
        isLoggedIn(): boolean {
            return !!this.token;
        }
    },
    actions: {
        async loginDemoUser() {
            const tokenResponse = await axios.get("/api/login/token?username=test-user");
            this.token = tokenResponse.data;
        },
        pushError(error: string) {
            this.errors = [...this.errors, error];
        },
        popError(): string | undefined {
            return this.errors.pop();
        }
    }
});

//TODO remove debug code
useAppStore().loginDemoUser();
