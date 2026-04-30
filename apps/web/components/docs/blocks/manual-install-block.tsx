"use client";

import * as React from "react";
import { CodeBlock } from "@/components/docs/shared/code-block";
import { InstallBlock } from "./install-block";

interface ManualInstallBlockProps {
  componentName: string;
  componentCode: string;
  npmDependencies?: string[];
  registryDependencies?: string[];
}

export function ManualInstallBlock({
  componentName,
  componentCode,
  npmDependencies,
  registryDependencies,
}: ManualInstallBlockProps) {
  const hasNpmDeps = npmDependencies && npmDependencies.length > 0;
  const hasRegistryDeps = registryDependencies && registryDependencies.length > 0;

  // Build steps dynamically so numbering stays correct
  const steps: React.ReactNode[] = [];

  if (hasNpmDeps) {
    steps.push(
      <div className="flex flex-col gap-3 w-full min-w-0">
        <p className="text-sm font-medium text-foreground leading-7">
          Install the following dependencies:
        </p>
        <InstallBlock
          command={npmDependencies!.join(" ")}
          type="install"
          className="mt-0"
        />
      </div>
    );
  }

  if (hasRegistryDeps) {
    steps.push(
      <div className="flex flex-col gap-1.5 w-full min-w-0">
        <p className="text-sm font-medium text-foreground leading-7">
          Add the{" "}
          {registryDependencies!.map((dep, i) => (
            <React.Fragment key={dep}>
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono font-semibold">
                {dep}
              </code>
              {i < registryDependencies!.length - 1 && ", "}
            </React.Fragment>
          ))}{" "}
          {registryDependencies!.length === 1 ? "component" : "components"} to your project.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono font-semibold">
            {componentName}
          </code>{" "}
          component uses the{" "}
          {registryDependencies!.map((dep, i) => (
            <React.Fragment key={dep}>
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono font-semibold">
                {dep}
              </code>
              {i < registryDependencies!.length - 1 && " and "}
            </React.Fragment>
          ))}{" "}
          {registryDependencies!.length === 1 ? "component" : "components"}. Make sure you have{" "}
          {registryDependencies!.length === 1 ? "it" : "them"} installed in your project.
        </p>
      </div>
    );
  }

  // Copy source code step (always shown)
  steps.push(
    <div className="flex flex-col gap-3 w-full min-w-0">
      <p className="text-sm font-medium text-foreground leading-7">
        Copy and paste the following code into your project.
      </p>
      <CodeBlock
        code={componentCode}
        className="my-0 w-full"
        expandable={true}
        collapsedHeight={300}
        fileName={`components/${componentName}.tsx`}
      />
    </div>
  );

  // Update imports step (always shown)
  steps.push(
    <div className="flex flex-col w-full min-w-0">
      <p className="text-sm font-medium text-foreground leading-7">
        Update the import paths to match your project setup.
      </p>
    </div>
  );

  return (
    <div className="mt-6 flex flex-col gap-8">
      {steps.map((content, i) => {
        const isLast = i === steps.length - 1;
        return (
          <div key={i} className="flex gap-4 relative">
            <div className="relative flex flex-col items-center flex-none">
              <div className="h-7 w-7 rounded-full bg-muted border border-border flex items-center justify-center font-bold text-xs text-muted-foreground z-10 shrink-0">
                {i + 1}
              </div>
              {!isLast && (
                <div className="absolute top-7 bottom-[-32px] w-px bg-border" />
              )}
            </div>
            {content}
          </div>
        );
      })}
    </div>
  );
}

