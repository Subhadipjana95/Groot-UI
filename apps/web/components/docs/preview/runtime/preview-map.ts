import * as React from "react";

/**
 * Registry of dynamic imports for component previews.
 * This MUST map to the source components in packages/ui/src/components,
 * NOT the registry distribution folder.
 */
export const previewMap: Record<string, { 
  loader: () => Promise<any>; 
  componentName?: string;
  type?: "component" | "custom";
}> = {
  // General
  "groot-starter": {
    loader: () => import("@workspace/ui/src/components/otherBlocks/groot-starter"),
    componentName: "ExampleComponent",
  },
  
  // Blocks
  "glow-card": {
    loader: () => import("@workspace/ui/src/components/otherBlocks/glow-card"),
    componentName: "GlowCard",
  },
  "client-grid": {
    loader: () => import("@workspace/ui/src/components/otherBlocks/client-grid"),
    componentName: "ClientGrid",
  },
  "github-calendar": {
    loader: () => import("@workspace/ui/src/components/otherBlocks/github-calendar"),
    componentName: "GithubCalendar",
  },
  "bento-grid": {
    loader: () => import("@workspace/ui/src/components/otherBlocks/bento-grid"),
    componentName: "BentoGrid",
  },
  "hero-glare": {
    loader: () => import("@workspace/ui/src/components/otherBlocks/hero-glare"),
    componentName: "HeroGlare",
  },
  "tech-stacks": {
    loader: () => import("@workspace/ui/src/components/otherBlocks/tech-stacks"),
    componentName: "TechStacks",
  },

  // Social
  "github-stars": {
    loader: () => import("@workspace/ui/src/components/socialStats/github-stars"),
    componentName: "GitHubStars",
  },
  "github-stars-react": {
    loader: () => import("@workspace/ui/src/components/socialStats/github-stars-react"),
    componentName: "GitHubStars",
  },
  "discord-online": {
    loader: () => import("@workspace/ui/src/components/socialStats/discord-online"),
    componentName: "DiscordOnline",
  },
  "discord-online-react": {
    loader: () => import("@workspace/ui/src/components/socialStats/discord-online-react"),
    componentName: "DiscordOnline",
  },

  // Animations
  "gradient-text": {
    loader: () => import("@workspace/ui/src/components/textAnimations/gradient-text"),
    componentName: "GradientText",
  },
  "gradient-background-text": {
    loader: () => import("@workspace/ui/src/components/textAnimations/gradient-background-text"),
    componentName: "GradientBackgroundText",
  },

  // Marquee
  "client-marquee": {
    loader: () => import("@workspace/ui/src/components/marquee/client-marquee"),
    componentName: "ClientMarquee",
  },
  "client-marquee-blur": {
    loader: () => import("@workspace/ui/src/components/marquee/client-marquee-blur"),
    componentName: "ClientMarqueeBlur",
  },

  // Buttons
  "premium-button": {
    loader: () => import("@workspace/ui/src/components/buttonVarients/premium-button"),
    componentName: "PremiumButton",
  },
  "shiny-button": {
    loader: () => import("@workspace/ui/src/components/buttonVarients/shiny-button"),
    componentName: "ShinyButton",
  },
};
