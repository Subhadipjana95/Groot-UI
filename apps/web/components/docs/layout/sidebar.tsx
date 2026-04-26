"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { registry } from "@/lib/registry";
import {
  Sidebar as BaseSidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarProvider
} from "@workspace/ui/components/sidebar";

export function Sidebar() {
  const pathname = usePathname();

  // Group components by category
  const categories = registry.reduce((acc, component) => {
    const categoryName = component.category.name;
    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }
    acc[categoryName].push(component);
    return acc;
  }, {} as Record<string, typeof registry>);

  return (
    <SidebarProvider className="min-h-0 w-full items-start">
      <BaseSidebar collapsible="none" className="w-full bg-transparent border-none">
        <SidebarContent className="scrollbar-hide pb-6 overflow-visible">
          <SidebarGroup className="pt-0 min-w-full w-max pr-6">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="font-medium text-muted-foreground/80 hover:text-muted-foreground/60 text-shadow-sm cursor-default bg-muted/50 border hover:border-dashed w-fit h-7 mb-1">
                  Getting Started
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild isActive={pathname === "/components"}>
                      <Link href="/components">
                        Overview
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild isActive={pathname === "/components/installation"}>
                      <Link href="/components/installation">
                        Installation
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>

              {Object.entries(categories).map(([category, items]) => (
                <SidebarMenuItem key={category} className="group">
                  <SidebarMenuButton className="font-medium text-muted-foreground/80 hover:text-muted-foreground/60 active:text-muted-foreground/60 text-shadow-sm cursor-default bg-muted/50 border hover:border-dashed w-fit h-7 my-1">
                    {category}
                  </SidebarMenuButton>
                  <SidebarMenuSub>
                    {items.map((item) => (
                      <SidebarMenuSubItem key={item.name}>
                        <SidebarMenuSubButton asChild isActive={pathname === `/components/${item.name}`} className="overflow-visible">
                          <Link href={`/components/${item.name}`} className="w-full flex justify-between">
                            <span className="whitespace-nowrap">{item.title}</span>
                            {item.label && (
                              <span className="ml-1 rounded-full px-1.5 py-1 text-[9px] font-medium bg-brand-gradient text-background dark:text-background shrink-0 leading-none whitespace-nowrap">
                                {item.label}
                              </span>
                            )}
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </BaseSidebar>
    </SidebarProvider>
  );
}