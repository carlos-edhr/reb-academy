// components/location-section.tsx

"use client";

import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function LocationSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!mounted || !formRef.current) return;

    setLoading(true);

    try {
      const serviceId = process.env.NEXT_PUBLIC_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_APP_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables not configured");
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-[#0a0a0a] relative overflow-hidden">
      {/* Fondo con patrón */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:24px_24px] opacity-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Contáctanos
          <span className="block text-lg mt-4 text-gray-400 font-normal">
            Estamos aquí para responder tus preguntas
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Información de Contacto */}
          <Card className="p-8 bg-black/50 backdrop-blur-sm border-gray-800">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-red-500 mt-1" />
                <div>
                  <h3 className="text-white text-lg font-semibold">
                    Ubicación
                  </h3>
                  <p className="text-gray-400">
                    Unidad Deportiva Paseo Las Cascadas
                    <br />
                    Playas de Rosarito, B.C.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-red-500 mt-1" />
                <div>
                  <h3 className="text-white text-lg font-semibold">Teléfono</h3>
                  <p className="text-gray-400">+52 664 123 4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-red-500 mt-1" />
                <div>
                  <h3 className="text-white text-lg font-semibold">Email</h3>
                  <p className="text-gray-400">contacto@rebacademy.com</p>
                </div>
              </div>

              {/* Mapa */}
              <div className="mt-8 rounded-xl overflow-hidden border border-gray-800">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3372.3406288919946!2d-117.0402144!3d32.30270129999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d92f7131fb7997%3A0x4854b3b1c1bbfe8f!2sUnidad%20Deportiva%20Paseo%20Las%20Cascadas!5e0!3m2!1ses-419!2smx!4v1747427967334!5m2!1ses-419!2smx"
                  height="300"
                  width="100%"
                  loading="lazy"
                  className="border-0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </Card>

          {/* Formulario de Contacto */}
          <Card className="p-8 bg-black/50 backdrop-blur-sm border-gray-800">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-white block mb-2">Nombre completo</label>
                <Input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="bg-gray-900 border-gray-800 focus:border-red-500"
                  placeholder="Ingresa tu nombre"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-white block mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="bg-gray-900 border-gray-800 focus:border-red-500"
                    placeholder="tucorreo@ejemplo.com"
                    required
                  />
                </div>

                <div>
                  <label className="text-white block mb-2">Teléfono</label>
                  <Input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="bg-gray-900 border-gray-800 focus:border-red-500"
                    placeholder="+52 664 123 4567"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-white block mb-2">Mensaje</label>
                <Textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="bg-gray-900 border-gray-800 focus:border-red-500 h-32"
                  placeholder="Escribe tu mensaje aquí..."
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 hover:bg-red-700 text-lg py-6 transition-all"
              >
                {loading ? "Enviando..." : "Enviar Mensaje"}
              </Button>
            </form>
          </Card>
        </div>
      </div>

      {/* Línea decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30" />
    </section>
  );
}
