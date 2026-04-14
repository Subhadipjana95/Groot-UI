"use client";

import React from "react";
import { cn } from "@workspace/ui/lib/utils";

interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactElement<{ className?: string }>;
  title: string;
  subtitle?: string;
  size?: "sm" | "md" | "lg";
  gradientLight?: { from: string; via: string; to: string };
  gradientDark?: { from: string; via: string; to: string };
}

export const PremiumButton = React.forwardRef<HTMLButtonElement, PremiumButtonProps>(({
  icon,
  title,
  subtitle,
  size = "md",
  gradientLight = { from: "from-indigo-500/40", via: "via-indigo-400/40", to: "to-indigo-500/60" },
  gradientDark = { from: "from-indigo-800/30", via: "via-accent/50", to: "to-black/70" },
  className,
  ...props
}, ref) => {
  const sizes = {
    sm: "p-3 rounded-xl",
    md: "p-4 rounded-2xl",
    lg: "p-6 rounded-3xl",
  };

  return (
    <button
      ref={ref}
      {...props}
      className={cn(`group relative overflow-hidden border-2 cursor-pointer transition-all duration-500 ease-out 
                  shadow-2xl hover:shadow-indigo-500/30 hover:scale-[1.02] hover:-translate-y-1 active:scale-95
                  ${sizes[size]} 
                  border-indigo-500/40 bg-linear-to-br ${gradientLight.from} ${gradientLight.via} ${gradientLight.to} 
                  dark:${gradientDark.from} dark:${gradientDark.via} dark:${gradientDark.to}`, className)}
    >
      {/* Moving gradient layer */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-indigo-300/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

      {/* Overlay glow */}
      <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-indigo-400/20 via-indigo-300/10 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center gap-4">
        {/* Icon */}
        <div className="p-3 rounded-lg bg-linear-to-br from-indigo-500/50 to-indigo-400/30 backdrop-blur-sm group-hover:from-indigo-400/60 group-hover:to-indigo-500/40 transition-all duration-300 shadow-sm shrink-0">
          {React.cloneElement(icon, {
            className: cn(icon.props.className, "w-7 h-7 text-white group-hover:text-white/90 transition-all duration-300 group-hover:scale-110 drop-shadow-lg"),
          })}
        </div>

        {/* Texts */}
        <div className="flex-1 text-left">
          <p className="text-white font-bold text-lg group-hover:text-white/90 transition-colors duration-300 drop-shadow-sm whitespace-nowrap">
            {title}
          </p>
          {subtitle && (
            <p className="text-white/70 text-sm group-hover:text-white/90 transition-colors duration-300 tracking-tight whitespace-nowrap">
              {subtitle}
            </p>
          )}
        </div>

        {/* Arrow */}
        <div className="opacity-40 shrink-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            className="w-5 h-5 text-white"
          >
            <path
              d="M9 5l7 7-7 7"
              strokeWidth={2}
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
        </div>
      </div>
    </button>
  );
});

PremiumButton.displayName = "PremiumButton";
