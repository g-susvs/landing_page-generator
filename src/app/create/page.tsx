import { MainContent } from "@/components/MainContent";
import { Sidebar } from "@/components/Sidebar";

export default function GeneratorPage() {

    // Gym Street
    // Tengo un gym muy popular en mi ciudad, el enfoque de mi gym está orientado a entrenar calistenia y pesas, tenemos profesores profesionales del deporte.
    // Agregale una calificación de 5 estrellas debajo del boton de reservar ahora
    // Agrega un menu al navbar que tenga los siguientes titulos: HOME, ABOUT, SERVICES

    // Delicias
    // Pastelería ubicado en el centro de la ciudad, especializada en pasteles de cumpleaños.

    // Mi negocio se llama 'Sabrocito', es un emprendimiento de comida rápida, nos especializamos en una gran diversidad de hamburguesas, es una restaurant muy popular en mi ciudad, nos ubicamos en el centro de lima.
    return (
        <div className="grid grid-cols-[300px_1fr]">
            <Sidebar />
            <MainContent />
        </div>
    );
}
