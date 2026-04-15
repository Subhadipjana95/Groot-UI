"use client"

import React from "react"
import Link from "next/link"
import { Mail, ChevronLeft } from "lucide-react"

// Social Icon Components
const Twitter = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
)

const Github = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
)

const MessageCircle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} xmlns="http://www.w3.org/2000/svg"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" /></svg>
)

const Youtube = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.017 3.017 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
)

interface FooterLink {
  name: string
  href: string
  tag?: string
}

interface SocialLink extends FooterLink {
  icon: React.ComponentType<{ className?: string }>
}

const footerLinks: {
  product: FooterLink[]
  resources: FooterLink[]
  company: FooterLink[]
  socials: SocialLink[]
} = {
  product: [
    { name: "Components", href: "/component", tag: "New" },
    { name: "Blocks", href: "/block" },
    { name: "Templates", href: "/template" },
    { name: "Pricing", href: "/pricing", tag: "20% Off" },
  ],
  resources: [
    { name: "Docs", href: "/docs" },
    { name: "Blog", href: "https://www.a063.xyz/blog" },
    { name: "Changelog", href: "/changelog" },
    { name: "Support", href: "/support" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
  socials: [
    { name: "Twitter", href: "https://x.com/Subhadip53874", icon: Twitter },
    { name: "GitHub", href: "https://github.com/Subhadipjana95/Groot-UI", icon: Github },
    { name: "Discord", href: "https://discord.com/channels/1487752291602665574", icon: MessageCircle },
    { name: "YouTube", href: "#", icon: Youtube },
  ],
}

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-border/60 bg-background pt-18">
      {/* --- Upper Portion --- */}
      <div className="max-w-7xl mx-auto px-12 grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-12">
        {/* Logo and Description */}
        <div className="col-span-3 flex flex-col space-y-3 px-2">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-gradient p-1">
              <div className="flex h-full w-full items-center justify-center rounded-sm bg-background font-semibold text-foreground text-lg" style={{ fontFamily: 'var(--font-gambarino)' }}>
                G
              </div>
            </div>
            <span className="text-2xl font-medium tracking-tight">Groot UI</span>
          </div>
          <p className="max-w-md text-muted-foreground">
            Hand-crafted, high-performing, SEO friendly & accessible components designed for modern developers.
          </p>
          <div className="flex flex-col space-y-2 pt-2 text-sm">
            <p className="text-muted-foreground group">A product by <span className="text-foreground font-medium underline underline-offset-4 decoration-border/50 group-hover:decoration-foreground">Groot Labs</span></p>
            <Link href="https://x.com/Subhadip53874" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              Designed & Built by <span className="bg-brand-gradient bg-clip-text text-transparent font-medium">@Subhadip</span>
            </Link>
            <p>© {new Date().getFullYear()} Groot UI Inc.</p>
          </div>
        </div>

        {/* Column 1 */}
        <div className="flex flex-col items-end space-y-4">
          <h4 className="font-semibold text-foreground tracking-tight">Product</h4>
          <ul className="flex flex-col items-end space-y-3 text-sm text-muted-foreground transition-colors">
            {footerLinks.product.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="group inline-flex items-center gap-2 hover:text-foreground transition-all duration-300">
                  <ChevronLeft className="h-3 w-3 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  <div className="flex items-center gap-2">
                    {link.tag && (
                      <span className="rounded-full px-1.5 py-0.5 text-[9px] font-medium bg-brand-gradient text-background">
                        {link.tag}
                      </span>
                    )}
                    <span className="text-[15px]">{link.name}</span>
                  </div>

                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col items-end space-y-4">
          <h4 className="font-semibold text-foreground tracking-tight">Resources</h4>
          <ul className="flex flex-col items-end space-y-3 text-sm text-muted-foreground transition-colors">
            {footerLinks.resources.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="group inline-flex items-center gap-2 hover:text-foreground transition-all duration-300">
                  <ChevronLeft className="h-3 w-3 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  <div className="flex items-center gap-2">
                    {link.tag && (
                      <span className="rounded-full px-1.5 py-0.5 text-[9px] font-medium bg-brand-gradient text-background">
                        {link.tag}
                      </span>
                    )}
                    <span className="text-[15px]">{link.name}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col items-end space-y-4">
          <h4 className="font-semibold text-foreground tracking-tight">Company</h4>
          <ul className="flex flex-col items-end space-y-3 text-sm text-muted-foreground transition-colors">
            {footerLinks.company.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="group inline-flex items-center gap-2 hover:text-foreground transition-all duration-300">
                  <ChevronLeft className="h-3 w-3 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  <div className="flex items-center gap-2">
                    {link.tag && (
                      <span className="rounded-full px-1.5 py-0.5 text-[9px] font-medium bg-brand-gradient text-background">
                        {link.tag}
                      </span>
                    )}
                    <span className="text-[15px]">{link.name}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col items-end space-y-4">
          <h4 className="font-semibold text-foreground tracking-tight">Socials</h4>
          <ul className="flex flex-col items-end space-y-3 text-sm text-muted-foreground transition-colors">
            {footerLinks.socials.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="group inline-flex items-center gap-2 hover:text-foreground transition-all duration-300">
                  <ChevronLeft className="h-3 w-3 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  <div className="flex items-center gap-2">
                    <link.icon className="h-4 w-4 group-hover:text-foreground transition-colors opacity-60" />
                    <span className="text-[15px]">{link.name}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Full-width divider line */}
      <div className="w-full border-t border-border/60" />


      {/* --- Lower Portion --- */}
      <div className="relative w-full">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 border-r border-border/40 dark:border-border/60 bg-[repeating-linear-gradient(-45deg,rgb(0_0_0/0.08)_0,rgb(0_0_0/0.08)_1px,transparent_1px,transparent_8px)] dark:bg-[repeating-linear-gradient(-45deg,rgb(255_255_255/0.04)_0,rgb(255_255_255/0.04)_1px,transparent_1px,transparent_8px)]"
          style={{ width: "max(0px, calc((100% - 80rem) / 2))" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 border-l border-border/40 dark:border-border/60 bg-[repeating-linear-gradient(-45deg,rgb(0_0_0/0.08)_0,rgb(0_0_0/0.08)_1px,transparent_1px,transparent_8px)] dark:bg-[repeating-linear-gradient(-45deg,rgb(255_255_255/0.04)_0,rgb(255_255_255/0.04)_1px,transparent_1px,transparent_8px)] "
          style={{ width: "max(0px, calc((100% - 80rem) / 2))" }}
        />
        <div className="relative pb-44">
          {/* Massive dipped text */}
          <div className="absolute -bottom-16 left-0 right-0 pointer-events-none select-none overflow-hidden mask-[linear-gradient(to_top,transparent_0%,black_60%)]">
            <h2 className="text-[12vw] md:text-[16vw] font-bold text-center leading-none text-foreground/10 dark:text-foreground/20 tracking-tighter whitespace-nowrap translate-y-[15%]">
              GROOT UI
            </h2>
          </div>
        </div>
      </div>
    </footer>
  )
}

