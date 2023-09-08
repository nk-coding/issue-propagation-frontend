import { useAppStore } from "@/store/app";

export async function withErrorMessage<T>(action: () => Promise<T>, message: string): Promise<T> {
    try {
        return await action();
    } catch (error) {
        const store = useAppStore();
        store.pushError(message);
        console.error(error);
        throw error;
    }
}
