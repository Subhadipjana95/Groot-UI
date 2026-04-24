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
    title: "Hero Glare",
    slug: "hero-glare",
    label: "Magic",
    description: "Full-width animated ambient light glare with blob morphing and horizontal drift.",
    category: { name: "General", slug: "general" },
    tags: ["hero", "glare", "animation", "ambient"],
    version: "1.0.0",
    status: "stable",
    registryUrl: "https://groot-ui.vercel.app/r/hero-glare.json",
    usage: {
      import: `import { HeroGlare } from "@/components/hero-glare"`,
      code: `export default function Demo() {
  return (
    <div className="relative w-full h-[500px] overflow-hidden bg-background">
      <HeroGlare />
      <div className="relative z-10 flex items-center justify-center h-full">
         <h1 className="text-4xl font-bold">Hero Title</h1>
      </div>
    </div>
  )
}`,
    },
    preview: { type: "component", props: {} },
    props: [],
    dependencies: [],
  },
  {
    title: "Tech Stacks",
    slug: "tech-stacks",
    description: "Animated tooltip tech stack icons with interactive hover effects.",
    category: { name: "General", slug: "general" },
    tags: ["tech", "stack", "icons", "tooltip"],
    version: "1.0.0",
    status: "stable",
    registryUrl: "https://groot-ui.vercel.app/r/tech-stacks.json",
    usage: {
      import: `import { TechStacks } from "@/components/tech-stacks"`,
      code: `export default function Demo() {
  return <TechStacks />
}`,
    },
    preview: { type: "component", props: {} },
    props: [
      {
        name: "items",
        type: "TechItem[]",
        default: "DEFAULT_ITEMS",
        required: true,
        description: "Array of tech items (name, designation(optional), icon)",
      },
      {
        name: "className",
        type: "string",
        description: "Container styling",
      },
    ],
    dependencies: ["motion/react"],
  },
  {
    title: "Glow Card",
    slug: "glow-card",
    description: "A card with a dynamic glowing cursor-tracking hover effect.",
    category: { name: "Blocks", slug: "blocks" },
    tags: ["card", "glow", "effect"],
    version: "1.0.0",
    status: "stable",
    registryUrl: "https://groot-ui.vercel.app/r/glow-card.json",
    usage: {
      import: `import { GlowCard } from "@/components/glow-card"`,
      code: `export default function Demo() {
  return (
    <GlowCard className="p-6">
      <h3 className="text-xl font-bold">Groot UI</h3>
      <p className="text-muted-foreground">Interactive glowing cards.</p>
    </GlowCard>
  )
}`,
    },
    preview: { type: "component", props: { children: "Glow Card Content", className: "w-64" } },
    props: [
      {
        name: "children",
        type: "ReactNode",
        required: true,
        description: "Content inside the card",
      },
      {
        name: "glowColor",
        type: "string",
        default: "rgba(var(--primary), 0.2)",
        description: "Radial gradient color for the glow effect",
      },
      {
        name: "className",
        type: "string",
        description: "Custom CSS classes",
      },
    ],
    dependencies: [],
  },
  {
    title: "Bento Grid",
    slug: "bento-grid",
    label: "New",
    description: "Responsive bento grid layout with dashed borders and corner plus icons.",
    category: { name: "Blocks", slug: "blocks" },
    tags: ["grid", "bento", "layout"],
    version: "1.0.0",
    status: "stable",
    registryUrl: "https://groot-ui.vercel.app/r/bento-grid.json",
    usage: {
      import: `import { BentoGrid } from "@/components/bento-grid"`,
      code: `const items = [
  { id: 1, title: "Feature One", description: "Awesome details", className: "md:col-span-1" },
  { id: 2, title: "Feature Two", description: "More info here", className: "md:col-span-2" },
];

export default function Demo() {
  return <BentoGrid items={items} header={{ title: "Our Features" }} />
}`,
    },
    preview: { 
      type: "component", 
      props: { 
        items: [
          { id: 1, title: "Next.js", description: "Framework", className: "md:col-span-1" },
          { id: 2, title: "Tailwind", description: "Styling", className: "md:col-span-1" },
          { id: 3, title: "Motion", description: "Animations", className: "md:col-span-2" },
        ] 
      } 
    },
    props: [
      {
        name: "items",
        type: "BentoItem[]",
        required: true,
        description: "Array of bento items (title, description, image, etc.)",
      },
      {
        name: "header",
        type: "{ title: string; subtitle?: string }",
        description: "Optional header section for the grid",
      },
      {
        name: "className",
        type: "string",
        description: "Grid container styling",
      },
    ],
    dependencies: ["lucide-react"],
  },
  {
    title: "Client Grid",
    slug: "client-grid",
    description: "Clean grid of client logos with dashed plus-sign separators.",
    category: { name: "Blocks", slug: "blocks" },
    tags: ["grid", "logos", "layout"],
    version: "1.0.1",
    status: "stable",
    registryUrl: "https://groot-ui.vercel.app/r/client-grid.json",
    usage: {
      import: `import { ClientGrid } from "@/components/client-grid"`,
      code: `export default function Demo() {
  return <ClientGrid />
}`,
    },
    preview: { type: "component", props: {} },
    props: [
      {
        name: "items",
        type: "Logo[]",
        default: "DEFAULT_ITEMS",
        required: true,
        description: "Array of logos (src, alt, width, height)",
      },
      {
        name: "className",
        type: "string",
        description: "Container styling",
      },
    ],
    dependencies: ["lucide-react"],
  },
  {
    title: "GitHub Calendar",
    slug: "github-calendar",
    label: "New",
    description: "Fully interactive GitHub contribution calendar with year-switching and tooltips.",
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
        required: true,
        description: "GitHub username to fetch data for",
      },
      {
        name: "data",
        type: "ContributionData",
        description: "Optional manual contribution data object",
      },
      {
        name: "startDate",
        type: "string",
        description: "Start date in YYYY-MM-DD format",
      },
      {
        name: "endDate",
        type: "string",
        description: "End date in YYYY-MM-DD format",
      },
      {
        name: "startsOnSunday",
        type: "boolean",
        default: "true",
        description: "Whether to start weeks on Sunday or Monday",
      },
      {
        name: "cellSize",
        type: "number",
        default: "12",
        description: "Size of each contribution cell in pixels",
      },
      {
        name: "cellGap",
        type: "number",
        default: "3",
        description: "Gap between cells in pixels",
      },
      {
        name: "cellShape",
        type: "'rounded' | 'circle'",
        default: "rounded",
        description: "Visual shape of the contribution cells",
      },
      {
        name: "theme",
        type: "string | ThemeColors",
        default: "github",
        description: "Color theme (github, blue, sunset, purple, gray) or custom object",
      },
      {
        name: "showMonthLabels",
        type: "boolean",
        default: "true",
        description: "Display month names at the top",
      },
      {
        name: "showStats",
        type: "boolean",
        default: "true",
        description: "Show contribution count and username stats",
      },
      {
        name: "showLegend",
        type: "boolean",
        default: "true",
        description: "Display the Less/More color legend",
      },
    ],
    dependencies: ["lucide-react"],
  },
  {
    title: "GitHub Stars",
    slug: "github-stars",
    description: "Displays a GitHub repo star count with server-side fetching and tooltips.",
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
        required: true,
        description: "Repository path (owner/repo)",
      },
      {
        name: "label",
        type: "string",
        description: "Label to display",
      },
      {
        name: "className",
        type: "string",
        description: "Optional Class name to style the component",
      },
    ],
    dependencies: ["lucide-react", "Tooltip(shadcn)", "Button(shadcn)"],
  },
  {
    title: "GitHub Stars (React)",
    slug: "github-stars-react",
    description: "Client-side GitHub star counter for standard React/Vite projects.",
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
        required: true,
        description: "Repository path (owner/repo)",
      },
      {
        name: "label",
        type: "string",
        description: "Label to display",
      },
      {
        name: "className",
        type: "string",
        description: "Optional Class name to style the component",
      },
    ],
    dependencies: ["lucide-react", "Tooltip(shadcn)", "Button(shadcn)"],
  },
  {
    title: "Discord Online",
    slug: "discord-online",
    description: "Live Discord member presence count using Next.js server components.",
    category: { name: "Social", slug: "social" },
    tags: ["discord", "presence"],
    version: "1.0.0",
    status: "stable",
    registryUrl: "https://groot-ui.vercel.app/r/discord-online.json",
    usage: {
      import: `import { DiscordOnline } from "@/components/discord-online"`,
      code: `export default function Demo() {
  return <DiscordOnline guildId="1234567891487752291602665574" />
}`,
    },
    preview: { type: "component", props: { guildId: "1234567891487752291602665574" } },
    props: [
      {
        name: "guildId",
        type: "string",
        required: true,
        description: "Target Discord Guild ID",
      },
      {
        name: "inviteURL",
        type: "string",
        required: true,
        description: "Target Discord Guild Invite URL",
      },
      {
        name: "label",
        type: "string",
        description: "Label to display",
      },
      {
        name: "className",
        type: "string",
        description: "Optional Class name to style the component",
      },

    ],
    dependencies: ["lucide-react", "Button(shadcn)", "Tooltip(shadcn)"],
  },
  {
    title: "Discord Online (React)",
    slug: "discord-online-react",
    description: "Client-side Discord presence tracker for general React applications.",
    category: { name: "Social", slug: "social" },
    tags: ["discord", "presence", "react"],
    version: "1.0.0",
    status: "stable",
    registryUrl: "https://groot-ui.vercel.app/r/discord-online-react.json",
    usage: {
      import: `import { DiscordOnlineReact } from "@/components/discord-online-react"`,
      code: `export default function Demo() {
  return <DiscordOnlineReact guildId="1234567891487752291602665574" />
}`,
    },
    preview: { type: "component", props: { guildId: "1234567891487752291602665574" } },
    props: [
      {
        name: "guildId",
        type: "string",
        required: true,
        description: "Target Discord Guild ID",
      },
      {
        name: "inviteURL",
        type: "string",
        required: true,
        description: "Target Discord Guild Invite URL",
      },
      {
        name: "label",
        type: "string",
        description: "Label to display",
      },
      {
        name: "className",
        type: "string",
        description: "Optional Class name to style the component",
      },

    ],
    dependencies: ["lucide-react", "Button(shadcn)", "Tooltip(shadcn)"],
  },
  {
    title: "Gradient Text",
    slug: "gradient-text",
    label: "Magic",
    description: "High-impact text component with moving color orbs and 3D depth.",
    category: { name: "Animations", slug: "animations" },
    tags: ["text", "gradient", "animation", "motion"],
    version: "1.1.0",
    status: "stable",
    registryUrl: "https://groot-ui.vercel.app/r/gradient-text.json",
    usage: {
      import: `import { GradientText } from "@/components/gradient-text"`,
      code: `export default function Demo() {
  return <GradientText>Groot UI</GradientText>
}`,
    },
    preview: { type: "component", props: { children: "Groot UI" } },
    props: [
      {
        name: "children",
        type: "ReactNode",
        required: true,
        description: "Text or elements to animate",
      },
      {
        name: "colors",
        type: "string",
        default: "'#cc0066, #1aff53, #004d99, #f5f56b, #a600e6'",
        description: "Comma-separated hex colors for the orbs",
      },
      {
        name: "as",
        type: "ElementType",
        default: "span",
        description: "The HTML tag to render as",
      },
      {
        name: "className",
        type: "string",
        description: "Typography and positioning classes",
      },
    ],
    dependencies: ["motion/react"],
  },
  {
    title: "Gradient Background Text",
    slug: "gradient-background-text",
    description: "Text component featuring an animated background orb field and engraved depth effect.",
    category: { name: "Animations", slug: "animations" },
    tags: ["text", "gradient", "background", "3d"],
    version: "1.1.0",
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
        type: "ReactNode",
        required: true,
        description: "Inner text content",
      },
      {
        name: "colors",
        type: "string",
        default: "'#cc0066, #1aff53, #004d99, #f5f56b, #a600e6'",
        description: "Gradient colors for background animation",
      },
      {
        name: "className",
        type: "string",
        description: "Styling classes",
      },
    ],
    dependencies: ["motion/react"],
  },
  {
    title: "Client Marquee",
    slug: "client-marquee",
    description: "Premium infinite marquee slider with automatic brand fallback and mask fades.",
    category: { name: "Marquee", slug: "marquee" },
    tags: ["marquee", "logos", "slider"],
    version: "1.0.2",
    status: "stable",
    registryUrl: "https://groot-ui.vercel.app/r/client-marquee.json",
    usage: {
      import: `import { ClientMarquee } from "@/components/client-marquee"`,
      code: `export default function Demo() {
  return <ClientMarquee />
}`,
    },
    preview: { type: "component", props: {} },
    props: [
      {
        name: "items",
        type: "Logo[]",
        default: "DEFAULT_ITEMS",
        required: true,
        description: "Array of logo items (src, alt, width, height)",
      },

      {
        name: "className",
        type: "string",
        description: "Container styling",
      },
    ],
    dependencies: ["motion/react", "react-use-measure"],
  },
  {
    title: "Client Marquee Blur",
    slug: "client-marquee-blur",
    label: "New",
    description: "Infinite marquee with sophisticated radial blurring and masked logo transitions.",
    category: { name: "Marquee", slug: "marquee" },
    tags: ["marquee", "logos", "blur"],
    version: "1.0.2",
    status: "stable",
    registryUrl: "https://groot-ui.vercel.app/r/client-marquee-blur.json",
    usage: {
      import: `import { ClientMarqueeBlur } from "@/components/client-marquee-blur"`,
      code: `export default function Demo() {
  return <ClientMarqueeBlur />
}`,
    },
    preview: { type: "component", props: {} },
    props: [
      {
        name: "items",
        type: "Logo[]",
        default: "DEFAULT_ITEMS",
        required: true,
        description: "Array of logo objects (src, alt, width, height)",
      },
      {
        name: "className",
        type: "string",
        description: "Styling overrides",
      },
    ],
    dependencies: ["motion/react", "react-use-measure", "lucide-react"],
  },
];
