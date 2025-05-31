import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Tractor, TreePine, Mountain, Shovel, Scissors } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AgriculturaPage() {
  const servicios = [
    {
      icon: <Tractor className="w-8 h-8 text-green-600" />,
      title: "Subsolados con Bulldozer",
      description: "Preparación profunda del suelo para mejorar la estructura y drenaje de terrenos agrícolas.",
    },
    {
      icon: <Shovel className="w-8 h-8 text-green-600" />,
      title: "Garreo con Excavadoras Hidráulicas",
      description: "Remoción de obstáculos y preparación de terrenos utilizando excavadoras especializadas.",
    },
    {
      icon: <Mountain className="w-8 h-8 text-green-600" />,
      title: "Construcción de Camellones",
      description: "Formación de estructuras elevadas para optimizar el drenaje y la plantación.",
    },
    {
      icon: <TreePine className="w-8 h-8 text-green-600" />,
      title: "Destronques con Excavadoras y Bulldozer",
      description: "Remoción completa de tocones y raíces para preparación de nuevas plantaciones.",
    },
    {
      icon: <Scissors className="w-8 h-8 text-green-600" />,
      title: "Roce y Faja Mecanizada",
      description: "Limpieza mecanizada de vegetación y preparación de fajas para plantación.",
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
          alt="Agricultura y plantaciones"
          fill
          className="object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 text-white text-center">
          <h1 className="text-5xl font-bold mb-4 font-heading">Agricultura</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Contratista especializado en preparación de suelos y proyectos de plantaciones
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 font-heading">Experiencia en el Sector Agrícola</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Tras años de experiencia en la ejecución de proyectos de plantaciones, en este sector hemos sido un
              contratista importante en la industria y nos avala nuestra cartera de clientes. Ofrecemos servicios
              especializados para la preparación de suelos agrícolas y forestales con la más alta tecnología y
              equipamiento.
            </p>

            {/* Estadísticas */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">10+</div>
                <div className="text-gray-600">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">1000+</div>
                <div className="text-gray-600">Hectáreas trabajadas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
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
            Servicios Agrícolas Especializados
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

      {/* Proceso de Trabajo */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 font-heading">Nuestro Proceso</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Maquinaria agrícola"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 font-heading">Evaluación del Terreno</h3>
                    <p className="text-gray-600">Análisis completo de las condiciones del suelo y topografía.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 font-heading">Planificación</h3>
                    <p className="text-gray-600">Diseño de estrategia de trabajo adaptada a cada proyecto.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 font-heading">Ejecución</h3>
                    <p className="text-gray-600">Implementación con maquinaria especializada y personal experto.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 font-heading">Entrega</h3>
                    <p className="text-gray-600">Terreno listo para plantación con garantía de calidad.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipamiento */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 font-heading">
            Equipamiento Especializado
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Bulldozers", description: "Para subsolado y preparación profunda" },
              { name: "Excavadoras", description: "Garreo y destronque especializado" },
              { name: "Motoniveladoras", description: "Nivelación y formación de camellones" },
              { name: "Equipos de Roce", description: "Limpieza mecanizada de vegetación" },
            ].map((equipo, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <Image
                    src="/placeholder.svg?height=150&width=200"
                    alt={equipo.name}
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{equipo.name}</h3>
                  <p className="text-gray-600 text-sm">{equipo.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Necesitas preparar terrenos para plantación?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contamos con la experiencia y equipamiento necesario para tu proyecto agrícola
          </p>
          <Link href="/contacto">
            <Button size="lg" variant="outline" className="bg-white text-green-600 hover:bg-gray-100">
              Solicitar Evaluación
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
