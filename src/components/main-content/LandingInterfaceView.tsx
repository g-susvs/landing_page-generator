import { useGeneratePageStore } from "@/store";

export const LandingInterfaceView = () => {
  const html = useGeneratePageStore((state) => state.html);

  return (
    <section>
      <div className="w-full h-full border-2 rounded-xl border-gray-300 aspect-video">
        <div className="bg-gray-200 p-4">
          <div className="flex gap-2">
            <div className="w-[15px] h-[15px] rounded-full bg-gray-400"></div>
            <div className="w-[15px] h-[15px] rounded-full bg-gray-400"></div>
            <div className="w-[15px] h-[15px] rounded-full bg-gray-400"></div>
          </div>
        </div>
        <iframe srcDoc={html} className="w-full h-full" />
      </div>
    </section>
  );
};
