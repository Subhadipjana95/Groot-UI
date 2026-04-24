"use client"

import { useEffect, useState } from "react";
import { cn } from "@workspace/ui/lib/utils";

import { SponsorCard } from "./sponsor-card";

export function TOC() {
  const [activeId, setActiveId] = useState<string>("");
  const [headings, setHeadings] = useState<{ id: string; title: string; level: number }[]>([]);

  useEffect(() => {
    // 1. Gather all h2 and h3 elements within the main content area after mount.
    // Timeout helps ensure the page content has fully rendered.
    const timer = setTimeout(() => {
      const elements = Array.from(document.querySelectorAll("main h2, main h3"))
        .filter((el) => el.id)
        .map((el) => ({
          id: el.id,
          title: el.textContent || "",
          level: Number(el.tagName.charAt(1)),
        }));
      setHeadings(elements);

      // 2. Set up observer to track scroll position
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

      elements.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) observer.observe(element);
      });

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
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
        {headings.length > 0 ? (
          <ul className="space-y-1">
            {headings.map((heading) => (
              <li key={heading.id} className={cn(heading.level === 3 ? "pl-4" : "")}>
                <button
                  onClick={() => handleClick(heading.id)}
                  className={cn(
                    "block w-fit text-left px-4 py-1.5 text-xs transition-all duration-200 rounded-md",
                    activeId === heading.id
                      ? "bg-primary/5 dark:bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                  )}
                >
                  {heading.title}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      {/* Sponsor Card */}
      <SponsorCard />
    </div>
  );
}
