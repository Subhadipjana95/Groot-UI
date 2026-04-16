"use client"

import { useEffect, useState } from "react";
import { cn } from "@workspace/ui/lib/utils";

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
    <div className="space-y-2">
      <p className="font-medium text-sm text-muted-foreground/60 mb-4 px-4">
        On This Page
      </p>
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => handleClick(section.id)}
              className={cn(
                "block w-full text-left px-4 py-1 text-sm transition-colors",
                activeId === section.id
                  ? "border-primary text-primary font-medium"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
