import { useForm } from "@/hooks";
import { APIResponse } from "@/interfaces/api-response";
import { useGeneratePageStore, useUiStore } from "@/store";
import { SiCodemagic } from "react-icons/si";

export const EditSectionWithAi = ({ sectionId }: { sectionId: string }) => {

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
        <>
            <span className="flex gap-2 items-center font-bold text-xl  text-purple-500">
                <h4 className="">Editar con AI</h4>
                <SiCodemagic />
            </span>
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
        </>
    )
}
