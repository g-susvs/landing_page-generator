'use client'

import { SelectTemplate } from "@/components/initial";
import { useDataToStore, useGeneratePageStore } from "@/store";
import { useRouter } from "next/navigation";

export default function SetPromptPage() {

  const router = useRouter()

  const prompt = useDataToStore(state => state.prompt)
  const templateOption = useDataToStore(state => state.template_option)
  const setPageHtml = useGeneratePageStore(state => state.setPageHtml)

  async function onSubmit() {
    try {

      const body = {
        template_option: templateOption,
        prompt,
      }
      console.log(body)

      const resp = await fetch('http://localhost:3001/api/landing/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })

      if (!resp.ok) {
        const error = await resp.json()
        console.log(error)
        return
      }

      const json = await resp.json()
      setPageHtml(json.data)
      console.log(json.usage)
      router.push('/create')

    } catch (error) {
      console.log(error)
      // setIsLoading(false)
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-5xl">Select a template</h1>
      <br />
      <button className="btn" onClick={onSubmit}>Enviar</button>
      <br />
      <br />
      <SelectTemplate />
    </div>
  );
}
