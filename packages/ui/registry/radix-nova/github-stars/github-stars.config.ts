import type { ComponentConfig } from "@workspace/ui/types/registry";

export const config: ComponentConfig = {
  name: "github-stars",
  title: "GitHub Stars",
  description:
    "Displays a GitHub repo star count with server-side fetching and tooltips.",
  category: { name: "Social", slug: "social" },
  tier: "free",
  status: "stable",
  tags: ["github", "stars"],
  // Server component — fetches data server-side, so SSR must stay enabled
  preview: { disableSSR: false, height: 300 },
  registryUrl: "https://grootui.vercel.app/r/github-stars.json",
  npmDependencies: ["lucide-react", "Tooltip(shadcn)", "Button(shadcn)"],
  registryDependencies: [],
  usage: {
    import: `import { GitHubStars } from "@/components/github-stars"`,
    code: `export default function Demo() {
  return <GitHubStars repo="Subhadipjana95/Groot-UI" />
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
