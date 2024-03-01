import { create } from 'zustand'

interface GeneratePageState {
    html: string;
    loading: boolean;
    setIsLoading: (value: boolean) => void;
    setPageHtml: (value: string) => void;
}

interface Message {
    role: 'assistant' | 'user',
    content: string
}

export const useGeneratePageStore = create<GeneratePageState>((set) => ({
    loading: false,
    html: '',
    history: [],
    setPageHtml: (value: string) => set(state => ({
        html: value
    })),
    setIsLoading: (value: boolean) => set(state => ({
        loading: value
    })),
}))