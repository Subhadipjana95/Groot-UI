"use client"

import { useEffect, useState } from "react";
import { cn } from "@workspace/ui/lib/utils";
import { ArrowRight } from "lucide-react";

import { SponsorCard } from "./sponsor-card";

const sections = [
  { id: "preview", title: "Preview" },
  { id: "installation", title: "Installation" },
  { id: "usage", title: "Usage" },
  { id: "props", title: "Props" },
  { id: "dependencies", title: "Dependencies" },
];

export function TOC() {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -80% 0%" }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col justify-between gap-6 pr-2">
      {/* Table of Contents Section */}
      <div className="space-y-2">
        <p className="font-semibold text-[11px] uppercase tracking-wider text-muted-foreground/50 mb-3 px-1">
          On This Page
        </p>
        <ul className="space-y-1">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => handleClick(section.id)}
                className={cn(
                  "block w-full text-left px-2 py-1.5 text-xs transition-all duration-200 rounded-md",
                  activeId === section.id
                    ? "bg-primary/5 text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                )}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Sponsor Card */}
      <SponsorCard />
    </div>
  );
}
