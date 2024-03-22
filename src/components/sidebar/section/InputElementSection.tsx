import { useEffect } from 'react';
import { useForm } from "@/hooks";
import { ElementToEdit } from "@/interfaces/api-response";
import { useUiStore } from '@/store';
import { uupdateSectionContent } from '@/helpers/updateSectionContent';

interface Props {
    element: ElementToEdit
}

export const InputElementSection = ({ element }: Props) => {

    let value = '';
    switch (element.type) {
        case 'title':
            value = element.text;
            break;
        case 'img':
            value = element.attributes.src ?? '';
            break;
        case 'link':
            value = element.attributes.href ?? '';
            break;
        default:
            value = element.text;
            break;
    }

    const { formState, onInputChange } = useForm({
        element_edit: value
    });

    //TODO: agregar loading
    const toggleLoadingEditSection = useUiStore(state => state.toggleLoadingEditSection)

    useEffect(() => {
        const typingTimer = setTimeout(() => {
            //TODO: Realizar la acción cuando el usuario deja de escribir
            uupdateSectionContent(element.text, formState.element_edit)
        }, 1000);

        return () => {
            clearTimeout(typingTimer)

        }; // Limpiar el temporizador cuando el componente se desmonta o el estado cambia
    }, [formState.element_edit, element.text]); // Ejecutar este efecto cuando el valor del input o el elemento cambie

    return (
        <div className='flex flex-col gap-2'>
            <span className='capitalize font-bold'>{element.type}</span>
            <input
                className='input'
                name="element_edit"
                type="text"
                value={formState.element_edit}
                onChange={onInputChange}
            />
        </div>
    );
};
