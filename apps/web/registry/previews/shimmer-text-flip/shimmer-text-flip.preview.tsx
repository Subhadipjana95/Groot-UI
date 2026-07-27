import { ShimmerTextFlip } from "@workspace/ui/registry/radix-nova/shimmer-text-flip/shimmer-text-flip"
import { motion } from "motion/react"
import { useState } from "react";

const role = [
    "Design Engineer.",
    "Full Stack Developer.",
    "UI/UX Designer.",
    "Open Source Contributer.",
];

const colors = [
    {
        name: "bg-muted-foreground",
        value: "",
    },
    {
        name: "bg-amber-400",
        value: "oklch(82.8% 0.189 84.429)",
    },
    {
        name: "bg-blue-500",
        value: "oklch(62.3% 0.214 259.815)",
    },
    {
        name: "bg-emerald-500",
        value: "oklch(69.6% 0.17 162.48)",
    },
    {
        name: "bg-rose-500",
        value: "oklch(64.5% 0.246 16.439)",
    },
];


export default function ShimmerTextFlipPreview() {
    const [color, setColor] = useState(undefined as string | undefined);

    return (
        <div className="flex items-center justify-center h-75 w-full">
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 p-1 border rounded-full flex justify-center items-center gap-1">
                {colors.map((c) => (
                    <div
                        key={c.name}
                        className="size-7 flex items-center justify-center rounded-full border overflow-hidden cursor-pointer"
                        onClick={() => setColor(c.value)}
                    >
                        <div className="size-6 rounded-full border active:scale-95 transition-all duration-150 overflow-hidden">
                            <div className={`${c.name} opacity-75 w-full h-full`} />
                        </div>
                    </div>
                ))}
            </div>
            <ShimmerTextFlip
                interval={2.8}
                as={motion.span}
                glowColor={color}
                className="text-xl sm:text-3xl "
            >
                {role}
            </ShimmerTextFlip>
        </div>
    )
}