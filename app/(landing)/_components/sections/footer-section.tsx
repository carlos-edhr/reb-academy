// components/footer.tsx

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export function FooterSection() {
  return (
    <footer className="bg-neutral-950 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {/* Información de Contacto */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">REB Academy</h3>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-500" />
              <p>
                Unidad Deportiva Paseo Las Cascadas
                <br />
                Playas de Rosarito, B.C.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-500" />
              <p>+52 664 123 4567</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-500" />
              <p>contacto@rebacademy.com</p>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              Enlaces Rápidos
            </h4>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/programas"
                className="hover:text-blue-500 transition-colors"
              >
                Programas
              </Link>
              <Link
                href="/entrenadores"
                className="hover:text-blue-500 transition-colors"
              >
                Entrenadores
              </Link>
              <Link
                href="/galeria"
                className="hover:text-blue-500 transition-colors"
              >
                Galería
              </Link>
              <Link
                href="/registro"
                className="hover:text-blue-500 transition-colors"
              >
                Registro
              </Link>
            </nav>
          </div>

          {/* Redes Sociales */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Síguenos</h4>
            <div className="flex gap-3">
              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded-full border-gray-700 hover:border-blue-500 hover:bg-blue-500/10"
              >
                <Link href="https://www.instagram.com/reb_academy/">
                  <Instagram className="w-5 h-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded-full border-gray-700 hover:border-blue-500 hover:bg-blue-500/10"
              >
                <Link href="https://www.facebook.com/people/Rosarito-Elite-Basketball-Academy/61553070687108/">
                  <Facebook className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded-full border-gray-700 hover:border-blue-500 hover:bg-blue-500/10"
              >
                <Link href="#">
                  <Youtube className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded-full border-gray-700 hover:border-blue-500 hover:bg-blue-500/10"
              >
                <Link href="#">
                  <Twitter className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Legal</h4>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/privacidad"
                className="hover:text-blue-500 transition-colors"
              >
                Política de Privacidad
              </Link>
              <Link
                href="/terminos"
                className="hover:text-blue-500 transition-colors"
              >
                Términos de Servicio
              </Link>
              <Link
                href="/faq"
                className="hover:text-blue-500 transition-colors"
              >
                Preguntas Frecuentes
              </Link>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Créditos */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center text-gray-500">
          <p>© 2024 REB Academy. Todos los derechos reservados.</p>
          <p>
            Developed by{" "}
            <Link
              href="https://carlos-ehr.com"
              target="_blank"
              className="text-blue-500 hover:text-blue-400 transition-colors"
            >
              carlos-ehr
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
