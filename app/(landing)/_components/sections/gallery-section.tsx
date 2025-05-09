// components/gallery-section.tsx

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function GallerySection() {
  const galleryImages = Array.from({ length: 27 }).map((_, index) => ({
    id: index + 1,
    src: `/images/landing/gallery/${index}.JPG`,
    alt: `Entrenamiento REB Academy ${index + 1}`,
    category:
      index % 3 === 0 ? "Clases" : index % 2 === 0 ? "Partidos" : "Eventos",
  }));

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

// Componente de ícono Instagram (placeholder)
function Instagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}
