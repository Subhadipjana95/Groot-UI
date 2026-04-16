import type { Component } from "@/lib/registry/types";

export const components: Component[] = [
  {
    title: "Groot Starter",
    slug: "groot-starter",
    description: "A simple starter component for groot-ui.",
    category: { name: "General", slug: "general" },
    tags: ["starter", "groot"],
    version: "1.0.0",
    status: "stable",
    registryUrl: "https://groot-ui.vercel.app/r/groot-starter.json",
    usage: {
      import: `import { GrootStarter } from "@/components/groot-starter"`,
      code: `export default function Demo() {
  return <GrootStarter />
}`,
    },
    preview: { type: "component", props: {} },
    props: [],
    dependencies: ["lucide-react"],
  },
  {
    title: "Glow Card",
    slug: "glow-card",
    description: "A card with a glowing hover effect.",
    category: { name: "Blocks", slug: "blocks" },
    tags: ["card", "glow", "effect"],
    version: "1.0.0",
    status: "stable",
    registryUrl: "https://groot-ui.vercel.app/r/glow-card.json",
    usage: {
      import: `import { GlowCard } from "@/components/glow-card"`,
      code: `export default function Demo() {
  return (
    <GlowCard>
      <h3 className="text-white">Hello Groot</h3>
      <p className="text-white/60">This is a glowing card.</p>
    </GlowCard>
  )
}`,
    },
    preview: { type: "component", props: { children: "Glow Card Content" } },
    props: [
      {
        name: "children",
        type: "ReactNode",
        default: "-",
        required: true,
        description: "Card content",
      },
      {
        name: "className",
        type: "string",
        default: "-",
        required: false,
        description: "Custom styling",
      },
    ],
    dependencies: [],
  },
  {
    title: "GitHub Stars",
    slug: "github-stars",
    description: "Displays a GitHub repo star count with auto-fetch and tooltip.",
    category: { name: "Social", slug: "social" },
    tags: ["github", "stars"],
    version: "1.0.0",
    status: "stable",
    registryUrl: "https://groot-ui.vercel.app/r/github-stars.json",
    usage: {
      import: `import { GitHubStars } from "@/components/github-stars"`,
      code: `export default function Demo() {
  return <GitHubStars repo="Subhadipjana95/Groot-UI" />
}`,
    },
    preview: { type: "component", props: { repo: "Subhadipjana95/Groot-UI" } },
    props: [
      {
        name: "repo",
        type: "string",
        default: "-",
        required: true,
        description: "Repository path in 'owner/repo' format",
      },
    ],
    dependencies: ["lucide-react", "framer-motion"],
  },
  {
    title: "GitHub Stars (React)",
    slug: "github-stars-react",
    description: "GitHub star count for Vite and non-Next.js projects.",
    category: { name: "Social", slug: "social" },
    tags: ["github", "stars", "react"],
    version: "1.0.0",
    status: "stable",
    registryUrl: "https://groot-ui.vercel.app/r/github-stars-react.json",
    usage: {
      import: `import { GitHubStarsReact } from "@/components/github-stars-react"`,
      code: `export default function Demo() {
  return <GitHubStarsReact repo="Subhadipjana95/Groot-UI" />
}`,
    },
    preview: { type: "component", props: { repo: "Subhadipjana95/Groot-UI" } },
    props: [
      {
        name: "repo",
        type: "string",
        default: "-",
        required: true,
        description: "Repository path in 'owner/repo' format",
      },
    ],
    dependencies: ["lucide-react"],
  },
  {
    title: "Gradient Text Fill",
    slug: "gradient-text-fill",
    label: "New",
    description: "Animated gradient fills the text with 3D depth.",
    category: { name: "Animations", slug: "animations" },
    tags: ["text", "gradient", "animation"],
    version: "1.0.0",
    status: "stable",
    registryUrl: "https://groot-ui.vercel.app/r/gradient-text-fill.json",
    usage: {
      import: `import { GradientTextFill } from "@/components/gradient-text-fill"`,
      code: `export default function Demo() {
  return <GradientTextFill>Groot UI</GradientTextFill>
}`,
    },
    preview: { type: "component", props: { children: "Groot UI" } },
    props: [
      {
        name: "children",
        type: "string",
        default: "-",
        required: true,
        description: "Text content to be animated",
      },
    ],
    dependencies: ["framer-motion"],
  },
  {
    title: "Gradient Background Text",
    slug: "gradient-background-text",
    description: "Animated gradient background orb text with 3D engraved effect.",
    category: { name: "Animations", slug: "animations" },
    tags: ["text", "gradient", "background"],
    version: "1.0.0",
    status: "stable",
    registryUrl: "https://groot-ui.vercel.app/r/gradient-background-text.json",
    usage: {
      import: `import { GradientBackgroundText } from "@/components/gradient-background-text"`,
      code: `export default function Demo() {
  return <GradientBackgroundText>Groot UI</GradientBackgroundText>
}`,
    },
    preview: { type: "component", props: { children: "Groot UI" } },
    props: [
      {
        name: "children",
        type: "string",
        default: "-",
        required: true,
        description: "Text content to be animated",
      },
    ],
    dependencies: ["framer-motion"],
  },
  {
    title: "Discord Online",
    slug: "discord-online",
    description: "Shows live Discord member presence count (Next.js).",
    category: { name: "Social", slug: "social" },
    tags: ["discord", "presence"],
    version: "1.0.0",
    status: "stable",
    registryUrl: "https://groot-ui.vercel.app/r/discord-online.json",
    usage: {
      import: `import { DiscordOnline } from "@/components/discord-online"`,
      code: `export default function Demo() {
  return <DiscordOnline serverId="123456789" />
}`,
    },
    preview: { type: "component", props: { serverId: "123456789" } },
    props: [
      {
        name: "serverId",
        type: "string",
        default: "-",
        required: true,
        description: "The unique Discord Server ID",
      },
    ],
    dependencies: ["lucide-react"],
  },
  {
    title: "Discord Online (React)",
    slug: "discord-online-react",
    description: "Shows live Discord member presence count (Client-side).",
    category: { name: "Social", slug: "social" },
    tags: ["discord", "presence", "react"],
    version: "1.0.0",
    status: "stable",
    registryUrl: "https://groot-ui.vercel.app/r/discord-online-react.json",
    usage: {
      import: `import { DiscordOnlineReact } from "@/components/discord-online-react"`,
      code: `export default function Demo() {
  return <DiscordOnlineReact serverId="123456789" />
}`,
    },
    preview: { type: "component", props: { serverId: "123456789" } },
    props: [
      {
        name: "serverId",
        type: "string",
        default: "-",
        required: true,
        description: "The unique Discord Server ID",
      },
    ],
    dependencies: ["lucide-react"],
  },
  {
    title: "Client Marquee",
    slug: "client-marquee",
    description: "Infinite marquee logo slider with mask fade edges.",
    category: { name: "Marquee", slug: "marquee" },
    tags: ["marquee", "logos", "slider"],
    version: "1.0.0",
    status: "stable",
    registryUrl: "https://groot-ui.vercel.app/r/client-marquee.json",
    usage: {
      import: `import { ClientMarquee } from "@/components/client-marquee"`,
      code: `export default function Demo() {
  return <ClientMarquee items={[]} />
}`,
    },
    preview: { type: "component", props: { items: [] } },
    props: [
      {
        name: "items",
        type: "any[]",
        default: "[]",
        required: true,
        description: "Array of logo objects to display",
      },
    ],
    dependencies: ["framer-motion", "react-use-measure"],
  },
  {
    title: "Client Marquee Blur",
    slug: "client-marquee-blur",
    label: "New",
    description: "Infinite marquee logo slider with blurred edges.",
    category: { name: "Marquee", slug: "marquee" },
    tags: ["marquee", "logos", "blur"],
    version: "1.0.0",
    status: "stable",
    registryUrl: "https://groot-ui.vercel.app/r/client-marquee-blur.json",
    usage: {
      import: `import { ClientMarqueeBlur } from "@/components/client-marquee-blur"`,
      code: `export default function Demo() {
  return <ClientMarqueeBlur items={[]} />
}`,
    },
    preview: { type: "component", props: { items: [] } },
    props: [
      {
        name: "items",
        type: "any[]",
        default: "[]",
        required: true,
        description: "Array of logo objects to display",
      },
    ],
    dependencies: ["framer-motion", "react-use-measure", "lucide-react"],
  },
  {
    title: "Client Grid",
    slug: "client-grid",
    description: "Grid of client logos with plus-sign separators.",
    category: { name: "Blocks", slug: "blocks" },
    tags: ["grid", "logos", "layout"],
    version: "1.0.0",
    status: "stable",
    registryUrl: "https://groot-ui.vercel.app/r/client-grid.json",
    usage: {
      import: `import { ClientGrid } from "@/components/client-grid"`,
      code: `export default function Demo() {
  return <ClientGrid items={[]} />
}`,
    },
    preview: { type: "component", props: { items: [] } },
    props: [
      {
        name: "items",
        type: "any[]",
        default: "[]",
        required: true,
        description: "Array of logo objects to display",
      },
    ],
    dependencies: ["lucide-react"],
  },
  {
    title: "GitHub Calendar",
    slug: "github-calendar",
    label: "New",
    description: "Display GitHub contributions in a calendar grid format.",
    category: { name: "Blocks", slug: "blocks" },
    tags: ["github", "calendar", "contributions"],
    version: "1.0.0",
    status: "stable",
    registryUrl: "https://groot-ui.vercel.app/r/github-calendar.json",
    usage: {
      import: `import { GitHubCalendar } from "@/components/github-calendar"`,
      code: `export default function Demo() {
  return <GitHubCalendar username="Subhadipjana95" />
}`,
    },
    preview: { type: "component", props: { username: "Subhadipjana95" } },
    props: [
      {
        name: "username",
        type: "string",
        default: "-",
        required: true,
        description: "GitHub username to fetch data for",
      },
    ],
    dependencies: ["framer-motion"],
  },
];
