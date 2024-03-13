'use client'

import { useGeneratePageStore } from "@/store/generatePageStore"
import { EditSection } from "./EditSection"

export const Sidebar = () => {

    const html = useGeneratePageStore(state => state.html)
    const usage = useGeneratePageStore(state => state.usage)
    return (
        <aside className="sidebar">
            <h1 className="text-3xl">Landing Page Generator</h1>
            <hr />
            <br />
            {html && <EditSection />}

            {/* <ul className="text-lg">
                <li>Prompt tokens: {usage.prompt_tokens}</li>
                <li>Completion tokens: {usage.completion_tokens}</li>
                <li>Total tokens: {usage.total_tokens}</li>
            </ul> */}

        </aside>
    )
}
