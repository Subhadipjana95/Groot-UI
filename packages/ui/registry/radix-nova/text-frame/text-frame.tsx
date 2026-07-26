import React, { useId, memo, useMemo } from "react";
import { motion, MotionProps, Variants } from "motion/react";
import { cn } from "@/lib/utils";

interface TextFrameProps extends Omit<
  React.HTMLAttributes<HTMLElement>,
  keyof MotionProps | "style"
> {
  children: React.ReactNode;
  as?: React.ElementType;
  lineStyle?: "dashed" | "solid";
  accessible?: boolean;
  className?: string;
}

const CornerRectangleDimentions = [
  {
    id: 1,
    x: "0",
    y: "0",
  },
  {
    id: 2,
    x: "0",
    y: "calc(100% - 0.16em)",
  },
  {
    id: 3,
    x: "calc(100% - 0.16em)",
    y: "calc(100% - 0.16em)",
  },
  {
    id: 4,
    x: "calc(100% - 0.16em)",
    y: "0",
  }
]

const blurInContainerVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1 as const,
    },
  },
}

const blurInItemVariants: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    filter: "blur(10px)",
    transition: { duration: 0.3 },
  },
}

const TextFrame = memo(function TextFrame({
  children,
  as: Component = "span",
  lineStyle = "solid",
  accessible = true,
  className,
}: TextFrameProps) {
  const MotionComponent = useMemo(() => motion.create(Component), [Component]);
  const gradientId = useId();
  const clipId = useId();

  return (
    <MotionComponent
      className={cn(
        "relative inline-flex items-center justify-center px-[0.2em] pt-[0.20em] pb-[0.25em] -mx-[0.1em] text-foreground italic font-[Libre_Baskerville] **:leading-none [&_svg]:text-foreground whitespace-nowrap selection:bg-foreground/10",
        className
      )}
      aria-label={accessible ? children : undefined}
    >
      <style jsx>{`@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400..700;1,400..700&display=swap');`}</style>
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
      >
        <defs>
          <linearGradient id={gradientId} x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--color-background)" stopOpacity="0.01" />
            <stop offset="60%" stopColor="currentColor" stopOpacity="0.10" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.40" />
          </linearGradient>
          <clipPath id={clipId}>
            <motion.rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              transition={{ delay: 0.5, duration: 1, type: "spring", damping: 18, stiffness: 100 }}
            />
          </clipPath>
        </defs>
        {/* Frame Line */}
        <rect
          x="0.08em"
          y="0.08em"
          width="calc(100% - 0.16em)"
          height="calc(100% - 0.16em)"
          strokeWidth={lineStyle === "dashed" ? "0.012em" : "0.015em"}
          stroke="currentColor"
          strokeDasharray={lineStyle === "dashed" ? "0.16em 0.12em" : undefined}
          fill={`url(#${gradientId})`}
          clipPath={`url(#${clipId})`}
        />
        {/* Corner Rectangles */}
        {
          CornerRectangleDimentions.map((item) => (
            <motion.rect
              key={item.id}
              x={item.x}
              y={item.y}
              width="0.16em"
              height="0.16em"
              rx="0.015em"
              strokeWidth={lineStyle === "dashed" ? "0.012em" : "0.015em"}
              stroke="currentColor"
              fill="var(--color-background)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.8 +  0.08,
                duration: 0.45,
                type: "spring",
                damping: 16,
                stiffness: 200
              }}
              style={{ transformOrigin: "center" }}
            />
          ))
        }
      </svg>
      <motion.span
        variants={blurInContainerVariants}
        initial="hidden"
        animate="show"
        exit="exit"
        style={{ display: "inline-block" }}
      >
        <motion.span
          variants={blurInItemVariants}
          style={{ display: "inline-block" }}
          aria-hidden={accessible ? true : undefined}
        >
          {children}
        </motion.span>
      </motion.span>
    </MotionComponent>
  )
});

TextFrame.displayName = "TextFrame";
export { TextFrame };
