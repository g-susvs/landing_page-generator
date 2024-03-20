"use client";
import { useForm } from "@/hooks/useForm";
import { APIResponse } from "@/interfaces/api-response";
import { useUiStore } from "@/store";
import { useGeneratePageStore } from "@/store/generatePageStore";
import { ChangeEvent, useState } from "react";

export const EditSection = () => {

  const [checked, setChecked] = useState("hero");
  
  const sections = useGeneratePageStore((state) => state.sections);
  const template = useGeneratePageStore((state) => state.html);
  const setPageHtml = useGeneratePageStore((state) => state.setPageHtml);
  const toggleLoadingEditSection = useUiStore((state) => state.toggleLoadingEditSection);

  const { description, onTextAreaChange } = useForm({
    description: ""
  });

  const onOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.value);
  };

  async function sendInfoToEdit() {
toggleLoadingEditSection()
    try {
      const body = {
        prompt: description,
        section: checked,
        template
      };

      const resp = await fetch("http://localhost:3001/api/landing/edit-section", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });
      if (!resp.ok) {
        const error = await resp.json();
        console.log(error);
        return;
      }
      const json: APIResponse = await resp.json();
      setPageHtml(json.data);
      console.log(json.usage);
      toggleLoadingEditSection()
      // setUsage(json.usage)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h3 className="text-2xl">Editar una sección</h3>
      <br />
      <textarea
        name="description"
        value={description}
        onChange={onTextAreaChange}
        rows={5}
        className="input"
      />
      <div className="flex flex-col">
        {sections.map((section) => (
          <div key={section} className="flex flex-row gap-2">
            <input
              type="radio"
              name="section"
              value={section}
              checked={checked === section}
              onChange={onOptionChange}
            />
            <label>{section}</label>
          </div>
        ))}
      </div>
      <br />
      <button type="button" className="btn" onClick={sendInfoToEdit}>
        Cambiar
      </button>
    </>
  );
};
