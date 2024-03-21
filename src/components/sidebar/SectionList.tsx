"use client";
import { useGeneratePageStore } from "@/store/generatePageStore";
import { SectionItem } from "./SectionItem";
import { SectionType } from "@/interfaces/api-response";

export const SectionList = () => {

  const sections = useGeneratePageStore((state) => state.sections);

  return (
    <>
      <div className="flex flex-col gap-4 h-[80vh] overflow-y-scroll p-4">
        {sections.map((section) => (
          <SectionItem key={section} title={section} sectionId={section as SectionType} />
        ))}
      </div>
    </>
  );
};
