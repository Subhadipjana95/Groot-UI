import type { ComponentConfig } from "@workspace/ui/types/registry";

export const config: ComponentConfig = {
  name: "text-frame",
  title: "Text Frame",
  description: "A canvas boundary like frame for texts to wrap around with blur effect and dashed or solid line style.",
  category: { name: "Text Animations", slug: "text-animations" },
  tier: "free",
  status: "stable",
  label: "new",
  image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1785075311/text-frame_light_j4w3m6.webp",
  imageDark: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1785075311/text-frame_dark_agqifr.webp",
  tags: ["frame", "blur", "canvas", "dashed"],
  preview: { disableSSR: false, height: 300 },
  registryUrl: "https://grootstudio.vercel.app/r/text-frame.json",
  installAlias: "text-frame",
  npmDependencies: ["motion"],
  registryDependencies: [],
  usage: {
    import: `import { TextFrame } from "@/components/grootstudio/text-frame"`,
    code: `export default function Demo() {
  return (
    <div className="flex items-center justify-center h-75 w-full">
      <h1 className='text-7xl max-w-3xl'>
        <TextFrame className="[&_svg]:text-blue-400 dark:text-blue-300 text-blue-500 tracking-normal" lineStyle="solid">Groot Studio</TextFrame>
      </h1>
    </div>
  )
}`,
  },
  props: [
    {
      name: "children",
      type: "React.ReactNode",
      default: "undefined",
      required: true,
      description: "The text to display and animate.",
    },
    {
      name: "as",
      type: "React.ElementType",
      default: "span",
      required: false,
      description: "The element to display the text in.",
    },
    {
      name: "lineStyle",
      type: "solid | dashed",
      default: "solid",
      required: false,
      description: "The style of the frame line.",
    },
    {
      name: "accessible",
      type: "boolean",
      default: "true",
      required: false,
      description: "Whether the text frame should be accessible.",
    },
    {
      name: "className",
      type: "string",
      required: false,
      description: "Additional Tailwind classes for custom styling.",
    },
  ],
};