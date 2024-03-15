import { SelectTemplate } from "@/components/initial";

export default function SetPromptPage() {
  return (
    <div className="p-4">
      <h1 className="text-5xl">Select a template</h1>
      <br />
      <button className="btn">Enviar</button>
      <br />
      <br />
      <SelectTemplate />
    </div>
  );
}
