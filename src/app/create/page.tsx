import { MainContent } from "@/components/MainContent";
import { Sidebar } from "@/components/Sidebar";

export default function GeneratorPage() {

    // Smart gym
    // Tengo un gym muy popular en mi ciudad
    // Agregale una calificación de 5 estrellas debajo del boton de reservar ahora
    // Agrega un menu al navbar que tenga los siguientes titulos: HOME, ABOUT, SERVICES

    // Delicias
    // Pastelería ubicado en el centro de la ciudad, especializada en pasteles de cumpleaños.
    return (
        <div className="grid grid-cols-[300px_1fr]">
            <Sidebar />
            <MainContent />
        </div>
    );
}
