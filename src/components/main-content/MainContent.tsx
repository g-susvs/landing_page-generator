"use client";
import { useEffect } from "react";
import { useGeneratePageStore, useUiStore } from "@/store";
import { EditorCodeView, TopMenu } from ".";
import { LandingInterfaceView } from "./LandingInterfaceView";

export const MainContent = () => {
  const isLoading = useGeneratePageStore((state) => state.loading);
  const setPageHtml = useGeneratePageStore((state) => state.setPageHtml);
  const showPreview = useUiStore((state) => state.showPreview);

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
      <TopMenu />
      <br />
      {isLoading ? (
        <h2 className="text-3xl">...Cargando</h2>
      ) : (
        <div>{showPreview ? <LandingInterfaceView /> : <EditorCodeView />}</div>
      )}
    </main>
  );
};
