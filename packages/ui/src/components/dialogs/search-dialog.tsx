"use client"

import React from "react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"
import { Dialog, DialogContent, DialogTitle } from "@workspace/ui/components/dialog"
import {
  SearchIcon,
  Moon,
  Home,
  Copy,
  Share2,
  HelpCircle,
  FileText,
  Globe,
  GitBranch,
  Info,
  type LucideIcon,
} from "lucide-react"
import Link from "next/link"

type SearchItem = {
  id: string
  title: string
  description: string
  category: string
  destination?: string
  icon?: LucideIcon
}

const SEARCH_DATA: SearchItem[] = [
  { id: "nav-home", title: "Go to Home", description: "Navigate to the home page", category: "Navigation", destination: "/", icon: Home },
  { id: "nav-components", title: "Go to Components", description: "Browse all components", category: "Navigation", destination: "/component", icon: Info },
  { id: "nav-pricing", title: "Go to Pricing", description: "Check out our pricing", category: "Navigation", destination: "/pricing", icon: Globe },
  { id: "theme-toggle", title: "Toggle Theme", description: "Switch between light and dark themes", category: "System", icon: Moon },
  { id: "copy-url", title: "Copy Current URL", description: "Copy the current page URL to clipboard", category: "Utility", icon: Copy },
  { id: "share-page", title: "Share This Page", description: "Share the current page with others", category: "Utility", icon: Share2 },
  { id: "help-center", title: "Help Center", description: "Visit the help center for assistance", category: "Tools", icon: HelpCircle },
  { id: "keyboard-shortcuts", title: "Keyboard Shortcuts", description: "View all keyboard shortcuts", category: "Tools", icon: FileText },
  { id: "social-github", title: "Open GitHub", description: "Visit our GitHub repository", category: "Social", destination: "https://github.com/Subhadipjana95/Groot-UI", icon: GitBranch },
]

interface NavSearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function NavSearchDialog({ open, onOpenChange }: NavSearchDialogProps) {
  const openRef = React.useRef(open)
  openRef.current = open

  const onOpenChangeRef = React.useRef(onOpenChange)
  onOpenChangeRef.current = onOpenChange

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        onOpenChangeRef.current(!openRef.current)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="gap-0 p-0 sm:max-w-lg border-6 border-input rounded-xl"
        showCloseButton={false}
      >
        <DialogTitle className="sr-only">Search</DialogTitle>
        <Command className="rounded-xl">
          <CommandInput placeholder="Search components, pages, settings..." />
          <CommandList className="max-h-[380px] min-h-[280px] scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none]">
            <CommandEmpty className="flex min-h-[200px] flex-col items-center justify-center">
              <SearchIcon className="mb-2 size-6 text-muted-foreground" aria-hidden />
              <p className="text-xs text-muted-foreground">No results found</p>
            </CommandEmpty>
            <CommandGroup heading="Quick Actions">
              {SEARCH_DATA.map(({ id, title, description, category, destination, icon: Icon }) => {
                const isExternal = destination?.startsWith("http")
                const content = (
                  <CommandItem
                    value={title}
                    className="flex cursor-pointer items-center gap-3 py-2"
                    onSelect={() => onOpenChange(false)}
                  >
                    {Icon && <Icon className="size-4 text-muted-foreground" aria-hidden />}
                    <div className="flex flex-col">
                      <span className="max-w-[250px] truncate text-sm font-medium">{title}</span>
                      <span className="text-xs text-muted-foreground">{description}</span>
                    </div>
                    <span className="ml-auto text-xs text-muted-foreground">{category}</span>
                  </CommandItem>
                )
                return destination ? (
                  <Link
                    key={id}
                    href={destination}
                    {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    {content}
                  </Link>
                ) : (
                  <React.Fragment key={id}>{content}</React.Fragment>
                )
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  )
}
