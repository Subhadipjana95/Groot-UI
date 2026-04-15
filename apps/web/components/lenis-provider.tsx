"use client";

import { ReactLenis } from "lenis/react";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.3, duration: 1.0, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
