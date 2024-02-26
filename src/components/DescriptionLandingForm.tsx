'use client'
import { FormEvent } from 'react'

export const DescriptionLandingForm = () => {

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    console.log('...cargando')

    const formData = new FormData(event.currentTarget)
    const title = formData.get("title")
    const desc = formData.get("description")

    const body = {
      prompt: `Mi pagina se llama ${title}, ${desc}`
    }

    const resp = await fetch('http://localhost:3001/gen', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    const data = await resp.json()
    console.log(data)
  }
  return (
    <form onSubmit={onSubmit} >
      <input type="text" name="title" placeholder="Ingresa el nombre de la aplicación" />
      <br />
      <input type="text" name="description" placeholder="¿De que trata la landing?" />
      <br />
      <button type="submit">Crear</button>
    </form>
  )
}
