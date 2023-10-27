import { inject, onMounted, onUnmounted } from "vue";
import { eventBusKey } from "./keys";

export type Events = {
    "create-issue": undefined;
    "create-project": undefined;
    "create-component": undefined;
    "create-ims": undefined;
    "add-component-version-to-project": undefined;
    "layout-component-graph": undefined;
};

export function onEvent(event: keyof Events, handler: (event: Events[keyof Events]) => void) {
    const eventBus = inject(eventBusKey);
    onMounted(() => {
        eventBus?.on(event, handler);
    });
    onUnmounted(() => {
        eventBus?.off(event, handler);
    });
}
