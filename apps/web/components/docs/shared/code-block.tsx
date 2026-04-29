"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierForestDark, atelierForestLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CopyButton } from "./copy-button";
import { cn } from "@workspace/ui/lib/utils";

interface CodeBlockProps {
  code: string;
  className?: string;
  language?: string;
  expandable?: boolean;
  collapsedHeight?: number;
}

export function CodeBlock({ 
  code, 
  className, 
  language = "tsx",
  expandable = false,
  collapsedHeight = 400
}: CodeBlockProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isExpanded, setIsExpanded] = React.useState(!expandable);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const style = resolvedTheme === "dark" ? atelierForestDark : atelierForestLight;

  return (
    <div 
      className={cn(
        "group relative my-4 overflow-hidden rounded-lg border border-input/60 bg-muted/30 dark:bg-muted/50 transition-all duration-300", 
        className,
        !isExpanded && "overflow-hidden"
      )}
      style={!isExpanded ? { height: collapsedHeight } : { height: "auto" }}
    >
      <div className="absolute right-2 top-2 z-40 flex items-center gap-2">
        {expandable && isExpanded && (
          <button
            onClick={() => setIsExpanded(false)}
            className="h-7 px-2 text-xs font-medium rounded-sm bg-background/50 border border-input/60 text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
          >
            Collapse
          </button>
        )}
        <div className="rounded-sm bg-background">
          <CopyButton variant="outline" value={code} className="h-7 w-7 rounded-sm bg-background hover:bg-muted" />
        </div>
      </div>

      {mounted && (
        <div className={cn(
          "h-full overflow-x-auto scrollbar-hide py-3 transition-all",
          "mask-[linear-gradient(to_right,black_85%,transparent_100%)]",
          expandable && !isExpanded && "mask-[linear-gradient(to_bottom,black_60%,transparent_100%),linear-gradient(to_right,black_85%,transparent_100%)] mask-intersect"
        )}>
          <SyntaxHighlighter
            language={language}
            style={style}
            className="scrollbar-hide"
            customStyle={{
              margin: 0,
              padding: "0 1rem",
              background: "transparent",
              fontSize: "14px",
              lineHeight: "1.7",
            }}
            showLineNumbers={true}
            lineNumberStyle={{
              minWidth: "2rem",
              paddingRight: "1rem",
              textAlign: "right",
              color: "var(--primary)",
              opacity: 0.5,
              userSelect: "none",
              borderRight: "none",
            }}
          >
            {code.trim()}
          </SyntaxHighlighter>
        </div>
      )}

      {expandable && !isExpanded && (
        <div className="absolute inset-x-0 bottom-0 flex h-24 items-end justify-center p-6 pointer-events-none">
          <button
            onClick={() => setIsExpanded(true)}
            className="pointer-events-auto h-7 px-2 text-xs font-medium rounded-sm bg-background/50 border border-input/60 text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
          >
            Expand
          </button>
        </div>
      )}
    </div>
  );
}
