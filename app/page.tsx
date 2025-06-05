import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Suspense } from 'react';
import ClientSideAnimations from './components/client-side-animations';
import HeroVideo from './components/hero-video';

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
                <Button
                  size="lg"
                  className="border-2 border-[#fbf350] text-[#fbf350] bg-transparent hover:bg-[#fbf350] hover:text-black px-8 py-4 text-lg font-semibold shadow-lg transition-colors duration-200"
                >
                  VER LÍNEAS DE NEGOCIO
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Wrap sections that need animations in Suspense */}
      <Suspense fallback={<div className="min-h-screen" />}>
        <ClientSideAnimations />
      </Suspense>

      <Footer />
    </div>
  );
}
