import { create } from "zustand";

interface UiStore{
    showPreview: boolean;
    toggleShowPreview: () => void
}

export const useUiStore = create<UiStore>((set) => ({
    showPreview: true,
    toggleShowPreview: () => set(state => ({
        showPreview: !state.showPreview
    })),
   
}))