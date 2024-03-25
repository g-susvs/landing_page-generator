'use client'

import { useForm } from "@/hooks";
import { useGeneratePageStore } from '@/store';
import { updateSectionContent } from '@/helpers/updateSectionContent';
import { IoSaveOutline } from 'react-icons/io5';
import { ElementProps } from "./Element";

export const ImageElementSection = ({ element, sectionId }: ElementProps) => {

    const imgSrc = element.attributes.src ?? ''
    const imgAlt = element.attributes.alt ?? ''

    const { formState, onInputChange } = useForm({
        src: imgSrc,
        alt: imgAlt
    });

    const setPageHtml = useGeneratePageStore(state => state.setPageHtml)
    const setSections = useGeneratePageStore(state => state.setSections)

    async function updateLandingContent() {
        updateSectionContent({
            sectionId,
            tagName: element.tagName,
            img: {
                oldValues:{
                    src:imgSrc,
                    alt: imgAlt
                },
                newValues: {
                    src: formState.src,
                    alt: formState.alt
                }
            }
        }
        ).then(data => {
            setPageHtml(data.template)
            setSections(data.sections)
        })
    }

    return (
        <div className='flex flex-col gap-2'>
            <div className="flex justify-between items-center">
                <span className='uppercase font-bold'>{element.type}</span>
                <button
                    className='editElement__button rounded--md'
                    aria-label="uUdate"
                    onClick={updateLandingContent}>
                    <IoSaveOutline />
                </button>
            </div>
            <hr />
            <div className='flex flex-row items-center gap-2'>
                <label>src</label>
                <input
                    className='p-2 border-[1px] w-full border-gray-500 rounded-md'
                    name="src"
                    type="text"
                    value={formState.src}
                    onChange={onInputChange}
                />
            </div>
            <div className='flex flex-row items-center gap-2'>
                <label>alt</label>
                <input
                    className='p-2 border-[1px] w-full border-gray-500 rounded-md'
                    name="alt"
                    type="text"
                    value={formState.alt}
                    onChange={onInputChange}
                />
            </div>

        </div>
    );
};
