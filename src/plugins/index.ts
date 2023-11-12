/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { loadFonts } from "./webfontloader";
import vuetify from "./vuetify";
import pinia from "../store";
import router from "../router";

// Types
import type { App } from "vue";
import { globalTimer } from "./global-timer";
import { useAppStore } from "@/store/app";

export function registerPlugins(app: App) {
    loadFonts();
    app.use(vuetify).use(router).use(pinia).use(globalTimer, {});

    globalTimer.addListener(async (state: ReturnType<typeof useAppStore>) => {
        const store = state ?? useAppStore();
        await store.getAccessToken();
        const duration = store.tokenValidityDuration;
        if (duration > 0 && duration < Infinity) {
            globalTimer.setTime(duration / 10);
        }
        return store;
    });
}
