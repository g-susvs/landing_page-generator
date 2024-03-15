"use client";

import { useGeneratePageStore } from "@/store/generatePageStore";
import Image from "next/image";

export const SelectTemplate = () => {
  const setTemplateOption = useGeneratePageStore(
    (state) => state.setTemplateOption
  );

  const onSetTemplate = async (option: number) => {
    setTemplateOption(option);
  };

  return (
    <div className="flex gap-2">
      <div className="cardTemplate" onClick={() => onSetTemplate(1)}>
        <Image
          src="/templates/template.png"
          width={300}
          height={200}
          alt="template 1"
          className="cardTemplate__img"
        />
      </div>
      <div className="cardTemplate" onClick={() => onSetTemplate(2)}>
        <Image
          src="/templates/template1.jpg"
          width={300}
          height={200}
          alt="template 1"
          className="cardTemplate__img"
        />
      </div>
      <div className="cardTemplate" onClick={() => onSetTemplate(3)}>
        <Image
          src="/templates/template2.png"
          width={300}
          height={200}
          alt="template 2"
          className="cardTemplate__img"
        />
      </div>
    </div>
  );
};
