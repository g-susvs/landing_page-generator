import { Sidebar } from "@/components/Sidebar";

export default function EditCodePage() {
  return (
    <div className="grid grid-cols-[300px_1fr]">
      <Sidebar />
      <main>
        <h1>This is a editor code page</h1>
      </main>
    </div>
  );
}
