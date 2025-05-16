// components/gallery-section.tsx
"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Instagram } from "lucide-react";

export function GallerySection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const galleryImages = Array.from({ length: isMobile ? 6 : 27 }).map(
    (_, index) => ({
      id: index + 1,
      src: `/images/landing/gallery/${index}.JPG`,
      alt: `Entrenamiento REB Academy ${index + 1}`,
      category:
        index % 3 === 0 ? "Clases" : index % 2 === 0 ? "Partidos" : "Eventos",
    }),
  );

  if (!isMounted) return null;

  return (
    <section className="py-12 px-4 md:px-8 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestra Galería
            <span className="block text-lg font-normal mt-2 text-gray-600">
              Momentos que definen nuestro espíritu deportivo
            </span>
          </h2>
        </div>

        <div className="columns-1 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((image) => (
            <Card
              key={image.id}
              className="group relative break-inside-avoid cursor-pointer hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <Badge
                      variant="outline"
                      className="bg-blue-100 text-blue-600 mb-2"
                    >
                      {image.category}
                    </Badge>
                    <p className="font-medium">REB Academy {image.category}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/reb_academy/"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors"
          >
            <Instagram className="w-5 h-5 mr-2" />
            Ver más en Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
