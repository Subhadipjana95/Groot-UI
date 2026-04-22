import Link from "next/link"
import { DATA } from "@/lib/data/Data"

export default function AboutPage() {
    return (
        <div className="relative w-full overflow-hidden">
            {/* Side hatching — matches all other pages */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 border-r border-border/40 dark:border-border/60 bg-[repeating-linear-gradient(-45deg,rgb(0_0_0/0.08)_0,rgb(0_0_0/0.08)_1px,transparent_1px,transparent_8px)] dark:bg-[repeating-linear-gradient(-45deg,rgb(255_255_255/0.04)_0,rgb(255_255_255/0.04)_1px,transparent_1px,transparent_8px)]"
                style={{ width: "max(0px, calc((100% - 80rem) / 2))" }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 right-0 border-l border-border/40 dark:border-border/60 bg-[repeating-linear-gradient(-45deg,rgb(0_0_0/0.08)_0,rgb(0_0_0/0.08)_1px,transparent_1px,transparent_8px)] dark:bg-[repeating-linear-gradient(-45deg,rgb(255_255_255/0.04)_0,rgb(255_255_255/0.04)_1px,transparent_1px,transparent_8px)]"
                style={{ width: "max(0px, calc((100% - 80rem) / 2))" }}
            />

            <main className="max-w-4xl mx-auto px-6 md:px-12 relative pt-20 pb-20 md:pt-28 lg:pt-36">

                {/* Hero */}
                <div className="mb-14 space-y-4 max-w-2xl">
                    <p className="text-xs font-medium tracking-wide text-muted-foreground">
                        About the project
                    </p>
                    <h1 className="text-4xl md:text-5xl font-medium tracking-tight">
                        Built for developers,{" "}
                        <span className="bg-brand-gradient bg-clip-text text-transparent">by a developer</span>
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Groot UI is an open-source component library and design system built for modern web developers.
                        Every component is handcrafted with Next.js, Tailwind CSS, and Framer Motion — ready to copy,
                        paste, and ship.
                    </p>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
                    {DATA.stats.map(({ label, value }) => (
                        <div
                            key={label}
                            className="rounded-xl border border-border/50 bg-card p-5 space-y-1"
                        >
                            <p className="text-3xl font-semibold tracking-tight bg-brand-gradient bg-clip-text text-transparent">
                                {value}
                            </p>
                            <p className="text-xs text-muted-foreground leading-tight">{label}</p>
                        </div>
                    ))}
                </div>

                {/* Mission */}
                <div className="rounded-xl border border-border/50 bg-card p-7 mb-10 space-y-3">
                    <h2 className="text-base font-semibold text-foreground tracking-tight">Mission</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        The goal is simple: eliminate repetitive UI work. Instead of rebuilding the same hero,
                        pricing table, or testimonial section from scratch on every project, Groot UI gives you
                        battle-tested, accessible, production-ready starting points you actually own — no proprietary
                        runtime, no lock-in, just code.
                    </p>
                </div>

                {/* Find us */}
                <div className="space-y-3">
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Find us</p>
                    <div className="flex flex-wrap gap-3">
                        {DATA.socials.map(({ name, href, icon: Icon }) => (
                            <Link
                                key={name}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card
                                           px-5 py-2 text-sm font-medium text-foreground
                                           hover:border-border transition-all duration-200 hover:shadow-sm"
                            >
                                <Icon className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                                {name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Footer note */}
                <p className="mt-14 text-xs text-muted-foreground/50 text-center">
                    Groot Labs © {new Date().getFullYear()} · Made with care ·{" "}
                    <Link
                        href="https://a063.xyz/support"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-transparent hover:bg-clip-text hover:bg-brand-gradient transition-colors duration-200"
                    >
                        Support the project →
                    </Link>
                </p>
            </main>
        </div>
    )
}