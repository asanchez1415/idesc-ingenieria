import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Building, Hammer, Wrench, HardHat, Truck, Settings } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ObrasCivilesPage() {
  const serviciosGenerales = [
    {
      icon: <Building className="w-8 h-8 text-blue-600" />,
      title: "Infraestructura Civil",
      description: "Construcción de estructuras civiles para proyectos industriales y comerciales.",
    },
    {
      icon: <Hammer className="w-8 h-8 text-blue-600" />,
      title: "Obras de Hormigón",
      description: "Fundaciones, losas y estructuras de hormigón armado para diversos proyectos.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      title: "Instalaciones Industriales",
      description: "Montaje e instalación de infraestructura para plantas industriales.",
    },
    {
      icon: <HardHat className="w-8 h-8 text-blue-600" />,
      title: "Obras Complementarias",
      description: "Servicios auxiliares y obras menores para completar proyectos principales.",
    },
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: "Logística de Obra",
      description: "Coordinación y gestión logística para ejecución eficiente de proyectos.",
    },
    {
      icon: <Settings className="w-8 h-8 text-blue-600" />,
      title: "Servicios Especializados",
      description: "Soluciones técnicas específicas según requerimientos del cliente.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/placeholder.svg?height=600&width=1920"
          alt="Obras civiles e infraestructura"
          fill
          className="object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 text-white text-center">
          <h1 className="text-5xl font-bold mb-4 font-heading">Obras Civiles</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Soluciones integrales en infraestructura civil para proyectos industriales y comerciales
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 font-heading">Especialistas en Obras Civiles</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              IDESC División Ingeniería está expandiendo sus servicios para incluir obras civiles especializadas,
              aprovechando nuestra experiencia en construcción y movimiento de tierras para ofrecer soluciones
              integrales en infraestructura civil. Nuestro equipo está preparado para abordar proyectos de diversa
              complejidad con los más altos estándares de calidad.
            </p>

            {/* Nota de desarrollo */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
              <div className="flex items-center justify-center mb-4">
                <Settings className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2 font-heading">Área en Desarrollo</h3>
              <p className="text-blue-700">
                Estamos desarrollando y ampliando nuestros servicios de obras civiles. Contáctanos para conocer más
                sobre nuestras capacidades específicas y cómo podemos apoyar tu proyecto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Potenciales */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 font-heading">Áreas de Especialización</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviciosGenerales.map((servicio, index) => (
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

      {/* Capacidades Existentes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 font-heading">Capacidades Actuales</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Capacidades de construcción"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Experiencia Transferible</h3>
                  <p className="text-gray-700 mb-4">
                    Nuestra amplia experiencia en construcción, movimiento de tierras y proyectos de infraestructura nos
                    proporciona una base sólida para expandir hacia obras civiles especializadas.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Gestión de proyectos complejos</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Equipamiento pesado especializado</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Equipo técnico experimentado</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Cumplimiento de estándares de calidad</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectores de Aplicación */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 font-heading">Sectores de Aplicación</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Industrial", description: "Plantas y complejos industriales" },
              { name: "Minería", description: "Infraestructura para operaciones mineras" },
              { name: "Energía", description: "Obras civiles para proyectos energéticos" },
              { name: "Comercial", description: "Desarrollos comerciales y logísticos" },
            ].map((sector, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{sector.name}</h3>
                  <p className="text-gray-600 text-sm">{sector.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Tienes un proyecto de obras civiles?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Consulta con nuestro equipo sobre cómo podemos apoyar tu proyecto con nuestras capacidades actuales y
            servicios en desarrollo
          </p>
          <Link href="/contacto">
            <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
              Consultar Disponibilidad
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
