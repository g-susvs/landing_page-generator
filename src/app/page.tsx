import { SelectTemplate } from "@/components/SelectTemplate";
import { redirect } from "next/navigation";

export const dynamic = 'force-dynamic'

export default async function Home() {

  // const resp = await fetch('http://localhost:3001/gen/system')

  // const json = await resp.json()

  // console.log(json)

  // if(json.context) redirect('/create')

  
  return (
    <div className="p-4">
      <h4 className="text-3xl">Plantillas</h4>
      <br />
      <br />
      <SelectTemplate/>
    </div>
  );
}
