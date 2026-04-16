import { ReactNode } from "react";
import { Sidebar } from "./sidebar";
import { TOC } from "./toc";

export function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-8xl mx-auto flex w-full items-start md:grid md:grid-cols-[220px_minmax(0,1fr)_200px] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)_220px] lg:gap-10 px-4 sm:px-6 lg:px-8">
      <aside
        data-lenis-prevent
        className="fixed top-16 z-30 hidden h-[calc(100vh-4rem)] w-full shrink-0 md:sticky md:block overflow-y-auto scrollbar-hide border-r border-border/60 pr-4 pt-2"
      >
        <Sidebar />
      </aside>
      <main className="relative py-6 lg:py-12 pb-20 overflow-hidden min-w-0">
        {children}
      </main>
      <aside
        data-lenis-prevent
        className="hidden text-sm xl:block sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto pt-12 scrollbar-hide border-l border-border/60"
      >
        <TOC />
      </aside>
    </div>
  );
}
