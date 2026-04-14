"use client"

import React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@workspace/ui/components/button"
import { GitHubStars } from "@workspace/ui/components/github-stars"
import { DiscordOnline } from "@workspace/ui/components/discord-online"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@workspace/ui/components/dialog"
import {
  SearchIcon, Moon, Home, Copy, Share2,
  HelpCircle, FileText, Globe, GitBranch, Info,
} from "lucide-react"
import { type LucideIcon } from "lucide-react"

// ─── Navigation Links ─────────────────────────────────────────────
const NAV_LINKS = [
  { href: "/components", label: "Components" },
  { href: "#pricing", label: "Pricing" },
  { href: "/templates", label: "Templates" },
  { href: "/changelog", label: "Changelog" },
]

// ─── Search Data ──────────────────────────────────────────────────
type SearchItem = {
  id: string
  title: string
  description: string
  category: string
  icon?: LucideIcon
}

const searchData: SearchItem[] = [
  { id: "nav-home", title: "Go to Home", description: "Navigate to the home page", category: "Navigation", icon: Home },
  { id: "nav-components", title: "Go to Components", description: "Browse all components", category: "Navigation", icon: Info },
  { id: "nav-pricing", title: "Go to Pricing", description: "Check out our pricing", category: "Navigation", icon: Globe },
  { id: "theme-toggle", title: "Toggle Theme", description: "Switch between light and dark themes", category: "System", icon: Moon },
  { id: "copy-url", title: "Copy Current URL", description: "Copy the current page URL to clipboard", category: "Utility", icon: Copy },
  { id: "share-page", title: "Share This Page", description: "Share the current page with others", category: "Utility", icon: Share2 },
  { id: "help-center", title: "Help Center", description: "Visit the help center for assistance", category: "Tools", icon: HelpCircle },
  { id: "keyboard-shortcuts", title: "Keyboard Shortcuts", description: "View all keyboard shortcuts", category: "Tools", icon: FileText },
  { id: "social-github", title: "Open GitHub", description: "Visit our GitHub repository", category: "Social", icon: GitBranch },
]

// ─── Navbar Component ─────────────────────────────────────────────
export function Navbar() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [searchOpen, setSearchOpen] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Global ⌘K / Ctrl+K keyboard shortcut
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setSearchOpen((prev) => !prev)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const toggleTheme = React.useCallback(() => {
    if (!mounted) return
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }, [mounted, resolvedTheme, setTheme])

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b bg-background">
        <div className="max-w-8xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center gap-1 cursor-pointer">
                <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-primary font-bold text-primary-foreground">
                  G
                </div>
                <span className="text-xl font-semibold tracking-tighter">Groot UI</span>
              </div>
            </Link>

            {/* Navigation links */}
            <div className="hidden items-center gap-4 md:flex">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[15px] font-medium transition-colors hover:text-primary hover:bg-primary/10 rounded-sm px-2 py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Search trigger button — just sets state, no Radix trigger nesting */}
            <Button
              variant="outline"
              className="relative hidden sm:flex h-9 w-60 justify-between px-3 py-2 text-muted-foreground mr-2 border-input bg-background hover:bg-accent cursor-pointer"
              onClick={() => setSearchOpen(true)}
            >
              <span className="inline-flex items-center gap-2">
                <SearchIcon className="size-4" />
                Search...
              </span>
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>

            {/* Theme toggle — original SVG icon preserved */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full cursor-pointer"
              aria-label="Toggle theme"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4.5"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M12 3l0 18" />
                <path d="M12 9l4.65 -4.65" />
                <path d="M12 14.3l7.37 -7.37" />
                <path d="M12 19.6l8.85 -8.85" />
              </svg>
              <span className="sr-only">Toggle theme</span>
            </Button>

            <div className="flex gap-2 border-l border-input pl-2">
              <GitHubStars repo="Subhadipjana95/Groot-UI" />
              <DiscordOnline guildId="1487752291602665574" inviteURL="https://discord.gg/BtXPr8aFf" />
            </div>
            <Link href="/pricing">
              <Button className="cursor-pointer h-9">
                Get All Access
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* ─── Search Dialog (controlled state, rendered outside nav) ─── */}
      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="p-0 gap-0 sm:max-w-lg border-6 border-input" showCloseButton={false}>
          <DialogTitle className="sr-only">Search</DialogTitle>
          <Command className="rounded-lg">
            <CommandInput placeholder="Search components, pages, settings..." />
            <CommandList className="max-h-[380px] min-h-[280px] scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none]">
              <CommandEmpty className="flex min-h-[200px] flex-col items-center justify-center">
                <SearchIcon className="text-muted-foreground mb-2 size-6" />
                <p className="text-muted-foreground mb-1 text-xs">
                  No results found
                </p>
              </CommandEmpty>
              <CommandGroup heading="Quick Actions">
                {searchData.map((item) => (
                  <CommandItem
                    key={item.id}
                    className="flex cursor-pointer items-center gap-3 py-2"
                    value={item.title}
                    onSelect={() => setSearchOpen(false)}
                  >
                    {item.icon && <item.icon className="size-4 text-muted-foreground" />}
                    <div className="flex flex-col">
                      <p className="max-w-[250px] truncate text-sm font-medium">
                        {item.title}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {item.description}
                      </p>
                    </div>
                    <p className="text-muted-foreground ml-auto text-xs">
                      {item.category}
                    </p>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  )
}
