// components/programs-section.tsx

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export interface ProgramLevel {
  title: string;
  description: string;
  schedule: string;
  ages: string;
  prices: {
    month: number;
    week: number;
    session: number;
  };
  coaches: string[];
  enrollmentLink: string;
  image?: string;
}

export function ProgramsSection() {
  const kidsPrograms: ProgramLevel[] = [
    {
      title: "Programa Infantil",
      description:
        "Desarrollo integral de habilidades básicas y trabajo en equipo",
      schedule: "Martes y Jueves 3:30 PM - 5:00 PM",
      ages: "6 - 11 años",
      prices: { month: 1800, week: 550, session: 300 },
      coaches: ["Juan Chicuate", "Jose Luis Cortez", "Caneck Leyva"],
      enrollmentLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSeT3andelMhR02n7sBPb_DWJ9CBgYj9C1Onw6WXdd3QTYH5Sg/viewform",
      image: "/images/landing/programs8.JPG",
    },
  ];

  const adultPrograms: ProgramLevel[] = [
    {
      title: "Nivel 1 - Fundamentos",
      description:
        "Dominio de técnicas básicas y construcción de fundamentos sólidos",
      schedule: "Martes y Jueves 5:00 PM - 7:00 PM",
      ages: "12+ años",
      prices: { month: 2100, week: 600, session: 350 },
      coaches: ["Jose Luis Cortez", "Caneck Leyva"],
      enrollmentLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSeT3andelMhR02n7sBPb_DWJ9CBgYj9C1Onw6WXdd3QTYH5Sg/viewform",
      image: "/images/landing/programs5.JPG",
    },
    {
      title: "Nivel 2 - Skill Based",
      description:
        "Desarrollo avanzado de habilidades específicas por posición",
      schedule: "Martes y Jueves 5:00 PM - 7:00 PM",
      ages: "12+ años",
      prices: { month: 2100, week: 600, session: 350 },
      coaches: ["Jose Luis Cortez", "Caneck Leyva"],
      enrollmentLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSeT3andelMhR02n7sBPb_DWJ9CBgYj9C1Onw6WXdd3QTYH5Sg/viewform",
      image: "/images/landing/programs10.JPG",
    },
    {
      title: "Elite",
      description:
        "Entrenamiento táctico para situaciones reales de juego competitivo",
      schedule: "Martes y Jueves 5:00 PM - 7:00 PM",
      ages: "12+ años",
      prices: { month: 2100, week: 600, session: 350 },
      coaches: ["Jose Luis Cortez", "Caneck Leyva"],
      enrollmentLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSeT3andelMhR02n7sBPb_DWJ9CBgYj9C1Onw6WXdd3QTYH5Sg/viewform",
      image: "/images/landing/programs3.JPG",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-8 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Programas y Niveles <br />
          <Badge variant="outline" className="ml-3 bg-blue-100 text-blue-600">
            Cupo Limitado
          </Badge>
        </h2>

        <Tabs defaultValue="kids" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-xs mx-auto mb-8">
            <TabsTrigger value="kids">Infantil (6-11)</TabsTrigger>
            <TabsTrigger value="adults">Adultos (12+)</TabsTrigger>
          </TabsList>

          <TabsContent value="kids">
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
              {kidsPrograms.map((program, index) => (
                <ProgramCard key={index} program={program} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="adults">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {adultPrograms.map((program, index) => (
                <ProgramCard key={index} program={program} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function ProgramCard({ program }: { program: ProgramLevel }) {
  const benefits = [
    { label: "Playera", icon: "👕" },
    { label: "Credencial", icon: "🪪" },
    { label: "Convenios", icon: "🤝" },
    { label: "Mes de entrenamiento", icon: "🏀" },
    { label: "Galería fotográfica", icon: "📸" },
    { label: "Media day mensual", icon: "🌟" },
  ];

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-video overflow-hidden rounded-t-lg">
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover"
        />
        <Badge variant="secondary" className="absolute top-2 right-2">
          Cupo máximo por grupo: {program.title.includes("Infantil") ? 12 : 10}
        </Badge>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{program.title}</h3>
        <p className="text-gray-600 mb-4">{program.description}</p>

        {/* Sección de beneficios para todos los programas */}
        <div className="mb-6">
          <h4 className="font-medium mb-3">Beneficios incluidos:</h4>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-3  rounded-lg"
              >
                <span className="text-xl">{benefit.icon}</span>
                <span className="text-sm font-medium">{benefit.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-medium">Horario:</span>
            <span className="text-gray-600">{program.schedule}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">Edades:</span>
            <Badge variant="outline" className="bg-green-100 text-green-600">
              {program.ages}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">Entrenadores:</span>
            <div className="flex flex-wrap gap-2">
              {program.coaches.map((coach, index) => (
                <Badge key={index} variant="outline">
                  {coach}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-2 bg-blue-50 rounded-lg">
            <p className="text-xs text-gray-500">Mensual</p>
            <p className="font-bold">${program.prices.month} MXN</p>
          </div>
          <div className="text-center p-2 bg-blue-50 rounded-lg">
            <p className="text-xs text-gray-500">Semanal</p>
            <p className="font-bold">${program.prices.week} MXN</p>
          </div>
          <div className="text-center p-2 bg-blue-50 rounded-lg">
            <p className="text-xs text-gray-500">Por clase</p>
            <p className="font-bold">${program.prices.session} MXN</p>
          </div>
        </div>

        <a
          href={program.enrollmentLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center justify-center transition-colors"
        >
          Inscribirse ahora
        </a>
      </div>
    </Card>
  );
}
