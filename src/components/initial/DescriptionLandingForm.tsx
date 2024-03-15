"use client";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useDataToStore } from "@/store";

export const DescriptionLandingForm = () => {
  const setPrompt = useDataToStore((state) => state.setPrompt);

  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get("title");
    const desc = formData.get("description");

    const prompt = `Mi pagina se llama ${title}, ${desc}`;
    setPrompt(prompt);
    router.push("/started/templates");
  }
  // async function onSubmit(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault()
  //   setIsLoading(true)
  //   try {
  //     const formData = new FormData(event.currentTarget)
  //     const title = formData.get("title")
  //     const desc = formData.get("description")

  //     const prompt = (html) ? desc : `Mi pagina se llama ${title}, ${desc}`
  //     const body = {
  //       template_option: templateOption,
  //       prompt,
  //     }
  //     console.log(body)

  //     const resp = await fetch('http://localhost:3001/dom/custom', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(body)
  //     })

  //     if (!resp.ok) {
  //       const error = await resp.json()
  //       console.log(error)
  //       setIsLoading(false)
  //       return
  //     }

  //     const json: APIResponse = await resp.json()
  //     setPageHtml(json.data)
  //     setIsLoading(false)
  //     console.log(json.usage)
  //     router.push('/create')

  //   } catch (error) {
  //     console.log(error)
  //     setIsLoading(false)
  //   }
  // }

  return (
    <form onSubmit={onSubmit} className="descriptionForm">
      <input
        type="text"
        name="title"
        placeholder="Ingresa el nombre de la aplicación"
        required
        className="input"
      />
      <textarea
        name="description"
        required
        id=""
        cols={20}
        rows={5}
        className="input"
      ></textarea>
      <button type="submit" className="btn">
        Siguiente
      </button>
    </form>
  );
};
