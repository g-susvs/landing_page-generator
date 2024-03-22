'use client'

import { useEffect } from 'react';
import { useForm } from "@/hooks";
import { ElementToEdit } from "@/interfaces/api-response";
import { useGeneratePageStore, useUiStore } from '@/store';
import { updateSectionContent } from '@/helpers/updateSectionContent';

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
    const html = useGeneratePageStore(state => state.html)
    const setPageHtml = useGeneratePageStore(state => state.setPageHtml)
    const toggleLoadingEditSection = useUiStore(state => state.toggleLoadingEditSection)

    useEffect(() => {
        const typingTimer = setTimeout(() => {
            //TODO: Realizar la acción cuando el usuario deja de escribir
            updateSectionContent(html, element.text, formState.element_edit)
            // const newHtml = updateSectionContent(html, element.text, formState.element_edit)
            // setPageHtml(newHtml)
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
