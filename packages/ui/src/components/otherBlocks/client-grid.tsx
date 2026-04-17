"use client"

import React, { memo, useMemo } from "react"
import { cn } from "@workspace/ui/lib/utils"
import { PlusIcon } from "lucide-react"

export type Logo = {
  src: string
  alt: string
  width?: number
  height?: number
}

const LogoImage = memo(function LogoImage({ logo }: { logo: Logo }) {
  return (
    <img
      alt={logo.alt}
      src={logo.src}
      width={logo.width ?? "auto"}
      height={logo.height ?? "auto"}
      loading="lazy"
      className="pointer-events-none h-4 select-none md:h-5 dark:brightness-0 dark:invert"
    />
  )
})

type LogoCardProps = React.ComponentProps<"div"> & { logo: Logo }

const LogoCard = memo(function LogoCard({
  logo,
  className,
  children,
  ...props
}: LogoCardProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center bg-background px-4 py-8 md:p-8",
        className
      )}
      {...props}
    >
      <LogoImage logo={logo} />
      {children}
    </div>
  )
})

const DEFAULT_ITEMS: Logo[] = [
  { src: "https://svgl.app/library/nvidia-wordmark-light.svg", alt: "Nvidia" },
  { src: "https://svgl.app/library/supabase_wordmark_light.svg", alt: "Supabase" },
  { src: "https://svgl.app/library/openai_wordmark_light.svg", alt: "OpenAI" },
  { src: "https://svgl.app/library/vercel_wordmark.svg", alt: "Vercel" },
  { src: "https://svgl.app/library/github_wordmark_light.svg", alt: "GitHub" },
  { src: "https://svgl.app/library/clerk-wordmark-light.svg", alt: "Clerk" },
  { src: "https://svgl.app/library/turso-wordmark-light.svg", alt: "Turso" },
  { src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg", alt: "Claude" },
]

export const ClientGrid = memo(function ClientGrid({
  items = DEFAULT_ITEMS,
  className,
}: {
  items?: Logo[]
  className?: string
}) {
  const displayItems = useMemo(() => items.length > 0 ? items : DEFAULT_ITEMS, [items])

  const gridLogos = useMemo(() => (displayItems || []).slice(0, 8), [displayItems])

  return (
    <div
      className={cn(
        "relative grid grid-cols-2 border-x md:grid-cols-4",
        className
      )}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t" />

      {gridLogos.map((logo, i) => {
        const isHighlighted = i === 0 || i === 2 || i === 5 || i === 7

        return (
          <LogoCard
            key={logo.alt}
            logo={logo}
            className={cn(
              i < 4 && "border-b",
              (i === 4 || i === 5) && "border-b md:border-b-0",
              (i === 0 || i === 2 || i === 4 || i === 6) && "border-r",
              (i === 1 || i === 5) && "md:border-r",
              isHighlighted
                ? "bg-secondary dark:bg-secondary/30"
                : "bg-background"
            )}
          >
            {(i === 0 || i === 1 || i === 2) && (
              <PlusIcon
                className="-right-[12.5px] -bottom-[12.5px] absolute z-10 hidden size-6 md:block text-slate-800 dark:text-slate-300"
                strokeWidth={1}
              />
            )}
            {(i === 0 || i === 2 || i === 4) && (
              <PlusIcon
                className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 md:hidden text-slate-800 dark:text-slate-300"
                strokeWidth={1}
              />
            )}
          </LogoCard>
        )
      })}

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b" />
    </div>
  )
})

ClientGrid.displayName = "ClientGrid"
