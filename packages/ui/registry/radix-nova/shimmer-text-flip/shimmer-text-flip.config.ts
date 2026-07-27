import type { ComponentConfig } from "@workspace/ui/types/registry";

export const config: ComponentConfig = {
    name: "shimmer-text-flip",
    title: "Shimmer Text Flip",
    description: "A sequence of texts cycles through fliping transition with shimmer glow effect.",
    category: { name: "Text Animations", slug: "text-animations" },
    tier: "free",
    status: "stable",
    label: "new",
    image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1785153306/Screenshot_2026-07-27_162233_thj4r3.webp",
    imageDark: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1785153306/Screenshot_2026-07-27_162219_uex8wp.webp",
    tags: ["flip", "shimmer", "blur"],
    preview: { disableSSR: false, height: 300 },
    registryUrl: "https://grootstudio.vercel.app/r/shimmer-text-flip.json",
    installAlias: "shimmer-text-flip",
    npmDependencies: ["motion", "shadcn"],
    registryDependencies: [],
    usage: {
        import: `import { ShimmerTextFlip } from "@/components/grootstudio/shimmer-text-flip"`,
        code: `const role = [
  "Design Engineer.",
  "Full Stack Developer.",
  "UI/UX Designer.",
  "Open Source Contributer.",
]
export default function Demo() {
  return (
    <div className="flex items-center justify-center h-75 w-full">
      <ShimmerTextFlip
          interval={2.8}
          as={motion.span}
          className="text-xl font-mono"
        >
          {role}
        </ShimmerTextFlip>
    </div>
  )
}`,
        codeHighlightLines: [1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16],
    },
    props: [
        {
            name: "children",
            type: "React.ReactNode[]",
            default: "undefined",
            required: true,
            description: "Array of children to cycle through.",
        },
        {
            name: "as",
            type: "MotionElement",
            default: "motion.p",
            required: false,
            description: "Motion element to render.",
        },
        {
            name: "glowColor",
            type: "string",
            default: "text-muted-foreground",
            required: false,
            description: "Color of the shimmer glow effect.",
        },
        {
            name: "interval",
            type: "number",
            default: "2",
            required: false,
            description: "Time in seconds between each flip.",
        },
        {
            name: "play",
            type: "boolean",
            default: "true",
            required: false,
            description: "Controls whether the flip animation runs.",
        },
        {
            name: "className",
            type: "string",
            required: false,
            description: "Additional Tailwind classes for custom styling.",
        },
        {
            name: "variants",
            type: "Variants",
            default: "undefined",
            required: false,
            description: "Motion variants for enter/exit animations.",
        },
        {
            name: "transition",
            type: "Transition",
            default: "undefined",
            required: false,
            description: "Transition configuration for the flip animation.",
        },
        {
            name: "onIndexChange",
            type: "() => void",
            default: "undefined",
            required: false,
            description: "Callback function called with the new index after each flip.",
        },
        
    ],
}