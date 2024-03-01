import { MainContent } from "@/components/MainContent";
import { Sidebar } from "@/components/Sidebar";

export default function GeneratorPage() {

    // Smart gym
    // Tengo un gym muy popular en mi ciudad
    // Agregale una calificación de 5 estrellas debajo del boton de reservar ahora
    return (
        <div className="grid grid-cols-[300px_1fr]">
            <Sidebar />
            <MainContent />
        </div>
    );
}
