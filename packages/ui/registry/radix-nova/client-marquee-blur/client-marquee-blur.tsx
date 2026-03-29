"use client"

import React, { memo, useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { PlusIcon } from "lucide-react"
import {
  useMotionValue,
  animate,
  motion,
  HTMLMotionProps,
} from "motion/react"
import useMeasure from "react-use-measure"

export type Logo = {
  src: string
  alt: string
  width?: number
  height?: number
}

type InfiniteSliderProps = {
  children: React.ReactNode
  gap?: number
  duration?: number
  durationOnHover?: number
  direction?: "horizontal" | "vertical"
  reverse?: boolean
  className?: string
}

const InfiniteSlider = memo(function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentDuration, setCurrentDuration] = useState(duration)
  const [ref, { width, height }] = useMeasure()
  const translation = useMotionValue(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [key, setKey] = useState(0)

  useEffect(() => {
    const size = direction === "horizontal" ? width : height
    const contentSize = size + gap
    const from = reverse ? -contentSize / 2 : 0
    const to = reverse ? 0 : -contentSize / 2

    let controls

    if (isTransitioning) {
      controls = animate(translation, [translation.get(), to], {
        ease: "linear",
        duration:
          currentDuration *
          Math.abs((translation.get() - to) / contentSize),
        onComplete: () => {
          setIsTransitioning(false)
          setKey((prev) => prev + 1)
        },
      })
    } else {
      controls = animate(translation, [from, to], {
        ease: "linear",
        duration: currentDuration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
        onRepeat: () => translation.set(from),
      })
    }

    return controls?.stop
  }, [
    key,
    translation,
    currentDuration,
    width,
    height,
    gap,
    isTransitioning,
    direction,
    reverse,
  ])

  const hoverProps = durationOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true)
          setCurrentDuration(durationOnHover)
        },
        onHoverEnd: () => {
          setIsTransitioning(true)
          setCurrentDuration(duration)
        },
      }
    : {}

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        ref={ref}
        className="flex w-max"
        style={{
          ...(direction === "horizontal"
            ? { x: translation }
            : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === "horizontal" ? "row" : "column",
        }}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
})

const GRADIENT_ANGLES = { top: 0, right: 90, bottom: 180, left: 270 }

type ProgressiveBlurProps = {
  direction?: keyof typeof GRADIENT_ANGLES
  blurLayers?: number
  blurIntensity?: number
  className?: string
} & HTMLMotionProps<"div">

const ProgressiveBlur = memo(function ProgressiveBlur({
  direction = "bottom",
  blurLayers = 8,
  blurIntensity = 0.25,
  className,
  ...props
}: ProgressiveBlurProps) {
  const layers = Math.max(blurLayers, 2)
  const segmentSize = 1 / (blurLayers + 1)
  const angle = GRADIENT_ANGLES[direction]

  return (
    <div className={cn("relative", className)}>
      {Array.from({ length: layers }).map((_, index) => {
        const gradientStops = [
          index * segmentSize,
          (index + 1) * segmentSize,
          (index + 2) * segmentSize,
          (index + 3) * segmentSize,
        ]
          .map(
            (pos, posIndex) =>
              `rgba(255,255,255,${
                posIndex === 1 || posIndex === 2 ? 1 : 0
              }) ${pos * 100}%`
          )
          .join(", ")

        const gradient = `linear-gradient(${angle}deg, ${gradientStops})`

        return (
          <motion.div
            key={index}
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{
              maskImage: gradient,
              WebkitMaskImage: gradient,
              backdropFilter: `blur(${index * blurIntensity}px)`,
            }}
            {...props}
          />
        )
      })}
    </div>
  )
})

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

export const ClientMarqueeBlur = memo(function ClientMarqueeBlur({
  logos,
  className,
}: {
  logos: Logo[]
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative mx-auto max-w-6xl bg-linear-to-r from-secondary via-transparent to-secondary py-6 md:border-x",
        className
      )}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t" />

      <InfiniteSlider gap={52} reverse duration={60} durationOnHover={20}>
        {logos.map((logo) => (
          <LogoImage key={logo.alt} logo={logo} />
        ))}
      </InfiniteSlider>

      <ProgressiveBlur
        blurIntensity={1}
        className="pointer-events-none absolute top-0 left-0 h-full w-40"
        direction="left"
      />
      <ProgressiveBlur
        blurIntensity={1}
        className="pointer-events-none absolute top-0 right-0 h-full w-40"
        direction="right"
      />

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b" />

      <PlusIcon
        className="-top-[12.5px] -right-[12.5px] absolute z-10 hidden size-6 md:block text-slate-800 dark:text-slate-300"
        strokeWidth={1}
      />
      <PlusIcon
        className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block text-slate-800 dark:text-slate-300"
        strokeWidth={1}
      />
    </div>
  )
})

ClientMarqueeBlur.displayName = "ClientMarqueeBlur"