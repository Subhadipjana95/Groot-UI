"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { components } from "@/lib/registry/components";
import { cn } from "@workspace/ui/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  // Group components by category
  const categories = components.reduce((acc, component) => {
    const categoryName = component.category.name;
    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }
    acc[categoryName].push(component);
    return acc;
  }, {} as Record<string, typeof components>);

  return (
    <div className="w-full h-full overflow-x-hidden scrollbar-hide">
      <div className="space-y-4 -pt-2 pb-2">
        <div className="px-3 pb-2">
          <h2 className="mb-2 px-2 text-sm font-medium text-muted-foreground/60">
            Getting Started
          </h2>
          <div className="space-y-1.5">
            <Link
              href="/components"
              className={cn(
                "w-fit group",
                pathname === "/components" ? "bg-muted text-primary" : "text-muted-foreground"
              )}
            >
              <div className={cn(
                "w-fit flex items-center rounded-md px-2 py-1.5 text-sm font-medium group-hover:bg-muted transition-colors",
                pathname === `/components` ? "bg-muted text-primary" : "text-muted-foreground"
              )}>
                Overview
              </div>
            </Link>
            <Link
              href="/components/installation"
              className={cn(
                "w-fit group",
                pathname === "/components/installation" ? "bg-muted text-primary" : "text-muted-foreground"
              )}
            >
              <div className={cn(
                "w-fit flex items-center rounded-md px-2 py-1.5 text-sm font-medium group-hover:bg-muted transition-colors",
                pathname === `/components/installation` ? "bg-muted text-primary" : "text-muted-foreground"
              )}>
                Installation
              </div>
            </Link>
          </div>
        </div>

        {Object.entries(categories).map(([category, items]) => (
          <div key={category} className="pl-3 py-2">
            <h2 className="mb-2 px-2 font-semibold tracking-tight uppercase text-xs text-muted-foreground/60">
              {category}
            </h2>
            <div className="space-y-1">
              {items.map((item) => (
                <Link
                  key={item.slug}
                  href={`/components/${item.slug}`}
                  className={cn("group w-full mb-1",
                    pathname === `/components/${item.slug}` ? "bg-muted text-primary" : "text-muted-foreground"
                  )}
                >
                  <div className={cn(
                    "w-fit flex items-center rounded-md px-2 py-1.5 text-sm font-medium group-hover:bg-muted transition-colors",
                    pathname === `/components/${item.slug}` ? "bg-muted text-primary" : "text-muted-foreground"
                  )}>
                    <span className="flex-1 truncate">{item.title}</span>
                    {item.label && (
                      <span className="ml-2 rounded-full px-1.5 py-[3px] text-[9px] font-medium bg-brand-gradient text-background dark:text-background shrink-0 leading-none">
                        {item.label}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
