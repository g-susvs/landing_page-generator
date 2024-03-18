"use client";
import { useUiStore } from "@/store";
import { EditorCodeView, TopMenu } from ".";
import { LandingInterfaceView } from "./LandingInterfaceView";

export const MainContent = () => {
  const showPreview = useUiStore((state) => state.showPreview);

  return (
    <main className="p-4">
      <TopMenu />
      <br />
      
        <div>{showPreview ? <LandingInterfaceView /> : <EditorCodeView />}</div>
    </main>
  );
};
