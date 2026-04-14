"use client";

import React from "react";
import { Button } from "@workspace/ui/components/button";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";

interface ButtonWithIconProps extends Omit<React.ComponentProps<typeof Button>, 'variant'> {
  text: string;
  iconPosition?: "left" | "right";
  variant?: "default" | "outline";
}

export const ButtonWithIcon = React.forwardRef<HTMLButtonElement, ButtonWithIconProps>(
  ({ text, className, variant = "default", iconPosition = "right", ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant={variant}
        className={cn(
          "relative text-sm font-medium rounded-xl h-12 p-1 group transition-all duration-500 w-fit overflow-hidden cursor-pointer flex items-center",
          iconPosition === "right" 
            ? "ps-6 pe-14 hover:ps-14 hover:pe-6" 
            : "ps-14 pe-6 hover:ps-6 hover:pe-14",
          className
        )}
        style={{
          boxShadow: variant === "outline"
            ? "inset 0 2px 4px 0 rgba(0,0,0,0.12), inset 0 -2px 2px 0 rgba(255,255,255,0.3), inset 0 0 0 1px rgba(0,0,0,0.06)"
            : "inset 0 2px 3px 0 rgba(255,255,255,0.15), inset 0 -3px 6px 0 rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.1)",
        }}
        {...props}
      >
        <span
          className="relative z-10 transition-all duration-500"
          style={{
            textShadow: variant === "outline"
              ? "0 1px 3px rgba(255,255,255,0.3), 0 -1px 3px rgba(0,0,0,0.04)"
              : "0 1px 4px rgba(0,0,0,0.3), 0 -1px 3px rgba(255,255,255,0.06)",
          }}
        >
          {text}
        </span>
        <div
          className={cn(
            "absolute w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-500 group-hover:rotate-360 text-white",
            iconPosition === "right" 
              ? "right-1 group-hover:right-[calc(100%-44px)]" 
              : "left-1 group-hover:left-[calc(100%-44px)]"
          )}
          style={{
            background: `var(--brand-gradient)`,
            boxShadow: `0 2px 8px 0 rgba(204, 0, 102, 0.35), 0 1.5px 0 0 rgba(255,255,255,0.25) inset, 0 -2px 8px 0 rgba(204, 0, 102, 0.5) inset, 0 0 0 1px rgba(0,0,0,0.08)`,
          }}
        >
          <span
            className="absolute left-1/2 top-0 z-20 w-[80%] h-2/5 -translate-x-1/2 rounded-t-[inherit] pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 80%, transparent 100%)",
              filter: "blur(0.5px)",
            }}
          />
          <span
            className="absolute inset-0 z-0 rounded-[inherit] pointer-events-none"
            style={{
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.15) inset, 0 1.5px 0 0 rgba(255,255,255,0.2) inset, 0 -2px 4px 0 rgba(204, 0, 102, 0.2) inset",
            }}
          />
          <ArrowUpRight size={16} className={cn("rotate-0 group-hover:rotate-45 relative z-30 drop-shadow-sm")} />
        </div>
      </Button>
    );
  }
);

ButtonWithIcon.displayName = "ButtonWithIcon";