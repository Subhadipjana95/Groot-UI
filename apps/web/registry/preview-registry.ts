// ─────────────────────────────────────────────────────────────────
// AUTO-GENERATED — do not edit manually.
// Run: npm run registry:previews
// Last generated: 2026-04-30T19:17:04.959Z
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
  "3d-button": dynamic(
    () => import("./previews/3d-button/3d-button.preview"),
    { loading: () => null }
  ),
  "3d-button-variants": dynamic(
    () => import("./previews/3d-button/3d-button-variants.preview"),
    { loading: () => null }
  ),
  "avatar-tooltips": dynamic(
    () => import("./previews/avatar-tooltips/avatar-tooltips.preview"),
    { ssr: false, loading: () => null }
  ),
  "blurred-marquee": dynamic(
    () => import("./previews/blurred-marquee/blurred-marquee.preview"),
    { ssr: false, loading: () => null }
  ),
  "discord-online": dynamic(
    () => import("./previews/discord-online/discord-online.preview"),
    { loading: () => null }
  ),
  "discord-online-react": dynamic(
    () => import("./previews/discord-online-react/discord-online-react.preview"),
    { ssr: false, loading: () => null }
  ),
  "drag-button": dynamic(
    () => import("./previews/drag-button/drag-button.preview"),
    { loading: () => null }
  ),
  "github-calendar": dynamic(
    () => import("./previews/github-calendar/github-calendar.preview"),
    { ssr: false, loading: () => null }
  ),
  "github-stars": dynamic(
    () => import("./previews/github-stars/github-stars.preview"),
    { loading: () => null }
  ),
  "github-stars-react": dynamic(
    () => import("./previews/github-stars-react/github-stars-react.preview"),
    { ssr: false, loading: () => null }
  ),
  "glow-card": dynamic(
    () => import("./previews/glow-card/glow-card.preview"),
    { ssr: false, loading: () => null }
  ),
  "gradient-background-text": dynamic(
    () => import("./previews/gradient-background-text/gradient-background-text.preview"),
    { ssr: false, loading: () => null }
  ),
  "gradient-text-fill": dynamic(
    () => import("./previews/gradient-text-fill/gradient-text-fill.preview"),
    { ssr: false, loading: () => null }
  ),
  "logo-grid": dynamic(
    () => import("./previews/logo-grid/logo-grid.preview"),
    { ssr: false, loading: () => null }
  ),
  "logo-marquee": dynamic(
    () => import("./previews/logo-marquee/logo-marquee.preview"),
    { ssr: false, loading: () => null }
  ),
  "press-button": dynamic(
    () => import("./previews/press-button/press-button.preview"),
    { loading: () => null }
  ),
  "sliding-button": dynamic(
    () => import("./previews/sliding-button/sliding-button.preview"),
    { loading: () => null }
  )
} as const;

export type PreviewName = keyof typeof previewRegistry;
