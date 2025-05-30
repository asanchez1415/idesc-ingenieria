import type React from "react"
import { cn } from "@/lib/utils"

interface TypographyProps {
  children: React.ReactNode
  className?: string
}

export function TypographyH1({ children, className }: TypographyProps) {
  return (
    <h1 className={cn("text-5xl md:text-6xl font-extrabold tracking-tight font-heading", className)}>{children}</h1>
  )
}

export function TypographyH2({ children, className }: TypographyProps) {
  return <h2 className={cn("text-4xl font-bold tracking-tight font-heading", className)}>{children}</h2>
}

export function TypographyH3({ children, className }: TypographyProps) {
  return <h3 className={cn("text-2xl font-semibold tracking-tight font-heading", className)}>{children}</h3>
}

export function TypographyH4({ children, className }: TypographyProps) {
  return <h4 className={cn("text-xl font-semibold tracking-tight font-heading", className)}>{children}</h4>
}

export function TypographyP({ children, className }: TypographyProps) {
  return <p className={cn("leading-7 font-body font-normal", className)}>{children}</p>
}

export function TypographyLead({ children, className }: TypographyProps) {
  return <p className={cn("text-xl text-muted-foreground font-body font-medium", className)}>{children}</p>
}

export function TypographyLarge({ children, className }: TypographyProps) {
  return <div className={cn("text-lg font-medium font-body", className)}>{children}</div>
}

export function TypographySmall({ children, className }: TypographyProps) {
  return <small className={cn("text-sm font-light font-body", className)}>{children}</small>
}

export function TypographyMuted({ children, className }: TypographyProps) {
  return <p className={cn("text-sm text-muted-foreground font-body font-light", className)}>{children}</p>
}
