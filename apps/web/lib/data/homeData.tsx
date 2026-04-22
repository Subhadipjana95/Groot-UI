import { Twitter, Github, MessageCircle, Youtube } from "@workspace/ui/components/icons/icon"
import { Testimonial } from "@workspace/ui/lib/types"

export const DATA = {
    title: "Groot UI",
    description: "Hand-crafted, high-performing, SEO friendly & accessible components designed for modern developers.",

    // Testimonial Reviews
    testimonials: [
    {
        name: 'Steven Tey',
        username: '@steventey',
        role: 'Founder',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80',
        quote: 'bruh this is so good 😍',
        verified: true,
        link: '#',
    },
    {
        name: 'Sully',
        username: '@SullyOmarr',
        role: 'Developer',
        image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=120&q=80',
        quote: 'Bro these are cleeaaann',
        verified: true,
        postImage: 'https://res.cloudinary.com/dfjuuwtr6/image/upload/v1768510512/Screenshot_2026-01-16_021227_crgere.png',
        link: '#',
    },
    {
        name: 'Dillion Verma',
        username: '@dillionverma',
        role: 'Software Engineer',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
        quote: "Testing out @grootui's new component blocks. The developer experience is just on another level.",
        verified: true,
        link: '#',
    },
    {
        name: 'Marc Klingen',
        username: '@marcklingen',
        role: 'CEO @ Langfuse',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80',
        quote: '@grootui was a godsend when building the current langfuse.com x.com/marcklingen/st...',
        verified: true,
        postImage: 'https://res.cloudinary.com/dfjuuwtr6/image/upload/v1776287225/printsyte_horizontal_wogkir.webp',
        link: '#',
    },
    {
        name: 'Guillermo Rau',
        username: '@rauchg',
        role: 'CEO @ Vercel',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80',
        quote: 'beautiful site 🎨',
        verified: true,
        link: '#',
    },
    {
        name: 'Emily Wang',
        username: '@emilywang',
        role: 'Product Designer',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
        quote: 'Look at this clean UI! All built with @grootui in under an hour. Absolute game changer for my workflow.',
        verified: true,
        postImage: 'https://res.cloudinary.com/dfjuuwtr6/image/upload/v1776287226/portfolio_dark_paxfd5.webp',
        link: '#',
    },
    {
        name: 'Mckay Wigley',
        username: '@mckaywigley',
        role: 'Developer',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
        quote: 'Need a beautiful landing page? Use Cursor + Groot UI. Install components with 1-line of code and tag them with Cursor Composer to have AI do 100% of the work for you. Watch my workflow - it\'s this easy.',
        verified: true,
        postImage: 'https://res.cloudinary.com/dfjuuwtr6/image/upload/v1776286826/Groot-UI_Preview_ojjktb.webp',
        link: '#',
    },
    {
        name: 'Aiden Bai',
        username: '@aidenybai',
        role: 'Software Engineer',
        image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80',
        quote: 'we use grootui for Billion.cloud 🤯',
        verified: true,
        link: '#',
    },
    {
        name: 'Saurabh',
        username: '@saurabh',
        role: 'Indie Hacker',
        image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=120&q=80',
        quote: "Finally a UI library that doesn't feel bloated. @grootui is what I use for all my fast-shipping projects.",
        verified: true,
        link: '#',
    },
    {
        name: 'Alex',
        username: '@vahaah',
        role: 'Software Engineer',
        image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&q=80',
        quote: 'Thanks, @grootui. This is my new favourite UI library, and their Pro templates look magical.',
        verified: true,
        postImage: 'https://res.cloudinary.com/dfjuuwtr6/image/upload/v1774162392/Brain.2.png',
        link: '#',
    },
    {
        name: 'Jordan Hughes',
        username: '@jordanphughes',
        role: 'Designer',
        image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
        quote: 'This is awesome, congrats @grootui !',
        verified: true,
        link: '#',
    },
    {
        name: 'Lee Robinson',
        username: '@leeerob',
        role: 'VP Product @ Vercel',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80',
        quote: 'The attention to detail in @grootui is impressive. Great collection for modern web apps.',
        verified: true,
        link: '#',
    }
],

    // FAQ Questions and Answers
    faq: [
        {
            id: 'item-1',
            title: 'What is Groot UI?',
            content:
                'Groot UI is a collection of beautifully crafted UI components and templates, designed to help developers build modern web applications with ease.',
        },
        {
            id: 'item-2',
            title: 'Who can benefit from Groot UI?',
            content:
                'Groot UI is built for developers, founders, product teams, and agencies that want to accelerate idea validation and delivery without sacrificing code quality.',
        },
        {
            id: 'item-3',
            title: 'What features does Groot UI include?',
            content:
                'Groot UI offers accessible Radix primitives styled with Tailwind CSS, along with beautiful Framer Motion animations for interactivity. Everything is optimized for Next.js.',
        },
        {
            id: 'item-4',
            title: 'Can I customize components in Groot UI?',
            content:
                'Absolutely! The philosophy here is "copy and paste" so you own the code. You can easily adjust the Tailwind classes or structure to fit your exact needs.',
        },
        {
            id: 'item-5',
            title: 'Does Groot UI integrate with my existing tools?',
            content:
                'Yes, it integrates perfectly with standard React toolchains, Next.js, and any framework utilizing Tailwind CSS.',
        },
    ],

    // Footer Links
    product: [
        { name: "Components", href: "/components", tag: "New" },
        { name: "Blocks", href: "/blocks" },
        { name: "Templates", href: "/templates" },
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