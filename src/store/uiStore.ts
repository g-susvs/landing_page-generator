import { create } from "zustand";

interface UiStore{
    showPreview: boolean;
    toggleShowPreview: () => void;
    loadingEditSection: boolean;
    toggleLoadingEditSection: () => void;
}

export const useUiStore = create<UiStore>((set) => ({
    showPreview: true,
    toggleShowPreview: () => set(state => ({
        showPreview: !state.showPreview
    })),
    loadingEditSection: false,
    toggleLoadingEditSection:() => set(state => ({
        loadingEditSection: !state.loadingEditSection
    })),
}))