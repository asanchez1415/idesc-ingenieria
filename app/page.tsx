'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroVideo from './components/hero-video';
import {
  Cliente,
  clientes,
  ProyectosDestacados,
  proyectosDestacados,
  Sector,
  sectores,
} from './data/home-data';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { DivisionIngenieria } from './components/division-ingenieria';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <HeroVideo />

      {/* División Ingeniería */}
      <DivisionIngenieria />

      {/* Sectores de Experiencia */}
      <section id="sectores" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-[2.6rem] font-bold text-center mb-20 text-gray-dark font-heading">
            Sectores de Experiencia
          </h2>
          <div className="grid lg:grid-cols-3 gap-12">
            {sectores.map((sector: Sector, index: number) => (
              <div
                key={index}
                className="group relative h-[440px] overflow-hidden cursor-pointer"
              >
                {/* Estado normal - Imagen con overlay y título */}
                <div className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-in-out group-hover:opacity-0">
                  <Image
                    src={sector.image || '/placeholder.svg'}
                    alt={sector.title}
                    fill
                    className={`object-cover}`}
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-end p-8">
                    <h3 className="text-3xl font-bold text-white font-heading">
                      {sector.title}
                    </h3>
                  </div>
                </div>

                {/* Estado hover - Fondo primario con título y descripción */}
                <div className="absolute inset-0 w-full h-full bg-primary opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 p-8 flex flex-col">
                  <h3 className="text-3xl font-bold text-black font-heading mb-6">
                    {sector.title}
                  </h3>
                  <p className="text-black font-body text-lg leading-relaxed">
                    {sector.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link href="/lineas-de-negocio">
              <Button className={`bg-black text-white hover:bg-gray-dark}`}>
                VER TODAS LAS LÍNEAS DE NEGOCIO
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Proyectos Destacados */}
      <section className="py-20 bg-gray-dark text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-[2.6rem] font-bold text-center mb-16 font-heading">
            Proyectos Ejecutados
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {proyectosDestacados.map((project: ProyectosDestacados, index) => (
              <Card
                key={index}
                className="bg-white border-gray-300 hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={project.image || '/placeholder.svg'}
                      alt={project.title}
                      fill
                      className={`object-cover transition-transform duration-300 hover:scale-105}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2 font-heading">
                        {project.title}
                      </h3>
                      <p className="text-gray-200 font-body">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestros Clientes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-[2.6rem] font-bold text-center mb-16 text-gray-dark font-heading">
            Nuestros Clientes
          </h2>
          <p className="text-center text-lg text-gray-blue mb-12 max-w-2xl mx-auto font-body">
            Trabajamos con empresas líderes en diversos sectores industriales,
            construyendo relaciones de confianza y excelencia
          </p>

          {/* Carrusel de clientes */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* Primera serie de logos */}
              {clientes.map((cliente: Cliente, index: number) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-6 flex items-center justify-center h-24"
                >
                  <Image
                    src={cliente.logo || '/placeholder.svg'}
                    alt={cliente.name}
                    width={150}
                    height={96}
                    className={`h-20 w-auto max-w-[150px] object-contain transition-all duration-300 }`}
                  />
                </div>
              ))}
              {/* Segunda serie de logos (para efecto infinito) */}
              {clientes.map((cliente: Cliente, index: number) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-6 flex items-center justify-center h-24"
                >
                  <Image
                    src={cliente.logo || '/placeholder.svg'}
                    alt={cliente.name}
                    width={150}
                    height={96}
                    className={`h-20 w-auto max-w-[150px] object-contain transition-all duration-300}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
