"use client";

import React from "react";
import { Button } from "@workspace/ui/components/button";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";
import { motion } from "motion/react";

export interface ButtonWithIconProps
  extends Omit<React.ComponentProps<typeof Button>, "variant"> {
  text: string;
  iconPosition?: "left" | "right";
  variant?: "default" | "outline";
}

const ICON_PX = 40;
const GAP_PX = 4;

const SPRING_SLIDE = { type: "spring", stiffness: 300, damping: 28 } as const;
const SPRING_ROTATE = { type: "spring", stiffness: 400, damping: 20 } as const;

const ICON_STYLE = {
  background: "var(--brand-gradient)",
  boxShadow:
    "0 2px 8px 0 rgba(204,0,102,0.35), 0 1.5px 0 0 rgba(255,255,255,0.25) inset, 0 -2px 8px 0 rgba(204,0,102,0.5) inset, 0 0 0 1px rgba(0,0,0,0.08)",
} as const;

const SHIMMER_STYLE = {
  background:
    "linear-gradient(180deg,rgba(255,255,255,0.4) 0%,rgba(255,255,255,0) 80%,transparent 100%)",
  filter: "blur(0.5px)",
} as const;

const INNER_SHADOW_STYLE = {
  boxShadow:
    "0 0 0 1px rgba(255,255,255,0.15) inset, 0 1.5px 0 0 rgba(255,255,255,0.2) inset, 0 -2px 4px 0 rgba(204,0,102,0.2) inset",
} as const;

const BOX_SHADOW = {
  default:
    "inset 0 2px 3px 0 rgba(255,255,255,0.15), inset 0 -3px 6px 0 rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.1)",
  outline:
    "inset 0 2px 4px 0 rgba(0,0,0,0.12), inset 0 -2px 2px 0 rgba(255,255,255,0.3), inset 0 0 0 1px rgba(0,0,0,0.06)",
} as const;

export const ButtonWithIcon = React.forwardRef<
  HTMLButtonElement,
  ButtonWithIconProps
>(
  (
    { text, className, variant = "default", iconPosition = "right", ...props },
    externalRef
  ) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const [travelDistance, setTravelDistance] = React.useState(0);

    const mergedRef = React.useCallback(
      (node: HTMLButtonElement | null) => {
        if (typeof externalRef === "function") externalRef(node);
        else if (externalRef)
          (
            externalRef as React.MutableRefObject<HTMLButtonElement | null>
          ).current = node;

        if (!node) return;

        const measure = () =>
          setTravelDistance(node.clientWidth - ICON_PX - GAP_PX * 2);

        measure();

        const ro = new ResizeObserver(measure);
        ro.observe(node);
      },
      [externalRef]
    );

    const slideX = isHovered
      ? iconPosition === "right"
        ? -travelDistance
        : travelDistance
      : 0;
    const rotateX = isHovered ? 360 : 0;

    return (
      <Button
        ref={mergedRef}
        variant={variant}
        aria-label={text}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "relative h-12 w-fit cursor-pointer overflow-hidden rounded-xl p-1 text-sm font-medium transition-all duration-500 flex items-center",
          iconPosition === "right"
            ? "ps-6 pe-14 hover:ps-14 hover:pe-6"
            : "ps-14 pe-6 hover:ps-6 hover:pe-14",
          className
        )}
        style={{ boxShadow: BOX_SHADOW[variant] }}
        {...props}
      >
        <span
          className="relative z-10 transition-all duration-500 text-shadow-black/10 text-shadow-lg"
        >
          {text}
        </span>

        <motion.div
          aria-hidden
          className={cn(
            "absolute z-20 flex h-10 w-10 items-center justify-center rounded-lg text-white",
            iconPosition === "right" ? "right-1" : "left-1"
          )}
          style={ICON_STYLE}
          animate={{ x: slideX, rotate: rotateX }}
          transition={SPRING_SLIDE}
        >
          <span
            className="pointer-events-none absolute left-1/2 top-0 z-20 h-2/5 w-[80%] -translate-x-1/2 rounded-t-[inherit]"
            style={SHIMMER_STYLE}
          />
          <span
            className="pointer-events-none absolute inset-0 z-0 rounded-[inherit]"
            style={INNER_SHADOW_STYLE}
          />
          <motion.span
            className="relative z-30 flex items-center justify-center drop-shadow-sm"
            animate={{ rotate: isHovered ? 45 : 0 }}
            transition={SPRING_ROTATE}
          >
            <ArrowUpRight size={16} />
          </motion.span>
        </motion.div>
      </Button>
    );
  }
);

ButtonWithIcon.displayName = "ButtonWithIcon";
