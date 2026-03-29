"use client";

import React, { memo, useMemo } from "react";
import { motion, MotionProps } from "motion/react";
import { cn } from "@/lib/utils";

interface GradientTextProps extends Omit<
  React.HTMLAttributes<HTMLElement>,
  keyof MotionProps | "style"
> {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
  colors?: string;
  style?: React.CSSProperties;
}

const keyframesStyle = `
@keyframes gradient-border {
  0%, 100% { border-radius: 37% 29% 27% 27% / 28% 25% 41% 37%; }
  25% { border-radius: 47% 29% 39% 49% / 61% 19% 66% 26%; }
  50% { border-radius: 57% 23% 47% 72% / 63% 17% 66% 33%; }
  75% { border-radius: 28% 49% 29% 100% / 93% 20% 64% 25%; }
}
@keyframes gradient-1 {
  0%, 100% { top: 0; right: 0; }
  50% { top: 50%; right: 25%; }
  75% { top: 25%; right: 50%; }
}
@keyframes gradient-2 {
  0%, 100% { top: 0; left: 0; }
  60% { top: 75%; left: 25%; }
  85% { top: 50%; left: 50%; }
}
@keyframes gradient-3 {
  0%, 100% { bottom: 0; left: 0; }
  40% { bottom: 50%; left: 25%; }
  65% { bottom: 25%; left: 50%; }
}
@keyframes gradient-4 {
  0%, 100% { bottom: 0; right: 0; }
  50% { bottom: 25%; right: 40%; }
  90% { bottom: 50%; right: 25%; }
}
@media (prefers-reduced-motion: reduce) {
  .groot-gradient-orb {
    animation: none !important;
  }
}
`;

const depthStyles: React.CSSProperties = {
  textShadow: `
    0px 1px 0px rgba(0,0,0,0.45),
    0px 2px 0px rgba(0,0,0,0.4),
    0px 3px 0px rgba(0,0,0,0.35),
    0px 4px 0px rgba(0,0,0,0.25),
    0px 5px 0px rgba(0,0,0,0.15),
    0px 6px 0px rgba(0,0,0,0.08),
    0px 8px 12px rgba(0,0,0,0.35),
    0px -1px 0px rgba(255,255,255,0.1)
  `,
  transform: "translateZ(16px)",
  filter: "drop-shadow(0 8px 12px rgba(0,0,0,0.4))",
};

const perspectiveStyle: React.CSSProperties = {
  perspective: "600px",
  perspectiveOrigin: "50% 50%",
  display: "inline-flex",
  transformStyle: "preserve-3d",
};

const motionStyle: React.CSSProperties = {
  ...depthStyles,
  transformStyle: "preserve-3d",
  willChange: "transform",
};

const rimLightStyle: React.CSSProperties = {
  background:
    "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
};

const rimShadowStyle: React.CSSProperties = {
  background:
    "linear-gradient(90deg, transparent, rgba(0,0,0,0.4), transparent)",
};

const ORB_CLASS =
  "groot-gradient-orb pointer-events-none absolute h-[30vw] w-[30vw] animate-[gradient-border_6s_ease-in-out_infinite] mix-blend-overlay blur-lg";

const GradientBackgroundText = memo(function GradientBackgroundText({
  className,
  children,
  as: Component = "span",
  colors = "#cc0066, #1aff53, #004d99, #f5f56b, #a600e6",
  style,
  ...props
}: GradientTextProps) {
  const MotionComponent = useMemo(() => motion.create(Component), [Component]);

  const colorArray = useMemo(
    () => colors.split(",").map((c) => c.trim()),
    [colors],
  );

  const mergedMotionStyle = useMemo(
    () => ({ ...motionStyle, ...style }),
    [style],
  );

  return (
    <span style={perspectiveStyle}>
      <style dangerouslySetInnerHTML={{ __html: keyframesStyle }} />
      <MotionComponent
        className={cn(
          "relative inline-flex overflow-hidden font-bold tracking-tight text-transparent bg-clip-text px-2 pb-1.5 rounded-xl",
          className,
        )}
        style={mergedMotionStyle}
        {...props}
      >
        {children}

        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={rimLightStyle}
        />

        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
          style={rimShadowStyle}
        />

        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 mix-blend-darken dark:mix-blend"
        >
          <span
            className={cn(
              ORB_CLASS,
              "-top-1/2 animate-[gradient-border_6s_ease-in-out_infinite,gradient-1_12s_ease-in-out_infinite_alternate]",
            )}
            style={{ backgroundColor: colorArray[0] }}
          />
          <span
            className={cn(
              ORB_CLASS,
              "right-0 top-0 animate-[gradient-border_6s_ease-in-out_infinite,gradient-2_12s_ease-in-out_infinite_alternate]",
            )}
            style={{ backgroundColor: colorArray[1] }}
          />
          <span
            className={cn(
              ORB_CLASS,
              "bottom-0 left-0 animate-[gradient-border_6s_ease-in-out_infinite,gradient-3_12s_ease-in-out_infinite_alternate]",
            )}
            style={{ backgroundColor: colorArray[2] }}
          />
          <span
            className={cn(
              ORB_CLASS,
              "-bottom-1/2 right-0 animate-[gradient-border_6s_ease-in-out_infinite,gradient-4_12s_ease-in-out_infinite_alternate]",
            )}
            style={{ backgroundColor: colorArray[3] }}
          />
        </span>
      </MotionComponent>
    </span>
  );
});

GradientBackgroundText.displayName = "GradientBackgroundText";

export { GradientBackgroundText };
