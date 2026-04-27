"use client";

import React, { useState } from "react";
import { motion, useTransform, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export type AvatarItem = {
  readonly id: string | number;
  readonly name: string;
  readonly designation?: string;
  readonly icon: React.ElementType;
};

const AvatarTooltipItem = ({ item }: { item: AvatarItem }) => {
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const Icon = item.icon;

  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), {
    stiffness: 100,
    damping: 15,
  });

  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), {
    stiffness: 100,
    damping: 15,
  });

  return (
    <div
      className="group relative -mr-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
      }}
    >
      <AnimatePresence mode="popLayout">
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            style={{
              left: "50%",
              translateX: "-50%",
              rotate: rotate,
              x: translateX,
            }}
            className="pointer-events-none absolute bottom-full mb-3 z-50 flex flex-col items-center rounded-md border bg-popover px-3 py-1.5 text-xs text-popover-foreground shadow-xl backdrop-blur-sm"
          >
            <div className="absolute bottom-[-4.73px] left-1/2 -translate-x-1/2 h-2 w-2 rotate-45 border-b border-r rounded-[1px] bg-popover" />
            <p className="relative z-10 whitespace-nowrap text-sm font-semibold leading-none">
              {item.name}
            </p>
            {item.designation && (
              <p className="relative z-10 mt-1 whitespace-nowrap text-[10px] text-muted-foreground leading-none">
                {item.designation}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-border bg-background shadow-sm transition-transform duration-300 group-hover:z-30 group-hover:scale-110 active:scale-95">
        <Icon className="size-6 text-foreground" />
      </div>
    </div>
  );
};

export function AvatarTooltips({ items, className }: { items: readonly AvatarItem[], className?: string }) {
  return (
    <div className={cn("flex flex-col items-center gap-3 mt-4 relative", className)}>
      <div className="flex items-center justify-center -space-x-2">
        {items.map((item) => (
          <AvatarTooltipItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}