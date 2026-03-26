"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, CodeXml } from "lucide-react"
import { Button } from "@workspace/ui/components/button"

export function Navbar() {
  const { setTheme, theme } = useTheme()

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground">
            G
          </div>
          <span className="text-xl font-bold tracking-tight">Groot UI</span>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary">
            Features
          </Link>
          <Link href="#components" className="text-sm font-medium transition-colors hover:text-primary">
            Components
          </Link>
          <Link href="#pricing" className="text-sm font-medium transition-colors hover:text-primary">
            Pricing
          </Link>
          <Link href="#docs" className="text-sm font-medium transition-colors hover:text-primary">
            Docs
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <CodeXml className="h-[1.2rem] w-[1.2rem]" />
          </Button>
          <Button className="hidden sm:flex">Get Started</Button>
        </div>
      </div>
    </nav>
  )
}
