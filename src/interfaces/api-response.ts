export interface APIResponse {
    data:  string;
    usage: any;
    sections: SectionType[];
}
export type SectionType = 'header' | 'hero' | 'faq' | 'features' | 'pricing' | 'testimonials' | 'about' | 'contact' | 'cta' | 'footer'

export interface Usage {
    prompt_tokens:     number;
    completion_tokens: number;
    total_tokens:      number;
}


