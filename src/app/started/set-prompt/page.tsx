import { DescriptionLandingForm } from "@/components/initial";

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <div className="p-4">
      <h4 className="text-3xl">Plantillas</h4>
      <br />
      <DescriptionLandingForm />
    </div>
  );
}
