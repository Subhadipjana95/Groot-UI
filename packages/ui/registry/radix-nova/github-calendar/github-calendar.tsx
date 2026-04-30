"use client"

import { memo, useMemo, useState, useEffect, useId, useRef } from "react"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// ─── Types ────────────────────────────────────────────────────────────────────

export type ContributionLevel = 0 | 1 | 2 | 3 | 4

export type ContributionData = {
    [date: string]: {
        level: ContributionLevel
        label?: string
        count?: number
    }
}

export type ThemeColors = {
    level0: string
    level1: string
    level2: string
    level3: string
    level4: string
}

export type CellShape = "rounded" | "circle"

export type GithubCalendarProps = {

    username?: string // GitHub username 
    data?: ContributionData //Optional - Only for manual data
    startDate?: string
    endDate?: string
    startsOnSunday?: boolean //Want to start weeks on Sunday or not ? 
    cellSize?: number
    cellGap?: number
    cellShape?: CellShape //Rounded | Circle
    theme?: "github" | "blue" | "sunset" | "purple" | "gray" | ThemeColors
    showMonthLabels?: boolean // Want the month labels on top 
    showStats?: boolean
    showLegend?: boolean
    className?: string // Custom class for custom styling
}

// ─── Built-in themes ──────────────────────────────────────────────────────────

const THEMES: Record<string, ThemeColors> = {
    github: {
        level0: "#ebedf0",
        level1: "#9be9a8",
        level2: "#40c463",
        level3: "#30a14e",
        level4: "#216e39",
    },
    blue: {
        level0: "#eff6ff",
        level1: "#bfdbfe",
        level2: "#60a5fa",
        level3: "#2563eb",
        level4: "#1e3a8a",
    },
    sunset: {
        level0: "#fff7ed",
        level1: "#fed7aa",
        level2: "#fb923c",
        level3: "#ea580c",
        level4: "#7c2d12",
    },
    purple: {
        level0: "#faf5ff",
        level1: "#e9d5ff",
        level2: "#a855f7",
        level3: "#7e22ce",
        level4: "#3b0764",
    },
    gray: {
        level0: "#f3f4f6",
        level1: "#d1d5db",
        level2: "#9ca3af",
        level3: "#4b5563",
        level4: "#111827",
    },
}

