export interface Cliente {
  name: string;
  logo: string;
}

export interface Sector {
  title: string;
  description: string;
  image: string;
}

export const clientes: Cliente[] = [
  { name: 'CCU', logo: '/images/clientes/ccu-logo.webp' },
  { name: 'Metlen Energy & Metals', logo: '/images/clientes/metlen.webp' },
  { name: 'Besalco Maquinarias', logo: '/images/clientes/besalco.webp' },
  { name: 'Verfrut', logo: '/images/clientes/verfrut.webp' },
  { name: 'KDM Tratamiento', logo: '/images/clientes/kdm.webp' },
  { name: 'Constructora Carrán', logo: '/images/clientes/carran.webp' },
  { name: 'Santa Laura Ingeniería', logo: '/images/clientes/santa-laura.webp' },
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
  { name: 'Dirección de Obras Hidráulicas', logo: '/images/clientes/doh.webp' },
  { name: 'Viña Pirazzoli', logo: '/images/clientes/vina-pirazzoli.webp' },
  { name: 'Trek Rental', logo: '/images/clientes/trek-rental.webp' },
  { name: 'Consorcio BOV', logo: '/images/clientes/consorcio-bov.webp' },
  { name: 'SK Rental', logo: '/images/clientes/sk-rental.webp' },
  { name: 'Concha y Toro', logo: '/images/clientes/concha-y-toro.webp' },
  { name: 'Viña San Pedro', logo: '/images/clientes/vina-san-pedro.webp' },
  { name: 'Solfrut', logo: '/images/clientes/solfrut.webp' },
];

export const sectores: Sector[] = [
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
