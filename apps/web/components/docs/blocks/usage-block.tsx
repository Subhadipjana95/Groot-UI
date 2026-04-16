"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierForestDark, atelierForestLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CopyButton } from "@/components/docs/shared/copy-button";
import { cn } from "@workspace/ui/lib/utils";

interface CodeBlockProps {
  code: string;
  className?: string;
  language?: string;
}

function CodeBlock({ code, className, language = "tsx" }: CodeBlockProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const style = resolvedTheme === "dark" ? atelierForestDark : atelierForestLight;

  return (
    <div className={cn("group relative my-4 overflow-hidden rounded-lg border border-input/60 bg-muted/50 px-1 py-3", className)}>
      <div className="absolute right-1 top-1 z-20">
        <CopyButton variant="outline" value={code} className="h-7 w-7 rounded-sm" />
      </div>
      {mounted && (
        <SyntaxHighlighter
          language={language}
          style={style}
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
      )}
    </div>
  );
}

export function UsageBlock({ importCode, usageCode }: { importCode: string; usageCode: string }) {
  return (
    <div className="space-y-4">
      <CodeBlock code={importCode} />
      <CodeBlock code={usageCode} />
    </div>
  );
}
