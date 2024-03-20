import { Usage } from '@/interfaces/api-response';
import { create } from 'zustand'

interface GeneratePageState {
    html: string;
    loading: boolean;
    usage: Usage;
    templateOption: number;
    editedTemplate: string;
    sections: string[];

    setIsLoading: (value: boolean) => void;
    setPageHtml: (value: string) => void;
    setEditedTemplate: (value: string) => void;
    setUsage: (value: Usage) => void;
    setTemplateOption: (value: number) => void;
    setSections: (value: string[]) => void;
}

export const useGeneratePageStore = create<GeneratePageState>((set) => ({
    loading: false,
    html: '',
    templateOption: 0,
    editedTemplate: '',
    sections:[],
    usage: {
        prompt_tokens: 0,
        completion_tokens: 0,
        total_tokens: 0
    },
    setPageHtml: (value: string) => set(state => ({
        html: value
    })),
    setEditedTemplate: (value: string) => set(state => ({
        editedTemplate: value
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
    setTemplateOption: (value: number) => set(state => ({
        templateOption: value
    })),
    setSections: (value: string[]) => set(state => ({
        sections: [...value]
    }))
}))