"use client"

import * as React from "react"
import { cn } from "@workspace/ui/lib/utils"

const GlowCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { glowColor?: string }
>(({ className, glowColor = "rgba(var(--primary), 0.2)", ...props }, ref) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })
  const cardRef = React.useRef<HTMLDivElement | null>(null)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const { left, top } = cardRef.current.getBoundingClientRect()
    setMousePosition({ x: event.clientX - left, y: event.clientY - top })
  }

  return (
    <div
      ref={(el) => {
        cardRef.current = el
        if (typeof ref === "function") ref(el)
        else if (ref) ref.current = el
      }}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative overflow-hidden rounded-xl border bg-background p-1 transition-all duration-300",
        className
      )}
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}, transparent 40%)`,
        }}
      />
      <div className="relative h-full w-full rounded-[inherit] bg-background">
        {props.children}
      </div>
    </div>
  )
})
GlowCard.displayName = "GlowCard"

export { GlowCard }
