// Utilities
import { defineStore } from "pinia";
import axios from "axios";

export const useAppStore = defineStore("app", {
    state: () => ({
        user: undefined,
        token: undefined as string | undefined
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
        }
    }
});

//TODO remove debug code
useAppStore().loginDemoUser();
