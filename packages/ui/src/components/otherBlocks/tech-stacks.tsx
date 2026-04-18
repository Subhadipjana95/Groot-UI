"use client";

import React, { useState } from "react";
import { motion, useTransform, useMotionValue, useSpring } from "motion/react";

type TechItem = {
  id: number;
  name: string;
  designation?: string;
  icon: React.ReactNode;
};

const TechTooltipItem = ({ item }: { item: TechItem }) => {
  const x = useMotionValue(0);
  const [hovered, setHovered] = useState(false);

  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), {
    stiffness: 100,
    damping: 15,
  });

  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), {
    stiffness: 100,
    damping: 15,
  });

  return (
    <div
      className="group relative -mr-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.6 }}
        animate={
          hovered
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 20, scale: 0.6 }
        }
        transition={{ type: "spring", stiffness: 260, damping: 10 }}
        style={{ translateX, rotate }}
        className="absolute bottom-14 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-md border bg-popover px-2 py-1 text-xs text-popover-foreground shadow-xl"
      >
        <p className="whitespace-nowrap text-sm font-medium">
          {item.name}
        </p>
        <p className="whitespace-nowrap text-xs text-muted-foreground">
          {item.designation}
        </p>
      </motion.div>

      <div
        onMouseMove={(e) =>
          x.set(e.nativeEvent.offsetX - e.currentTarget.offsetWidth / 2)
        }
        className="relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-border bg-background shadow-sm transition duration-500 group-hover:z-30 group-hover:scale-105"
      >
        {item.icon}
      </div>
    </div>
  );
};

// ─── Tech Stack SVG Icons (brand colors) ──────────────────────────
const ReactIcon = () => (
  <svg viewBox="-11.5 -10.232 23 20.463" className="size-6" fill="none">
    <circle r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const NextjsIcon = () => (
  <svg viewBox="0 0 180 180" className="size-6" fill="none">
    <mask id="nextMask" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
      <circle cx="90" cy="90" r="90" fill="black" />
    </mask>
    <g mask="url(#nextMask)">
      <circle cx="90" cy="90" r="90" fill="black" />
      <path d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 009.509-7.325z" fill="url(#nextGrad1)" />
      <path d="M115 54h12v72h-12z" fill="url(#nextGrad2)" />
    </g>
    <defs>
      <linearGradient id="nextGrad1" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="nextGrad2" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const TypeScriptIcon = () => (
  <svg viewBox="0 0 128 128" className="size-6">
    <rect width="128" height="128" rx="10" fill="#3178C6" />
    <path d="M82.956 97.432c2.568 1.322 5.77 2.334 9.251 2.843 3.625.53 7.432.502 10.702-.298 3.478-.851 6.388-2.478 8.468-4.756 2.057-2.252 3.252-5.078 3.447-8.188.142-2.274-.26-4.35-1.206-6.188-.96-1.867-2.396-3.498-4.26-4.882-1.622-1.206-3.562-2.25-5.76-3.11l-4.594-1.744c-1.504-.58-2.77-1.154-3.771-1.72-.97-.546-1.702-1.126-2.17-1.73a3.52 3.52 0 0 1-.706-2.186c0-.908.282-1.71.842-2.386.57-.686 1.384-1.218 2.428-1.578 1.09-.376 2.38-.506 3.782-.366 1.092.11 2.236.38 3.404.804a12.802 12.802 0 0 1 3.368 1.866l4.476-6.66c-1.632-1.31-3.632-2.358-5.886-3.1-2.262-.744-4.77-1.144-7.39-1.15-3.486-.01-6.608.654-9.26 1.968-2.627 1.3-4.67 3.126-6.068 5.39-1.384 2.24-2.076 4.824-2.046 7.622.024 2.204.484 4.156 1.378 5.848.908 1.718 2.258 3.214 4.012 4.468 1.566 1.12 3.446 2.08 5.592 2.876l4.314 1.616c1.846.702 3.308 1.42 4.338 2.136.958.666 1.586 1.354 1.87 2.05.276.676.316 1.446.098 2.33-.22.892-.736 1.654-1.548 2.27-.83.63-1.908 1.086-3.218 1.35-1.37.278-2.962.314-4.68.056a16.86 16.86 0 0 1-4.572-1.458 17.26 17.26 0 0 1-3.842-2.576l-4.846 6.528zm-32.68-36.936h10.934v38.262h8.432V60.496h10.934V52.76H50.276z" fill="white" />
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" className="size-6" fill="#06B6D4">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
  </svg>
);

const RadixIcon = () => (
  <svg viewBox="0 0 25 25" className="size-6" fill="currentColor">
    <path d="M12 25a8 8 0 1 1 0-16v16zM12 0H4v8h8V0zM17 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
  </svg>
);

const FramerMotionIcon = () => (
  <svg viewBox="0 0 14 21" className="size-5" fill="none">
    <path d="M0 0h14v7H7L0 0z" fill="#59529D" />
    <path d="M0 7h7l7 7H0V7z" fill="#5B51D7" />
    <path d="M0 14h7v7L0 14z" fill="#7E74FB" />
  </svg>
);

const TECH_STACK: TechItem[] = [
  { id: 1, name: "React", designation: "UI Library", icon: <ReactIcon /> },
  { id: 2, name: "Next.js", designation: "Framework", icon: <NextjsIcon /> },
  { id: 3, name: "TypeScript", designation: "Language", icon: <TypeScriptIcon /> },
  { id: 4, name: "Tailwind CSS", designation: "Styling", icon: <TailwindIcon /> },
  { id: 5, name: "Radix UI", designation: "Primitives", icon: <RadixIcon /> },
  { id: 6, name: "Motion", designation: "Animations", icon: <FramerMotionIcon /> },
];

export function TechStacks() {
  return (
    <div className="flex flex-col items-center gap-3 mt-4">
      <p className="text-sm underline text-muted-foreground font-medium">
        Built With
      </p>
      <div className="flex items-center justify-center -space-x-2">
        {TECH_STACK.map((item) => (
          <TechTooltipItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
