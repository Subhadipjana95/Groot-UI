"use client";

import React, { Children, useEffect, useState, memo } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Transition, Variants } from "motion/react";
import { cn } from "@/lib/utils";

type MotionElement = typeof motion.p | typeof motion.span | typeof motion.code

const defaultVariants: Variants = {
  initial: { 
    y: "-40%",
    opacity: 0,
    scale: 0.98,
    filter: "blur(4px)" },
  animate: {
    y: "0%",
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
  },
  exit: {
    y: "40%",
    opacity: 0,
    scale: 0.98,
    filter: "blur(4px)",
    transition: { ease: "easeOut" },
  },
}

export type ShimmerTextFlipProps = {
  /**
   * Motion element to render.
   * @defaultValue motion.p
   * */
  as?: MotionElement
  className?: string
  /** Array of children to cycle through. */
  children: React.ReactNode[]

  /**
   * Glow Color for the shimmer effect.
   * @defaultValue "text-muted-foreground"
   * */
  glowColor?: string

  /**
   * Time in seconds between each flip.
   * @defaultValue 2
   * */
  interval?: number
  /**
   * Motion transition configuration.
   * @defaultValue { duration: 0.3 }
   * */
  transition?: Transition
  /** Motion variants for enter/exit animations. */
  variants?: Variants

  /** Controls whether the flip animation runs. */
  play?: boolean

  /** Called with the new index after each flip. */
  onIndexChange?: (index: number) => void
}

const ShimmerTextFlip = memo(function ShimmerTextFlip({
  as: Component = motion.p,
  className,
  children,
  glowColor,
  interval = 2,
  transition = { duration: 0.3 },
  variants = defaultVariants,
  play = true,

  onIndexChange,
}: ShimmerTextFlipProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const items = Children.toArray(children)

  useEffect(() => {
    if (!play) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % items.length
        onIndexChange?.(next)
        return next
      })
    }, interval * 1000)

    return () => clearInterval(timer)
  }, [play, interval, items.length, onIndexChange])

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Component
        key={currentIndex}
        className={cn(
          `inline-block shimmer shimmer-once text-muted-foreground font-light tracking-tighter`,
          className
        )}
        style={{ "--shimmer-color": glowColor } as React.CSSProperties}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={transition}
        variants={variants}
      >
        {items[currentIndex]}
      </Component>
    </AnimatePresence>
  )
});

ShimmerTextFlip.displayName = "ShimmerTextFlip";
export { ShimmerTextFlip };
