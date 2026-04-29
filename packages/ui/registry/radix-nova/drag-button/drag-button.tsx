"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useTransform, AnimatePresence } from "motion/react";

export interface DragButtonProps
    extends Omit<React.ComponentProps<typeof Button>, "variant"> {
    children: React.ReactNode;
    onDragComplete?: () => void; // callback function to be called when the drag is completed
    showConfirmation?: boolean; // whether to show the confirmation animation
    variant?: keyof typeof BOX_SHADOW; // "default" | "outline"
    className?: string;
    successIcon?: React.ReactNode; // optional icon to be shown when the drag is completed
    colorLight?: string; // light color of gradient drag-handle(use hex color code)
    colorDark?: string; // dark color of gradient drag-handle(use hex color code)
}

const DEFAULT_COLORS = {
    light: "#f5f56b",
    dark: "#cc0066"
} as const;

const HANDLE_SIZE = 40;
const GAP_PX = 4;

const SPRING_TRANSITION = { type: "spring", stiffness: 600, damping: 40 } as const;

const SHIMMER_STYLE = {
    background:
        "linear-gradient(180deg,rgba(255,255,255,0.4) 0%,rgba(255,255,255,0) 80%,transparent 100%)",
    filter: "blur(0.5px)",
} as const;

const BOX_SHADOW = {
    default:
        "inset 0 2px 3px 0 rgba(255,255,255,0.15), inset 0 -3px 6px 0 rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.1)",
    outline:
        "inset 0 2px 4px 0 rgba(0,0,0,0.12), inset 0 -2px 2px 0 rgba(255,255,255,0.3), inset 0 0 0 1px rgba(0,0,0,0.06)",
} as const;

export const DragButton = React.forwardRef<
    HTMLButtonElement,
    DragButtonProps
>(
    (
        {
            children,
            className,
            variant = "default",
            onDragComplete,
            showConfirmation = true,
            successIcon = <Check className="size-5" />,
            colorLight = DEFAULT_COLORS.light,
            colorDark = DEFAULT_COLORS.dark,
            ...props
        },
        externalRef
    ) => {
        const [isSuccess, setIsSuccess] = React.useState(false);
        const [travelDistance, setTravelDistance] = React.useState(0);
        const dragX = useMotionValue(0);
        const textOpacity = useTransform(dragX, [0, travelDistance], [1, 0.1]);

        const gradient = `linear-gradient(to top, ${colorLight}, ${colorDark})`;

        const iconStyle = {
            background: gradient,
            boxShadow: `0 2px 8px 0 ${colorDark}59, 0 1.5px 0 0 rgba(255,255,255,0.25) inset, 0 -2px 8px 0 ${colorDark}80 inset, 0 0 0 1px rgba(0,0,0,0.08)`,
        };

        const innerShadowStyle = {
            boxShadow: `0 0 0 1px rgba(255,255,255,0.15) inset, 0 1.5px 0 0 rgba(255,255,255,0.2) inset, 0 -2px 4px 0 ${colorDark}33 inset`,
        };

        const containerRef = React.useRef<HTMLButtonElement | null>(null);

        const mergedRef = React.useCallback(
            (node: HTMLButtonElement | null) => {
                containerRef.current = node;
                if (typeof externalRef === "function") externalRef(node);
                else if (externalRef)
                    (
                        externalRef as React.MutableRefObject<HTMLButtonElement | null>
                    ).current = node;

                if (!node) return;

                const measure = () => {
                    setTravelDistance(node.offsetWidth - HANDLE_SIZE - GAP_PX * 2.5);
                };

                measure();
                const ro = new ResizeObserver(measure);
                ro.observe(node);
            },
            [externalRef]
        );

        const handleDragEnd = () => {
            if (dragX.get() >= travelDistance - 5) {
                if (showConfirmation) {
                    setIsSuccess(true);
                    onDragComplete?.();

                    setTimeout(() => {
                        setIsSuccess(false);
                        dragX.set(0);
                    }, 1500);
                } else {
                    onDragComplete?.();
                    dragX.set(0);
                }
            } else {
                dragX.set(0);
            }
        };

        return (
            <Button
                ref={mergedRef}
                variant={variant}
                className={cn(
                    "relative h-12 min-w-[200px] cursor-grab overflow-hidden rounded-xl p-1 text-sm font-medium transition-all duration-300 flex items-center select-none",
                    isSuccess && "pointer-events-none",
                    className
                )}
                {...props}
            >
                {/* Progress bar background */}
                <motion.div
                    className="absolute left-1 top-1 bottom-1 bg-white/10 rounded-lg pointer-events-none z-0"
                    style={{ width: useTransform(dragX, (v) => v + HANDLE_SIZE) }}
                />

                {/* Background text */}
                <motion.span
                    style={{ opacity: textOpacity }}
                    className="relative z-10 mx-auto transition-all duration-500 text-shadow-black/10 text-shadow-lg pointer-events-none pl-8"
                >
                    {children}
                </motion.span>

                {/* Draggable Handle */}
                <motion.div
                    drag={!isSuccess ? "x" : false}
                    dragConstraints={{ left: 0, right: travelDistance }}
                    dragElastic={0}
                    dragMomentum={false}
                    onDragEnd={handleDragEnd}
                    style={{
                        x: dragX,
                        ...iconStyle,
                        zIndex: 40,
                        width: HANDLE_SIZE,
                        height: HANDLE_SIZE,
                        left: 4,
                        position: "absolute",
                        borderRadius: "10px",
                        top: 0,
                        bottom: 0,
                        marginTop: "auto",
                        marginBottom: "auto",
                    }}
                    animate={{
                        opacity: isSuccess ? 0 : 1,
                        scale: isSuccess ? 0.8 : 1,
                    }}
                    transition={SPRING_TRANSITION}
                    className={cn(
                        "flex items-center justify-center text-white cursor-grab active:cursor-grabbing",
                        isSuccess && "cursor-default"
                    )}
                >
                    <span
                        className="pointer-events-none absolute left-1/2 top-0 z-20 h-2/5 w-[80%] -translate-x-1/2 rounded-t-[inherit]"
                        style={SHIMMER_STYLE}
                    />
                    <span
                        className="pointer-events-none absolute inset-0 z-0 rounded-[inherit]"
                        style={innerShadowStyle}
                    />
                    <ArrowRight size={20} className="drop-shadow-sm relative z-30" />
                </motion.div>

                {/* Success Overlay */}
                <AnimatePresence>
                    {isSuccess && (
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ ...SPRING_TRANSITION, bounce: 0.1 }}
                            className="absolute inset-0 z-50 flex items-center justify-center text-white shadow-lg"
                            style={{
                                background: gradient,
                                borderRadius: "8px"
                            }}
                        >
                            <motion.div
                                initial={{ scale: 0.5, rotate: -45, opacity: 0 }}
                                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                                transition={{ delay: 0.1, type: "spring", stiffness: 300, damping: 20 }}
                            >
                                {successIcon}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Button>
        );
    }
);

DragButton.displayName = "DragButton";
