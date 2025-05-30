import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Wrench, Mountain, Shield, Truck, Grid, TrendingUp } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ConstruccionPage() {
  const servicios = [
    {
      icon: <Wrench className="w-8 h-8 text-red-600" />,
      title: "Diseño & Construcción Acumuladores de Agua",
      description: "Proyectos especializados en infraestructura hídrica para almacenamiento y distribución de agua.",
    },
    {
      icon: <Mountain className="w-8 h-8 text-red-600" />,
      title: "Diseño & Construcción de Caminos con Base Estabilizada",
      description: "Construcción de vías de acceso y caminos industriales con tecnología de estabilización avanzada.",
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "Defensas Fluviales",
      description: "Enrocados, encauzamientos de ríos y colocación de gaviones para protección contra inundaciones.",
    },
    {
      icon: <Truck className="w-8 h-8 text-red-600" />,
      title: "Movimientos de Tierras Masivos",
      description: "Excavaciones, cortes y rellenos compactados para proyectos de gran envergadura.",
    },
    {
      icon: <Grid className="w-8 h-8 text-red-600" />,
      title: "Instalaciones de Mallas Dinámicas",
      description: "Sistemas de protección contra desprendimientos rocosos y estabilización de taludes.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-red-600" />,
      title: "Estabilización de Taludes",
      description: "Técnicas especializadas para asegurar la estabilidad de pendientes y terrenos irregulares.",
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
          alt="Construcción e infraestructura"
          fill
          className="object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 text-white text-center">
          <h1 className="text-5xl font-bold mb-4 font-heading">Construcción</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Experiencia, equipo humano y maquinaria pesada para proyectos de construcción e infraestructura
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Contamos con la experiencia, equipo humano y maquinaria pesada para abordar proyectos de construcción de
              alta complejidad. Nuestro enfoque integral nos permite entregar soluciones completas desde el diseño hasta
              la ejecución, garantizando calidad y cumplimiento de plazos.
            </p>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 font-heading">
            Nuestros Servicios de Construcción
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

      {/* Capacidades */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 font-heading">Nuestras Capacidades</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Maquinaria de construcción"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 font-heading">Equipamiento Especializado</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Bulldozers D8-D9 para movimientos de tierra masivos</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Excavadoras hidráulicas de 20-45 toneladas</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Motoniveladoras para perfilado y nivelación</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Rodillos compactadores de 12 toneladas</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 font-heading">Experiencia Comprobada</h3>
                  <p className="text-gray-700">
                    Más de una década ejecutando proyectos de construcción en sectores mineros, energéticos y de
                    infraestructura pública, con un historial comprobado de cumplimiento de plazos y estándares de
                    calidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Tienes un proyecto de construcción?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctanos para una evaluación gratuita de tu proyecto y descubre cómo podemos ayudarte
          </p>
          <Link href="/contacto">
            <Button size="lg" variant="outline" className="bg-white text-red-600 hover:bg-gray-100">
              Solicitar Cotización
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
