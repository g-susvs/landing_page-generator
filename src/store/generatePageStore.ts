import { Usage } from '@/interfaces/api-response';
import { create } from 'zustand'

interface GeneratePageState {
    html: string;
    loading: boolean;
    usage: Usage;
    histoy:Message[]
    setIsLoading: (value: boolean) => void;
    setPageHtml: (value: string) => void;
    setUsage: (value: Usage) => void;
    setHistory: (value: Message) => void;
}

interface Message {
    role: 'assistant' | 'user',
    content: string
}

export const useGeneratePageStore = create<GeneratePageState>((set) => ({
    loading: false,
    html: '',
    histoy: [],
    usage: {
        prompt_tokens: 0,
        completion_tokens: 0,
        total_tokens: 0
    },
    setPageHtml: (value: string) => set(state => ({
        html: value
    })),
    setIsLoading: (value: boolean) => set(state => ({
        loading: value,
        usage: (state.loading)?{
            prompt_tokens: 0,
            completion_tokens: 0,
            total_tokens: 0
        }: state.usage
    })),
    setUsage: (value: Usage) => set(state => ({
        usage: value
    })),
    setHistory:  (value: Message) => set(state => ({
        histoy: [...state.histoy, value]
    })),
}))