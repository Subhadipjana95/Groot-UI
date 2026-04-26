import type { ComponentConfig } from "@workspace/ui/types/registry";

export const config: ComponentConfig = {
  name: "github-stars-react",
  title: "GitHub Stars (React)",
  description:
    "Client-side GitHub star counter for standard React/Vite projects.",
  category: { name: "Social", slug: "social" },
  tier: "free",
  status: "stable",
  tags: ["github", "stars", "react"],
  preview: { disableSSR: true, height: 300 },
  registryUrl: "https://grootui.vercel.app/r/github-stars-react.json",
  npmDependencies: ["lucide-react", "Tooltip(shadcn)", "Button(shadcn)"],
  registryDependencies: [],
  usage: {
    import: `import { GitHubStarsReact } from "@/components/github-stars-react"`,
    code: `export default function Demo() {
  return <GitHubStarsReact repo="Subhadipjana95/Groot-UI" />
}`,
  },
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
};
