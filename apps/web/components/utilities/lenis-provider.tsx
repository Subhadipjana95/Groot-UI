"use client";

import { ReactLenis } from "lenis/react";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.3, duration: 1.0, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}

export function InnerLenisScroll({ children, className, ...props }: { children: React.ReactNode, className?: string } & React.HTMLAttributes<HTMLElement>) {
  return (
    <ReactLenis 
      options={{ lerp: 0.2, duration: 1, smoothWheel: true }} 
      className={className} 
      {...props}
    >
      {children}
    </ReactLenis>
  );
}
