// components/merchandise-section.tsx

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function MerchandiseSection() {
  const products = [
    {
      id: 1,
      name: "Playera Oficial REB Academy",
      price: 450,
      image: "/images/landing/merch/1.png",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#1e40af", "#dc2626", "#000000"],
      category: "Nuevo",
    },
    {
      id: 2,
      name: "Gorra Performance",
      price: 350,
      image: "/images/landing/merch/1.png",
      sizes: ["Única"],
      colors: ["#1e3a8a", "#4b5563"],
      category: "Más vendido",
    },
    {
      id: 3,
      name: "Hoodie Premium",
      price: 650,
      image: "/images/landing/merch/3.png",
      sizes: ["M", "L", "XL"],
      colors: ["#1e3a8a", "#171717"],
      category: "Edición limitada",
    },
    {
      id: 4,
      name: "Playera REB KIDS",
      price: 380,
      image: "/images/landing/merch/4.png",
      sizes: ["S", "M", "L"],
      colors: ["#1e40af", "#ffffff"],
      category: "Nuevo",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-8 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mercancía Oficial <br />
            <Badge variant="outline" className="ml-3 bg-red-100 text-red-600">
              Nueva Colección
            </Badge>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Viste como profesional con nuestra línea exclusiva de ropa deportiva
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.category && (
                  <Badge className="absolute top-2 left-2 bg-white text-gray-900 hover:bg-white">
                    {product.category}
                  </Badge>
                )}
              </div>

              <div className="p-4">
                <h3 className="font-bold mb-2">{product.name}</h3>

                <div className="flex items-center justify-between mb-3">
                  <p className="text-2xl font-bold text-blue-600">
                    ${product.price} MXN
                  </p>
                  <Badge variant="outline" className="bg-gray-100">
                    {product.sizes.join(", ")}
                  </Badge>
                </div>

                <div className="flex gap-2 mb-4">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-6 h-6 rounded-full border-2 border-gray-200"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Agregar al carrito
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Ver catálogo completo
          </Button>
        </div>
      </div>
    </section>
  );
}
