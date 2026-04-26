import type { ComponentConfig } from "@workspace/ui/types/registry";

export const config: ComponentConfig = {
  name: "client-grid",
  title: "Client Grid",
  description: "Clean grid of client logos with dashed plus-sign separators.",
  category: { name: "Blocks", slug: "blocks" },
  tier: "free",
  status: "stable",
  tags: ["grid", "logos", "layout"],
  preview: { disableSSR: true, height: 400 },
  registryUrl: "https://grootui.vercel.app/r/client-grid.json",
  npmDependencies: ["lucide-react"],
  registryDependencies: [],
  usage: {
    import: `import { ClientGrid } from "@/components/client-grid"`,
    code: `export default function Demo() {
  return <ClientGrid />
}`,
  },
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
};
