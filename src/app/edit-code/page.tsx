"use client";
import { useGeneratePageStore } from "@/store";
import { Editor } from "@monaco-editor/react";

export default function EditCodePage() {
  const html = useGeneratePageStore((state) => state.html);

  return (
    <div className="p-4">
      <Editor
      className="w-[800px] h-[80vh]"
      value={html}
        theme="vs-dark"
        defaultLanguage="html"
      />
      <br />
      <button className="btn">Guardar</button>
    </div>
  );
}
