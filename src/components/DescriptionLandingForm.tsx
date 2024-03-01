'use client'
import { useGeneratePageStore } from '@/store/generatePageStore'
import { FormEvent } from 'react'

export const DescriptionLandingForm = () => {

  const setPageHtml = useGeneratePageStore(state => state.setPageHtml)
  const setIsLoading = useGeneratePageStore(state => state.setIsLoading)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    try {
      const formData = new FormData(event.currentTarget)
      const title = formData.get("title")
      const desc = formData.get("description")

      const prompt = `Mi pagina se llama ${title}, ${desc}`
      const body = {
        prompt,
      }

      const resp = await fetch('http://localhost:3001/gen/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })

      const json = await resp.json()
      setPageHtml(json.data)
      setIsLoading(false)

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
      <input type="text" name="title" placeholder="Ingresa el nombre de la aplicación" className="input" />
      <textarea name="description" id="" cols={20} rows={5} className="input" ></textarea>
      <button type="submit" className="btn">Crear</button>
    </form>
  )
}
