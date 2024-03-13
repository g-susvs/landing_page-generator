"use client";

import { useGeneratePageStore } from "@/store";
import { Editor } from "@monaco-editor/react";
import { useEffect, useState } from "react";
export const EditorCodeView = () => {
  const html = useGeneratePageStore((state) => state.html);
  const setEditedTemplate = useGeneratePageStore((state) => state.setEditedTemplate);

  useEffect(() => {
   setEditedTemplate(html)
  }, [])

  return (
    <div className="">
      <br />
      <Editor
        className="w-[800px] h-[80vh]"
        value={html}
        theme="vs-dark"
        defaultLanguage="html"
        options={{minimap:{enabled: false}}}
        onChange={(value) => setEditedTemplate(value!)}
      />
    </div>
  );
};
