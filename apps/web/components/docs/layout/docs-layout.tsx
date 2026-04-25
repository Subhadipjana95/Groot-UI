import { ReactNode } from "react";
import { Sidebar } from "./sidebar";
import { TOC } from "./toc";
import { InnerLenisScroll } from "@/components/utilities/lenis-provider";
import { SponsorCard } from "@/components/sponsor-card";

export function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
      <div className="md:grid md:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[240px_minmax(0,1fr)_260px] gap-10 items-start">
        {/* Navigation Sidebar */}
        <InnerLenisScroll
          className="sticky top-16 hidden h-[calc(100vh-4rem)] w-full md:block overflow-y-auto scrollbar-hide border-r border-border/60 pr-4 pt-8 mask-[linear-gradient(to_bottom,black_85%,transparent)]"
        >
          <div className="w-full">
            <Sidebar />
          </div>
        </InnerLenisScroll>

        {/* Main Components Content */}
        <main className="relative mx-auto w-full max-w-3xl pt-12 pb-6 lg:py-12 md:pb-20 px-2 md:px-0 overflow-x-clip min-w-0">
          {children}
        </main>

        {/* Table of Contents & Sponsor Card */}
        <div className="sticky top-16 hidden text-sm xl:flex flex-col h-[calc(100vh-4rem)] w-[260px] shrink-0 border-l border-border/60 pl-6 pt-8 pb-6 gap-8">
          <TOC />
          <div className="w-full shrink-0">
            <SponsorCard />
          </div>
        </div>
      </div>
    </div>
  );
}
