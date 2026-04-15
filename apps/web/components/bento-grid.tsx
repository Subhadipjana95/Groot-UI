"use client"

import React, { memo } from "react"
import { cn } from "@workspace/ui/lib/utils"
import { Plus } from "lucide-react"

// --- Types ---

export interface BentoItem {
    id: string | number
    title: string
    description: string
    image?: string
    className?: string
    /** Custom content to render instead of/alongside the image */
    content?: React.ReactNode
}

interface BentoGridProps {
    items: BentoItem[]
    className?: string
    /** Optional title/description if you want the grid to handle its own header */
    header?: {
        title: string
        subtitle?: string
    }
}

// --- Sub-components ---

const PlusIcon = ({ className }: { className?: string }) => (
    <div className={cn("absolute z-20 text-muted-foreground/30 pointer-events-none", className)}>
        <Plus className="size-4" strokeWidth={1} />
    </div>
)

const CornerPlusIcons = () => (
    <>
        <PlusIcon className="absolute -top-2 -left-2" />
        <PlusIcon className="absolute -top-2 -right-2" />
        <PlusIcon className="absolute -bottom-2 -left-2" />
        <PlusIcon className="absolute -bottom-2 -right-2" />
    </>
)

const BentoCard = memo(({ item }: { item: BentoItem }) => {
    return (
        <div
            className={cn(
                "relative group flex flex-col border border-dashed border-border/60 bg-background/50 backdrop-blur-sm transition-all duration-500 hover:bg-muted/10",
                item.className
            )}
        >
            {/* Icons outside the overflow wrapper so they don't get clipped */}
            <CornerPlusIcons />
            
            <div className="relative flex flex-col flex-1 overflow-hidden h-full">
                {/* Image/Preview Container */}
                <div className="relative flex-1 overflow-hidden min-h-[160px]">
                    {item.image ? (
                        <img 
                            src={item.image} 
                            alt={item.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[101%] dark:opacity-80"
                        />
                    ) : item.content}
                    
                    {/* Subtle Overlay */}
                    <div 
                        className="absolute inset-0 bg-linear-to-t from-background/60 via-background/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" 
                        aria-hidden="true"
                    />
                </div>

                {/* Typography Content */}
                <div className="px-3 py-4 space-y-1 border-t border-dashed border-border/60">
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">
                        {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                        {item.description}
                    </p>
                </div>
            </div>
        </div>
    )
})

BentoCard.displayName = "BentoCard"

// --- Main Component ---

export function BentoGrid({ items, className, header }: BentoGridProps) {
    return (
        <div className={cn("relative w-full", className)}>
            {header && (
                <div className="text-center space-y-4 mb-20 px-4">
                    <h2 className="text-4xl font-medium tracking-tight sm:text-5xl text-foreground">
                        {header.title}
                    </h2>
                    {header.subtitle && (
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            {header.subtitle}
                        </p>
                    )}
                </div>
            )}

            {/* The Grid Container with Responsive Masking */}
            <div 
                className={cn(
                    "relative grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 bg-border/20",
                    "mask-[linear-gradient(to_bottom,black_95%,transparent_100%)] dark:mask-[linear-gradient(to_bottom,black_85%,transparent_100%)]"
                )}
                role="list"
                aria-label="Component preview grid"
            >
                {items.map((item) => (
                    <div key={item.id} role="listitem" className="contents">
                        <BentoCard item={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}
