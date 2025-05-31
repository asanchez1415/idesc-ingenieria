import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Sun, Zap, Droplets, RouteIcon as Road, Mountain, Shield } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function EnergiaPage() {
  const servicios = [
    {
      icon: <Sun className="w-8 h-8 text-yellow-500" />,
      title: "Limpieza y Despeje de Terrenos",
      description: "Preparación completa de terrenos para instalación de parques fotovoltaicos.",
    },
    {
      icon: <Road className="w-8 h-8 text-yellow-500" />,
      title: "Aperturas de Caminos con Base Estabilizada",
      description: "Construcción de vías de acceso internas para mantenimiento y operación.",
    },
    {
      icon: <Mountain className="w-8 h-8 text-yellow-500" />,
      title: "Cortes y Rellenos Compactados",
      description: "Nivelación y preparación del terreno según especificaciones técnicas.",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Aperturas de Zanjas Eléctricas",
      description: "Excavación especializada para tendido de cables y sistemas eléctricos.",
    },
    {
      icon: <Droplets className="w-8 h-8 text-yellow-500" />,
      title: "Canalización de Aguas Lluvias",
      description: "Sistemas de drenaje para protección de instalaciones fotovoltaicas.",
    },
    {
      icon: <Shield className="w-8 h-8 text-yellow-500" />,
      title: "Construcción de Badenes",
      description: "Infraestructura para control de aguas superficiales y accesos.",
    },
  ]

  const proyectosEnergia = ["PFV Meseta Los Andes 2022", "PFV Tamarico Fase I, Vallenar 2023"]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/placeholder.svg?height=600&width=1920"
          alt="Proyectos de energía solar"
          fill
          className="object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 text-white text-center">
          <h1 className="text-5xl font-bold mb-4 font-heading">Energía</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Partner estratégico en obras tempranas para parques fotovoltaicos desde 2021
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-gray-900 font-heading">Especialistas en Energía Solar</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Hemos desarrollado este negocio a partir del año 2021 en parques fotovoltaicos con una capacidad de
                superficie sobre las 250 hectáreas, donde somos un partner estratégico en las obras tempranas. Nuestra
                experiencia nos permite ejecutar proyectos de gran envergadura con los más altos estándares de calidad y
                eficiencia.
              </p>
            </div>

            {/* Estadísticas */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-500 mb-2">250+</div>
                <div className="text-gray-600">Hectáreas de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-500 mb-2">2021</div>
                <div className="text-gray-600">Año de inicio en energía</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-500 mb-2">100%</div>
                <div className="text-gray-600">Proyectos completados</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 font-heading">
            Servicios para Proyectos Energéticos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicios.map((servicio, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4">{servicio.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 font-heading">{servicio.title}</h3>
                  <p className="text-gray-600 flex-grow">{servicio.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios Adicionales */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 font-heading">
              Servicios Complementarios
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Instalaciones eléctricas"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Instalaciones Especializadas</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Montaje e instalación de cercos perimetrales</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Montajes eléctricos para instalaciones de faenas</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Sistemas de seguridad perimetral</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Infraestructura temporal de faenas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos Destacados */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 font-heading">
            Proyectos Energéticos Destacados
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {proyectosEnergia.map((proyecto, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt={proyecto}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-900">{proyecto}</h3>
                  <p className="text-gray-600 mt-2">Proyecto fotovoltaico de gran envergadura</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-yellow-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Planeas un proyecto de energía renovable?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Somos tu partner estratégico para las obras tempranas de parques fotovoltaicos
          </p>
          <Link href="/contacto">
            <Button size="lg" variant="outline" className="bg-white text-yellow-600 hover:bg-gray-100">
              Consultar Proyecto
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
