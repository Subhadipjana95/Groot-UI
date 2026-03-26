"use client"

import Link from "next/link"
import { CodeXml, Send, Briefcase, Square } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background/80 py-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-6">
          <div className="col-span-2 space-y-6 lg:col-span-2">
             <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground shadow-lg">
                    G
                </div>
                <span className="text-xl font-bold tracking-tight">Groot UI</span>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
                Helping developers build high-performance, accessible, and stunning user interfaces with ease. The modern toolkit for modern developers.
            </p>
            <div className="flex items-center gap-4 text-muted-foreground transition-colors">
                <Link href="#" className="hover:text-primary transition-colors"><CodeXml className="h-5 w-5" /></Link>
                <Link href="#" className="hover:text-primary transition-colors"><Send className="h-5 w-5" /></Link>
                <Link href="#" className="hover:text-primary transition-colors"><Briefcase className="h-5 w-5" /></Link>
                <Link href="#" className="hover:text-primary transition-colors"><Square className="h-5 w-5" /></Link>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold">Product</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground transition-colors">
              <Link href="#" className="hover:text-primary transition-colors">Components</Link>
              <Link href="#" className="hover:text-primary transition-colors">Templates</Link>
              <Link href="#" className="hover:text-primary transition-colors">Pricing</Link>
              <Link href="#" className="hover:text-primary transition-colors">Changelog</Link>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold">Resources</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground transition-colors">
              <Link href="#" className="hover:text-primary transition-colors">Documentation</Link>
              <Link href="#" className="hover:text-primary transition-colors">Community</Link>
              <Link href="#" className="hover:text-primary transition-colors">Support</Link>
              <Link href="#" className="hover:text-primary transition-colors">Api</Link>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold">Legal</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground transition-colors">
              <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-primary transition-colors">Cookies</Link>
            </div>
          </div>

          <div className="space-y-6 font-bold lg:col-span-1">
             <h4 className="font-bold">Newsletter</h4>
             <p className="text-sm font-normal text-muted-foreground">Join our community and get latest updates.</p>
             <div className="flex flex-col gap-2">
                <input
                    type="email"
                    placeholder="you@email.com"
                    className="h-10 w-full rounded-lg border-2 bg-transparent px-3 text-sm outline-hidden focus:border-primary transition-colors"
                />
                <button className="h-10 w-full rounded-lg bg-primary text-sm font-bold text-primary-foreground shadow-lg hover:opacity-90 transition-opacity">
                    Join
                </button>
             </div>
          </div>
        </div>

        <div className="mt-20 border-t pt-10 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Groot UI Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
