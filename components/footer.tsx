import Link from 'next/link';
import { Mail, Instagram } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="mb-6">
              <Image
                src="/images/logo-idesc.png"
                alt="IDESC Ingeniería"
                width={180}
                height={60}
                className="h-24 w-auto"
              />
            </div>
            <p className="text-gray-300 font-body font-light">
              División Ingeniería especializada en construcción, movimiento de
              tierras y servicios industriales.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 font-heading">
              Líneas de Negocio
            </h3>
            <ul className="space-y-2 text-gray-300 font-body">
              <li>
                <Link
                  href="/lineas-de-negocio/rental-equipos"
                  className="hover:text-primary transition-colors"
                >
                  Rental Equipos
                </Link>
              </li>
              <li>
                <Link
                  href="/lineas-de-negocio/construccion"
                  className="hover:text-primary transition-colors"
                >
                  Construcción
                </Link>
              </li>
              <li>
                <Link
                  href="/lineas-de-negocio/energia"
                  className="hover:text-primary transition-colors"
                >
                  Energía
                </Link>
              </li>
              <li>
                <Link
                  href="/lineas-de-negocio/agricultura"
                  className="hover:text-primary transition-colors"
                >
                  Agricultura
                </Link>
              </li>
              <li>
                <Link
                  href="/lineas-de-negocio/obras-civiles"
                  className="hover:text-primary transition-colors"
                >
                  Obras Civiles
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 font-heading">Empresa</h3>
            <ul className="space-y-2 text-gray-300 font-body">
              <li>
                <Link
                  href="/empresa"
                  className="hover:text-primary transition-colors"
                >
                  Empresa
                </Link>
              </li>
              <li>
                <Link
                  href="/proyectos"
                  className="hover:text-primary transition-colors"
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="hover:text-primary transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 font-heading">
              Contacto
            </h3>
            <div className="space-y-3 font-body">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:contacto@idescgroup.cl"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  contacto@idescgroup.cl
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram className="w-5 h-5 text-primary" />
                <a
                  href="https://instagram.com/idesc_ingenieria"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  @idesc_ingenieria
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 font-body font-light">
          <p>
            &copy; {new Date().getFullYear()} IDESC División Ingeniería. Todos
            los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
