import { create } from "zustand";

interface UiStore {
    showCode: boolean;
    toggleShowCode: () => void;
    loadingEditSection: boolean;
    toggleLoadingEditSection: () => void;
}

export const useUiStore = create<UiStore>((set) => ({
    showCode: true,
    toggleShowCode: () => set(state => ({
        showCode: !state.showCode
    })),
    loadingEditSection: false,
    toggleLoadingEditSection: () => set(state => ({
        loadingEditSection: !state.loadingEditSection
    })),
}))