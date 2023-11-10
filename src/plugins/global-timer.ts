import { Plugin } from "@vue/runtime-core";
import { App } from "vue";

class GlobalTimer {
    private timerHandle: any | undefined = undefined;
    private readonly listeners: Map<
        TimerListener<any>,
        { once: boolean; state: any; currentPromise: Promise<any> | undefined }
    >;

    public readonly apiObject = {
        addListener: this.addListener.bind(this),
        removeListener: this.removeListener.bind(this),
        setTime: this.setTime.bind(this)
    };

    constructor() {
        this.timerHandle = undefined;
        this.listeners = new Map();
    }

    install(app: App<any>, options: { interval?: number; initialListeners?: TimerListener<any>[] }) {
        app.config.globalProperties.$timer = this.apiObject;

        for (const listener of options.initialListeners ?? []) {
            this.addListener(listener);
        }

        if (this.timerHandle === undefined) {
            console.log("Setting timer with interval ", options.interval);
            this.timerHandle = setInterval(this.onTimer.bind(this), options.interval ?? 1000);
        }
    }

    private onTimer() {
        const toDelete = [];
        for (const [listener, data] of this.listeners) {
            if (data.currentPromise === undefined) {
                const response = listener(data.state);
                if (response instanceof Promise) {
                    data.currentPromise = response;
                    response.then((newState) => (data.state = newState));
                } else {
                    data.state = response;
                }
                if (data.once) {
                    toDelete.push(listener);
                }
            }
        }
        for (const listener of toDelete) {
            this.listeners.delete(listener);
        }
    }

    addListener<T>(listener: TimerListener<T>, once: boolean = false, state?: T) {
        this.listeners.set(listener, { once, state, currentPromise: undefined });
    }

    removeListener<T>(listener: TimerListener<T>) {
        this.listeners.delete(listener);
    }

    setTime(ms: number) {
        if (ms <= 0 || !isFinite(ms)) {
            throw new Error("Timer time must be bigger than 0");
        }
        if (this.timerHandle !== undefined) {
            console.log("Setting interval to " + ms);
            clearInterval(this.timerHandle);
            this.timerHandle = setInterval(this.onTimer.bind(this), ms);
        }
    }
}

export type TimerListener<T> = (state: T) => T | Promise<T>;
export const globalTimer = new GlobalTimer();
export function useTimer() {
    return globalTimer.apiObject;
}

declare module "@vue/runtime-core" {
    export interface ComponentCustomProperties {
        /**
         * Global timer that ticks with a settable frequency and calls the attached callbacks
         */
        $timer: typeof GlobalTimer.prototype.apiObject;
    }
}
