import type { ComponentConfig } from "@workspace/ui/types/registry";

export const config: ComponentConfig = {
  name: "discord-online-react",
  title: "Discord Online (React)",
  description:
    "Client-side Discord presence tracker for general React applications.",
  category: { name: "Social", slug: "social" },
  tier: "free",
  status: "stable",
  image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777377565/discord-online_light_aiynof.webp",
  imageDark: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777377565/discord-online_dark_mwjdlu.webp",
  tags: ["discord", "presence", "react"],
  preview: { disableSSR: true, height: 300 },
  registryUrl: "https://grootui.vercel.app/r/discord-online-react.json",
  npmDependencies: ["lucide-react", "Button(shadcn)", "Tooltip(shadcn)"],
  registryDependencies: [],
  usage: {
    import: `import { DiscordOnlineReact } from "@/components/discord-online-react"`,
    code: `export default function Demo() {
  return <DiscordOnlineReact guildId="1234567891487752291602665574" />
}`,
  },
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
};
