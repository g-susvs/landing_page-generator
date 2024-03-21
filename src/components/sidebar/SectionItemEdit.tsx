import { useGeneratePageStore, useUiStore } from '@/store'
import { useForm } from '@/hooks'
import { APIResponse, SectionType } from '@/interfaces/api-response'

export const SectionItemEdit = ({ sectionId }: { sectionId: SectionType }) => {
    const template = useGeneratePageStore((state) => state.html);
    const setPageHtml = useGeneratePageStore((state) => state.setPageHtml);
    const toggleLoadingEditSection = useUiStore((state) => state.toggleLoadingEditSection);

    const { description, onTextAreaChange } = useForm({
        description: ""
    });

    async function sendInfoToEdit() {
        toggleLoadingEditSection()
        try {
            const body = {
                prompt: description,
                section: sectionId,
                template
            };

            const resp = await fetch("http://localhost:3001/api/landing/edit-section", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
            if (!resp.ok) {
                const error = await resp.json();
                console.log(error);
                toggleLoadingEditSection()
                return;
            }
            const json: APIResponse = await resp.json();
            setPageHtml(json.data);
            console.log(json.usage);
            toggleLoadingEditSection()
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='rounded-md border-2 border-gray-300 p-2 flex flex-col gap-2'>
            <textarea
                name="description"
                value={description}
                style={{ resize: 'none' }}
                onChange={onTextAreaChange}
                rows={5}
                className="input"

            />
            <button type="button" className="btn" onClick={sendInfoToEdit}>
                Realizar cambio
            </button>
        </div>
    )
}
