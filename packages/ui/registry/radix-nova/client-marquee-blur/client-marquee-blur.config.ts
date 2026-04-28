import type { ComponentConfig } from "@workspace/ui/types/registry";

export const config: ComponentConfig = {
  name: "client-marquee-blur",
  title: "Client Marquee Blur",
  description:
    "Infinite marquee with sophisticated radial blurring and masked logo transitions.",
  category: { name: "Marquee", slug: "marquee" },
  tier: "free",
  status: "stable",
  label: "New",
  image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777378662/client-marquee-blur_light_u1omgi.webp",
  imageDark: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777378662/client-marquee-blur_dark_duu30j.webp",
  tags: ["marquee", "logos", "blur"],
  preview: { disableSSR: true, height: 300 },
  registryUrl: "https://grootui.vercel.app/r/client-marquee-blur.json",
  npmDependencies: ["motion/react", "react-use-measure", "lucide-react"],
  registryDependencies: [],
  usage: {
    import: `import { ClientMarqueeBlur } from "@/components/client-marquee-blur"`,
    code: `export default function Demo() {
  return <ClientMarqueeBlur />
}`,
  },
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
};
