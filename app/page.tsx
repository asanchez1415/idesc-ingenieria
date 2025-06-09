'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroVideo from './components/hero-video';
import { motion } from 'motion/react';
import { clientes, sectores } from './data/home-data';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

interface Cliente {
  name: string;
  logo: string;
}

interface Sector {
  title: string;
  description: string;
  image: string;

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-end justify-end overflow-hidden">
        {/* Triángulo amarillo en la esquina inferior izquierda */}
        <div className="absolute left-0 bottom-0 w-1/2 h-1/2 z-20 pointer-events-none triangle-hero-animate">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <polygon points="0,100 100,100 0,0" fill="#fbf350" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-black/60 z-10" />
        <HeroVideo />
        <div className="relative z-30 w-full flex justify-center">
          <div className="container flex flex-col items-end max-w-7xl px-4 pb-40 md:pb-56 lg:pb-64">
            <p className="text-lg md:text-xl mb-6 leading-relaxed font-body font-normal text-white text-right">
              Presentes en los sectores de <b>Minería</b>, <b>Energía</b>,{' '}
              <b>Forestal</b>,<br /> <b>Construcción</b>, <b>Agricultura</b>,{' '}
              <b>MOP</b> y <b>Rellenos Sanitarios</b>.
            </p>
            <h1 className="text-5xl md:text-7xl mb-8 leading-tight font-heading font-bold text-right">
              <span className="block font-medium text-white">
                JUNTOS ENCONTRAMOS
              </span>
              <span
                className="block font-extrabold"
                style={{ color: '#fbf350' }}
              >
                SOLUCIONES INNOVADORAS
              </span>
            </h1>
            <div className="w-full flex justify-end">
              <Link href="/lineas-de-negocio">
                <motion.div
                  initial={{ opacity: 0, y: 200 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Button
                    size="lg"
                    className="border-2 border-[#fbf350] text-[#fbf350] bg-transparent hover:bg-[#fbf350] hover:text-black px-8 py-4 text-lg font-semibold shadow-lg transition-colors duration-200"
                  >
                    VER LÍNEAS DE NEGOCIO
                  </Button>
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* División Ingeniería */}
      <section
        className="py-20 bg-gray-dark"
        style={{ minHeight: '70vh', display: 'flex', alignItems: 'stretch' }}
      >
        <div className="w-full flex flex-col lg:flex-row items-stretch">
          {/* Imagen vertical a la izquierda con triángulo negro en la esquina superior derecha */}
          <div className="relative h-[400px] lg:h-auto w-full lg:w-[45vw] min-h-[400px]">
            <Image
              src="/images/idesc-porque-elegir2.webp"
              alt="Trabajador de IDESC en sitio de construcción con excavadora Komatsu"
              fill
              className={`object-cover h-full w-full transition-all duration-700 
              }`}
              priority
            />
            {/* Triángulo negro en la esquina superior derecha */}
            <div
              className="absolute top-0 right-0 w-32 h-32 lg:w-48 lg:h-48"
              style={{ pointerEvents: 'none' }}
            >
              <svg
                viewBox="0 0 100 100"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
              >
                <polygon points="100,0 100,100 0,0" fill="#1A1A1A" />
              </svg>
            </div>
          </div>

          {/* Contenido a la derecha */}
          <div
            className="flex-1 flex flex-col justify-center px-6 py-16 lg:py-0 lg:px-16"
            style={{ background: 'var(--color-black)' }}
          >
            <div className="max-w-xl mx-auto w-full">
              <motion.h2
                initial={{ opacity: 'offscreen', y: 200 }}
                whileInView={{ opacity: 'onscreen', y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ amount: 'all', once: true }}
                className="text-[2.6rem] font-bold mb-8 text-white font-heading"
              >
                División Ingeniería
              </motion.h2>
              <p className="text-lg text-gray-300 leading-relaxed font-body mb-12 border-l-[3px] border-primary pl-6">
                Cada miembro de nuestra empresa trabaja con actitud, compromiso
                y pasión en el cumplimiento de sus responsabilidades, con el
                objetivo de que nuestros clientes y comunidades nos reconozcan
                como un pilar fundamental en la construcción de sus proyectos,
                creando un impacto positivo y un éxito duradero.
              </p>

              <h2 className="text-[2.6rem] font-bold mb-8 text-white font-heading">
                ¿Por qué elegir IDESC?
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed font-body mb-8 border-l-[3px] border-primary pl-6">
                Nuestros diversos proyectos en la industria son nuestro activo
                más valioso. Nos dedicamos al{' '}
                <b className="text-primary">100%</b> al desarrollo y ejecución
                de los mismos de manera flexible, adaptándonos a los
                requerimientos para cumplir con los plazos establecidos y los
                estándares de calidad. Trabajamos en equipo con las áreas de{' '}
                <b className="text-primary">riesgo</b>,{' '}
                <b className="text-primary">calidad</b>,{' '}
                <b className="text-primary">recursos humanos</b> y{' '}
                <b className="text-primary">medio ambiente</b>.
              </p>
              <div>
                <Link href="/empresa">
                  <Button
                    className={`bg-primary text-black hover:bg-primary-dark transition-all duration-700 }`}
                  >
                    CONOCE MÁS SOBRE NOSOTROS
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            {[
              {
                title: 'Central Hidroeléctrica Los Lagos',
                subtitle: 'Extracción & Transporte Empréstito, Osorno 2024',
                image:
                  '/images/proyectos/central-hidroelectrica-los-lagos.webp',
              },
              {
                title: 'PFV Meseta Los Andes',
                subtitle: 'Parque Fotovoltaico 2022',
                image: '/images/proyectos/pfv-meseta-los-andes-2022.webp',
              },
              {
                title: 'Desembanque & Perfilado Quebrada de Macul',
                subtitle: 'Santiago 2023',
                image:
                  '/images/proyectos/desembanque-perfilado-quebrada-macul-2023.webp',
              },
              {
                title: 'Encauzamiento Río Mapocho',
                subtitle: 'Santiago 2023',
                image: '/images/proyectos/encauzamiento-rio-mapocho-2023.webp',
              },
              {
                title: 'Desembanque & Perfilado Río Mapocho',
                subtitle: 'Santiago 2024',
                image:
                  '/images/proyectos/desembanque-perfilado-rio-mapocho-2024.webp',
              },
              {
                title: 'PFV Tamarico Fase I',
                subtitle: 'Vallenar 2023',
                image: '/images/proyectos/pfv-tamarico-fase-i-2023.webp',
              },
            ].map((project, index) => (
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

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(2rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-2rem);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(2rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        .animate-slide-in-right {
          animation: slideInRight 0.8s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        .animate-slide-in-up {
          animation: slideInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
      `}</style>

      <Footer />
    </div>
  );
}
