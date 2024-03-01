'use client'
import { useGeneratePageStore } from "@/store/generatePageStore"
import { useState } from "react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

export const MainContent = () => {

    const html = useGeneratePageStore(state => state.html)
    const isLoading = useGeneratePageStore(state => state.loading)

    const [showPreviw, setShowPreviw] = useState(true)

    return (
        <main className="p-4">
            <section className="flex gap-4">
                <button className="btn" onClick={() => setShowPreviw(true)}>PREVIEW</button>
                <button className="btn" onClick={() => setShowPreviw(false)}>CODE</button>
                <button className="btn" disabled={true} onClick={() => { }}>EXPORT</button>
            </section>
            <br />
            {
                isLoading
                    ? (<h2 className="text-3xl">...Cargando</h2>)
                    :
                    <div>

                        {
                            (showPreviw)
                                ? <section>
                                    <div
                                        className="w-full h-full aspect-video"
                                    >
                                        <iframe srcDoc={html} className="w-full h-full" />
                                    </div>
                                </section>
                                :
                                <section className="w-full">
                                    <div className="max-w-screen-lg mx-auto overflow-x-auto">
                                        <SyntaxHighlighter language="html" style={vscDarkPlus}>
                                            {html}
                                        </SyntaxHighlighter>
                                    </div>
                                </section>
                        }
                    </div>
            }
        </main>
    )
}
