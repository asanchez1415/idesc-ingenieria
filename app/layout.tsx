import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Kanit, Fira_Sans } from "next/font/google"

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700", "800"],
  variable: "--font-kanit",
})

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-fira-sans",
})

export const metadata: Metadata = {
  title: "IDESC División Ingeniería",
  description: "Empresa especializada en construcción, movimiento de tierras y servicios industriales",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${kanit.variable} ${firaSans.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  )
}
