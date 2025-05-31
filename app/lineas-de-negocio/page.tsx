import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Truck, Wrench, Sun, Tractor, Building } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ServiciosPage() {
  const servicios = [
    {
      title: "Rental Equipos",
      description:
        "Equipos de alta disponibilidad mecánica para diversas faenas en minería, energía, rellenos sanitarios, forestal y construcción.",
      href: "/servicios/rental-equipos",
      icon: <Truck className="w-8 h-8 text-primary" />,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Construcción",
      description:
        "Experiencia, equipo humano y maquinaria pesada para proyectos de construcción e infraestructura de alta complejidad.",
      href: "/servicios/construccion",
      icon: <Wrench className="w-8 h-8 text-primary" />,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Energía",
      description:
        "Partner estratégico en obras tempranas para parques fotovoltaicos desde 2021, con experiencia en proyectos sobre 250 hectáreas.",
      href: "/servicios/energia",
      icon: <Sun className="w-8 h-8 text-primary" />,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Agricultura",
      description:
        "Contratista especializado en preparación de suelos y proyectos de plantaciones con años de experiencia en la industria.",
      href: "/servicios/agricultura",
      icon: <Tractor className="w-8 h-8 text-primary" />,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Obras Civiles",
      description:
        "Soluciones integrales en infraestructura civil para proyectos industriales y comerciales en desarrollo.",
      href: "/servicios/obras-civiles",
      icon: <Building className="w-8 h-8 text-primary" />,
      image: "/placeholder.svg?height=200&width=300",
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
          alt="Servicios IDESC Ingeniería"
          fill
          className="object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 text-white text-center">
          <h1 className="text-5xl font-bold mb-4 font-heading">Nuestros Servicios</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Soluciones integrales en construcción, movimiento de tierras y servicios industriales especializados
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-dark font-heading">Experiencia y Especialización</h2>
            <p className="text-lg text-gray-blue leading-relaxed font-body">
              IDESC División Ingeniería ofrece servicios especializados en múltiples sectores industriales. Nuestra
              experiencia, equipamiento propio y equipo humano calificado nos permiten abordar proyectos de diversa
              complejidad con los más altos estándares de calidad, seguridad y cuidado del medio ambiente.
            </p>
          </div>
        </div>
      </section>

      {/* Servicios Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicios.map((servicio, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-0">
                  <Image
                    src={servicio.image || "/placeholder.svg"}
                    alt={servicio.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      {servicio.icon}
                      <h3 className="text-xl font-semibold text-gray-dark font-heading">{servicio.title}</h3>
                    </div>
                    <p className="text-gray-blue mb-6 font-body">{servicio.description}</p>
                    <Link href={servicio.href}>
                      <Button variant="outline" className="w-full">
                        Ver Detalles
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sectores de Experiencia */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-dark font-heading">Sectores de Experiencia</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Minería", description: "Proyectos especializados para la industria minera" },
              { name: "Energía Renovable", description: "Obras tempranas para parques fotovoltaicos" },
              { name: "Rellenos Sanitarios", description: "Infraestructura para gestión de residuos" },
              { name: "Sector Forestal", description: "Preparación de suelos y plantaciones" },
              { name: "Construcción Civil", description: "Obras civiles e infraestructura" },
              { name: "Sector Agrícola", description: "Preparación de terrenos agrícolas" },
            ].map((sector, index) => (
              <div key={index} className="text-center p-6 border border-gray-light hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-dark font-heading">{sector.name}</h3>
                <p className="text-gray-blue font-body">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-heading">¿Necesitas una cotización?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-body">
            Contáctanos para una evaluación gratuita de tu proyecto y descubre cómo podemos ayudarte
          </p>
          <div className="space-x-4">
            <Link href="/contacto">
              <Button size="lg" className="bg-gray-dark hover:bg-gray-blue text-white">
                SOLICITAR COTIZACIÓN
              </Button>
            </Link>
            <Link href="/proyectos">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-dark text-gray-dark hover:bg-gray-dark hover:text-white"
              >
                VER PROYECTOS
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
