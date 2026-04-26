import type { ComponentConfig } from "@workspace/ui/types/registry";

export const config: ComponentConfig = {
  name: "client-marquee",
  title: "Client Marquee",
  description:
    "Premium infinite marquee slider with automatic brand fallback and mask fades.",
  category: { name: "Marquee", slug: "marquee" },
  tier: "free",
  status: "stable",
  tags: ["marquee", "logos", "slider"],
  preview: { disableSSR: true, height: 300 },
  registryUrl: "https://grootui.vercel.app/r/client-marquee.json",
  npmDependencies: ["motion/react", "react-use-measure"],
  registryDependencies: [],
  usage: {
    import: `import { ClientMarquee } from "@/components/client-marquee"`,
    code: `export default function Demo() {
  return <ClientMarquee />
}`,
  },
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
};
