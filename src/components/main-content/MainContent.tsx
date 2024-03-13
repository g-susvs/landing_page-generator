"use client";
import { useEffect } from "react";
import { useGeneratePageStore ,useUiStore } from "@/store";
import { EditorCodeView, TopMenu } from ".";

export const MainContent = () => {
  const html = useGeneratePageStore((state) => state.html)
  const isLoading = useGeneratePageStore((state) => state.loading)
  const setPageHtml = useGeneratePageStore((state) => state.setPageHtml)
  const showPreview = useUiStore((state) => state.showPreview)
  
  useEffect(() => {
    fetch("http://localhost:3001/dom/exist")
      .then((resp) => resp.json())
      .then((data) => {
        if (data.template) {
          setPageHtml(data.template);
        }
      });
  }, []);

  return (
    <main className="p-4">
        <TopMenu/>
      <br />
      {isLoading ? (
        <h2 className="text-3xl">...Cargando</h2>
      ) : (
        <div>
          {showPreview ? (
            <section>
              <div className="w-full h-full aspect-video">
                <iframe srcDoc={html} className="w-full h-full" />
              </div>
            </section>
          ) : (
            <section className="w-full">
              <EditorCodeView/>
            </section>
          )}
        </div>
      )}
    </main>
  );
};
