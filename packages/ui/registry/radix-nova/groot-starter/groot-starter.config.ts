import type { ComponentConfig } from "@workspace/ui/types/registry";

export const config: ComponentConfig = {
  name: "groot-starter",
  title: "Groot Starter",
  description: "A simple starter component for groot-ui.",
  category: { name: "General", slug: "general" },
  tier: "free",
  status: "stable",
  tags: ["starter", "groot"],
  preview: { disableSSR: false, height: 400 },
  registryUrl: "https://grootui.vercel.app/r/groot-starter.json",
  npmDependencies: ["lucide-react"],
  registryDependencies: [],
  usage: {
    import: `import { GrootStarter } from "@/components/groot-starter"`,
    code: `export default function Demo() {
  return <GrootStarter />
}`,
  },
  props: [],
};
