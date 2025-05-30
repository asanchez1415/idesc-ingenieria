import { Button } from "@/components/ui/button"
import { Target, Eye, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function EmpresaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/placeholder.svg?height=600&width=1920"
          alt="IDESC División Ingeniería - Nosotros"
          fill
          className="object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 text-white text-center">
          <h1 className="text-5xl font-bold mb-4 font-heading">Empresa</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Conoce más sobre IDESC División Ingeniería, nuestra historia, valores y compromiso con la excelencia
          </p>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-dark font-heading">¿Quiénes Somos?</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-blue mb-6 leading-relaxed font-body">
                  La variada experiencia de sus socios en los ámbitos técnico y empresarial se encuentra en un evidente
                  camino de crecimiento en mercados exigentes y competitivos. Estamos desarrollando una compañía de
                  servicios personalizados que entrega un alto nivel de calidad, ejecuta dentro de plazos establecidos y
                  cuida el medio ambiente.
                </p>
                <p className="text-lg text-gray-blue leading-relaxed mb-8">
                  Contamos con equipos propios de maquinaria pesada, como bulldozers, excavadoras, motoniveladoras y
                  rodillos compactadores, así como socios estratégicos para abarcar distintos proyectos que la industria
                  nos pueda ofrecer.
                </p>
                <div>
                  <Link href="/contacto">
                    <Button variant="outline">CONTÁCTANOS</Button>
                  </Link>
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Target className="w-8 h-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-dark font-heading">Misión</h3>
                    <p className="text-gray-blue font-body">
                      Entender las necesidades de nuestros clientes, facilitando su desarrollo de manera eficiente y
                      velando por la excelencia, la seguridad y el cuidado del medio ambiente.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Eye className="w-8 h-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-dark font-heading">Visión</h3>
                    <p className="text-gray-blue font-body">
                      Que el mercado nos reconozca por nuestra pasión, excelencia e innovación tecnológica, manteniendo
                      un alto estándar de calidad en la ejecución de obras de ingeniería.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historia y Experiencia */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-dark font-heading">Nuestra Experiencia</h2>
            <p className="text-lg text-gray-blue leading-relaxed mb-12 font-body">
              Nuestros diversos proyectos en la industria son nuestro activo más valioso. Nos dedicamos al 100% al
              desarrollo y ejecución de los mismos de manera flexible, adaptándonos a los requerimientos para cumplir
              con los plazos establecidos y los estándares de calidad. Trabajamos en equipo con las áreas de riesgo,
              calidad, recursos humanos y medio ambiente.
            </p>

            {/* Estadísticas */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-gray-600 font-body">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-gray-600 font-body">Proyectos completados</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">6</div>
                <div className="text-gray-600 font-body">Sectores de especialización</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-primary text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 font-heading">Nuestros Valores</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                value: "COMPROMISO",
                description: "Nos comprometemos con cada proyecto, cumpliendo plazos y estándares de calidad.",
              },
              {
                value: "RESPETO",
                description: "Respetamos a nuestros clientes, colaboradores y el medio ambiente en cada acción.",
              },
              {
                value: "RESPONSABILIDAD",
                description: "Asumimos la responsabilidad de nuestras acciones y decisiones empresariales.",
              },
              {
                value: "ÉTICA",
                description: "Actuamos con transparencia e integridad en todas nuestras relaciones comerciales.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <Heart className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 font-heading">{item.value}</h3>
                <p className="text-sm font-body">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectores de Trabajo */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-dark font-heading">
            Sectores de Especialización
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Minería", description: "Proyectos especializados para la industria minera" },
              { name: "Energía", description: "Obras tempranas para parques fotovoltaicos" },
              { name: "Rellenos Sanitarios", description: "Infraestructura para gestión de residuos" },
              { name: "Forestal", description: "Preparación de suelos y plantaciones" },
              { name: "Construcción", description: "Obras civiles e infraestructura" },
              { name: "Agricultura", description: "Preparación de terrenos agrícolas" },
            ].map((sector, index) => (
              <div key={index} className="text-center p-6 border border-gray-light hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-dark font-heading">{sector.name}</h3>
                <p className="text-gray-blue font-body">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registros */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-dark font-heading">Nuestros Registros</h2>
          <div className="grid md:grid-cols-4 gap-8 items-center">
            {[
              "Cámara Comercio Santiago",
              "Chile Compra – Mercado Público",
              "PlanetNuts",
              "Ministerio de Obras Públicas",
            ].map((registro, index) => (
              <div key={index} className="text-center">
                <Image src="/placeholder-logo.svg" width="120" height="60" alt={registro} className="mx-auto mb-4" />
                <p className="text-sm text-gray-blue font-body">{registro}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-heading">¿Listo para trabajar con nosotros?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-body">
            Contáctanos para conocer cómo podemos apoyar tu próximo proyecto con nuestra experiencia y equipamiento
            especializado
          </p>
          <div className="space-x-4">
            <Link href="/contacto">
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-black">
                CONTACTAR AHORA
              </Button>
            </Link>
            <Link href="/proyectos">
              <Button size="lg" variant="outline" className="bg-transparent border-primary text-white hover:text-black">
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
