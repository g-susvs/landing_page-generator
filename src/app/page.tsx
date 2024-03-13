import { DescriptionLandingForm } from "@/components/DescriptionLandingForm";
import { SelectTemplate } from "@/components/SelectTemplate";
import { useGeneratePageStore } from "@/store/generatePageStore";
import { redirect } from "next/navigation";

export const dynamic = 'force-dynamic'

export default async function Home() {

  const resp = await fetch('http://localhost:3001/dom/exist')

  const json = await resp.json()

  if(json.template){
    redirect('/create')
  }

  
  return (
    <div className="p-4">
      <h4 className="text-3xl">Plantillas</h4>
      <br />
      <DescriptionLandingForm/>
      <br />
      <SelectTemplate/>
    </div>
  );
}
