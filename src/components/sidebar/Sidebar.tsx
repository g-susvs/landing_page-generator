'use client'

import { useGeneratePageStore } from "@/store/generatePageStore"
import { SectionList } from "./"

export const Sidebar = () => {

    const html = useGeneratePageStore(state => state.html)
    return (
        <aside className="sidebar h-full">
            <div className="p-4">
                <span className="bg-black text-2xl text-white font-bold font-sans px-2 py-1 rounded-md">
                    LPB
                </span>
            </div>
            <hr />
            {html && <SectionList />}
        </aside>
    )
}
