'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useInView } from '@/hooks/use-in-view';

export default function HomePage() {
  const clientes = [
    { name: 'CCU', logo: '/images/clientes/ccu-logo.webp' },
    { name: 'Metlen Energy & Metals', logo: '/images/clientes/metlen.webp' },
    { name: 'Besalco Maquinarias', logo: '/images/clientes/besalco.webp' },
    { name: 'Verfrut', logo: '/images/clientes/verfrut.webp' },
    { name: 'KDM Tratamiento', logo: '/images/clientes/kdm.webp' },
    { name: 'Constructora Carrán', logo: '/images/clientes/carran.webp' },
    {
      name: 'Santa Laura Ingeniería',
      logo: '/images/clientes/santa-laura.webp',
    },
    { name: 'CFV', logo: '/images/clientes/cfv.webp' },
    { name: 'Viña Undurraga', logo: '/images/clientes/vina-undurraga.webp' },
    {
      name: 'Quinta Ingeniería',
      logo: '/images/clientes/quinta-ingenieria.webp',
    },
    { name: 'Grupo Eliseo', logo: '/images/clientes/grupo-eliseo.webp' },
    { name: 'Maxtec', logo: '/images/clientes/maxtec.webp' },
    {
      name: 'China Communications Construction',
      logo: '/images/clientes/cfhe.webp',
    },
    { name: 'Viña RR Wine', logo: '/images/clientes/vina-rr-wine.webp' },
    { name: 'Seinco Constructora', logo: '/images/clientes/seinco.webp' },
    { name: 'Garcés Fruit', logo: '/images/clientes/garces-fruit.webp' },
    { name: 'Veolia', logo: '/images/clientes/veolia.webp' },
    {
      name: 'Dirección de Obras Hidráulicas',
      logo: '/images/clientes/doh.webp',
    },
    { name: 'Viña Pirazzoli', logo: '/images/clientes/vina-pirazzoli.webp' },
    { name: 'Trek Rental', logo: '/images/clientes/trek-rental.webp' },
    { name: 'Consorcio BOV', logo: '/images/clientes/consorcio-bov.webp' },
    { name: 'SK Rental', logo: '/images/clientes/sk-rental.webp' },
    { name: 'Concha y Toro', logo: '/images/clientes/concha-y-toro.webp' },
    { name: 'Viña San Pedro', logo: '/images/clientes/vina-san-pedro.webp' },
    { name: 'Solfrut', logo: '/images/clientes/solfrut.webp' },
  ];

  const sectores = [
    {
      title: 'Minería',
      description:
        'Proyectos especializados para la industria minera con equipamiento de alta disponibilidad mecánica y personal calificado.',
      image: '/images/sectors/mineria-construccion-sector-experiencia.webp',
    },
    {
      title: 'Energía',
      description:
        'Obras tempranas para parques fotovoltaicos con experiencia en proyectos sobre 250 hectáreas desde 2021.',
      image: '/images/sectors/construccion-caminos-sector-experiencia.webp',
    },
    {
      title: 'Rellenos Sanitarios',
      description:
        'Infraestructura especializada para gestión de residuos y manejo ambiental responsable.',
      image: '/images/sectors/rellenos-sanitarios-sector-experiencia.webp',
    },
    {
      title: 'Forestal',
      description:
        'Preparación de suelos y plantaciones con técnicas especializadas y maquinaria de última generación.',
      image: '/images/sectors/forestal-sector-experiencia.webp',
    },
    {
      title: 'Construcción',
      description:
        'Obras civiles e infraestructura con los más altos estándares de calidad y cumplimiento de plazos.',
      image: '/images/sectors/mineria-construccion-sector-experiencia.webp',
    },
    {
      title: 'Agricultura',
      description:
        'Preparación de terrenos agrícolas con técnicas avanzadas para optimizar la productividad del suelo.',
      image: '/images/sectors/construccion-caminos-sector-experiencia.webp',
    },
    {
      title: 'Obras Civiles',
      description:
        'Soluciones integrales en infraestructura civil para proyectos industriales y comerciales.',
      image: '/images/sectors/obras-civiles-sector-experiencia.webp',
    },
  ];

  // Animaciones on scroll
  const hero = useInView({ threshold: 0.2 });
  const porqueElegir = useInView({ threshold: 0.2 });
  const sectoresSection = useInView({ threshold: 0.2 });
  const proyectos = useInView({ threshold: 0.2 });
  const clientesSection = useInView({ threshold: 0.2 });

  // Hero Button
  const heroBtnInView = useInView<HTMLButtonElement>({ threshold: 0.2 });
  // Por qué elegir IDESC
  const porqueImgInView = useInView<HTMLImageElement>({ threshold: 0.2 });
  const porqueBtnInView = useInView<HTMLButtonElement>({ threshold: 0.2 });
  // Sectores de Experiencia
  const sectoresImgInView = sectores.map(() =>
    useInView<HTMLImageElement>({ threshold: 0.2 })
  );
  const sectoresBtnInView = useInView<HTMLButtonElement>({ threshold: 0.2 });
  // Proyectos Destacados
  const proyectosImgInView = [0, 1, 2, 3, 4, 5].map(() =>
    useInView<HTMLImageElement>({ threshold: 0.2 })
  );
  // Clientes
  const clientesLogoInView1 = clientes.map(() =>
    useInView<HTMLImageElement>({ threshold: 0.2 })
  );
  const clientesLogoInView2 = clientes.map(() =>
    useInView<HTMLImageElement>({ threshold: 0.2 })
  );

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
        {/* Video con imagen de respaldo */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/placeholder.svg?height=1080&width=1920&text=IDESC+Maquinaria"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
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
        {/* Imagen de respaldo si el video no carga */}
        <Image
          src="/placeholder.svg?height=1080&width=1920&text=IDESC+Maquinaria"
          alt="Maquinaria pesada IDESC"
          fill
          className="object-cover hidden"
          priority
        />
        <div className="relative z-30 w-full flex justify-center">
          <div className="container flex flex-col items-end max-w-7xl px-4 pb-40 md:pb-56 lg:pb-64">
            <p
              className="text-lg md:text-xl mb-6 leading-relaxed font-body font-normal text-white text-right"
              style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
            >
              Presentes en los sectores de <b>Minería</b>, <b>Energía</b>,{' '}
              <b>Forestal</b>,<br /> <b>Construcción</b>, <b>Agricultura</b>,{' '}
              <b>MOP</b> y <b>Rellenos Sanitarios</b>.
            </p>
            <h1
              className="text-5xl md:text-7xl mb-8 leading-tight font-heading font-bold text-right"
              style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
            >
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
            <div
              className="w-full flex justify-end"
              style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
            >
              <Link href="/lineas-de-negocio">
                <Button
                  ref={heroBtnInView.ref}
                  size="lg"
                  className={`border-2 border-[#fbf350] text-[#fbf350] bg-transparent hover:bg-[#fbf350] hover:text-black px-8 py-4 text-lg font-semibold shadow-lg transition-colors duration-200 ${
                    heroBtnInView.isInView ? 'btn-hero-slide-up' : ''
                  }`}
                  style={{ animationFillMode: 'both' }}
                >
                  VER LÍNEAS DE NEGOCIO
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegir IDESC */}
      <section
        ref={porqueElegir.ref}
        className={`py-20 bg-gray-dark transition-opacity duration-700 ${
          porqueElegir.isInView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
        style={{
          animationDelay: '0.2s',
          animationFillMode: 'both',
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'stretch',
        }}
      >
        <div className="w-full flex flex-col lg:flex-row items-stretch">
          {/* Imagen vertical a la izquierda con triángulo negro en la esquina superior derecha */}
          <div className="relative h-[400px] lg:h-auto w-full lg:w-[45vw] min-h-[400px]">
            <Image
              ref={porqueImgInView.ref}
              src="/images/idesc-porque-elegir2.webp"
              alt="Trabajador de IDESC en sitio de construcción con excavadora Komatsu"
              fill
              className={`object-cover h-full w-full ${
                porqueImgInView.isInView ? 'animate-fade-in-up' : 'opacity-0'
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
              <h2 className="text-[2.6rem] font-bold mb-8 text-white font-heading">
                División Ingeniería
              </h2>
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
                    ref={porqueBtnInView.ref}
                    className={`bg-primary text-black hover:bg-primary-dark ${
                      porqueBtnInView.isInView
                        ? 'animate-fade-in-up'
                        : 'opacity-0'
                    }`}
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
      <section
        id="sectores"
        ref={sectoresSection.ref}
        className={`py-20 transition-opacity duration-700 ${
          sectoresSection.isInView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
        style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-[2.6rem] font-bold text-center mb-20 text-gray-dark font-heading">
            Sectores de Experiencia
          </h2>
          <div className="grid lg:grid-cols-3 gap-12">
            {sectores.map((sector, index) => (
              <div
                key={index}
                className="group relative h-[440px] overflow-hidden cursor-pointer"
              >
                {/* Estado normal - Imagen con overlay y título */}
                <div className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-in-out group-hover:opacity-0">
                  <Image
                    ref={sectoresImgInView[index].ref}
                    src={sector.image || '/placeholder.svg'}
                    alt={sector.title}
                    fill
                    className={`object-cover ${
                      sectoresImgInView[index].isInView
                        ? 'animate-fade-in-up'
                        : 'opacity-0'
                    }`}
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
              <Button
                ref={sectoresBtnInView.ref}
                className={`bg-black text-white hover:bg-gray-dark ${
                  sectoresBtnInView.isInView
                    ? 'animate-fade-in-up'
                    : 'opacity-0'
                }`}
              >
                VER TODAS LAS LÍNEAS DE NEGOCIO
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Proyectos Destacados */}
      <section
        ref={proyectos.ref}
        className={`py-20 bg-gray-dark text-white transition-opacity duration-700 ${
          proyectos.isInView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
        style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
      >
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
                      ref={proyectosImgInView[index].ref}
                      src={project.image || '/placeholder.svg'}
                      alt={project.title}
                      fill
                      className={`object-cover transition-transform duration-300 hover:scale-105 ${
                        proyectosImgInView[index].isInView
                          ? 'animate-fade-in-up'
                          : 'opacity-0'
                      }`}
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
      <section
        ref={clientesSection.ref}
        className={`py-20 bg-white transition-opacity duration-700 ${
          clientesSection.isInView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
        style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
      >
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
              {clientes.map((cliente, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-6 flex items-center justify-center h-24"
                >
                  <Image
                    ref={clientesLogoInView1[index].ref}
                    src={cliente.logo || '/placeholder.svg'}
                    alt={cliente.name}
                    width={150}
                    height={96}
                    className={`h-20 w-auto max-w-[150px] object-contain transition-all duration-300 ${
                      clientesLogoInView1[index].isInView
                        ? 'animate-fade-in-up'
                        : 'opacity-0'
                    }`}
                  />
                </div>
              ))}
              {/* Segunda serie de logos (para efecto infinito) */}
              {clientes.map((cliente, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-6 flex items-center justify-center h-24"
                >
                  <Image
                    ref={clientesLogoInView2[index].ref}
                    src={cliente.logo || '/placeholder.svg'}
                    alt={cliente.name}
                    width={150}
                    height={96}
                    className={`h-20 w-auto max-w-[150px] object-contain transition-all duration-300 ${
                      clientesLogoInView2[index].isInView
                        ? 'animate-fade-in-up'
                        : 'opacity-0'
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
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
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
      `}</style>
    </div>
  );
}
