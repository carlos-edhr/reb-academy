// components/trainers-section.tsx

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface Trainer {
  name: string;
  role: string;
  image: string;
  programs: string[];
  achievements: string[];
}

export function TrainersSection() {
  const trainers: Trainer[] = [
    {
      name: "Jose Luis Cortez",
      role: "Entrenador Principal",
      image: "/images/landing/entrenador-cortez.png",
      programs: ["Adultos", "Infantil"],
      achievements: [
        "Campeón de CIBACOPA con Zonkeys (2014)",
        "Novato del año CIBACOPA 2014",
        "Preparador físico en Zonkeys",
        "Entrenador certificado de fitness",
        "Jugador seleccionado Juego de Estrellas CIBAPAC 2023",
        "4 veces selección estatal Baja California",
        "Cofundador de REB Academy",
      ],
    },
    {
      name: "Juan Chicuate",
      role: "Entrenador Infantil",
      image: "/images/landing/entrenador-chicuate.png",
      programs: ["Infantil"],
      achievements: [
        "3er lugar regional Universidades Tecnológicas (MVP)",
        "Jugador en CIBAPAC (Vesa seguridad, Águilas, Magic)",
        "Selección Baja California Primera Fuerza 2022",
        "Tryouts LNBP (Soles de Mexicali, Freseros de Irapuato)",
      ],
    },
    {
      name: "Caneck Leyva López",
      role: "Entrenador Asistente",
      image: "/images/landing/entrenador-leyva.png",
      programs: ["Adultos", "Infantil"],
      achievements: [
        "Jugador en CIBAPAC (The Beach, SUN)",
        "3 temporadas en torneos de primera fuerza",
        "Becado CETYS Universidad",
        "Cofundador de REB Academy",
      ],
    },
  ];

  return (
    <section className="py-12 px-4 md:px-8 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Nuestro Equipo de Entrenadores <br />
          <Badge variant="outline" className="ml-3 bg-blue-100 text-blue-600">
            Profesionales Certificados
          </Badge>
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative aspect-square">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">
                    {trainer.name}
                  </h3>
                  <p className="text-gray-200">{trainer.role}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {trainer.programs.map((program) => (
                      <Badge
                        key={program}
                        variant="outline"
                        className="bg-green-100 text-green-600 border-transparent"
                      >
                        {program}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h4 className="font-semibold mb-3">Logros Destacados:</h4>
                <ul className="space-y-2">
                  {trainer.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="text-blue-500">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
