'use server'
import { ElementToEdit, SectionType } from "@/interfaces/api-response";

interface Args {
    sectionId: SectionType;
    tagName: string;
    oldText: string;
    currentText: string;
}

export const updateSectionContent = async ({
    sectionId,
    tagName,
    oldText,
    currentText
}: Args): Promise<{ template: string, sections: { [id: string]: ElementToEdit[] } }> => {

    const body = {
        sectionId,
        tagName,
        oldText,
        newText: currentText
    }

    const resp = await fetch('http://localhost:3001/api/landing/edit-element', {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })

    if (!resp.ok) {
        console.log('Error')
    }
    const json = await resp.json()


    return {
        template: json.data,
        sections: json.sections as { [id: string]: ElementToEdit[] }
    }
}
