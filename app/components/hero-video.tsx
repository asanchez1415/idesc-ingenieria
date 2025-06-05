'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

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
        <source src="/videos/idesc-banner-maquinaria.webm" type="video/webm" />
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
    </>
  );
}
