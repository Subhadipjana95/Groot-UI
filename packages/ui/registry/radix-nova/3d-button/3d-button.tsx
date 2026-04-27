import * as React from "react";

import { cn } from "@/lib/utils";

interface ThreeDButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  color1: string; // Keep this light color
  color2: string; // Keep this dark color
  children: React.ReactNode;
  openInNewTab?: boolean;
  className?: string;
}

const BUTTON_GRADIENT_STYLE = {
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

export const ThreeDButton = React.forwardRef<HTMLAnchorElement, ThreeDButtonProps>(
  ({ href, color1, color2, children, openInNewTab = false, className, style, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        target={openInNewTab ? "_blank" : undefined}
        rel={openInNewTab ? "noopener noreferrer" : undefined}
        className={cn(
          "relative flex h-9 px-4 items-center justify-center rounded-lg text-white cursor-pointer transition-all duration-200 ease-in-out hover:brightness-110 active:scale-95",
          className
        )}
        style={{
          ...BUTTON_GRADIENT_STYLE,
          "--color1": color1,
          "--color2": color2,
          background: `linear-gradient(to top, ${color1}, ${color2})`,
          ...style,
        } as React.CSSProperties}
        {...props}
      >
        <span
          className="pointer-events-none absolute left-1/2 top-0 z-20 h-2/5 w-[80%] -translate-x-1/2 rounded-t-[inherit]"
          style={SHIMMER_STYLE}
        />
        <span
          className="pointer-events-none absolute inset-0 z-0 rounded-[inherit]"
          style={INNER_SHADOW_STYLE}
        />
        <span className="relative z-30 flex items-center justify-center drop-shadow-sm text-sm font-medium tracking-wide">
          {children}
        </span>
      </a>
    );
  }
);

ThreeDButton.displayName = "ThreeDButton";
