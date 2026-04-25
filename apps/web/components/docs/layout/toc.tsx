"use client"

import { useEffect, useState } from "react";
import { cn } from "@workspace/ui/lib/utils";

import { SponsorCard } from "@/components/sponsor-card";

export function TOC() {
  const [activeId, setActiveId] = useState<string>("");
  const [headings, setHeadings] = useState<{ id: string; title: string; level: number }[]>([]);

  useEffect(() => {
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
        <p className="flex items-center rounded-md px-2 text-sm font-medium text-muted-foreground/80 hover:text-muted-foreground/60 active:text-muted-foreground/60 text-shadow-sm cursor-default bg-muted/50 border w-fit h-7 mb-1">
          On This Page
        </p>
        {headings.length > 0 ? (
          <ul className="mx-3.5 flex flex-col gap-1 border-l border-sidebar-border px-2.5 pt-2 pb-0.5">
            {headings.map((heading) => (
              <li key={heading.id} className={cn(heading.level === 3 ? "pl-4" : "")}>
                <button
                  onClick={() => handleClick(heading.id)}
                  className={cn(
                    "flex h-7 w-full items-center gap-2 overflow-hidden rounded-md px-2 text-left text-sm transition-all",
                    activeId === heading.id
                      ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                      : "text-muted-foreground hover:text-sidebar-accent-foreground hover:bg-sidebar-accent"
                  )}
                >
                  <span>{heading.title}</span>
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
