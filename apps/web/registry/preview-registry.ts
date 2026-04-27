// ─────────────────────────────────────────────────────────────────
// AUTO-GENERATED — do not edit manually.
// Run: npm run registry:previews
// Last generated: 2026-04-27T06:19:20.565Z
// ─────────────────────────────────────────────────────────────────

import dynamic from "next/dynamic";

/**
 * previewRegistry maps each component slug to a dynamically-loaded
 * preview component. ssr:false is set per-component based on the
 * disableSSR flag in each component's *.config.ts.
 *
 * - Client components (animations, canvas, motion): ssr: false
 * - Server components (github-stars, discord-online): ssr: true (default)
 */
export const previewRegistry = {
  "client-grid": dynamic(
    () => import("./previews/client-grid.preview"),
    { ssr: false, loading: () => null }
  ),
  "client-marquee-blur": dynamic(
    () => import("./previews/client-marquee-blur.preview"),
    { ssr: false, loading: () => null }
  ),
  "client-marquee": dynamic(
    () => import("./previews/client-marquee.preview"),
    { ssr: false, loading: () => null }
  ),
  "discord-online-react": dynamic(
    () => import("./previews/discord-online-react.preview"),
    { ssr: false, loading: () => null }
  ),
  "discord-online": dynamic(
    () => import("./previews/discord-online.preview"),
    { loading: () => null }
  ),
  "github-calendar": dynamic(
    () => import("./previews/github-calendar.preview"),
    { ssr: false, loading: () => null }
  ),
  "github-stars-react": dynamic(
    () => import("./previews/github-stars-react.preview"),
    { ssr: false, loading: () => null }
  ),
  "github-stars": dynamic(
    () => import("./previews/github-stars.preview"),
    { loading: () => null }
  ),
  "glow-card": dynamic(
    () => import("./previews/glow-card.preview"),
    { ssr: false, loading: () => null }
  ),
  "gradient-background-text": dynamic(
    () => import("./previews/gradient-background-text.preview"),
    { ssr: false, loading: () => null }
  ),
  "gradient-text-fill": dynamic(
    () => import("./previews/gradient-text-fill.preview"),
    { ssr: false, loading: () => null }
  ),
  "groot-starter": dynamic(
    () => import("./previews/groot-starter.preview"),
    { loading: () => null }
  )
} as const;

export type PreviewName = keyof typeof previewRegistry;
