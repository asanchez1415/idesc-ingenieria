'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function HomePage() {
  const clientes = [
    {
      name: 'Dirección de Obras Hidráulicas',
      logo: '/images/clientes/ejemplo.webp',
    },
    {
      name: 'Ministerio de Obras Públicas',
      logo: '/images/clientes/ejemplo.webp',
    },
    { name: 'Gobierno de Chile', logo: '/images/clientes/ejemplo.webp' },
    { name: 'Cliente Institucional 1', logo: '/images/clientes/ejemplo.webp' },
    { name: 'Cliente Institucional 2', logo: '/images/clientes/ejemplo.webp' },
    { name: 'Cliente Institucional 3', logo: '/images/clientes/ejemplo.webp' },
    { name: 'Cliente Institucional 4', logo: '/images/clientes/ejemplo.webp' },
    { name: 'Cliente Institucional 5', logo: '/images/clientes/ejemplo.webp' },
    { name: 'Cliente Institucional 6', logo: '/images/clientes/ejemplo.webp' },
    { name: 'Cliente Institucional 7', logo: '/images/clientes/ejemplo.webp' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Video con imagen de respaldo */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            // Si el video falla, mostrar imagen de respaldo
            const target = e.target as HTMLVideoElement;
            target.style.display = 'none';
            const img = target.nextElementSibling as HTMLImageElement;
            if (img) img.style.display = 'block';
          }}
        >
          <source src="/videos/idesc-banner-maquinaria.mp4" type="video/mp4" />
          <source
            src="/videos/idesc-banner-maquinaria.webm"
            type="video/webm"
          />
          Tu navegador no soporta el elemento video.
        </video>

        <div className="relative z-20 container mx-auto px-4 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight font-heading">
              DIVISIÓN INGENIERÍA
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed font-body font-normal">
              Cada miembro de nuestra empresa trabaja con actitud, compromiso y
              pasión en el cumplimiento de sus responsabilidades, con el
              objetivo de que nuestros clientes y comunidades nos reconozcan
              como un pilar fundamental en la construcción de sus proyectos.
            </p>
            <Link href="/lineas-de-negocio">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-dark text-black px-8 py-4 text-lg font-semibold"
              >
                NUESTROS SERVICIOS
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Por qué elegir IDESC */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-dark font-heading">
              ¿Por qué elegir IDESC?
            </h2>
            <p className="text-lg text-gray-blue leading-relaxed font-body">
              Nuestros diversos proyectos en la industria son nuestro activo más
              valioso. Nos dedicamos al 100% al desarrollo y ejecución de los
              mismos de manera flexible, adaptándonos a los requerimientos para
              cumplir con los plazos establecidos y los estándares de calidad.
              Trabajamos en equipo con las áreas de riesgo, calidad, recursos
              humanos y medio ambiente.
            </p>
            <div className="mt-8">
              <Link href="/empresa">
                <Button variant="outline">CONOCE MÁS SOBRE NOSOTROS</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-dark font-heading">
            Nuestros Servicios
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Rental Equipos',
                href: '/lineas-de-negocio/rental-equipos',
              },
              {
                title: 'Movimiento de Tierras',
                href: '/lineas-de-negocio/construccion',
              },
              {
                title: 'Construcción & Aperturas de Caminos',
                href: '/lineas-de-negocio/construccion',
              },
              {
                title: 'Preparación de Suelos Agrícolas',
                href: '/lineas-de-negocio/agricultura',
              },
              {
                title: 'Obras Civiles',
                href: '/lineas-de-negocio/obras-civiles',
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border border-gray-light"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-dark font-heading">
                    {service.title}
                  </h3>
                  <Link href={service.href}>
                    <Button variant="outline" className="w-full">
                      Ver más
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/lineas-de-negocio">
              <Button
                variant="outline"
                className="bg-transparent border-primary text-gray-dark hover:text-black"
              >
                VER TODOS LOS SERVICIOS
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Proyectos Destacados */}
      <section className="py-20 bg-gray-dark text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 font-heading">
            Proyectos Destacados
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'PFV Meseta Los Andes 2022',
              'Desembanque & Perfilado Quebrada de Macul, Santiago 2023',
              'PFV Tamarico Fase I, Vallenar 2023',
              'Encauzamiento Río Mapocho, Santiago 2023',
              'Extracción & Transporte Empréstito, Central Hidroeléctrica Los Lagos, Osorno 2024',
              'Desembanque & Perfilado Río Mapocho, Santiago 2024',
            ].map((project, index) => (
              <Card key={index} className="bg-gray-blue border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white">
                    {project}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/proyectos">
              <Button
                variant="outline"
                className="bg-transparent border-primary text-white hover:text-black"
              >
                VER TODOS LOS PROYECTOS
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Nuestros Clientes */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-dark font-heading">
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
              {clientes.map((cliente, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-6 flex items-center justify-center h-24 w-32"
                >
                  <Image
                    src={cliente.logo || '/placeholder.svg'}
                    alt={cliente.name}
                    width={120}
                    height={90}
                    className="h-20 w-auto object-contain transition-all duration-300"
                  />
                </div>
              ))}
              {/* Segunda serie de logos (para efecto infinito) */}
              {clientes.map((cliente, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-6 flex items-center justify-center h-24 w-32"
                >
                  <Image
                    src={cliente.logo || '/placeholder.svg'}
                    alt={cliente.name}
                    width={120}
                    height={90}
                    className="h-20 w-auto object-contain transition-all duration-300"
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
