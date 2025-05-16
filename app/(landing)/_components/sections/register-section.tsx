// components/registration-form.tsx

"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Facebook, Ticket, Smartphone, User } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Nombre completo es requerido"),
  birthDate: z.string().min(1, "Fecha de nacimiento es requerida"),
  birthPlace: z.string().min(2, "Lugar de nacimiento es requerido"),
  gender: z.string().min(1, "Género es requerido"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  nickname: z.string().optional(),
  school: z.string().optional(),
  instagram: z.string().optional(),
  tiktok: z.string().optional(),
  facebook: z.string().optional(),
  currentTeam: z.string().min(1, "Este campo es requerido"),
  expectations: z.string().optional(),
  howHear: z.string().min(2, "Este campo es requerido"),
});

export function RegistrationForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      birthDate: "",
      birthPlace: "",
      gender: "",
      email: "",
      phone: "",
      nickname: "",
      school: "",
      instagram: "",
      tiktok: "",
      facebook: "",
      currentTeam: "",
      expectations: "",
      howHear: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <section className="pt-40 pb-10 px-4 md:px-8 bg-neutral-950">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Formulario de Inscripción
            <span className="block text-lg font-normal mt-2 text-gray-600 ">
              REB Academy - Temporada 2025
            </span>
          </h2>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Sección de Información Personal */}
            <div className="space-y-6 p-6 bg-zinc-900 rounded-xl">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <User className="w-5 h-5" />
                Información Personal
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Nombre completo <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ej: Carlos Eduardo Hernández"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="birthDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Fecha de nacimiento{" "}
                        <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="birthPlace"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Lugar de nacimiento{" "}
                        <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ej: Tijuana, Baja California"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Género <span className="text-red-500">*</span>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona tu género" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="masculino">Masculino</SelectItem>
                          <SelectItem value="femenino">Femenino</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Sección de Contacto */}
            <div className="space-y-6 p-6 bg-zinc-900 rounded-xl">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Smartphone className="w-5 h-5" />
                Información de Contacto
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Correo electrónico{" "}
                        <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="ejemplo@dominio.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Número de teléfono</FormLabel>
                      <FormControl>
                        <Input placeholder="+52 664 123 4567" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="nickname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Apodo</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="¿Cómo te gustaría que te llamen?"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="school"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Escuela</FormLabel>
                      <FormControl>
                        <Input placeholder="Institución educativa" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="instagram"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Instagram className="w-4 h-4" /> Instagram
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="@tuusuario" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="tiktok"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Ticket className="w-4 h-4" /> TikTok
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="@tuusuario" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="facebook"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Facebook className="w-4 h-4" /> Facebook
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="facebook.com/tuperfil" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Sección Adicional */}
            <div className="space-y-6 p-6 bg-zinc-900 rounded-xl">
              <h3 className="text-xl font-semibold">Información Adicional</h3>

              <FormField
                control={form.control}
                name="currentTeam"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      ¿Tienes equipo actualmente?{" "}
                      <span className="text-red-500">*</span>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona una opción" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="si">Sí</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="expectations"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      ¿Qué esperas al inscribirte a la academia?
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe tus objetivos y expectativas..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="howHear"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      ¿Cómo te enteraste de la academia?{" "}
                      <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Redes sociales, amigos, etc."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="text-center">
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-lg"
              >
                Enviar Solicitud
              </Button>
              <p className="mt-4 text-sm text-gray-500">
                Al enviar este formulario aceptas nuestro tratamiento de datos
                según la política de privacidad
              </p>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}
