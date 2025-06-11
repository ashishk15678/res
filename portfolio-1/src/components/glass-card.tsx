import type React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl",
        hover && "hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] transition-all duration-300",
        className,
      )}
    >
      {children}
    </div>
  )
}
