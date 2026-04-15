"use client"

import React from "react"
import { BentoGrid, type BentoItem } from "./bento-grid"

const PREVIEW_ITEMS: BentoItem[] = [
    {
        id: 1,
        title: "Pro Landing Templates",
        description: "Deeply integrated SEO, analytics, and conversion-optimized sections built on top of high-performance primitives.",
        image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1774162392/Brain.2.png",
        className: "md:col-span-6 lg:col-span-8 lg:row-span-2 min-h-[500px]"
    },
    {
        id: 2,
        title: "Animated Headers",
        description: "Buttery smooth entrance animations and scroll-linked header effects using Framer Motion.",
        image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1776210402/Groot-UI_Preview_lys0bz.png",
        className: "md:col-span-3 lg:col-span-4 min-h-[280px]"
    },
    {
        id: 3,
        title: "Modern Footer",
        description: "A collection of stunning, fully responsive footer designs.",
        image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1768645965/w2_bx19rl.webp",
        className: "md:col-span-6 lg:col-span-4 lg:row-span-1 min-h-[300px]"
    },
    {
        id: 4,
        title: "Dark Mode Support",
        description: "Seamless first-class support for dynamic themes with optimized color contrast.",
        image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1776271919/Screenshot_2026-04-15_222144_izmp1o.png",
        className: "md:col-span-3 lg:col-span-3 min-h-[250px]"
    },
    {
        id: 5,
        title: "Flexible Grid Layouts",
        description: "Design dynamic, responsive layouts using our grid utilities and flex-based helpers that scale effortlessly.",
        image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1776268852/Screenshot_2026-04-15_213026_qlofug.png",
        className: "md:col-span-6 lg:col-span-5 min-h-[250px]"
    },
    {
        id: 6,
        title: "Responsive Previews",
        description: "Test your build across all breakpoints with our integrated device simulator components.",
        image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1768510512/Screenshot_2026-01-16_021227_crgere.png",
        className: "md:col-span-6 lg:col-span-4 min-h-[250px]"
    }
]

export function ComponentPreviews() {
    return (
        <section className="relative py-24 overflow-hidden border-b border-border/60">
            <div className="mx-auto max-w-7xl px-12 relative z-10">
                <BentoGrid 
                    items={PREVIEW_ITEMS}
                    header={{
                        title: (
                            <>
                                Everything you need to <span className="bg-brand-gradient bg-clip-text text-transparent">Ship Faster</span>
                            </>
                        ) as unknown as string, // Cast to handle JSX in title
                        subtitle: "A boutique collection of UI blocks, templates, and components meticulously crafted for the modern web."
                    }}
                />
            </div>
        </section>
    )
}
