// components/personal-training-section.tsx

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function PersonalTrainingSection() {
  const pricingTiers = [
    {
      people: "1 Persona",
      session: 1000,
      pack: 3600,
      benefits: [
        "Diseño de entrenamiento personalizado",
        "Corrección de micromovimientos",
        "Fotografía Profesional",
        "Análisis de tiro",
        "Planeación mensual",
      ],
    },
    {
      people: "2 Personas",
      session: 1800,
      pack: 6500,
      benefits: [
        "Todos los beneficios individuales",
        "Dinámicas de parejas",
        "Descuento grupal",
        "Sesiones coordinadas",
      ],
    },
    {
      people: "3-4 Personas",
      session: 2100,
      pack: 7600,
      benefits: [
        "Entrenamiento de equipo",
        "Estrategias grupales",
        "Maximo rendimiento",
        "Descuento progresivo",
      ],
    },
  ];

  return (
    <section className="py-12 px-4 md:px-8 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Entrenamiento Personalizado
            <br />
            <Badge
              variant="outline"
              className="ml-3 bg-green-100 text-green-600"
            >
              Nuevo
            </Badge>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mejora tu juego con planes adaptados a tus necesidades específicas y
            obtén resultados medibles
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {pricingTiers.map((tier, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">{tier.people}</h3>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Por sesión</p>
                  <p className="text-2xl font-bold">${tier.session}</p>
                  <p className="text-xs text-gray-500">MXN</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Pack 4 sesiones</p>
                  <p className="text-2xl font-bold">${tier.pack}</p>
                  <p className="text-xs text-gray-500">MXN</p>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {tier.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Badge className="bg-blue-100 text-blue-600">✓</Badge>
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full bg-green-600 hover:bg-green-700">
                Reservar ahora
              </Button>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">
            ¿Qué incluyen las sesiones?
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-3">Servicios principales</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Video análisis profesional</li>
                <li>• Reportes de progreso</li>
                <li>• Acceso a app de seguimiento</li>
                <li>• Nutrición deportiva básica</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-3">Beneficios adicionales</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Descuentos en equipamiento</li>
                <li>• Sesiones fotográficas mensuales</li>
                <li>• Acceso a clinics exclusivos</li>
                <li>• Evaluación física inicial</li>
              </ul>
            </div>
          </div>

          <Button asChild>
            <a
              href="https://forms.gle/zf4JkC1P4a2S14x18"
              target="_blank"
              rel="noopener"
              className="bg-blue-600 hover:bg-blue-700"
            >
              Registrarse ahora
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
