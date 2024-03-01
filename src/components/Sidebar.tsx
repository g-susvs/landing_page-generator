'use client'

import { useGeneratePageStore } from "@/store/generatePageStore"
import { DescriptionLandingForm } from "./DescriptionLandingForm"
import { EditSection } from "./EditSection"

export const Sidebar = () => {

    const html = useGeneratePageStore(state => state.html)
    return (
        <aside className="sidebar">
            <h1 className="text-3xl">Landing Page Generator</h1>
            <br />
            <DescriptionLandingForm />
            <br />
            <hr />
            {html && <EditSection />}
        </aside>
    )
}
