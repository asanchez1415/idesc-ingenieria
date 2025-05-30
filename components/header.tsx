"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Resto del contenido del header permanece igual */}
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-idesc.png"
              alt="IDESC Ingeniería"
              width={180}
              height={60}
              className="h-24 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-primary transition-colors font-heading font-medium">
              INICIO
            </Link>
            <Link href="/empresa" className="text-white hover:text-primary transition-colors font-heading font-medium">
              EMPRESA
            </Link>
            <div className="relative group">
              <Link
                href="/lineas-de-negocio"
                className="text-white hover:text-primary transition-colors font-heading font-medium flex items-center space-x-1"
              >
                <span>LÍNEAS DE NEGOCIO</span>
                <ChevronDown className="w-4 h-4" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="py-2">
                  <Link
                    href="/lineas-de-negocio/rental-equipos"
                    className="block px-4 py-2 text-gray-dark hover:bg-gray-light font-body"
                  >
                    Rental Equipos
                  </Link>
                  <Link
                    href="/lineas-de-negocio/construccion"
                    className="block px-4 py-2 text-gray-dark hover:bg-gray-light font-body"
                  >
                    Construcción
                  </Link>
                  <Link
                    href="/lineas-de-negocio/energia"
                    className="block px-4 py-2 text-gray-dark hover:bg-gray-light font-body"
                  >
                    Energía
                  </Link>
                  <Link
                    href="/lineas-de-negocio/agricultura"
                    className="block px-4 py-2 text-gray-dark hover:bg-gray-light font-body"
                  >
                    Agricultura
                  </Link>
                  <Link
                    href="/lineas-de-negocio/obras-civiles"
                    className="block px-4 py-2 text-gray-dark hover:bg-gray-light font-body"
                  >
                    Obras Civiles
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="/proyectos"
              className="text-white hover:text-primary transition-colors font-heading font-medium"
            >
              PROYECTOS
            </Link>
            <Link href="/contacto">
              <Button className="bg-primary hover:bg-primary-dark text-black font-heading font-medium">CONTACTO</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black absolute top-20 left-0 right-0">
            <nav className="flex flex-col space-y-4 p-4">
              <Link href="/" className="text-white hover:text-primary transition-colors font-heading font-medium">
                INICIO
              </Link>
              <Link
                href="/empresa"
                className="text-white hover:text-primary transition-colors font-heading font-medium"
              >
                EMPRESA
              </Link>
              <Link
                href="/lineas-de-negocio"
                className="text-white hover:text-primary transition-colors font-heading font-medium"
              >
                LÍNEAS DE NEGOCIO
              </Link>
              <Link
                href="/lineas-de-negocio/rental-equipos"
                className="text-white hover:text-primary transition-colors font-body font-medium pl-4"
              >
                • Rental Equipos
              </Link>
              <Link
                href="/lineas-de-negocio/construccion"
                className="text-white hover:text-primary transition-colors font-body font-medium pl-4"
              >
                • Construcción
              </Link>
              <Link
                href="/lineas-de-negocio/energia"
                className="text-white hover:text-primary transition-colors font-body font-medium pl-4"
              >
                • Energía
              </Link>
              <Link
                href="/lineas-de-negocio/agricultura"
                className="text-white hover:text-primary transition-colors font-body font-medium pl-4"
              >
                • Agricultura
              </Link>
              <Link
                href="/lineas-de-negocio/obras-civiles"
                className="text-white hover:text-primary transition-colors font-body font-medium pl-4"
              >
                • Obras Civiles
              </Link>
              <Link
                href="/proyectos"
                className="text-white hover:text-primary transition-colors font-heading font-medium"
              >
                PROYECTOS
              </Link>
              <Link
                href="/contacto"
                className="text-white hover:text-primary transition-colors font-heading font-medium"
              >
                CONTACTO
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
