import React, { lazy } from "react";

// For production quality, we lazy load the actual component demos to avoid huge bundle sizes
// Static imports are preferred for reliability in Next.js / Turbopack dynamic resolution
export const demos: Record<string, React.ComponentType<any>> = {
  "groot-starter": lazy(() => import("@workspace/ui/registry/radix-nova/groot-starter/groot-starter").then(mod => ({ default: mod.ExampleComponent }))),
  "glow-card": lazy(() => import("@workspace/ui/registry/radix-nova/glow-card/glow-card").then(mod => ({ default: mod.GlowCard }))),
  "github-stars": lazy(() => import("@workspace/ui/registry/radix-nova/github-stars/github-stars").then(mod => ({ default: mod.GitHubStars }))),
  "github-stars-react": lazy(() => import("@workspace/ui/registry/radix-nova/github-stars-react/github-stars-react").then(mod => ({ default: mod.GitHubStars }))),
  "discord-online": lazy(() => import("@workspace/ui/registry/radix-nova/discord-online/discord-online").then(mod => ({ default: mod.DiscordOnline }))),
  "discord-online-react": lazy(() => import("@workspace/ui/registry/radix-nova/discord-online-react/discord-online-react").then(mod => ({ default: mod.DiscordOnline }))),
  "gradient-text-fill": lazy(() => import("@workspace/ui/registry/radix-nova/gradient-text-fill/gradient-text-fill").then(mod => ({ default: mod.GradientText }))),
  "gradient-background-text": lazy(() => import("@workspace/ui/registry/radix-nova/gradient-background-text/gradient-background-text").then(mod => ({ default: mod.GradientBackgroundText }))),
  "client-marquee": lazy(() => import("@workspace/ui/registry/radix-nova/client-marquee/client-marquee").then(mod => ({ default: mod.ClientMarquee }))),
  "client-marquee-blur": lazy(() => import("@workspace/ui/registry/radix-nova/client-marquee-blur/client-marquee-blur").then(mod => ({ default: mod.ClientMarqueeBlur }))),
  "client-grid": lazy(() => import("@workspace/ui/registry/radix-nova/client-grid/client-grid").then(mod => ({ default: mod.ClientGrid }))),
  "github-calendar": lazy(() => import("@workspace/ui/registry/radix-nova/github-calendar/github-calendar").then(mod => ({ default: mod.GithubCalendar }))),
};
