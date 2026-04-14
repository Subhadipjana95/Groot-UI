import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@workspace/ui/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://groot-ui.vercel.app"),
  title: {
    default: "Groot UI - Premium UI Components & Blocks for Modern Web",
    template: "%s | Groot UI",
  },
  description:
    "Hand-crafted, high-performing, SEO friendly & accessible UI components and blocks designed for modern developers. Built with React, Next.js, Tailwind CSS & Radix UI.",
  keywords: [
    "ui components",
    "react components",
    "nextjs",
    "tailwind css",
    "radix ui",
    "typescript",
    "shadcn",
    "ui blocks",
    "web development",
    "design system",
  ],
  authors: [{ name: "Groot UI", url: "https://groot-ui.vercel.app" }],
  creator: "Groot UI",
  publisher: "Groot UI",

  // Open Graph
  openGraph: {
    title: "Groot UI - Premium UI Components & Blocks",
    description:
      "Hand-crafted, high-performing, SEO friendly & accessible components designed for modern developers.",
    url: "https://groot-ui.vercel.app",
    siteName: "Groot UI",
    locale: "en_US",
    type: "website",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Groot UI - Premium UI Components & Blocks",
    description:
      "Hand-crafted, high-performing, SEO friendly & accessible components designed for modern developers.",
    creator: "@groot_ui",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: "/icon.png",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",
  },

  // Verification
  verification: {
    google: "your-google-verification-code",
  },

  // Alternates
  alternates: {
    canonical: "https://groot-ui.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", geist.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
