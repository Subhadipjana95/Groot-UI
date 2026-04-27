// ─────────────────────────────────────────────────────────────────
// AUTO-GENERATED — do not edit manually.
// Run: npm run registry:index
// Last generated: 2026-04-27T19:21:16.528Z
// ─────────────────────────────────────────────────────────────────

import type { ComponentConfig } from "@workspace/ui/types/registry";

export const registry: ComponentConfig[] = [
  {
    "name": "3d-button",
    "title": "3D Button",
    "description": "A premium 3D button component with customizable dual-tone gradients, shimmer effects, and depth shadows.",
    "category": {
      "name": "Buttons",
      "slug": "buttons"
    },
    "tier": "free",
    "status": "stable",
    "label": "New",
    "tags": [
      "button",
      "3d",
      "gradient",
      "shimmer",
      "ui"
    ],
    "preview": {
      "disableSSR": false,
      "height": 200
    },
    "registryUrl": "https://grootui.vercel.app/r/3d-button.json",
    "npmDependencies": [],
    "registryDependencies": [],
    "usage": {
      "import": "import { ThreeDButton } from \"@/components/3d-button\"",
      "code": "export default function Demo() {\n  return (\n    <div className=\"flex items-center gap-4\">\n      <ThreeDButton color1=\"#cc0066\" color2=\"#660033\">\n        Pink Button\n      </ThreeDButton>\n      <ThreeDButton color1=\"#004d99\" color2=\"#00264d\">\n        Blue Button\n      </ThreeDButton>\n    </div>\n  )\n}"
    },
    "props": [
      {
        "name": "color1",
        "type": "string",
        "default": "undefined",
        "required": true,
        "description": "The primary light color for the top of the gradient."
      },
      {
        "name": "color2",
        "type": "string",
        "default": "undefined",
        "required": true,
        "description": "The secondary dark color for the bottom of the gradient and shadows."
      },
      {
        "name": "href",
        "type": "string",
        "default": "undefined",
        "required": false,
        "description": "Optional URL for navigation."
      },
      {
        "name": "openInNewTab",
        "type": "boolean",
        "default": "false",
        "required": false,
        "description": "Whether to open the link in a new tab."
      },
      {
        "name": "className",
        "type": "string",
        "default": "undefined",
        "required": false,
        "description": "Optional class names for custom styling."
      }
    ],
    "files": [
      {
        "name": "3d-button.tsx",
        "content": "import * as React from \"react\";\r\n\r\nimport { cn } from \"@/lib/utils\";\r\n\r\ninterface ThreeDButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {\r\n  href?: string;\r\n  color1: string; // Keep this light color\r\n  color2: string; // Keep this dark color\r\n  children: React.ReactNode;\r\n  openInNewTab?: boolean;\r\n  className?: string;\r\n}\r\n\r\nconst BUTTON_GRADIENT_STYLE = {\r\n  boxShadow:\r\n    \"0 2px 8px 0 rgba(204,0,102,0.35), 0 1.5px 0 0 rgba(255,255,255,0.25) inset, 0 -2px 8px 0 rgba(204,0,102,0.5) inset, 0 0 0 1px rgba(0,0,0,0.08)\",\r\n} as const;\r\n\r\nconst SHIMMER_STYLE = {\r\n  background:\r\n    \"linear-gradient(180deg,rgba(255,255,255,0.4) 0%,rgba(255,255,255,0) 80%,transparent 100%)\",\r\n  filter: \"blur(0.5px)\",\r\n} as const;\r\n\r\nconst INNER_SHADOW_STYLE = {\r\n  boxShadow:\r\n    \"0 0 0 1px rgba(255,255,255,0.15) inset, 0 1.5px 0 0 rgba(255,255,255,0.2) inset, 0 -2px 4px 0 rgba(204,0,102,0.2) inset\",\r\n} as const;\r\n\r\nexport const ThreeDButton = React.forwardRef<HTMLAnchorElement, ThreeDButtonProps>(\r\n  ({ href, color1, color2, children, openInNewTab = false, className, style, ...props }, ref) => {\r\n    return (\r\n      <a\r\n        ref={ref}\r\n        href={href}\r\n        target={openInNewTab ? \"_blank\" : undefined}\r\n        rel={openInNewTab ? \"noopener noreferrer\" : undefined}\r\n        className={cn(\r\n          \"relative flex h-9 px-4 items-center justify-center rounded-lg text-white cursor-pointer transition-all duration-200 ease-in-out hover:brightness-110 active:scale-95\",\r\n          className\r\n        )}\r\n        style={{\r\n          ...BUTTON_GRADIENT_STYLE,\r\n          \"--color1\": color1,\r\n          \"--color2\": color2,\r\n          background: `linear-gradient(to top, ${color1}, ${color2})`,\r\n          ...style,\r\n        } as React.CSSProperties}\r\n        {...props}\r\n      >\r\n        <span\r\n          className=\"pointer-events-none absolute left-1/2 top-0 z-20 h-2/5 w-[80%] -translate-x-1/2 rounded-t-[inherit]\"\r\n          style={SHIMMER_STYLE}\r\n        />\r\n        <span\r\n          className=\"pointer-events-none absolute inset-0 z-0 rounded-[inherit]\"\r\n          style={INNER_SHADOW_STYLE}\r\n        />\r\n        <span className=\"relative z-30 flex items-center justify-center drop-shadow-sm text-sm font-medium tracking-wide\">\r\n          {children}\r\n        </span>\r\n      </a>\r\n    );\r\n  }\r\n);\r\n\r\nThreeDButton.displayName = \"ThreeDButton\";\r\n"
      }
    ]
  },
  {
    "name": "avatar-tooltips",
    "title": "Avatar Tooltips",
    "description": "Interactive overlapping avatars that reveal animated, spring-based tooltips on hover.",
    "category": {
      "name": "Popups",
      "slug": "popups"
    },
    "tier": "free",
    "status": "stable",
    "tags": [
      "avatar",
      "tooltip",
      "motion",
      "interactive",
      "stack"
    ],
    "preview": {
      "disableSSR": true,
      "height": 200
    },
    "registryUrl": "https://grootui.vercel.app/r/avatar-tooltips.json",
    "npmDependencies": [
      "motion"
    ],
    "registryDependencies": [],
    "usage": {
      "import": "import { AvatarTooltips } from \"@/components/avatar-tooltips\"",
      "code": "import { Github, Twitter, Linkedin, Mail } from \"lucide-react\"\n\nexport default function Demo() {\n  const items = [\n    { id: 1, name: \"GitHub\", designation: \"Developer Platform\", icon: Github },\n    { id: 2, name: \"Twitter\", designation: \"Social Media\", icon: Twitter },\n    { id: 3, name: \"LinkedIn\", designation: \"Professional Network\", icon: Linkedin },\n    { id: 4, name: \"Email\", designation: \"Contact Us\", icon: Mail },\n  ]\n\n  return (\n    <main className=\"flex items-center justify-center\">\n      <AvatarTooltips items={items} />\n    </main>\n  )\n}"
    },
    "props": [
      {
        "name": "items",
        "type": "AvatarItem[]",
        "default": "[]",
        "required": true,
        "description": "Array of items containing id, name, designation and a React icon component."
      },
      {
        "name": "className",
        "type": "string",
        "default": "undefined",
        "required": false,
        "description": "Additional CSS classes for the container element."
      }
    ],
    "files": [
      {
        "name": "avatar-tooltips.tsx",
        "content": "\"use client\";\r\n\r\nimport React, { useState } from \"react\";\r\nimport { motion, useTransform, useMotionValue, useSpring, AnimatePresence } from \"motion/react\";\r\nimport { cn } from \"@/lib/utils\";\r\n\r\nexport type AvatarItem = {\r\n  readonly id: string | number;\r\n  readonly name: string;\r\n  readonly designation?: string;\r\n  readonly icon: React.ElementType;\r\n};\r\n\r\nconst AvatarTooltipItem = ({ item }: { item: AvatarItem }) => {\r\n  const x = useMotionValue(0);\r\n  const [isHovered, setIsHovered] = useState(false);\r\n  const Icon = item.icon;\r\n\r\n  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), {\r\n    stiffness: 100,\r\n    damping: 15,\r\n  });\r\n\r\n  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), {\r\n    stiffness: 100,\r\n    damping: 15,\r\n  });\r\n\r\n  return (\r\n    <div\r\n      className=\"group relative -mr-2\"\r\n      onMouseEnter={() => setIsHovered(true)}\r\n      onMouseLeave={() => setIsHovered(false)}\r\n      onMouseMove={(e) => {\r\n        const rect = e.currentTarget.getBoundingClientRect();\r\n        x.set(e.clientX - rect.left - rect.width / 2);\r\n      }}\r\n    >\r\n      <AnimatePresence mode=\"popLayout\">\r\n        {isHovered && (\r\n          <motion.div\r\n            initial={{ opacity: 0, y: 10, scale: 0.95 }}\r\n            animate={{ opacity: 1, y: 0, scale: 1 }}\r\n            exit={{ opacity: 0, y: 10, scale: 0.95 }}\r\n            transition={{\r\n              type: \"spring\",\r\n              stiffness: 260,\r\n              damping: 20,\r\n            }}\r\n            style={{\r\n              left: \"50%\",\r\n              translateX: \"-50%\",\r\n              rotate: rotate,\r\n              x: translateX,\r\n            }}\r\n            className=\"pointer-events-none absolute bottom-full mb-3 z-50 flex flex-col items-center rounded-md border bg-popover px-3 py-1.5 text-xs text-popover-foreground shadow-xl backdrop-blur-sm\"\r\n          >\r\n            <div className=\"absolute bottom-[-4.73px] left-1/2 -translate-x-1/2 h-2 w-2 rotate-45 border-b border-r rounded-[1px] bg-popover\" />\r\n            <p className=\"relative z-10 whitespace-nowrap text-sm font-semibold leading-none\">\r\n              {item.name}\r\n            </p>\r\n            {item.designation && (\r\n              <p className=\"relative z-10 mt-1 whitespace-nowrap text-[10px] text-muted-foreground leading-none\">\r\n                {item.designation}\r\n              </p>\r\n            )}\r\n          </motion.div>\r\n        )}\r\n      </AnimatePresence>\r\n\r\n      <div className=\"relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-border bg-background shadow-sm transition-transform duration-300 group-hover:z-30 group-hover:scale-110 active:scale-95\">\r\n        <Icon className=\"size-6 text-foreground\" />\r\n      </div>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport function AvatarTooltips({ items, className }: { items: readonly AvatarItem[], className?: string }) {\r\n  return (\r\n    <div className={cn(\"flex flex-col items-center gap-3 mt-4 relative\", className)}>\r\n      <div className=\"flex items-center justify-center -space-x-2\">\r\n        {items.map((item) => (\r\n          <AvatarTooltipItem key={item.id} item={item} />\r\n        ))}\r\n      </div>\r\n    </div>\r\n  );\r\n}"
      }
    ]
  },
  {
    "name": "client-grid",
    "title": "Client Grid",
    "description": "Clean grid of client logos with dashed plus-sign separators.",
    "category": {
      "name": "Blocks",
      "slug": "blocks"
    },
    "tier": "free",
    "status": "stable",
    "tags": [
      "grid",
      "logos",
      "layout"
    ],
    "preview": {
      "disableSSR": true,
      "height": 400
    },
    "registryUrl": "https://grootui.vercel.app/r/client-grid.json",
    "npmDependencies": [
      "lucide-react"
    ],
    "registryDependencies": [],
    "usage": {
      "import": "import { ClientGrid } from \"@/components/client-grid\"",
      "code": "export default function Demo() {\n  return <ClientGrid />\n}"
    },
    "props": [
      {
        "name": "items",
        "type": "Logo[]",
        "default": "DEFAULT_ITEMS",
        "required": true,
        "description": "Array of logos (src, alt, width, height)"
      },
      {
        "name": "className",
        "type": "string",
        "description": "Container styling"
      }
    ],
    "files": [
      {
        "name": "client-grid.tsx",
        "content": "\"use client\"\r\n\r\nimport React, { memo, useMemo } from \"react\"\r\nimport { cn } from \"@/lib/utils\"\r\nimport { PlusIcon } from \"lucide-react\"\r\n\r\nexport type Logo = {\r\n  src: string\r\n  alt: string\r\n  width?: number\r\n  height?: number\r\n}\r\n\r\nconst LogoImage = memo(function LogoImage({ logo }: { logo: Logo }) {\r\n  return (\r\n    <img\r\n      alt={logo.alt}\r\n      src={logo.src}\r\n      width={logo.width}\r\n      height={logo.height}\r\n      loading=\"lazy\"\r\n      className=\"pointer-events-none h-4 select-none md:h-5 dark:brightness-0 dark:invert\"\r\n    />\r\n  )\r\n})\r\n\r\ntype LogoCardProps = React.ComponentProps<\"div\"> & { logo: Logo }\r\n\r\nconst LogoCard = memo(function LogoCard({\r\n  logo,\r\n  className,\r\n  children,\r\n  ...props\r\n}: LogoCardProps) {\r\n  return (\r\n    <div\r\n      className={cn(\r\n        \"relative flex items-center justify-center bg-background px-4 py-8 md:p-8\",\r\n        className\r\n      )}\r\n      {...props}\r\n    >\r\n      <LogoImage logo={logo} />\r\n      {children}\r\n    </div>\r\n  )\r\n})\r\n\r\nexport const ClientGrid = memo(function ClientGrid({\r\n  logos,\r\n  className,\r\n}: {\r\n  logos: Logo[]\r\n  className?: string\r\n}) {\r\n  const gridLogos = useMemo(() => logos.slice(0, 8), [logos])\r\n\r\n  return (\r\n    <div\r\n      className={cn(\r\n        \"relative grid grid-cols-2 border-x md:grid-cols-4\",\r\n        className\r\n      )}\r\n    >\r\n      <div className=\"-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t\" />\r\n\r\n      {gridLogos.map((logo, i) => {\r\n        const isHighlighted = i === 0 || i === 2 || i === 5 || i === 7\r\n\r\n        return (\r\n          <LogoCard\r\n            key={logo.alt}\r\n            logo={logo}\r\n            className={cn(\r\n              i < 4 && \"border-b\",\r\n              (i === 4 || i === 5) && \"border-b md:border-b-0\",\r\n              (i === 0 || i === 2 || i === 4 || i === 6) && \"border-r\",\r\n              (i === 1 || i === 5) && \"md:border-r\",\r\n              isHighlighted\r\n                ? \"bg-secondary dark:bg-secondary/30\"\r\n                : \"bg-background\"\r\n            )}\r\n          >\r\n            {(i === 0 || i === 1 || i === 2) && (\r\n              <PlusIcon\r\n                className=\"-right-[12.5px] -bottom-[12.5px] absolute z-10 hidden size-6 md:block text-slate-800 dark:text-slate-300\"\r\n                strokeWidth={1}\r\n              />\r\n            )}\r\n            {(i === 0 || i === 2 || i === 4) && (\r\n              <PlusIcon\r\n                className=\"-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 md:hidden text-slate-800 dark:text-slate-300\"\r\n                strokeWidth={1}\r\n              />\r\n            )}\r\n          </LogoCard>\r\n        )\r\n      })}\r\n\r\n      <div className=\"-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b\" />\r\n    </div>\r\n  )\r\n})\r\n\r\nClientGrid.displayName = \"ClientGrid\""
      }
    ]
  },
  {
    "name": "client-marquee",
    "title": "Client Marquee",
    "description": "Premium infinite marquee slider with automatic brand fallback and mask fades.",
    "category": {
      "name": "Marquee",
      "slug": "marquee"
    },
    "tier": "free",
    "status": "stable",
    "tags": [
      "marquee",
      "logos",
      "slider"
    ],
    "preview": {
      "disableSSR": true,
      "height": 300
    },
    "registryUrl": "https://grootui.vercel.app/r/client-marquee.json",
    "npmDependencies": [
      "motion/react",
      "react-use-measure"
    ],
    "registryDependencies": [],
    "usage": {
      "import": "import { ClientMarquee } from \"@/components/client-marquee\"",
      "code": "export default function Demo() {\n  return <ClientMarquee />\n}"
    },
    "props": [
      {
        "name": "items",
        "type": "Logo[]",
        "default": "DEFAULT_ITEMS",
        "required": true,
        "description": "Array of logo items (src, alt, width, height)"
      },
      {
        "name": "className",
        "type": "string",
        "description": "Container styling"
      }
    ],
    "files": [
      {
        "name": "client-marquee.tsx",
        "content": "\"use client\"\r\n\r\nimport React, { memo, useState, useEffect } from \"react\"\r\nimport { cn } from \"@/lib/utils\"\r\nimport { useMotionValue, animate, motion } from \"motion/react\"\r\nimport useMeasure from \"react-use-measure\"\r\n\r\nexport type Logo = {\r\n  src: string\r\n  alt: string\r\n  width?: number\r\n  height?: number\r\n}\r\n\r\ntype InfiniteSliderProps = {\r\n  children: React.ReactNode\r\n  gap?: number\r\n  duration?: number\r\n  durationOnHover?: number\r\n  direction?: \"horizontal\" | \"vertical\"\r\n  reverse?: boolean\r\n  className?: string\r\n}\r\n\r\nconst InfiniteSlider = memo(function InfiniteSlider({\r\n  children,\r\n  gap = 16,\r\n  duration = 25,\r\n  durationOnHover,\r\n  direction = \"horizontal\",\r\n  reverse = false,\r\n  className,\r\n}: InfiniteSliderProps) {\r\n  const [currentDuration, setCurrentDuration] = useState(duration)\r\n  const [ref, { width, height }] = useMeasure()\r\n  const translation = useMotionValue(0)\r\n  const [isTransitioning, setIsTransitioning] = useState(false)\r\n  const [key, setKey] = useState(0)\r\n\r\n  useEffect(() => {\r\n    const size = direction === \"horizontal\" ? width : height\r\n    const contentSize = size + gap\r\n    const from = reverse ? -contentSize / 2 : 0\r\n    const to = reverse ? 0 : -contentSize / 2\r\n\r\n    let controls\r\n\r\n    if (isTransitioning) {\r\n      controls = animate(translation, [translation.get(), to], {\r\n        ease: \"linear\",\r\n        duration:\r\n          currentDuration *\r\n          Math.abs((translation.get() - to) / contentSize),\r\n        onComplete: () => {\r\n          setIsTransitioning(false)\r\n          setKey((prev) => prev + 1)\r\n        },\r\n      })\r\n    } else {\r\n      controls = animate(translation, [from, to], {\r\n        ease: \"linear\",\r\n        duration: currentDuration,\r\n        repeat: Infinity,\r\n        repeatType: \"loop\",\r\n        repeatDelay: 0,\r\n        onRepeat: () => translation.set(from),\r\n      })\r\n    }\r\n\r\n    return controls?.stop\r\n  }, [\r\n    key,\r\n    translation,\r\n    currentDuration,\r\n    width,\r\n    height,\r\n    gap,\r\n    isTransitioning,\r\n    direction,\r\n    reverse,\r\n  ])\r\n\r\n  const hoverProps = durationOnHover\r\n    ? {\r\n        onHoverStart: () => {\r\n          setIsTransitioning(true)\r\n          setCurrentDuration(durationOnHover)\r\n        },\r\n        onHoverEnd: () => {\r\n          setIsTransitioning(true)\r\n          setCurrentDuration(duration)\r\n        },\r\n      }\r\n    : {}\r\n\r\n  return (\r\n    <div className={cn(\"overflow-hidden\", className)}>\r\n      <motion.div\r\n        ref={ref}\r\n        className=\"flex w-max\"\r\n        style={{\r\n          ...(direction === \"horizontal\"\r\n            ? { x: translation }\r\n            : { y: translation }),\r\n          gap: `${gap}px`,\r\n          flexDirection: direction === \"horizontal\" ? \"row\" : \"column\",\r\n        }}\r\n        {...hoverProps}\r\n      >\r\n        {children}\r\n        {children}\r\n      </motion.div>\r\n    </div>\r\n  )\r\n})\r\n\r\nconst LogoImage = memo(function LogoImage({ logo }: { logo: Logo }) {\r\n  return (\r\n    <img\r\n      alt={logo.alt}\r\n      src={logo.src}\r\n      width={logo.width ?? \"auto\"}\r\n      height={logo.height ?? \"auto\"}\r\n      loading=\"lazy\"\r\n      className=\"pointer-events-none h-4 select-none md:h-5 dark:brightness-0 dark:invert\"\r\n    />\r\n  )\r\n})\r\n\r\nexport const ClientMarquee = memo(function ClientMarquee({\r\n  logos,\r\n  className,\r\n}: {\r\n  logos: Logo[]\r\n  className?: string\r\n}) {\r\n  return (\r\n    <div\r\n      className={cn(\r\n        \"max-w-7xl mx-auto overflow-hidden py-4 mask-[linear-gradient(to_right,transparent,black_25%,black_75%,transparent)]\",\r\n        className\r\n      )}\r\n    >\r\n      <InfiniteSlider gap={42} reverse duration={80} durationOnHover={25}>\r\n        {[...logos, ...logos].map((logo, i) => (\r\n          <LogoImage key={`${logo.alt}-${i}`} logo={logo} />\r\n        ))}\r\n      </InfiniteSlider>\r\n    </div>\r\n  )\r\n})\r\n\r\nClientMarquee.displayName = \"ClientMarquee\""
      }
    ]
  },
  {
    "name": "client-marquee-blur",
    "title": "Client Marquee Blur",
    "description": "Infinite marquee with sophisticated radial blurring and masked logo transitions.",
    "category": {
      "name": "Marquee",
      "slug": "marquee"
    },
    "tier": "free",
    "status": "stable",
    "label": "New",
    "tags": [
      "marquee",
      "logos",
      "blur"
    ],
    "preview": {
      "disableSSR": true,
      "height": 300
    },
    "registryUrl": "https://grootui.vercel.app/r/client-marquee-blur.json",
    "npmDependencies": [
      "motion/react",
      "react-use-measure",
      "lucide-react"
    ],
    "registryDependencies": [],
    "usage": {
      "import": "import { ClientMarqueeBlur } from \"@/components/client-marquee-blur\"",
      "code": "export default function Demo() {\n  return <ClientMarqueeBlur />\n}"
    },
    "props": [
      {
        "name": "items",
        "type": "Logo[]",
        "default": "DEFAULT_ITEMS",
        "required": true,
        "description": "Array of logo objects (src, alt, width, height)"
      },
      {
        "name": "className",
        "type": "string",
        "description": "Styling overrides"
      }
    ],
    "files": [
      {
        "name": "client-marquee-blur.tsx",
        "content": "\"use client\"\r\n\r\nimport React, { memo, useState, useEffect } from \"react\"\r\nimport { cn } from \"@/lib/utils\"\r\nimport { PlusIcon } from \"lucide-react\"\r\nimport {\r\n  useMotionValue,\r\n  animate,\r\n  motion,\r\n  HTMLMotionProps,\r\n} from \"motion/react\"\r\nimport useMeasure from \"react-use-measure\"\r\n\r\nexport type Logo = {\r\n  src: string\r\n  alt: string\r\n  width?: number\r\n  height?: number\r\n}\r\n\r\ntype InfiniteSliderProps = {\r\n  children: React.ReactNode\r\n  gap?: number\r\n  duration?: number\r\n  durationOnHover?: number\r\n  direction?: \"horizontal\" | \"vertical\"\r\n  reverse?: boolean\r\n  className?: string\r\n}\r\n\r\nconst InfiniteSlider = memo(function InfiniteSlider({\r\n  children,\r\n  gap = 16,\r\n  duration = 25,\r\n  durationOnHover,\r\n  direction = \"horizontal\",\r\n  reverse = false,\r\n  className,\r\n}: InfiniteSliderProps) {\r\n  const [currentDuration, setCurrentDuration] = useState(duration)\r\n  const [ref, { width, height }] = useMeasure()\r\n  const translation = useMotionValue(0)\r\n  const [isTransitioning, setIsTransitioning] = useState(false)\r\n  const [key, setKey] = useState(0)\r\n\r\n  useEffect(() => {\r\n    const size = direction === \"horizontal\" ? width : height\r\n    const contentSize = size + gap\r\n    const from = reverse ? -contentSize / 2 : 0\r\n    const to = reverse ? 0 : -contentSize / 2\r\n\r\n    let controls\r\n\r\n    if (isTransitioning) {\r\n      controls = animate(translation, [translation.get(), to], {\r\n        ease: \"linear\",\r\n        duration:\r\n          currentDuration *\r\n          Math.abs((translation.get() - to) / contentSize),\r\n        onComplete: () => {\r\n          setIsTransitioning(false)\r\n          setKey((prev) => prev + 1)\r\n        },\r\n      })\r\n    } else {\r\n      controls = animate(translation, [from, to], {\r\n        ease: \"linear\",\r\n        duration: currentDuration,\r\n        repeat: Infinity,\r\n        repeatType: \"loop\",\r\n        repeatDelay: 0,\r\n        onRepeat: () => translation.set(from),\r\n      })\r\n    }\r\n\r\n    return controls?.stop\r\n  }, [\r\n    key,\r\n    translation,\r\n    currentDuration,\r\n    width,\r\n    height,\r\n    gap,\r\n    isTransitioning,\r\n    direction,\r\n    reverse,\r\n  ])\r\n\r\n  const hoverProps = durationOnHover\r\n    ? {\r\n        onHoverStart: () => {\r\n          setIsTransitioning(true)\r\n          setCurrentDuration(durationOnHover)\r\n        },\r\n        onHoverEnd: () => {\r\n          setIsTransitioning(true)\r\n          setCurrentDuration(duration)\r\n        },\r\n      }\r\n    : {}\r\n\r\n  return (\r\n    <div className={cn(\"overflow-hidden\", className)}>\r\n      <motion.div\r\n        ref={ref}\r\n        className=\"flex w-max\"\r\n        style={{\r\n          ...(direction === \"horizontal\"\r\n            ? { x: translation }\r\n            : { y: translation }),\r\n          gap: `${gap}px`,\r\n          flexDirection: direction === \"horizontal\" ? \"row\" : \"column\",\r\n        }}\r\n        {...hoverProps}\r\n      >\r\n        {children}\r\n        {children}\r\n      </motion.div>\r\n    </div>\r\n  )\r\n})\r\n\r\nconst GRADIENT_ANGLES = { top: 0, right: 90, bottom: 180, left: 270 }\r\n\r\ntype ProgressiveBlurProps = {\r\n  direction?: keyof typeof GRADIENT_ANGLES\r\n  blurLayers?: number\r\n  blurIntensity?: number\r\n  className?: string\r\n} & HTMLMotionProps<\"div\">\r\n\r\nconst ProgressiveBlur = memo(function ProgressiveBlur({\r\n  direction = \"bottom\",\r\n  blurLayers = 8,\r\n  blurIntensity = 0.25,\r\n  className,\r\n  ...props\r\n}: ProgressiveBlurProps) {\r\n  const layers = Math.max(blurLayers, 2)\r\n  const segmentSize = 1 / (blurLayers + 1)\r\n  const angle = GRADIENT_ANGLES[direction]\r\n\r\n  return (\r\n    <div className={cn(\"relative\", className)}>\r\n      {Array.from({ length: layers }).map((_, index) => {\r\n        const gradientStops = [\r\n          index * segmentSize,\r\n          (index + 1) * segmentSize,\r\n          (index + 2) * segmentSize,\r\n          (index + 3) * segmentSize,\r\n        ]\r\n          .map(\r\n            (pos, posIndex) =>\r\n              `rgba(255,255,255,${\r\n                posIndex === 1 || posIndex === 2 ? 1 : 0\r\n              }) ${pos * 100}%`\r\n          )\r\n          .join(\", \")\r\n\r\n        const gradient = `linear-gradient(${angle}deg, ${gradientStops})`\r\n\r\n        return (\r\n          <motion.div\r\n            key={index}\r\n            className=\"pointer-events-none absolute inset-0 rounded-[inherit]\"\r\n            style={{\r\n              maskImage: gradient,\r\n              WebkitMaskImage: gradient,\r\n              backdropFilter: `blur(${index * blurIntensity}px)`,\r\n            }}\r\n            {...props}\r\n          />\r\n        )\r\n      })}\r\n    </div>\r\n  )\r\n})\r\n\r\nconst LogoImage = memo(function LogoImage({ logo }: { logo: Logo }) {\r\n  return (\r\n    <img\r\n      alt={logo.alt}\r\n      src={logo.src}\r\n      width={logo.width ?? \"auto\"}\r\n      height={logo.height ?? \"auto\"}\r\n      loading=\"lazy\"\r\n      className=\"pointer-events-none h-4 select-none md:h-5 dark:brightness-0 dark:invert\"\r\n    />\r\n  )\r\n})\r\n\r\nexport const ClientMarqueeBlur = memo(function ClientMarqueeBlur({\r\n  logos,\r\n  className,\r\n}: {\r\n  logos: Logo[]\r\n  className?: string\r\n}) {\r\n  return (\r\n    <div\r\n      className={cn(\r\n        \"relative mx-auto max-w-6xl bg-linear-to-r from-secondary via-transparent to-secondary py-6 md:border-x\",\r\n        className\r\n      )}\r\n    >\r\n      <div className=\"-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t\" />\r\n\r\n      <InfiniteSlider gap={52} reverse duration={60} durationOnHover={20}>\r\n        {logos.map((logo) => (\r\n          <LogoImage key={logo.alt} logo={logo} />\r\n        ))}\r\n      </InfiniteSlider>\r\n\r\n      <ProgressiveBlur\r\n        blurIntensity={1}\r\n        className=\"pointer-events-none absolute top-0 left-0 h-full w-40\"\r\n        direction=\"left\"\r\n      />\r\n      <ProgressiveBlur\r\n        blurIntensity={1}\r\n        className=\"pointer-events-none absolute top-0 right-0 h-full w-40\"\r\n        direction=\"right\"\r\n      />\r\n\r\n      <div className=\"-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b\" />\r\n\r\n      <PlusIcon\r\n        className=\"-top-[12.5px] -right-[12.5px] absolute z-10 hidden size-6 md:block text-slate-800 dark:text-slate-300\"\r\n        strokeWidth={1}\r\n      />\r\n      <PlusIcon\r\n        className=\"-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block text-slate-800 dark:text-slate-300\"\r\n        strokeWidth={1}\r\n      />\r\n    </div>\r\n  )\r\n})\r\n\r\nClientMarqueeBlur.displayName = \"ClientMarqueeBlur\""
      }
    ]
  },
  {
    "name": "discord-online",
    "title": "Discord Online",
    "description": "Live Discord member presence count using Next.js server components.",
    "category": {
      "name": "Social",
      "slug": "social"
    },
    "tier": "free",
    "status": "stable",
    "tags": [
      "discord",
      "presence"
    ],
    "preview": {
      "disableSSR": false,
      "height": 300
    },
    "registryUrl": "https://grootui.vercel.app/r/discord-online.json",
    "npmDependencies": [
      "lucide-react",
      "Button(shadcn)",
      "Tooltip(shadcn)"
    ],
    "registryDependencies": [],
    "usage": {
      "import": "import { DiscordOnline } from \"@/components/discord-online\"",
      "code": "export default function Demo() {\n  return <DiscordOnline guildId=\"1234567891487752291602665574\" />\n}"
    },
    "props": [
      {
        "name": "guildId",
        "type": "string",
        "required": true,
        "description": "Target Discord Guild ID"
      },
      {
        "name": "inviteURL",
        "type": "string",
        "required": true,
        "description": "Target Discord Guild Invite URL"
      },
      {
        "name": "label",
        "type": "string",
        "description": "Label to display"
      },
      {
        "name": "className",
        "type": "string",
        "description": "Optional Class name to style the component"
      }
    ],
    "files": [
      {
        "name": "discord-online.tsx",
        "content": "import { cn } from \"@/lib/utils\";\r\nimport {\r\n  Tooltip,\r\n  TooltipContent,\r\n  TooltipProvider,\r\n  TooltipTrigger,\r\n} from \"@/components/ui/tooltip\";\r\nimport { Button } from \"@/components/ui/button\";\r\n\r\ninterface DiscordOnlineProps {\r\n  guildId: string; // Discord server ID to fetch presence count for\r\n  inviteURL?: string; // Optional custom invite URL    \r\n  className?: string;\r\n  label?: string; // Optional label for the tooltip (default: \"members online in our Discord\")\r\n}\r\n\r\nasync function getPresenceCount(guildId: string): Promise<number> {\r\n  try {\r\n    const res = await fetch(\r\n      `https://discord.com/api/guilds/${guildId}/widget.json`,\r\n      { next: { revalidate: 60 } },\r\n    );\r\n    if (!res.ok) return 0;\r\n    const data = (await res.json()) as { presence_count?: number };\r\n    return Number(data?.presence_count) || 0;\r\n  } catch {\r\n    return 0;\r\n  }\r\n}\r\n\r\nexport async function DiscordOnline({\r\n  guildId,\r\n  inviteURL,\r\n  className,\r\n  label = \"members online in our Discord\",\r\n}: DiscordOnlineProps) {\r\n  const count = await getPresenceCount(guildId);\r\n\r\n  return (\r\n    <TooltipProvider>\r\n      <Tooltip>\r\n        <TooltipTrigger asChild>\r\n          <Button\r\n            variant=\"ghost\"\r\n            className={cn(\"h-9 gap-1.5 pr-1.5 pl-2 border-border dark:border-input hover:bg-input\", className)}\r\n            asChild\r\n          >\r\n            <a\r\n              href={inviteURL || `https://discord.com/invite/${guildId}`}\r\n              target=\"_blank\"\r\n              rel=\"noopener noreferrer\"\r\n            >\r\n              <svg\r\n                width=\"16\"\r\n                height=\"16\"\r\n                viewBox=\"0 0 24 24\"\r\n                fill=\"currentColor\"\r\n                className=\"shrink-0\"\r\n                aria-hidden=\"true\"\r\n              >\r\n                <path d=\"M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z\" />\r\n              </svg>\r\n              <span className=\"inline-flex items-center gap-1.5\">\r\n                <span className=\"relative flex h-1.5 w-1.5 shrink-0\">\r\n                  <span className=\"absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75\" />\r\n                  <span className=\"relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-600\" />\r\n                </span>\r\n                <span className=\"text-[0.8125rem] text-muted-foreground tabular-nums\">\r\n                  {count.toLocaleString()}\r\n                </span>\r\n              </span>\r\n            </a>\r\n          </Button>\r\n        </TooltipTrigger>\r\n        <TooltipContent className=\"font-sans\">\r\n          {count.toLocaleString()} {label}\r\n        </TooltipContent>\r\n      </Tooltip>\r\n    </TooltipProvider>\r\n  );\r\n}"
      }
    ]
  },
  {
    "name": "discord-online-react",
    "title": "Discord Online (React)",
    "description": "Client-side Discord presence tracker for general React applications.",
    "category": {
      "name": "Social",
      "slug": "social"
    },
    "tier": "free",
    "status": "stable",
    "tags": [
      "discord",
      "presence",
      "react"
    ],
    "preview": {
      "disableSSR": true,
      "height": 300
    },
    "registryUrl": "https://grootui.vercel.app/r/discord-online-react.json",
    "npmDependencies": [
      "lucide-react",
      "Button(shadcn)",
      "Tooltip(shadcn)"
    ],
    "registryDependencies": [],
    "usage": {
      "import": "import { DiscordOnlineReact } from \"@/components/discord-online-react\"",
      "code": "export default function Demo() {\n  return <DiscordOnlineReact guildId=\"1234567891487752291602665574\" />\n}"
    },
    "props": [
      {
        "name": "guildId",
        "type": "string",
        "required": true,
        "description": "Target Discord Guild ID"
      },
      {
        "name": "inviteURL",
        "type": "string",
        "required": true,
        "description": "Target Discord Guild Invite URL"
      },
      {
        "name": "label",
        "type": "string",
        "description": "Label to display"
      },
      {
        "name": "className",
        "type": "string",
        "description": "Optional Class name to style the component"
      }
    ],
    "files": [
      {
        "name": "discord-online-react.tsx",
        "content": "\"use client\";\r\n\r\nimport { useEffect, useState } from \"react\";\r\nimport { cn } from \"@/lib/utils\";\r\nimport {\r\n  Tooltip,\r\n  TooltipContent,\r\n  TooltipProvider,\r\n  TooltipTrigger,\r\n} from \"@/components/ui/tooltip\";\r\nimport { Button } from \"@/components/ui/button\";\r\n\r\ninterface DiscordOnlineProps {\r\n  guildId: string;\r\n  className?: string;\r\n  label?: string;\r\n  inviteURL?: string;\r\n}\r\n\r\nconst CACHE_KEY = (id: string) => `groot-ui:discord-online:${id}`;\r\nconst CACHE_TTL = 60 * 1000;\r\n\r\nfunction getCached(guildId: string): number | null {\r\n  try {\r\n    const raw = localStorage.getItem(CACHE_KEY(guildId));\r\n    if (!raw) return null;\r\n    const { value, timestamp } = JSON.parse(raw);\r\n    if (Date.now() - timestamp > CACHE_TTL) return null;\r\n    return value;\r\n  } catch {\r\n    return null;\r\n  }\r\n}\r\n\r\nfunction setCache(guildId: string, value: number) {\r\n  try {\r\n    localStorage.setItem(\r\n      CACHE_KEY(guildId),\r\n      JSON.stringify({ value, timestamp: Date.now() }),\r\n    );\r\n  } catch {}\r\n}\r\n\r\nexport function DiscordOnline({\r\n  guildId,\r\n  className,\r\n  label = \"members online in our Discord\",\r\n  inviteURL = \"https://discord.com/invite\",\r\n}: DiscordOnlineProps) {\r\n  const [count, setCount] = useState<number | null>(null);\r\n\r\n  useEffect(() => {\r\n    const cached = getCached(guildId);\r\n    if (cached !== null) {\r\n      setCount(cached);\r\n      return;\r\n    }\r\n\r\n    fetch(`https://discord.com/api/guilds/${guildId}/widget.json`)\r\n      .then((res) => res.json())\r\n      .then((data) => {\r\n        const presence = Number(data?.presence_count) || 0;\r\n        setCount(presence);\r\n        setCache(guildId, presence);\r\n      })\r\n      .catch(() => setCount(0));\r\n  }, [guildId]);\r\n\r\n  return (\r\n    <TooltipProvider>\r\n      <Tooltip>\r\n        <TooltipTrigger asChild>\r\n          <Button\r\n            variant=\"ghost\"\r\n            className={cn(\"h-9 gap-1.5 pr-1.5 pl-2 border-border dark:border-input hover:bg-input\", className)}\r\n            asChild\r\n          >\r\n            <a href={inviteURL} target=\"_blank\" rel=\"noopener noreferrer\">\r\n              <svg\r\n                width=\"16\"\r\n                height=\"16\"\r\n                viewBox=\"0 0 24 24\"\r\n                fill=\"currentColor\"\r\n                className=\"shrink-0\"\r\n                aria-hidden=\"true\"\r\n              >\r\n                <path d=\"M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.030zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z\" />\r\n              </svg>\r\n              <span className=\"inline-flex items-center gap-1.5\">\r\n                <span className=\"relative flex h-1.5 w-1.5 shrink-0\">\r\n                  <span className=\"absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75\" />\r\n                  <span className=\"relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-600\" />\r\n                </span>\r\n                <span className=\"text-[0.8125rem] text-muted-foreground tabular-nums\">\r\n                  {count === null ? \"—\" : count.toLocaleString()}\r\n                </span>\r\n              </span>\r\n            </a>\r\n          </Button>\r\n        </TooltipTrigger>\r\n        <TooltipContent className=\"font-sans\">\r\n          {count === null ? \"Loading...\" : `${count.toLocaleString()} ${label}`}\r\n        </TooltipContent>\r\n      </Tooltip>\r\n    </TooltipProvider>\r\n  );\r\n}\r\n"
      }
    ]
  },
  {
    "name": "github-calendar",
    "title": "GitHub Calendar",
    "description": "Fully interactive GitHub contribution calendar with year-switching and tooltips.",
    "category": {
      "name": "Blocks",
      "slug": "blocks"
    },
    "tier": "free",
    "status": "stable",
    "label": "New",
    "tags": [
      "github",
      "calendar",
      "contributions"
    ],
    "preview": {
      "disableSSR": true,
      "height": 400
    },
    "registryUrl": "https://grootui.vercel.app/r/github-calendar.json",
    "npmDependencies": [
      "lucide-react"
    ],
    "registryDependencies": [],
    "usage": {
      "import": "import { GitHubCalendar } from \"@/components/github-calendar\"",
      "code": "export default function Demo() {\n  return <GitHubCalendar username=\"Subhadipjana95\" />\n}"
    },
    "props": [
      {
        "name": "username",
        "type": "string",
        "required": true,
        "description": "GitHub username to fetch data for"
      },
      {
        "name": "data",
        "type": "ContributionData",
        "description": "Optional manual contribution data object"
      },
      {
        "name": "startDate",
        "type": "string",
        "description": "Start date in YYYY-MM-DD format"
      },
      {
        "name": "endDate",
        "type": "string",
        "description": "End date in YYYY-MM-DD format"
      },
      {
        "name": "startsOnSunday",
        "type": "boolean",
        "default": "true",
        "description": "Whether to start weeks on Sunday or Monday"
      },
      {
        "name": "cellSize",
        "type": "number",
        "default": "12",
        "description": "Size of each contribution cell in pixels"
      },
      {
        "name": "cellGap",
        "type": "number",
        "default": "3",
        "description": "Gap between cells in pixels"
      },
      {
        "name": "cellShape",
        "type": "'rounded' | 'circle'",
        "default": "rounded",
        "description": "Visual shape of the contribution cells"
      },
      {
        "name": "theme",
        "type": "string | ThemeColors",
        "default": "github",
        "description": "Color theme (github, blue, sunset, purple, gray) or custom object"
      },
      {
        "name": "showMonthLabels",
        "type": "boolean",
        "default": "true",
        "description": "Display month names at the top"
      },
      {
        "name": "showStats",
        "type": "boolean",
        "default": "true",
        "description": "Show contribution count and username stats"
      },
      {
        "name": "showLegend",
        "type": "boolean",
        "default": "true",
        "description": "Display the Less/More color legend"
      }
    ],
    "files": [
      {
        "name": "github-calendar.tsx",
        "content": "\"use client\"\r\n\r\nimport { memo, useMemo, useState, useEffect, useId, useRef } from \"react\"\r\nimport { cn } from \"@/lib/utils\"\r\nimport { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from \"@/components/ui/tooltip\"\r\n\r\n// ─── Types ────────────────────────────────────────────────────────────────────\r\n\r\nexport type ContributionLevel = 0 | 1 | 2 | 3 | 4\r\n\r\nexport type ContributionData = {\r\n    [date: string]: {\r\n        level: ContributionLevel\r\n        label?: string\r\n        count?: number\r\n    }\r\n}\r\n\r\nexport type ThemeColors = {\r\n    level0: string\r\n    level1: string\r\n    level2: string\r\n    level3: string\r\n    level4: string\r\n}\r\n\r\nexport type CellShape = \"rounded\" | \"circle\"\r\n\r\nexport type GithubCalendarProps = {\r\n\r\n    username?: string // GitHub username \r\n    data?: ContributionData //Optional - Only for manual data\r\n    startDate?: string\r\n    endDate?: string\r\n    startsOnSunday?: boolean //Want to start weeks on Sunday or not ? \r\n    cellSize?: number\r\n    cellGap?: number\r\n    cellShape?: CellShape //Rounded | Circle\r\n    theme?: \"github\" | \"blue\" | \"sunset\" | \"purple\" | \"gray\" | ThemeColors\r\n    showMonthLabels?: boolean // Want the month labels on top \r\n    showStats?: boolean\r\n    showLegend?: boolean\r\n    className?: string // Custom class for custom styling\r\n}\r\n\r\n// ─── Built-in themes ──────────────────────────────────────────────────────────\r\n\r\nconst THEMES: Record<string, ThemeColors> = {\r\n    github: {\r\n        level0: \"#ebedf0\",\r\n        level1: \"#9be9a8\",\r\n        level2: \"#40c463\",\r\n        level3: \"#30a14e\",\r\n        level4: \"#216e39\",\r\n    },\r\n    blue: {\r\n        level0: \"#eff6ff\",\r\n        level1: \"#bfdbfe\",\r\n        level2: \"#60a5fa\",\r\n        level3: \"#2563eb\",\r\n        level4: \"#1e3a8a\",\r\n    },\r\n    sunset: {\r\n        level0: \"#fff7ed\",\r\n        level1: \"#fed7aa\",\r\n        level2: \"#fb923c\",\r\n        level3: \"#ea580c\",\r\n        level4: \"#7c2d12\",\r\n    },\r\n    purple: {\r\n        level0: \"#faf5ff\",\r\n        level1: \"#e9d5ff\",\r\n        level2: \"#a855f7\",\r\n        level3: \"#7e22ce\",\r\n        level4: \"#3b0764\",\r\n    },\r\n    gray: {\r\n        level0: \"#f3f4f6\",\r\n        level1: \"#d1d5db\",\r\n        level2: \"#9ca3af\",\r\n        level3: \"#4b5563\",\r\n        level4: \"#111827\",\r\n    },\r\n}\r\n\r\nconst DARK_THEMES: Record<string, ThemeColors> = {\r\n    github: {\r\n        level0: \"#161b22\",\r\n        level1: \"#0e4429\",\r\n        level2: \"#006d32\",\r\n        level3: \"#26a641\",\r\n        level4: \"#39d353\",\r\n    },\r\n    blue: {\r\n        level0: \"#161e2b\",\r\n        level1: \"#1e3a5f\",\r\n        level2: \"#1d4ed8\",\r\n        level3: \"#3b82f6\",\r\n        level4: \"#93c5fd\",\r\n    },\r\n    sunset: {\r\n        level0: \"#261a13\",\r\n        level1: \"#7c2d12\",\r\n        level2: \"#c2410c\",\r\n        level3: \"#f97316\",\r\n        level4: \"#fdba74\",\r\n    },\r\n    purple: {\r\n        level0: \"#191124\",\r\n        level1: \"#3b0764\",\r\n        level2: \"#6b21a8\",\r\n        level3: \"#a855f7\",\r\n        level4: \"#d8b4fe\",\r\n    },\r\n    gray: {\r\n        level0: \"#13181f\",\r\n        level1: \"#374151\",\r\n        level2: \"#6b7280\",\r\n        level3: \"#9ca3af\",\r\n        level4: \"#e5e7eb\",\r\n    },\r\n}\r\n\r\n// ─── Helpers ──────────────────────────────────────────────────────────────────\r\n\r\nfunction parseDate(dateStr: string): Date {\r\n    const parts = dateStr.split(\"-\").map(Number)\r\n    const y = parts[0] ?? 0\r\n    const m = parts[1] ?? 1\r\n    const d = parts[2] ?? 1\r\n    return new Date(y, m - 1, d)\r\n}\r\n\r\nfunction formatDate(date: Date): string {\r\n    const y = date.getFullYear()\r\n    const m = String(date.getMonth() + 1).padStart(2, \"0\")\r\n    const d = String(date.getDate()).padStart(2, \"0\")\r\n    return `${y}-${m}-${d}`\r\n}\r\n\r\nfunction addDays(date: Date, days: number): Date {\r\n    const d = new Date(date)\r\n    d.setDate(d.getDate() + days)\r\n    return d\r\n}\r\n\r\nconst MONTH_NAMES = [\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\", \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\"]\r\n\r\n// ─── API fetch ────────────────────────────────────────────────────────────────\r\n\r\ntype APIResponse = {\r\n    total: Record<string, number>\r\n    contributions: { date: string; count: number; level: number }[]\r\n}\r\n\r\nasync function fetchContributions(username: string): Promise<ContributionData> {\r\n    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`)\r\n    if (!res.ok) {\r\n        throw new Error(`Could not fetch contributions for \"${username}\" (${res.status})`)\r\n    }\r\n    const json: APIResponse = await res.json()\r\n\r\n    const result: ContributionData = {}\r\n    for (const entry of json.contributions) {\r\n        result[entry.date] = {\r\n            level: Math.min(4, Math.max(0, entry.level)) as ContributionLevel,\r\n            count: entry.count,\r\n        }\r\n    }\r\n    return result\r\n}\r\n\r\n// ─── Build calendar grid ──────────────────────────────────────────────────────\r\n\r\nfunction buildGrid(\r\n    startDate: string,\r\n    endDate: string,\r\n    startsOnSunday: boolean\r\n): { weeks: (string | null)[][]; monthLabels: { label: string; weekIndex: number }[]; gridStart: string } {\r\n    const start = parseDate(startDate)\r\n    const end = parseDate(endDate)\r\n\r\n    const startDay = startsOnSunday ? 0 : 1\r\n    const startDow = start.getDay()\r\n    const offset = ((startDow - startDay) + 7) % 7\r\n    const gridStart = addDays(start, -offset)\r\n\r\n    const weeks: (string | null)[][] = []\r\n    const monthLabels: { label: string; weekIndex: number }[] = []\r\n\r\n    let current = new Date(gridStart)\r\n    let weekIndex = 0\r\n    let lastMonth = -1\r\n\r\n    while (current <= end || (weeks.length > 0 && (weeks[weeks.length - 1]?.length ?? 0) < 7)) {\r\n        const week: (string | null)[] = []\r\n\r\n        for (let d = 0; d < 7; d++) {\r\n            const dateStr = formatDate(current)\r\n            const isInRange = current >= start && current <= end\r\n            week.push(isInRange ? dateStr : null)\r\n\r\n            if (isInRange && current.getMonth() !== lastMonth) {\r\n                lastMonth = current.getMonth()\r\n                monthLabels.push({ label: MONTH_NAMES[current.getMonth()]!, weekIndex })\r\n            }\r\n\r\n            current = addDays(current, 1)\r\n        }\r\n\r\n        weeks.push(week)\r\n        weekIndex++\r\n\r\n        if (current > end && weeks.length > 0 && (weeks[weeks.length - 1]?.every((d) => d === null || parseDate(d) > end) ?? false)) break\r\n    }\r\n\r\n    return { weeks, monthLabels, gridStart: formatDate(gridStart) }\r\n}\r\n\r\n// ─── Tooltip state type ───────────────────────────────────────────────────────\r\n\r\ntype TooltipState = {\r\n    visible: boolean\r\n    date: string\r\n    count: number | undefined\r\n    label: string | undefined\r\n    x: number\r\n    y: number\r\n}\r\n\r\n// ─── Loading Skeleton ─────────────────────────────────────────────────────────\r\n\r\nfunction CalendarSkeleton({ cellSize = 12, cellGap = 3, className }: { cellSize?: number; cellGap?: number; className?: string }) {\r\n    const step = cellSize + cellGap\r\n    const weeks = 53\r\n    const days = 7\r\n    return (\r\n        <div className={cn(\"w-fit mx-auto space-y-3 animate-pulse\", className)}>\r\n            <div className=\"flex gap-6\">\r\n                <div className=\"h-4 w-32 rounded bg-muted\" />\r\n                <div className=\"h-4 w-20 rounded bg-muted\" />\r\n                <div className=\"h-4 w-24 rounded bg-muted\" />\r\n            </div>\r\n            <div className=\"overflow-x-auto\">\r\n                <svg\r\n                    width={weeks * step - cellGap}\r\n                    height={16 + days * step - cellGap}\r\n                    className=\"overflow-visible\"\r\n                >\r\n                    {Array.from({ length: weeks }).map((_, wi) =>\r\n                        Array.from({ length: days }).map((_, di) => (\r\n                            <rect\r\n                                key={`${wi}-${di}`}\r\n                                x={wi * step}\r\n                                y={16 + di * step}\r\n                                width={cellSize}\r\n                                height={cellSize}\r\n                                rx={cellSize * 0.2}\r\n                                className=\"fill-muted\"\r\n                            />\r\n                        ))\r\n                    )}\r\n                </svg>\r\n            </div>\r\n        </div>\r\n    )\r\n}\r\n\r\n// ─── Main component ───────────────────────────────────────────────────────────\r\n\r\nexport const GithubCalendar = memo(function GithubCalendar({\r\n    username,\r\n    data: dataProp,\r\n    startDate,\r\n    endDate,\r\n    startsOnSunday = true,\r\n    cellSize = 12,\r\n    cellGap = 3,\r\n    cellShape = \"rounded\",\r\n    theme = \"github\",\r\n    showMonthLabels = true,\r\n    showStats = true,\r\n    showLegend = true,\r\n    className,\r\n}: GithubCalendarProps) {\r\n    const id = useId()\r\n    // Scroll ref — used to auto-scroll to most recent months on compact viewports\r\n    const scrollRef = useRef<HTMLDivElement>(null)\r\n    const [isDark, setIsDark] = useState(false)\r\n\r\n    useEffect(() => {\r\n        const checkDark = () => {\r\n            setIsDark(\r\n                document.documentElement.classList.contains(\"dark\") ||\r\n                document.body.classList.contains(\"dark\")\r\n            )\r\n        }\r\n\r\n        checkDark()\r\n\r\n        const observer = new MutationObserver(checkDark)\r\n        const opts = { attributes: true, attributeFilter: [\"class\"] }\r\n        observer.observe(document.documentElement, opts)\r\n        observer.observe(document.body, opts)\r\n\r\n        return () => observer.disconnect()\r\n    }, [])\r\n\r\n    // ── Fetch state ────────────────────────────────────────────────────────\r\n    const [fetchedData, setFetchedData] = useState<ContributionData | null>(null)\r\n    const [loading, setLoading] = useState(!!username)\r\n    const [fetchError, setFetchError] = useState<string | null>(null)\r\n\r\n    useEffect(() => {\r\n        if (!username) return\r\n        setFetchedData(null)\r\n        setFetchError(null)\r\n        setLoading(true)\r\n\r\n        fetchContributions(username)\r\n            .then((d) => setFetchedData(d))\r\n            .catch((e) => setFetchError(e instanceof Error ? e.message : String(e)))\r\n            .finally(() => setLoading(false))\r\n    }, [username])\r\n\r\n    // ── Choose data source ─────────────────────────────────────────────────\r\n    const data: ContributionData = dataProp ?? fetchedData ?? {}\r\n\r\n    // ── Resolve dates ──────────────────────────────────────────────────────\r\n    const resolvedEnd = endDate ?? formatDate(new Date())\r\n    const resolvedStart = useMemo(() => {\r\n        if (startDate) return startDate\r\n        const d = parseDate(resolvedEnd)\r\n        d.setFullYear(d.getFullYear() - 1)\r\n        d.setDate(d.getDate() + 1)\r\n        return formatDate(d)\r\n    }, [startDate, resolvedEnd])\r\n\r\n    // ── Resolve theme colors ───────────────────────────────────────────────\r\n    const lightColors: ThemeColors =\r\n        typeof theme === \"object\" ? theme : (THEMES[theme] ?? THEMES.github!)\r\n    const darkColors: ThemeColors =\r\n        typeof theme === \"object\" ? theme : (DARK_THEMES[theme] ?? DARK_THEMES.github!)\r\n\r\n    const activeColors = isDark ? darkColors : lightColors\r\n\r\n    // ── Tooltip state ──────────────────────────────────────────────────────\r\n    const [tooltip, setTooltip] = useState<TooltipState>({\r\n        visible: false,\r\n        date: \"\",\r\n        count: undefined,\r\n        label: undefined,\r\n        x: 0,\r\n        y: 0,\r\n    })\r\n\r\n    // ── Build grid ─────────────────────────────────────────────────────────\r\n    const { weeks, monthLabels, gridStart } = useMemo(\r\n        () => buildGrid(resolvedStart, resolvedEnd, startsOnSunday),\r\n        [resolvedStart, resolvedEnd, startsOnSunday]\r\n    )\r\n\r\n    // ── Stats ──────────────────────────────────────────────────────────────\r\n    const stats = useMemo(() => {\r\n        const entries = Object.entries(data)\r\n        const total = entries.reduce((sum, [, v]) => sum + (v.count ?? (v.level > 0 ? 1 : 0)), 0)\r\n        const activeDays = entries.filter(([, v]) => v.level > 0).length\r\n        const maxStreak = (() => {\r\n            let max = 0\r\n            let cur = 0\r\n            const sorted = entries\r\n                .filter(([, v]) => v.level > 0)\r\n                .map(([d]) => d)\r\n                .sort()\r\n            for (let i = 0; i < sorted.length; i++) {\r\n                if (i === 0) { cur = 1; max = 1; continue }\r\n                const prev = parseDate(sorted[i - 1]!)\r\n                const curr = parseDate(sorted[i]!)\r\n                const diff = (curr.getTime() - prev.getTime()) / 86400000\r\n                if (diff === 1) { cur++; max = Math.max(max, cur) }\r\n                else cur = 1\r\n            }\r\n            return max\r\n        })()\r\n        return { total, activeDays, maxStreak }\r\n    }, [data])\r\n\r\n    // ── Dimensions ────────────────────────────────────────────────────────\r\n    const step = cellSize + cellGap\r\n    const monthLabelHeight = showMonthLabels ? 20 : 0\r\n    const svgWidth = weeks.length * step - cellGap\r\n    const svgHeight = monthLabelHeight + 7 * step - cellGap\r\n\r\n    // Auto-scroll to the right end (most recent months) — must be before early returns\r\n    useEffect(() => {\r\n        if (scrollRef.current) {\r\n            scrollRef.current.scrollLeft = scrollRef.current.scrollWidth\r\n        }\r\n    }, [fetchedData, dataProp])\r\n\r\n    // ── Loading / error states ───────────────────────────\r\n    if (loading) {\r\n        return <CalendarSkeleton cellSize={cellSize} cellGap={cellGap} className={className} />\r\n    }\r\n\r\n    if (fetchError) {\r\n        return (\r\n            <div className={cn(\"w-fit mx-auto flex items-center gap-2 rounded-md border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive\", className)}>\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\">\r\n                    <circle cx=\"12\" cy=\"12\" r=\"10\" /><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\" /><line x1=\"12\" y1=\"16\" x2=\"12.01\" y2=\"16\" />\r\n                </svg>\r\n                {fetchError}\r\n            </div>\r\n        )\r\n    }\r\n\r\n    const cellRx = cellShape === \"circle\" ? cellSize / 2 : cellSize * 0.2\r\n\r\n    return (\r\n        <div className={cn(\"w-full overflow-x-hidden\", className)}>\r\n            <div className=\"w-fit mx-auto max-w-full flex flex-col gap-3 border border-input p-3 rounded-sm\">\r\n                <div\r\n                    ref={scrollRef}\r\n                    className=\"relative overflow-x-auto\"\r\n                    style={{ scrollbarWidth: \"none\", msOverflowStyle: \"none\" } as React.CSSProperties}\r\n                >\r\n                    <svg\r\n                        width={svgWidth}\r\n                        height={svgHeight}\r\n                        viewBox={`0 0 ${svgWidth} ${svgHeight}`}\r\n                        className=\"overflow-visible\"\r\n                    >\r\n                        {/* month labels */}\r\n                        {showMonthLabels && (() => {\r\n                            const byWeek = new Map<number, string>()\r\n                            monthLabels.forEach(({ label, weekIndex }) =>\r\n                                byWeek.set(weekIndex, label)\r\n                            )\r\n                            return Array.from(byWeek.entries()).map(([weekIndex, label]) => (\r\n                                <text\r\n                                    key={`${label}-${weekIndex}`}\r\n                                    x={weekIndex * step}\r\n                                    y={10}\r\n                                    fontSize={14}\r\n                                    fill={isDark ? \"#fafafa\" : \"#0a0a0a\"}\r\n                                    fontFamily=\"inherit\"\r\n                                >\r\n                                    {label}\r\n                                </text>\r\n                            ))\r\n                        })()}\r\n\r\n                        {/* cells */}\r\n                        {weeks.map((week, wi) =>\r\n                            week.map((date, di) => {\r\n                                const entry = date ? data[date] : undefined\r\n                                const level: ContributionLevel = entry?.level ?? 0\r\n                                const cellCenterX = wi * step + cellSize / 2\r\n                                const cellTopY = monthLabelHeight + di * step\r\n\r\n                                if (!date) {\r\n                                    const cellDate = formatDate(addDays(parseDate(gridStart), wi * 7 + di))\r\n                                    if (cellDate > resolvedEnd) return null\r\n                                }\r\n\r\n                                return (\r\n                                    <rect\r\n                                        key={`${wi}-${di}`}\r\n                                        x={wi * step}\r\n                                        y={cellTopY}\r\n                                        width={cellSize}\r\n                                        height={cellSize}\r\n                                        rx={cellRx}\r\n                                        fill={activeColors[`level${level}` as keyof ThemeColors]}\r\n                                        style={{ transition: \"opacity 0.1s\" }}\r\n                                        onMouseEnter={() => {\r\n                                            if (!date) return\r\n                                            setTooltip({\r\n                                                visible: true,\r\n                                                date,\r\n                                                count: entry?.count,\r\n                                                label: entry?.label,\r\n                                                x: cellCenterX,\r\n                                                y: cellTopY,\r\n                                            })\r\n                                        }}\r\n                                        onMouseLeave={() =>\r\n                                            setTooltip((t) => ({ ...t, visible: false }))\r\n                                        }\r\n                                    />\r\n                                )\r\n                            })\r\n                        )}\r\n                    </svg>\r\n\r\n                    {/* tooltip */}\r\n                    {tooltip.visible && (\r\n                        <TooltipProvider>\r\n                            <Tooltip open>\r\n                                <TooltipTrigger asChild>\r\n                                    <div\r\n                                        className=\"pointer-events-none absolute z-50\"\r\n                                        style={{\r\n                                            left: tooltip.x,\r\n                                            top: tooltip.y,\r\n                                            width: 1,\r\n                                            height: 1,\r\n                                        }}\r\n                                    />\r\n                                </TooltipTrigger>\r\n                                <TooltipContent side=\"top\">\r\n                                    <div className=\"font-medium\">\r\n                                        {tooltip.label\r\n                                            ? tooltip.label\r\n                                            : tooltip.count !== undefined\r\n                                                ? `${tooltip.count} contribution${tooltip.count !== 1 ? \"s\" : \"\"}`\r\n                                        : data[tooltip.date]?.level !== undefined\r\n                                                    ? `Level ${data[tooltip.date]?.level}`\r\n                                                    : \"No contributions\"}\r\n                                    </div>\r\n                                    <div className=\"text-muted\">{tooltip.date}</div>\r\n                                </TooltipContent>\r\n                            </Tooltip>\r\n                        </TooltipProvider>\r\n                    )}\r\n                </div>\r\n\r\n                <div className=\"flex items-start justify-between gap-x-4\">\r\n\r\n                    {/* legend (left) */}\r\n                    {showLegend && (\r\n                        <div className=\"flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground shrink-0 mt-0.5\">\r\n                            <span>Less</span>\r\n                            {([0, 1, 2, 3, 4] as ContributionLevel[]).map((level) => (\r\n                                <svg key={level} width={cellSize} height={cellSize}>\r\n                                    <rect\r\n                                        width={cellSize}\r\n                                        height={cellSize}\r\n                                        rx={cellRx}\r\n                                        fill={activeColors[`level${level}`]}\r\n                                    />\r\n                                </svg>\r\n                            ))}\r\n                            <span>More</span>\r\n                        </div>\r\n                    )}\r\n\r\n                    {/* stats line (right) */}\r\n                    {showStats && (\r\n                        <div className=\"flex flex-1 flex-wrap justify-end gap-x-1 text-sm text-muted-foreground ml-auto\">\r\n                            {username && (\r\n                                <span className=\"font-semibold text-foreground\">@{username}</span>\r\n                            )}\r\n                            <span>contributed</span>\r\n                            <span className=\"font-semibold text-foreground\">{stats.total.toLocaleString()}</span>\r\n                            <span>this year on</span>\r\n                            <a href={`https://github.com/${username}`} className=\"underline font-medium text-foreground\">GitHub</a>\r\n                        </div>\r\n                    )}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    )\r\n})\r\n\r\nGithubCalendar.displayName = \"GithubCalendar\""
      }
    ]
  },
  {
    "name": "github-stars",
    "title": "GitHub Stars",
    "description": "Displays a GitHub repo star count with server-side fetching and tooltips.",
    "category": {
      "name": "Social",
      "slug": "social"
    },
    "tier": "free",
    "status": "stable",
    "tags": [
      "github",
      "stars"
    ],
    "preview": {
      "disableSSR": false,
      "height": 300
    },
    "registryUrl": "https://grootui.vercel.app/r/github-stars.json",
    "npmDependencies": [
      "lucide-react",
      "Tooltip(shadcn)",
      "Button(shadcn)"
    ],
    "registryDependencies": [],
    "usage": {
      "import": "import { GitHubStars } from \"@/components/github-stars\"",
      "code": "export default function Demo() {\n  return <GitHubStars repo=\"Subhadipjana95/Groot-UI\" />\n}"
    },
    "props": [
      {
        "name": "repo",
        "type": "string",
        "required": true,
        "description": "Repository path (owner/repo)"
      },
      {
        "name": "label",
        "type": "string",
        "description": "Label to display"
      },
      {
        "name": "className",
        "type": "string",
        "description": "Optional Class name to style the component"
      }
    ],
    "files": [
      {
        "name": "github-stars.tsx",
        "content": "import { cva, type VariantProps } from \"class-variance-authority\";\r\nimport { cn } from \"@/lib/utils\";\r\nimport { Button } from \"@/components/ui/button\";\r\nimport {\r\n  Tooltip,\r\n  TooltipContent,\r\n  TooltipProvider,\r\n  TooltipTrigger,\r\n} from \"@/components/ui/tooltip\";\r\n\r\nconst githubStarsVariants = cva(\"gap-1.5 pr-1.5 pl-2\", {\r\n  variants: {\r\n    size: {\r\n      default: \"h-9 text-sm\",\r\n      sm: \"h-8 text-xs\",\r\n      lg: \"h-10 text-base pr-2 pl-2.5\",\r\n    },\r\n  },\r\n  defaultVariants: {\r\n    size: \"default\",\r\n  }\r\n});\r\n\r\ninterface GitHubStarsProps extends VariantProps<typeof githubStarsVariants> {\r\n  repo: string;\r\n  locales?: Intl.LocalesArgument;\r\n  className?: string;\r\n}\r\n\r\nasync function getStarCount(repo: string): Promise<number> {\r\n  try {\r\n    const res = await fetch(`https://api.github.com/repos/${repo}`, {\r\n      next: { revalidate: 86400 },\r\n    });\r\n\r\n    if (!res.ok) return 0;\r\n\r\n    const data = (await res.json()) as { stargazers_count?: number };\r\n    return Number(data?.stargazers_count) || 0;\r\n  } catch {\r\n    return 0;\r\n  }\r\n}\r\n\r\nexport async function GitHubStars({\r\n  repo, // GitHub repository in `owner/repo` format.\r\n  locales = \"en-US\", // Optional locales for number formatting\r\n  className, // Optional class name for Styling\r\n  size // Optional size for the button\r\n}: GitHubStarsProps) {\r\n  const count = await getStarCount(repo);\r\n\r\n  const formatted = new Intl.NumberFormat(locales, {\r\n    notation: \"compact\",\r\n    compactDisplay: \"short\",\r\n  })\r\n    .format(count)\r\n    .toLowerCase();\r\n\r\n  const full = new Intl.NumberFormat(locales).format(count);\r\n\r\n  return (\r\n    <TooltipProvider>\r\n      <Tooltip>\r\n        <TooltipTrigger asChild>\r\n          <Button\r\n            className={cn(githubStarsVariants({ size }), \"border-border dark:border-input hover:bg-input\", className)}\r\n            variant=\"ghost\"\r\n            asChild\r\n          >\r\n            <a\r\n              href={`https://github.com/${repo}`}\r\n              target=\"_blank\"\r\n              rel=\"noopener noreferrer\"\r\n            >\r\n              <svg\r\n                className=\"-translate-y-px\"\r\n                viewBox=\"0 0 24 24\"\r\n                width=\"16\"\r\n                height=\"16\"\r\n                aria-hidden=\"true\"\r\n              >\r\n                <path\r\n                  d=\"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12\"\r\n                  fill=\"currentColor\"\r\n                />\r\n              </svg>\r\n              <span className=\"text-[0.8125rem] text-muted-foreground tabular-nums\">\r\n                {formatted}\r\n              </span>\r\n            </a>\r\n          </Button>\r\n        </TooltipTrigger>\r\n        <TooltipContent className=\"font-sans\">{full} stars</TooltipContent>\r\n      </Tooltip>\r\n    </TooltipProvider>\r\n  );\r\n}\r\n"
      }
    ]
  },
  {
    "name": "github-stars-react",
    "title": "GitHub Stars (React)",
    "description": "Client-side GitHub star counter for standard React/Vite projects.",
    "category": {
      "name": "Social",
      "slug": "social"
    },
    "tier": "free",
    "status": "stable",
    "tags": [
      "github",
      "stars",
      "react"
    ],
    "preview": {
      "disableSSR": true,
      "height": 300
    },
    "registryUrl": "https://grootui.vercel.app/r/github-stars-react.json",
    "npmDependencies": [
      "lucide-react",
      "Tooltip(shadcn)",
      "Button(shadcn)"
    ],
    "registryDependencies": [],
    "usage": {
      "import": "import { GitHubStarsReact } from \"@/components/github-stars-react\"",
      "code": "export default function Demo() {\n  return <GitHubStarsReact repo=\"Subhadipjana95/Groot-UI\" />\n}"
    },
    "props": [
      {
        "name": "repo",
        "type": "string",
        "required": true,
        "description": "Repository path (owner/repo)"
      },
      {
        "name": "label",
        "type": "string",
        "description": "Label to display"
      },
      {
        "name": "className",
        "type": "string",
        "description": "Optional Class name to style the component"
      }
    ],
    "files": [
      {
        "name": "github-stars-react.tsx",
        "content": "\"use client\";\r\n\r\nimport { cva, type VariantProps } from \"class-variance-authority\";\r\nimport { cn } from \"@/lib/utils\";\r\nimport { useEffect, useState } from \"react\";\r\nimport { Button } from \"@/components/ui/button\";\r\nimport {\r\n  Tooltip,\r\n  TooltipContent,\r\n  TooltipProvider,\r\n  TooltipTrigger,\r\n} from \"@/components/ui/tooltip\";\r\n\r\nconst githubStarsVariants = cva(\"gap-1.5 pr-1.5 pl-2\", {\r\n  variants: {\r\n    size: {\r\n      default: \"h-9 text-sm\",\r\n      sm: \"h-8 text-xs\",\r\n      lg: \"h-10 text-base pr-2 pl-2.5\",\r\n    },\r\n  },\r\n  defaultVariants: {\r\n    size: \"default\",\r\n  }\r\n});\r\n\r\ninterface GitHubStarsProps extends VariantProps<typeof githubStarsVariants> {\r\n  repo: string; // GitHub repository in `owner/repo` format.\r\n  locales?: Intl.LocalesArgument; // Optional locales for number formatting. See [MDN - Intl - locales argument](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).\r\n  className?: string; // Optional class name for Styling\r\n}\r\n\r\nconst CACHE_KEY = (repo: string) => `groot-ui:github-stars:${repo}`;\r\nconst CACHE_TTL = 86400 * 1000;\r\n\r\nfunction getCached(repo: string): number | null {\r\n  try {\r\n    const raw = localStorage.getItem(CACHE_KEY(repo));\r\n    if (!raw) return null;\r\n    const { value, timestamp } = JSON.parse(raw);\r\n    if (Date.now() - timestamp > CACHE_TTL) return null;\r\n    return value;\r\n  } catch {\r\n    return null;\r\n  }\r\n}\r\n\r\nfunction setCache(repo: string, value: number) {\r\n  try {\r\n    localStorage.setItem(\r\n      CACHE_KEY(repo),\r\n      JSON.stringify({ value, timestamp: Date.now() }),\r\n    );\r\n  } catch { }\r\n}\r\n\r\nexport function GitHubStars({\r\n  repo,\r\n  locales = \"en-US\",\r\n  className,\r\n  size\r\n}: GitHubStarsProps) {\r\n  const [count, setCount] = useState<number | null>(null);\r\n\r\n  useEffect(() => {\r\n    const cached = getCached(repo);\r\n    if (cached !== null) {\r\n      setCount(cached);\r\n      return;\r\n    }\r\n\r\n    fetch(`https://api.github.com/repos/${repo}`)\r\n      .then((res) => res.json())\r\n      .then((data) => {\r\n        const stars = Number(data?.stargazers_count) || 0;\r\n        setCount(stars);\r\n        setCache(repo, stars);\r\n      })\r\n      .catch(() => setCount(0));\r\n  }, [repo]);\r\n\r\n  const formatted =\r\n    count === null\r\n      ? \"...\"\r\n      : new Intl.NumberFormat(locales, {\r\n        notation: \"compact\",\r\n        compactDisplay: \"short\",\r\n      })\r\n        .format(count)\r\n        .toLowerCase();\r\n\r\n  const full =\r\n    count === null\r\n      ? \"Loading...\"\r\n      : `${new Intl.NumberFormat(locales).format(count)} stars`;\r\n\r\n  return (\r\n    <TooltipProvider>\r\n      <Tooltip>\r\n        <TooltipTrigger asChild>\r\n          <Button\r\n            className={cn(githubStarsVariants({ size }), \"border-border dark:border-input hover:bg-input\", className)}\r\n            variant=\"ghost\"\r\n            asChild\r\n          >\r\n            <a\r\n              href={`https://github.com/${repo}`}\r\n              target=\"_blank\"\r\n              rel=\"noopener noreferrer\"\r\n            >\r\n              <svg\r\n                className=\"-translate-y-px\"\r\n                viewBox=\"0 0 24 24\"\r\n                width=\"16\"\r\n                height=\"16\"\r\n                aria-hidden=\"true\"\r\n              >\r\n                <path\r\n                  d=\"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12\"\r\n                  fill=\"currentColor\"\r\n                />\r\n              </svg>\r\n              <span className=\"text-[0.8125rem] text-muted-foreground tabular-nums\">\r\n                {formatted}\r\n              </span>\r\n            </a>\r\n          </Button>\r\n        </TooltipTrigger>\r\n        <TooltipContent className=\"font-sans\">{full}</TooltipContent>\r\n      </Tooltip>\r\n    </TooltipProvider>\r\n  );\r\n}\r\n"
      }
    ]
  },
  {
    "name": "glow-card",
    "title": "Glow Card",
    "description": "A card with a dynamic glowing cursor-tracking hover effect.",
    "category": {
      "name": "Blocks",
      "slug": "blocks"
    },
    "tier": "free",
    "status": "stable",
    "tags": [
      "card",
      "glow",
      "effect"
    ],
    "preview": {
      "disableSSR": true,
      "height": 400
    },
    "registryUrl": "https://grootui.vercel.app/r/glow-card.json",
    "npmDependencies": [],
    "registryDependencies": [],
    "usage": {
      "import": "import { GlowCard } from \"@/components/glow-card\"",
      "code": "export default function Demo() {\n  return (\n    <GlowCard className=\"p-6\">\n      <h3 className=\"text-xl font-bold\">Groot UI</h3>\n      <p className=\"text-muted-foreground\">Interactive glowing cards.</p>\n    </GlowCard>\n  )\n}"
    },
    "props": [
      {
        "name": "children",
        "type": "ReactNode",
        "required": true,
        "description": "Content inside the card"
      },
      {
        "name": "glowColor",
        "type": "string",
        "default": "rgba(var(--primary), 0.2)",
        "description": "Radial gradient color for the glow effect"
      },
      {
        "name": "className",
        "type": "string",
        "description": "Custom CSS classes"
      }
    ],
    "files": [
      {
        "name": "glow-card.tsx",
        "content": "import { cn } from \"@/lib/utils\"\r\n\r\ninterface GlowCardProps {\r\n  children: React.ReactNode\r\n  className?: string\r\n}\r\n\r\nexport function GlowCard({ children, className }: GlowCardProps) {\r\n  return (\r\n    <div\r\n      className={cn(\r\n        \"relative rounded-xl border border-white/10 bg-white/5 p-6\",\r\n        \"shadow-[0_0_30px_rgba(120,80,255,0.15)]\",\r\n        \"hover:shadow-[0_0_40px_rgba(120,80,255,0.3)]\",\r\n        \"transition-shadow duration-300\",\r\n        className\r\n      )}\r\n    >\r\n      {children}\r\n    </div>\r\n  )\r\n}"
      }
    ]
  },
  {
    "name": "gradient-background-text",
    "title": "Gradient Background Text",
    "description": "Text component featuring an animated background orb field and engraved depth effect.",
    "category": {
      "name": "Animations",
      "slug": "animations"
    },
    "tier": "free",
    "status": "stable",
    "tags": [
      "text",
      "gradient",
      "background",
      "3d"
    ],
    "preview": {
      "disableSSR": true,
      "height": 400
    },
    "registryUrl": "https://grootui.vercel.app/r/gradient-background-text.json",
    "npmDependencies": [
      "motion/react"
    ],
    "registryDependencies": [],
    "usage": {
      "import": "import { GradientBackgroundText } from \"@/components/gradient-background-text\"",
      "code": "export default function Demo() {\n  return <GradientBackgroundText>Groot UI</GradientBackgroundText>\n}"
    },
    "props": [
      {
        "name": "children",
        "type": "ReactNode",
        "required": true,
        "description": "Inner text content"
      },
      {
        "name": "colors",
        "type": "string",
        "default": "'#cc0066, #1aff53, #004d99, #f5f56b, #a600e6'",
        "description": "Gradient colors for background animation"
      },
      {
        "name": "className",
        "type": "string",
        "description": "Styling classes"
      }
    ],
    "files": [
      {
        "name": "gradient-background-text.tsx",
        "content": "\"use client\";\r\n\r\nimport React, { memo, useMemo } from \"react\";\r\nimport { motion, MotionProps } from \"motion/react\";\r\nimport { cn } from \"@/lib/utils\";\r\n\r\ninterface GradientTextProps extends Omit<\r\n  React.HTMLAttributes<HTMLElement>,\r\n  keyof MotionProps | \"style\"\r\n> {\r\n  className?: string;\r\n  children: React.ReactNode;\r\n  as?: React.ElementType;\r\n  colors?: string;\r\n  style?: React.CSSProperties;\r\n}\r\n\r\nconst keyframesStyle = `\r\n@keyframes gradient-border {\r\n  0%, 100% { border-radius: 37% 29% 27% 27% / 28% 25% 41% 37%; }\r\n  25% { border-radius: 47% 29% 39% 49% / 61% 19% 66% 26%; }\r\n  50% { border-radius: 57% 23% 47% 72% / 63% 17% 66% 33%; }\r\n  75% { border-radius: 28% 49% 29% 100% / 93% 20% 64% 25%; }\r\n}\r\n@keyframes gradient-1 {\r\n  0%, 100% { top: 0; right: 0; }\r\n  50% { top: 50%; right: 25%; }\r\n  75% { top: 25%; right: 50%; }\r\n}\r\n@keyframes gradient-2 {\r\n  0%, 100% { top: 0; left: 0; }\r\n  60% { top: 75%; left: 25%; }\r\n  85% { top: 50%; left: 50%; }\r\n}\r\n@keyframes gradient-3 {\r\n  0%, 100% { bottom: 0; left: 0; }\r\n  40% { bottom: 50%; left: 25%; }\r\n  65% { bottom: 25%; left: 50%; }\r\n}\r\n@keyframes gradient-4 {\r\n  0%, 100% { bottom: 0; right: 0; }\r\n  50% { bottom: 25%; right: 40%; }\r\n  90% { bottom: 50%; right: 25%; }\r\n}\r\n@media (prefers-reduced-motion: reduce) {\r\n  .groot-gradient-orb {\r\n    animation: none !important;\r\n  }\r\n}\r\n`;\r\n\r\nconst depthStyles: React.CSSProperties = {\r\n  textShadow: `\r\n    0px 1px 0px rgba(0,0,0,0.45),\r\n    0px 2px 0px rgba(0,0,0,0.4),\r\n    0px 3px 0px rgba(0,0,0,0.35),\r\n    0px 4px 0px rgba(0,0,0,0.25),\r\n    0px 5px 0px rgba(0,0,0,0.15),\r\n    0px 6px 0px rgba(0,0,0,0.08),\r\n    0px 8px 12px rgba(0,0,0,0.35),\r\n    0px -1px 0px rgba(255,255,255,0.1)\r\n  `,\r\n  transform: \"translateZ(16px)\",\r\n  filter: \"drop-shadow(0 8px 12px rgba(0,0,0,0.4))\",\r\n};\r\n\r\nconst perspectiveStyle: React.CSSProperties = {\r\n  perspective: \"600px\",\r\n  perspectiveOrigin: \"50% 50%\",\r\n  display: \"inline-flex\",\r\n  transformStyle: \"preserve-3d\",\r\n};\r\n\r\nconst motionStyle: React.CSSProperties = {\r\n  ...depthStyles,\r\n  transformStyle: \"preserve-3d\",\r\n  willChange: \"transform\",\r\n};\r\n\r\nconst rimLightStyle: React.CSSProperties = {\r\n  background:\r\n    \"linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)\",\r\n};\r\n\r\nconst rimShadowStyle: React.CSSProperties = {\r\n  background:\r\n    \"linear-gradient(90deg, transparent, rgba(0,0,0,0.4), transparent)\",\r\n};\r\n\r\nconst ORB_CLASS =\r\n  \"groot-gradient-orb pointer-events-none absolute h-[30vw] w-[30vw] animate-[gradient-border_6s_ease-in-out_infinite] mix-blend-overlay blur-lg\";\r\n\r\nconst GradientBackgroundText = memo(function GradientBackgroundText({\r\n  className,\r\n  children,\r\n  as: Component = \"span\",\r\n  colors = \"#cc0066, #1aff53, #004d99, #f5f56b, #a600e6\",\r\n  style,\r\n  ...props\r\n}: GradientTextProps) {\r\n  const MotionComponent = useMemo(() => motion.create(Component), [Component]);\r\n\r\n  const colorArray = useMemo(\r\n    () => colors.split(\",\").map((c) => c.trim()),\r\n    [colors],\r\n  );\r\n\r\n  const mergedMotionStyle = useMemo(\r\n    () => ({ ...motionStyle, ...style }),\r\n    [style],\r\n  );\r\n\r\n  return (\r\n    <span style={perspectiveStyle}>\r\n      <style dangerouslySetInnerHTML={{ __html: keyframesStyle }} />\r\n      <MotionComponent\r\n        className={cn(\r\n          \"relative inline-flex overflow-hidden font-bold tracking-tight text-transparent bg-clip-text px-2 pb-1.5 rounded-xl\",\r\n          className,\r\n        )}\r\n        style={mergedMotionStyle}\r\n        {...props}\r\n      >\r\n        {children}\r\n\r\n        <span\r\n          aria-hidden\r\n          className=\"pointer-events-none absolute inset-x-0 top-0 h-px\"\r\n          style={rimLightStyle}\r\n        />\r\n\r\n        <span\r\n          aria-hidden\r\n          className=\"pointer-events-none absolute inset-x-0 bottom-0 h-px\"\r\n          style={rimShadowStyle}\r\n        />\r\n\r\n        <span\r\n          aria-hidden\r\n          className=\"pointer-events-none absolute inset-0 mix-blend-darken dark:mix-blend\"\r\n        >\r\n          <span\r\n            className={cn(\r\n              ORB_CLASS,\r\n              \"-top-1/2 animate-[gradient-border_6s_ease-in-out_infinite,gradient-1_12s_ease-in-out_infinite_alternate]\",\r\n            )}\r\n            style={{ backgroundColor: colorArray[0] }}\r\n          />\r\n          <span\r\n            className={cn(\r\n              ORB_CLASS,\r\n              \"right-0 top-0 animate-[gradient-border_6s_ease-in-out_infinite,gradient-2_12s_ease-in-out_infinite_alternate]\",\r\n            )}\r\n            style={{ backgroundColor: colorArray[1] }}\r\n          />\r\n          <span\r\n            className={cn(\r\n              ORB_CLASS,\r\n              \"bottom-0 left-0 animate-[gradient-border_6s_ease-in-out_infinite,gradient-3_12s_ease-in-out_infinite_alternate]\",\r\n            )}\r\n            style={{ backgroundColor: colorArray[2] }}\r\n          />\r\n          <span\r\n            className={cn(\r\n              ORB_CLASS,\r\n              \"-bottom-1/2 right-0 animate-[gradient-border_6s_ease-in-out_infinite,gradient-4_12s_ease-in-out_infinite_alternate]\",\r\n            )}\r\n            style={{ backgroundColor: colorArray[3] }}\r\n          />\r\n        </span>\r\n      </MotionComponent>\r\n    </span>\r\n  );\r\n});\r\n\r\nGradientBackgroundText.displayName = \"GradientBackgroundText\";\r\n\r\nexport { GradientBackgroundText };\r\n"
      }
    ]
  },
  {
    "name": "gradient-text-fill",
    "title": "Gradient Text",
    "description": "High-impact text component with moving color orbs and 3D depth.",
    "category": {
      "name": "Animations",
      "slug": "animations"
    },
    "tier": "free",
    "status": "stable",
    "label": "new",
    "tags": [
      "text",
      "gradient",
      "animation",
      "motion"
    ],
    "preview": {
      "disableSSR": true,
      "height": 400
    },
    "registryUrl": "https://grootui.vercel.app/r/gradient-text-fill.json",
    "npmDependencies": [
      "motion/react"
    ],
    "registryDependencies": [],
    "usage": {
      "import": "import { GradientText } from \"@/components/gradient-text\"",
      "code": "export default function Demo() {\n  return <GradientText>Groot UI</GradientText>\n}"
    },
    "props": [
      {
        "name": "children",
        "type": "ReactNode",
        "required": true,
        "description": "Text or elements to animate"
      },
      {
        "name": "colors",
        "type": "string",
        "default": "'#cc0066, #1aff53, #004d99, #f5f56b, #a600e6'",
        "description": "Comma-separated hex colors for the orbs"
      },
      {
        "name": "as",
        "type": "ElementType",
        "default": "span",
        "description": "The HTML tag to render as"
      },
      {
        "name": "className",
        "type": "string",
        "description": "Typography and positioning classes"
      }
    ],
    "files": [
      {
        "name": "gradient-text-fill.tsx",
        "content": "\"use client\"\r\n\r\nimport React, { memo, useMemo } from \"react\"\r\nimport { motion, MotionProps } from \"motion/react\"\r\nimport { cn } from \"@/lib/utils\"\r\n\r\ninterface GradientTextProps\r\n  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps | \"style\"> {\r\n  className?: string\r\n  children: React.ReactNode\r\n  as?: React.ElementType\r\n  colors?: string\r\n  style?: React.CSSProperties\r\n}\r\n\r\nconst keyframesStyle = `\r\n@keyframes gradient-border {\r\n  0%, 100% { border-radius: 37% 29% 27% 27% / 28% 25% 41% 37%; }\r\n  25% { border-radius: 47% 29% 39% 49% / 61% 19% 66% 26%; }\r\n  50% { border-radius: 57% 23% 47% 72% / 63% 17% 66% 33%; }\r\n  75% { border-radius: 28% 49% 29% 100% / 93% 20% 64% 25%; }\r\n}\r\n@keyframes gradient-1 {\r\n  0%, 100% { top: 0; right: 0; }\r\n  50% { top: 50%; right: 25%; }\r\n  75% { top: 25%; right: 50%; }\r\n}\r\n@keyframes gradient-2 {\r\n  0%, 100% { top: 0; left: 0; }\r\n  60% { top: 75%; left: 25%; }\r\n  85% { top: 50%; left: 50%; }\r\n}\r\n@keyframes gradient-3 {\r\n  0%, 100% { bottom: 0; left: 0; }\r\n  40% { bottom: 50%; left: 25%; }\r\n  65% { bottom: 25%; left: 50%; }\r\n}\r\n@keyframes gradient-4 {\r\n  0%, 100% { bottom: 0; right: 0; }\r\n  50% { bottom: 25%; right: 40%; }\r\n  90% { bottom: 50%; right: 25%; }\r\n}\r\n@media (prefers-reduced-motion: reduce) {\r\n  .groot-orb { animation: none !important; }\r\n}\r\n`\r\n\r\nconst ORB_BASE =\r\n  \"groot-orb pointer-events-none absolute h-[30vw] w-[30vw] mix-blend-overlay blur-lg\"\r\n\r\nconst GradientText = memo(function GradientText({\r\n  className,\r\n  children,\r\n  as: Component = \"span\",\r\n  colors = \"#cc0066, #1aff53, #004d99, #f5f56b, #a600e6\",\r\n  style,\r\n  ...props\r\n}: GradientTextProps) {\r\n  const MotionComponent = useMemo(() => motion.create(Component), [Component])\r\n\r\n  const colorArray = useMemo(\r\n    () => colors.split(\",\").map((c) => c.trim()),\r\n    [colors]\r\n  )\r\n\r\n  return (\r\n    <MotionComponent\r\n      className={cn(\r\n        \"relative inline-flex overflow-hidden bg-foreground text-transparent bg-clip-text py-1\",\r\n        className\r\n      )}\r\n      style={style}\r\n      {...props}\r\n    >\r\n      <style dangerouslySetInnerHTML={{ __html: keyframesStyle }} />\r\n      {children}\r\n      <span\r\n        aria-hidden\r\n        className=\"pointer-events-none absolute inset-0 mix-blend-lighten dark:mix-blend-darken\"\r\n      >\r\n        <span\r\n          className={cn(ORB_BASE, \"-top-1/2 animate-[gradient-border_6s_ease-in-out_infinite,gradient-1_12s_ease-in-out_infinite_alternate]\")}\r\n          style={{ backgroundColor: colorArray[0] }}\r\n        />\r\n        <span\r\n          className={cn(ORB_BASE, \"right-0 top-0 animate-[gradient-border_6s_ease-in-out_infinite,gradient-2_12s_ease-in-out_infinite_alternate]\")}\r\n          style={{ backgroundColor: colorArray[1] }}\r\n        />\r\n        <span\r\n          className={cn(ORB_BASE, \"bottom-0 left-0 animate-[gradient-border_6s_ease-in-out_infinite,gradient-3_12s_ease-in-out_infinite_alternate]\")}\r\n          style={{ backgroundColor: colorArray[2] }}\r\n        />\r\n        <span\r\n          className={cn(ORB_BASE, \"-bottom-1/2 right-0 animate-[gradient-border_6s_ease-in-out_infinite,gradient-4_12s_ease-in-out_infinite_alternate]\")}\r\n          style={{ backgroundColor: colorArray[3] }}\r\n        />\r\n      </span>\r\n    </MotionComponent>\r\n  )\r\n})\r\n\r\nGradientText.displayName = \"GradientText\"\r\n\r\nexport { GradientText }"
      }
    ]
  },
  {
    "name": "groot-starter",
    "title": "Groot Starter",
    "description": "A simple starter component for groot-ui.",
    "category": {
      "name": "General",
      "slug": "general"
    },
    "tier": "free",
    "status": "stable",
    "tags": [
      "starter",
      "groot"
    ],
    "preview": {
      "disableSSR": false,
      "height": 400
    },
    "registryUrl": "https://grootui.vercel.app/r/groot-starter.json",
    "npmDependencies": [
      "lucide-react"
    ],
    "registryDependencies": [],
    "usage": {
      "import": "import { GrootStarter } from \"@/components/groot-starter\"",
      "code": "export default function Demo() {\n  return <GrootStarter />\n}"
    },
    "props": [],
    "files": [
      {
        "name": "groot-starter.tsx",
        "content": "import { Button } from \"@/components/ui/button\"\r\n\r\nexport function ExampleComponent() {\r\n  return (\r\n    <Button className=\"rounded-full px-8\">\r\n      Hello from groot-ui\r\n    </Button>\r\n  )\r\n}"
      }
    ]
  }
];

// ── Filtered views ──────────────────────────────────────────────
export const freeComponents    = registry.filter((c) => c.tier === "free");
export const premiumComponents = registry.filter((c) => c.tier === "premium");
export const newComponents     = registry.filter((c) => c.status === "new");

// ── Lookup helpers ───────────────────────────────────────────────
export function getComponent(name: string): ComponentConfig | undefined {
  return registry.find((c) => c.name === name);
}

export function getByCategory(category: ComponentConfig["category"]["slug"]): ComponentConfig[] {
  return registry.filter((c) => c.category.slug === category);
}

export function getByTag(tag: string): ComponentConfig[] {
  return registry.filter((c) => c.tags.includes(tag));
}
