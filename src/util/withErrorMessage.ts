import { useAppStore } from "@/store/app";

export async function withErrorMessage<T>(action: () => Promise<T>, message: string): Promise<T> {
    try {
        return await action();
    } catch (error) {
        pushErrorMessage(message);
        console.error(error);
        throw error;
    }
}

export function pushErrorMessage(message: string) {
    const store = useAppStore();
    store.pushError(message);
}
