import { Twitter, Github, MessageCircle, Youtube } from "@workspace/ui/components/icons/icon"

export const DATA = {
    title: "Groot UI",
    description: "Hand-crafted, high-performing, SEO friendly & accessible components designed for modern developers.",




    // Footer Links
    product: [
        { name: "Components", href: "/component", tag: "New" },
        { name: "Blocks", href: "/block" },
        { name: "Templates", href: "/template" },
        { name: "Pricing", href: "/pricing", tag: "20% Off" },
    ],
    resources: [
        { name: "Docs", href: "/components/installation" },
        { name: "Blog", href: "https://www.a063.xyz/blog" },
        { name: "Changelog", href: "/changelog" },
        { name: "Support", href: "/support" },
    ],
    company: [
        { name: "Donate", href: "https://www.a063.xyz/support" },
        { name: "About", href: "/about" },
        { name: "Privacy", href: "/privacy" },
        { name: "Terms", href: "/terms" },
    ],
    socials: [
        { name: "Twitter", href: "https://x.com/Subhadip53874", icon: Twitter },
        { name: "GitHub", href: "https://github.com/Subhadipjana95/Groot-UI", icon: Github },
        { name: "Discord", href: "https://discord.com/channels/1487752291602665574", icon: MessageCircle },
        { name: "YouTube", href: "#", icon: Youtube },
    ],
} as const;