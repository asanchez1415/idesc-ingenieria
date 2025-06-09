'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

export default function HeroVideo() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Asegurarse de que el video comience a cargar inmediatamente
    const video = document.querySelector('video');
    if (video) {
      video.load();
    }
  }, []);

  return (
    <>
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
        {/* Fondo con gradiente mientras carga */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] transition-opacity duration-500 ${
            isVideoLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoadedData={() => setIsVideoLoaded(true)}
          onError={(e) => {
            const target = e.target as HTMLVideoElement;
            target.style.display = 'none';
            setHasError(true);
          }}
        >
          <source src="/videos/idesc-banner-maquinaria.mp4" type="video/mp4" />
          <source
            src="/videos/idesc-banner-maquinaria.webm"
            type="video/webm"
          />
          Tu navegador no soporta el elemento video.
        </video>
        <Image
          src="/placeholder.svg?height=1080&width=1920&text=IDESC+Maquinaria"
          alt="Maquinaria pesada IDESC"
          fill
          className={`object-cover transition-opacity duration-500 ${
            hasError ? 'opacity-100' : 'opacity-0'
          }`}
          priority
        />
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
    </>
  );
}
