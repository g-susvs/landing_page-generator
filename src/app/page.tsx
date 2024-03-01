'use client'

import { FormEvent } from "react";
import { useForm } from "@/hooks/useForm";
import { useGeneratePageStore } from "@/store/generatePageStore";

export default function Home() {

  const history = useGeneratePageStore(state => state.histoy)
  const setHistory = useGeneratePageStore(state => state.setHistory)

  const setData = () => {
    setHistory({ role: "user", content: "contenido_user" })
    setHistory({ role: "assistant", content: "contenido_assistant" })
  }
  
  const view = () => {
    console.log(history)
  }
  
  const { description, onTextAreaChange } = useForm({
    description: ''
  })
  
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setHistory({ role: "user", content: description })
    setHistory({ role: "assistant", content: "contenido_assistant" })
  }

  return (
    <div className="">
      <h4>Initial page</h4>
      <br />
      <div className="flex gap-2">
        <button className="btn" onClick={view}>SHOW</button>
        <button className="btn" onClick={setData}>SET DATA</button>
      </div>
      <br />
      <form onSubmit={onSubmit} className="flex flex-col gap-2 w-[400px]">
        <textarea
          name="description"
          value={description}
          onChange={onTextAreaChange}
          id=""
          rows={5}
          className="input" />
        <button type="submit" className="btn">Enviar</button>
      </form>
    </div>
  );
}
