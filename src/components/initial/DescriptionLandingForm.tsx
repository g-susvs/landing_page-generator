'use client'
import { APIResponse } from '@/interfaces/api-response'
import { useGeneratePageStore } from '@/store/generatePageStore'
import {useRouter} from 'next/navigation'
import { FormEvent } from 'react'

export const DescriptionLandingForm = () => {

  const setPageHtml = useGeneratePageStore(state => state.setPageHtml)
  const html = useGeneratePageStore(state => state.html)
  const templateOption = useGeneratePageStore(state => state.templateOption)
  const setIsLoading = useGeneratePageStore(state => state.setIsLoading)

  const router = useRouter()

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    try {
      const formData = new FormData(event.currentTarget)
      const title = formData.get("title")
      const desc = formData.get("description")

      const prompt = (html) ? desc : `Mi pagina se llama ${title}, ${desc}`
      const body = {
        template_option: templateOption,
        prompt,
      }

      const resp = await fetch('http://localhost:3001/dom/custom', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })

      if (!resp.ok) {
        const error = await resp.json()
        console.log(error)
        setIsLoading(false)
        return
      }

      const json: APIResponse = await resp.json()
      setPageHtml(json.data)
      setIsLoading(false)
      console.log(json.usage)
      router.push('/create')

    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="descriptionForm"
    >
      <input type="text" name="title" placeholder="Ingresa el nombre de la aplicación" required className="input" />
      <textarea name="description" required id="" cols={20} rows={5} className="input" ></textarea>
      <button type="submit" className="btn" disabled={!!html}>Crear</button>
    </form>
  )
}