const DARK_THEMES: Record<string, ThemeColors> = {
    github: {
        level0: "#161b22",
        level1: "#0e4429",
        level2: "#006d32",
        level3: "#26a641",
        level4: "#39d353",
    },
    blue: {
        level0: "#161e2b",
        level1: "#1e3a5f",
        level2: "#1d4ed8",
        level3: "#3b82f6",
        level4: "#93c5fd",
    },
    sunset: {
        level0: "#261a13",
        level1: "#7c2d12",
        level2: "#c2410c",
        level3: "#f97316",
        level4: "#fdba74",
    },
    purple: {
        level0: "#191124",
        level1: "#3b0764",
        level2: "#6b21a8",
        level3: "#a855f7",
        level4: "#d8b4fe",
    },
    gray: {
        level0: "#13181f",
        level1: "#374151",
        level2: "#6b7280",
        level3: "#9ca3af",
        level4: "#e5e7eb",
    },
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function parseDate(dateStr: string): Date {
    const parts = dateStr.split("-").map(Number)
    const y = parts[0] ?? 0
    const m = parts[1] ?? 1
    const d = parts[2] ?? 1
    return new Date(y, m - 1, d)
}

function formatDate(date: Date): string {
    const y = date.getFullYear()
    const m = String(date.getMonth() + 1).padStart(2, "0")
    const d = String(date.getDate()).padStart(2, "0")
    return `${y}-${m}-${d}`
}

function addDays(date: Date, days: number): Date {
    const d = new Date(date)
    d.setDate(d.getDate() + days)
    return d
}

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

// ─── API fetch ────────────────────────────────────────────────────────────────

type APIResponse = {
    total: Record<string, number>
    contributions: { date: string; count: number; level: number }[]
}

async function fetchContributions(username: string): Promise<ContributionData> {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`)
    if (!res.ok) {
        throw new Error(`Could not fetch contributions for "${username}" (${res.status})`)
    }
    const json: APIResponse = await res.json()

    const result: ContributionData = {}
    for (const entry of json.contributions) {
        result[entry.date] = {
            level: Math.min(4, Math.max(0, entry.level)) as ContributionLevel,
            count: entry.count,
        }
    }
    return result
}

// ─── Build calendar grid ──────────────────────────────────────────────────────

function buildGrid(
    startDate: string,
    endDate: string,
    startsOnSunday: boolean
): { weeks: (string | null)[][]; monthLabels: { label: string; weekIndex: number }[]; gridStart: string } {
    const start = parseDate(startDate)
    const end = parseDate(endDate)

    const startDay = startsOnSunday ? 0 : 1
    const startDow = start.getDay()
    const offset = ((startDow - startDay) + 7) % 7
    const gridStart = addDays(start, -offset)

    const weeks: (string | null)[][] = []
    const monthLabels: { label: string; weekIndex: number }[] = []

    let current = new Date(gridStart)
    let weekIndex = 0
    let lastMonth = -1

    while (current <= end || (weeks.length > 0 && (weeks[weeks.length - 1]?.length ?? 0) < 7)) {
        const week: (string | null)[] = []

        for (let d = 0; d < 7; d++) {
            const dateStr = formatDate(current)
            const isInRange = current >= start && current <= end
            week.push(isInRange ? dateStr : null)

            if (isInRange && current.getMonth() !== lastMonth) {
                lastMonth = current.getMonth()
                monthLabels.push({ label: MONTH_NAMES[current.getMonth()]!, weekIndex })
            }

            current = addDays(current, 1)
        }

        weeks.push(week)
        weekIndex++

        if (current > end && weeks.length > 0 && (weeks[weeks.length - 1]?.every((d) => d === null || parseDate(d) > end) ?? false)) break
    }

    return { weeks, monthLabels, gridStart: formatDate(gridStart) }
}

// ─── Tooltip state type ───────────────────────────────────────────────────────

type TooltipState = {
    visible: boolean
    date: string
    count: number | undefined
    label: string | undefined
    x: number
    y: number
}

// ─── Loading Skeleton ─────────────────────────────────────────────────────────

function CalendarSkeleton({ cellSize = 12, cellGap = 3, className }: { cellSize?: number; cellGap?: number; className?: string }) {
    const step = cellSize + cellGap
    const weeks = 53
    const days = 7
    return (
        <div className={cn("w-fit mx-auto space-y-3 animate-pulse", className)}>
            <div className="flex gap-6">
                <div className="h-4 w-32 rounded bg-muted" />
                <div className="h-4 w-20 rounded bg-muted" />
                <div className="h-4 w-24 rounded bg-muted" />
            </div>
            <div className="overflow-x-auto">
                <svg
                    width={weeks * step - cellGap}
                    height={16 + days * step - cellGap}
                    className="overflow-visible"
                >
                    {Array.from({ length: weeks }).map((_, wi) =>
                        Array.from({ length: days }).map((_, di) => (
                            <rect
                                key={`${wi}-${di}`}
                                x={wi * step}
                                y={16 + di * step}
                                width={cellSize}
                                height={cellSize}
                                rx={cellSize * 0.2}
                                className="fill-muted"
                            />
                        ))
                    )}
                </svg>
            </div>
        </div>
    )
}

// ─── Main component ───────────────────────────────────────────────────────────

export const GithubCalendar = memo(function GithubCalendar({
    username,
    data: dataProp,
    startDate,
    endDate,
    startsOnSunday = true,
    cellSize = 12,
    cellGap = 3,
    cellShape = "rounded",
    theme = "github",
    showMonthLabels = true,
    showStats = true,
    showLegend = true,
    className,
}: GithubCalendarProps) {
    const id = useId()
    // Scroll ref — used to auto-scroll to most recent months on compact viewports
    const scrollRef = useRef<HTMLDivElement>(null)
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const checkDark = () => {
            setIsDark(
                document.documentElement.classList.contains("dark") ||
                document.body.classList.contains("dark")
            )
        }

        checkDark()

        const observer = new MutationObserver(checkDark)
        const opts = { attributes: true, attributeFilter: ["class"] }
        observer.observe(document.documentElement, opts)
        observer.observe(document.body, opts)

        return () => observer.disconnect()
    }, [])

    // ── Fetch state ────────────────────────────────────────────────────────
    const [fetchedData, setFetchedData] = useState<ContributionData | null>(null)
    const [loading, setLoading] = useState(!!username)
    const [fetchError, setFetchError] = useState<string | null>(null)

    useEffect(() => {
        if (!username) return
        setFetchedData(null)
        setFetchError(null)
        setLoading(true)

        fetchContributions(username)
            .then((d) => setFetchedData(d))
            .catch((e) => setFetchError(e instanceof Error ? e.message : String(e)))
            .finally(() => setLoading(false))
    }, [username])

    // ── Choose data source ─────────────────────────────────────────────────
    const data: ContributionData = dataProp ?? fetchedData ?? {}

    // ── Resolve dates ──────────────────────────────────────────────────────
    const resolvedEnd = endDate ?? formatDate(new Date())
    const resolvedStart = useMemo(() => {
        if (startDate) return startDate
        const d = parseDate(resolvedEnd)
        d.setFullYear(d.getFullYear() - 1)
        d.setDate(d.getDate() + 1)
        return formatDate(d)
    }, [startDate, resolvedEnd])

    // ── Resolve theme colors ───────────────────────────────────────────────
    const lightColors: ThemeColors =
        typeof theme === "object" ? theme : (THEMES[theme] ?? THEMES.github!)
    const darkColors: ThemeColors =
        typeof theme === "object" ? theme : (DARK_THEMES[theme] ?? DARK_THEMES.github!)

    const activeColors = isDark ? darkColors : lightColors

    // ── Tooltip state ──────────────────────────────────────────────────────
    const [tooltip, setTooltip] = useState<TooltipState>({
        visible: false,
        date: "",
        count: undefined,
        label: undefined,
        x: 0,
        y: 0,
    })

    // ── Build grid ─────────────────────────────────────────────────────────
    const { weeks, monthLabels, gridStart } = useMemo(
        () => buildGrid(resolvedStart, resolvedEnd, startsOnSunday),
        [resolvedStart, resolvedEnd, startsOnSunday]
    )

    // ── Stats ──────────────────────────────────────────────────────────────
    const stats = useMemo(() => {
        const entries = Object.entries(data)
        const total = entries.reduce((sum, [, v]) => sum + (v.count ?? (v.level > 0 ? 1 : 0)), 0)
        const activeDays = entries.filter(([, v]) => v.level > 0).length
        const maxStreak = (() => {
            let max = 0
            let cur = 0
            const sorted = entries
                .filter(([, v]) => v.level > 0)
                .map(([d]) => d)
                .sort()
            for (let i = 0; i < sorted.length; i++) {
                if (i === 0) { cur = 1; max = 1; continue }
                const prev = parseDate(sorted[i - 1]!)
                const curr = parseDate(sorted[i]!)
                const diff = (curr.getTime() - prev.getTime()) / 86400000
                if (diff === 1) { cur++; max = Math.max(max, cur) }
                else cur = 1
            }
            return max
        })()
        return { total, activeDays, maxStreak }
    }, [data])

    // ── Dimensions ────────────────────────────────────────────────────────
    const step = cellSize + cellGap
    const monthLabelHeight = showMonthLabels ? 20 : 0
    const svgWidth = weeks.length * step - cellGap
    const svgHeight = monthLabelHeight + 7 * step - cellGap

    // Auto-scroll to the right end (most recent months) — must be before early returns
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = scrollRef.current.scrollWidth
        }
    }, [fetchedData, dataProp])

    // ── Loading / error states ───────────────────────────
    if (loading) {
        return <CalendarSkeleton cellSize={cellSize} cellGap={cellGap} className={className} />
    }

    if (fetchError) {
        return (
            <div className={cn("w-fit mx-auto flex items-center gap-2 rounded-md border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive", className)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                {fetchError}
            </div>
        )
    }

    const cellRx = cellShape === "circle" ? cellSize / 2 : cellSize * 0.2

    return (
        <div className={cn("w-full overflow-x-hidden border rounded-sm", className)}>
            <div className="w-fit mx-auto max-w-full flex flex-col gap-3 p-3">
                <div
                    ref={scrollRef}
                    className="relative overflow-x-auto"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
                >
                    <svg
                        width={svgWidth}
                        height={svgHeight}
                        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                        className="overflow-visible"
                    >
                        {/* month labels */}
                        {showMonthLabels && (() => {
                            const byWeek = new Map<number, string>()
                            monthLabels.forEach(({ label, weekIndex }) =>
                                byWeek.set(weekIndex, label)
                            )
                            return Array.from(byWeek.entries()).map(([weekIndex, label]) => (
                                <text
                                    key={`${label}-${weekIndex}`}
                                    x={weekIndex * step}
                                    y={10}
                                    fontSize={14}
                                    fill={isDark ? "#fafafa" : "#0a0a0a"}
                                    fontFamily="inherit"
                                >
                                    {label}
                                </text>
                            ))
                        })()}

                        {/* cells */}
                        {weeks.map((week, wi) =>
                            week.map((date, di) => {
                                const entry = date ? data[date] : undefined
                                const level: ContributionLevel = entry?.level ?? 0
                                const cellCenterX = wi * step + cellSize / 2
                                const cellTopY = monthLabelHeight + di * step

                                if (!date) {
                                    const cellDate = formatDate(addDays(parseDate(gridStart), wi * 7 + di))
                                    if (cellDate > resolvedEnd) return null
                                }

                                return (
                                    <rect
                                        key={`${wi}-${di}`}
                                        x={wi * step}
                                        y={cellTopY}
                                        width={cellSize}
                                        height={cellSize}
                                        rx={cellRx}
                                        fill={activeColors[`level${level}` as keyof ThemeColors]}
                                        style={{ transition: "opacity 0.1s" }}
                                        onMouseEnter={() => {
                                            if (!date) return
                                            setTooltip({
                                                visible: true,
                                                date,
                                                count: entry?.count,
                                                label: entry?.label,
                                                x: cellCenterX,
                                                y: cellTopY,
                                            })
                                        }}
                                        onMouseLeave={() =>
                                            setTooltip((t) => ({ ...t, visible: false }))
                                        }
                                    />
                                )
                            })
                        )}
                    </svg>

                    {/* tooltip */}
                    {tooltip.visible && (
                        <TooltipProvider>
                            <Tooltip open>
                                <TooltipTrigger asChild>
                                    <div
                                        className="pointer-events-none absolute z-50"
                                        style={{
                                            left: tooltip.x,
                                            top: tooltip.y,
                                            width: 1,
                                            height: 1,
                                        }}
                                    />
                                </TooltipTrigger>
                                <TooltipContent side="top">
                                    <div className="font-medium">
                                        {tooltip.label
                                            ? tooltip.label
                                            : tooltip.count !== undefined
                                                ? `${tooltip.count} contribution${tooltip.count !== 1 ? "s" : ""}`
                                        : data[tooltip.date]?.level !== undefined
                                                    ? `Level ${data[tooltip.date]?.level}`
                                                    : "No contributions"}
                                    </div>
                                    <div className="text-muted">{tooltip.date}</div>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    )}
                </div>

                <div className="flex items-start justify-between gap-x-4">

                    {/* legend (left) */}
                    {showLegend && (
                        <div className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground shrink-0 mt-0.5">
                            <span>Less</span>
                            {([0, 1, 2, 3, 4] as ContributionLevel[]).map((level) => (
                                <svg key={level} width={cellSize} height={cellSize}>
                                    <rect
                                        width={cellSize}
                                        height={cellSize}
                                        rx={cellRx}
                                        fill={activeColors[`level${level}`]}
                                    />
                                </svg>
                            ))}
                            <span>More</span>
                        </div>
                    )}

                    {/* stats line (right) */}
                    {showStats && (
                        <div className="flex flex-1 flex-wrap justify-end gap-x-1 text-sm text-muted-foreground ml-auto">
                            {username && (
                                <span className="font-semibold text-foreground">@{username}</span>
                            )}
                            <span>contributed</span>
                            <span className="font-semibold text-foreground">{stats.total.toLocaleString()}</span>
                            <span>this year on</span>
                            <a href={`https://github.com/${username}`} className="underline font-medium text-foreground">GitHub</a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
})

GithubCalendar.displayName = "GithubCalendar"