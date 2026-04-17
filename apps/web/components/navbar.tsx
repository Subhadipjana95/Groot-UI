"use client"

import React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { SearchIcon } from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import { GitHubStars } from "@workspace/ui/components/socialStats/github-stars"
import { DiscordOnline } from "@workspace/ui/components/socialStats/discord-online"
import { NavSearchDialog } from "@workspace/ui/components/dialogs/search-dialog"

const NAV_LINKS = [
  { href: "/components", label: "Components" },
  // { href: "/blocks", label: "Blocks" },
  { href: "/templates", label: "Templates" },
  { href: "/pricing", label: "Pricing" },
  { href: "/changelog", label: "Changelog" },
]

export function Navbar() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [searchOpen, setSearchOpen] = React.useState(false)

  React.useEffect(() => { setMounted(true) }, [])

  const toggleTheme = React.useCallback(() => {
    if (!mounted) return
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }, [mounted, resolvedTheme, setTheme])

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b bg-background">
        <div className="max-w-[1440px] mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            {/* Brand Logo */}
            <Link href="/" aria-label="Groot UI home" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-gradient p-[4px]">
                <div className="flex h-full w-full items-center justify-center rounded-sm bg-background font-extrabold text-foreground text-lg" style={{ fontFamily: 'var(--font-gambarino)' }}>
                  G
                </div>
              </div>
              <span className="text-xl font-medium tracking-tight">Groot UI</span>
            </Link>

            {/* Nav Links */}
            <ul className="hidden list-none items-center gap-4 md:flex">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="rounded-sm px-2 py-2 text-[15px] font-medium transition-colors hover:bg-primary/10 hover:text-primary "
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-2">
            {/* Search Button */}
            <Button
              variant="outline"
              aria-label="Open search"
              className="relative hidden h-9 w-52 cursor-pointer justify-between border-input bg-muted/60 pl-3 pr-1 py-1 text-muted-foreground sm:flex"
              onClick={() => setSearchOpen(true)}
            >
              <span className="inline-flex items-center gap-2">
                <SearchIcon className="size-4" aria-hidden />
                Search...
              </span>
              <kbd className="pointer-events-none inline-flex h-[26px] select-none items-center gap-1 rounded-sm border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>

            {/* Mode Toggler */}
            <Button
              variant="secondary"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="h-9 w-9 cursor-pointer rounded-full bg-secondary dark:bg-muted/80 hover:border hover:border-input"
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
                aria-hidden
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

            {/* Social Stats */}
            <div className="flex gap-2 rounded-lg border border-input px-2">
              <GitHubStars repo="Subhadipjana95/Groot-UI" className="border-none" />
              <DiscordOnline guildId="1487752291602665574" inviteURL="https://discord.gg/BtXPr8aFf" className="border-none" />
            </div>

            {/* Auth & Pricing Button */}
            <div className="flex gap-2">
              <Link href="/auth">
                <Button variant="secondary" className="h-10 cursor-pointer">Login</Button>
              </Link>
              <Link href="/pricing">
                <Button className="h-10 cursor-pointer">Get All Access</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <NavSearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  )
}
