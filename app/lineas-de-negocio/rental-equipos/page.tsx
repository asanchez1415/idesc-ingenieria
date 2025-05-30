import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function RentalEquiposPage() {
  const equipos = [
    "Bulldozer D8-D9",
    "Excavadoras 20-45 TON",
    "Motoniveladoras",
    "Rodillos Compactador 12 TON",
    "Camión Tolvas 22 M3",
    "Camión Aljibe 30.000 LT",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image src="/placeholder.svg?height=600&width=1920" alt="Rental de equipos" fill className="object-cover" />
        <div className="relative z-20 container mx-auto px-4 text-white text-center">
          <h1 className="text-5xl font-bold mb-4 font-heading">Rental Equipos</h1>
          <p className="text-xl">Equipos de alta disponibilidad mecánica para diversas faenas</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              Dada la experiencia de los socios y los conocimientos del mercado, podemos articular el negocio del
              alquiler, entregando a nuestros clientes diferentes tipos de equipos de apoyo con una alta disponibilidad
              mecánica para diversas faenas. Contamos con experiencia en arriendos en los sectores de minería, energía,
              rellenos sanitarios, forestal y construcción.
            </p>

            <h2 className="text-3xl font-bold mb-8 text-gray-900 font-heading">Nuestros Equipos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {equipos.map((equipo, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt={equipo}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold text-gray-900 font-heading">{equipo}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
