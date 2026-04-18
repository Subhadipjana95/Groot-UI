"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { SearchIcon, Menu } from "lucide-react"
import { cn } from "@workspace/ui/lib/utils"
import { Button } from "@workspace/ui/components/button"
import { GitHubStars } from "@workspace/ui/components/socialStats/github-stars"
import { DiscordOnline } from "@workspace/ui/components/socialStats/discord-online"
import { NavSearchDialog } from "@workspace/ui/components/dialogs/search-dialog"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@workspace/ui/components/drawer"

const NAV_LINKS = [
  { href: "/components", label: "Components" },
  { href: "/templates", label: "Templates" },
  { href: "/pricing", label: "Pricing" },
  { href: "/changelog", label: "Changelog" },
]

const GITHUB_REPO_LINK = "Subhadipjana95/Groot-UI"
const DISCORD_SERVER_ID = "1487752291602665574"
const DISCORD_INVITE_LINK = "https://discord.gg/BtXPr8aFf"

export function Navbar() {
  const pathname = usePathname()
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [searchOpen, setSearchOpen] = React.useState(false)

  React.useEffect(() => { setMounted(true) }, [])

  const toggleTheme = React.useCallback(() => {
    if (!mounted) return
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }, [mounted, resolvedTheme, setTheme])

  const Logo = (
    <Link href="/" aria-label="Groot UI home" className="flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-gradient p-[4px]">
        <div className="flex h-full w-full items-center justify-center rounded-sm bg-background font-extrabold text-foreground text-lg" style={{ fontFamily: 'var(--font-gambarino)' }}>
          G
        </div>
      </div>
      <span className="text-xl font-medium tracking-tight">Groot UI</span>
    </Link>
  )

  const ModeToggler = (
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
  )

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b bg-background">
        <div className="max-w-full lg:max-w-[1440px] mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            {Logo}

            {/* Nav Links - Desktop */}
            <ul className="hidden list-none items-center gap-4 md:flex">
              {NAV_LINKS.map(({ href, label }) => {
                const isActive = pathname === href || (href !== "/" && pathname.startsWith(href))
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={cn(
                        "rounded-md px-2 py-2 text-[15px] font-medium transition-colors",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-primary/10 hover:text-primary text-foreground"
                      )}
                    >
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="flex items-center gap-2">
            {/* Search Button - Desktop */}
            <Button
              variant="outline"
              aria-label="Open search"
              className="relative hidden h-9 w-52 cursor-pointer justify-between border-input bg-muted/60 pl-3 pr-1 py-1 text-muted-foreground md:flex lg:flex"
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

            {/* Mode Toggler - Shared */}
            {ModeToggler}

            {/* Desktop Only Right Side */}
            <div className="hidden items-center gap-2 md:flex">
              {/* Social Stats */}
              <div className="flex gap-2 rounded-lg border border-input px-2">
                <GitHubStars repo={GITHUB_REPO_LINK} className="border-none hover:bg-transparent" />
                <DiscordOnline guildId={DISCORD_SERVER_ID} inviteURL={DISCORD_INVITE_LINK} className="border-none hover:bg-transparent" />
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

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden">
              <Drawer direction="right">
                <DrawerTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-9 w-9 bg-secondary dark:bg-muted/80 cursor-pointer">
                    <Menu className="size-6" />
                  </Button>
                </DrawerTrigger>
                <DrawerContent
                  className="h-full w-[280px] sm:w-[350px]"
                  onCloseAutoFocus={(e) => e.preventDefault()}
                >
                  <div className="flex flex-col h-full bg-background">
                    <DrawerHeader className="w-full px-6 py-4 mb-4 text-left border-b">
                      <DrawerTitle>
                        {Logo}
                      </DrawerTitle>
                    </DrawerHeader>

                    <nav className="flex flex-col border rounded-lg mt-4 mx-6 overflow-hidden">
                      {NAV_LINKS.map(({ href, label }) => {
                        const isActive = pathname === href || (href !== "/" && pathname.startsWith(href))
                        return (
                          <DrawerClose key={href} asChild>
                            <Link
                              href={href}
                              className={cn(
                                "flex items-center px-3 py-4 text-xl font-medium border-b last:border-none transition-colors",
                                isActive
                                  ? "bg-muted text-primary"
                                  : "hover:bg-muted active:bg-muted/80 text-foreground"
                              )}
                            >
                              {label}
                            </Link>
                          </DrawerClose>
                        )
                      })}
                    </nav>

                    <div className="mt-auto space-y-2 mx-6 pt-8 pb-10">
                      <div className="w-full flex justify-end gap-2">
                        <GitHubStars repo="Subhadipjana95/Groot-UI" className="px-2 h-9" />
                        <DiscordOnline guildId="1487752291602665574" inviteURL="https://discord.gg/BtXPr8aFf" className="px-2 h-9" />
                      </div>

                      <div className="flex flex-col gap-3">
                        <DrawerClose asChild>
                          <Link href="/auth" className="w-full">
                            <Button variant="secondary" className="w-full h-11 text-base">Login</Button>
                          </Link>
                        </DrawerClose>
                        <DrawerClose asChild>
                          <Link href="/pricing" className="w-full">
                            <Button className="w-full h-11 text-base">Get All Access</Button>
                          </Link>
                        </DrawerClose>
                      </div>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </nav>

      <NavSearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  )
}
