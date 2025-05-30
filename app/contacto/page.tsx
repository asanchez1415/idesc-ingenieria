'use client';

import type React from 'react';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Instagram } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    mensaje: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-extrabold mb-4 text-gray-dark font-heading">
                Contacto
              </h1>
              <p className="text-xl text-gray-blue font-body">
                Estamos aquí para ayudarte con tu próximo proyecto
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Formulario */}
              <Card className="border-3 border-gray-light">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold font-heading text-gray-dark">
                    Envíanos un mensaje
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="nombre"
                          className="block text-sm font-medium text-gray-blue mb-2 font-body"
                        >
                          Nombre *
                        </label>
                        <Input
                          id="nombre"
                          name="nombre"
                          type="text"
                          required
                          value={formData.nombre}
                          onChange={handleChange}
                          className="w-full border-3 border-gray-light"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-blue mb-2 font-body"
                        >
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full border-3 border-gray-light"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="telefono"
                          className="block text-sm font-medium text-gray-blue mb-2 font-body"
                        >
                          Teléfono
                        </label>
                        <Input
                          id="telefono"
                          name="telefono"
                          type="tel"
                          value={formData.telefono}
                          onChange={handleChange}
                          className="w-full border-3 border-gray-light"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="empresa"
                          className="block text-sm font-medium text-gray-blue mb-2 font-body"
                        >
                          Empresa
                        </label>
                        <Input
                          id="empresa"
                          name="empresa"
                          type="text"
                          value={formData.empresa}
                          onChange={handleChange}
                          className="w-full border-3 border-gray-light"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="mensaje"
                        className="block text-sm font-medium text-gray-blue mb-2 font-body"
                      >
                        Mensaje *
                      </label>
                      <Textarea
                        id="mensaje"
                        name="mensaje"
                        required
                        rows={6}
                        value={formData.mensaje}
                        onChange={handleChange}
                        className="w-full border-3 border-gray-light"
                        placeholder="Cuéntanos sobre tu proyecto..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-dark text-black"
                    >
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Información de contacto */}
              <div className="space-y-8">
                <Card className="border-3 border-gray-light">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-6 text-gray-dark font-heading">
                      Información de Contacto
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium">Email</p>
                          <a
                            href="mailto:contacto@idescgroup.cl"
                            className="text-gray-blue hover:text-primary"
                          >
                            contacto@idescgroup.cl
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Instagram className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium">Instagram</p>
                          <a
                            href="https://instagram.com/idesc_ingenieria"
                            className="text-gray-blue hover:text-primary"
                          >
                            @idesc_ingenieria
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-3 border-gray-light">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-dark font-heading">
                      Sectores de Experiencia
                    </h3>
                    <ul className="space-y-2 text-gray-blue font-body">
                      <li>• Minería</li>
                      <li>• Energía</li>
                      <li>• Rellenos sanitarios</li>
                      <li>• Forestal</li>
                      <li>• Construcción</li>
                      <li>• Agricultura</li>
                      <li>• Obras civiles</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
