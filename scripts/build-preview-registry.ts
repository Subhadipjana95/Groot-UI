#!/usr/bin/env tsx
/**
 * scripts/build-preview-registry.ts
 *
 * Scans apps/web/registry/previews/ for *.preview.tsx files,
 * cross-references the disableSSR flag from each component's config,
 * and writes a fully-typed auto-generated preview-registry.ts using
 * next/dynamic (the correct Next.js pattern, better than React.lazy).
 *
 * Run: npm run registry:previews
 */

import { readdirSync, writeFileSync, existsSync } from "fs";
import { join, resolve } from "path";
import { pathToFileURL } from "url";

const PREVIEWS_DIR    = resolve("apps/web/registry/previews");
const REGISTRY_DIR    = resolve("packages/ui/registry/radix-nova");
const OUTPUT_FILE     = resolve("apps/web/registry/preview-registry.ts");

async function buildPreviewRegistry() {
  console.log("🖼️   Building preview registry...\n");

  // Ensure previews dir exists
  if (!existsSync(PREVIEWS_DIR)) {
    console.error(`  ❌  Previews directory not found: ${PREVIEWS_DIR}`);
    process.exit(1);
  }

  const previewFiles = readdirSync(PREVIEWS_DIR)
    .filter((f) => f.endsWith(".preview.tsx"))
    .sort();

  // Build a map of { componentName -> disableSSR } from config files
  const ssrFlags: Record<string, boolean> = {};
  const configFolders = readdirSync(REGISTRY_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  for (const folder of configFolders) {
    const configPath = join(REGISTRY_DIR, folder, `${folder}.config.ts`);
    if (!existsSync(configPath)) continue;
    try {
      const mod = await import(pathToFileURL(configPath).href);
      if (mod.config?.name && mod.config?.preview) {
        // disableSSR defaults to true (safe for client components)
        ssrFlags[mod.config.name] = mod.config.preview.disableSSR ?? true;
      }
    } catch {
      // ignore — will fall back to default disableSSR: true
    }
  }

  const entries = previewFiles.map((file) => {
    const name = file.replace(".preview.tsx", "");
    const disableSSR = ssrFlags[name] ?? true;

    const dynamicOptions = disableSSR
      ? `{ ssr: false, loading: () => null }`
      : `{ loading: () => null }`;

    return (
      `  "${name}": dynamic(\n` +
      `    () => import("./previews/${name}.preview"),\n` +
      `    ${dynamicOptions}\n` +
      `  )`
    );
  });

  const output = `// ─────────────────────────────────────────────────────────────────
// AUTO-GENERATED — do not edit manually.
// Run: npm run registry:previews
// Last generated: ${new Date().toISOString()}
// ─────────────────────────────────────────────────────────────────

import dynamic from "next/dynamic";

/**
 * previewRegistry maps each component slug to a dynamically-loaded
 * preview component. ssr:false is set per-component based on the
 * disableSSR flag in each component's *.config.ts.
 *
 * - Client components (animations, canvas, motion): ssr: false
 * - Server components (github-stars, discord-online): ssr: true (default)
 */
export const previewRegistry = {
${entries.join(",\n")}
} as const;

export type PreviewName = keyof typeof previewRegistry;
`;

  writeFileSync(OUTPUT_FILE, output, "utf-8");

  console.log(`  ✅  ${previewFiles.length} previews registered`);
  previewFiles.forEach((f) => {
    const name = f.replace(".preview.tsx", "");
    const ssr  = ssrFlags[name] ?? true;
    console.log(`      ${name}  (ssr: ${!ssr})`);
  });
  console.log(`\n🎉  Preview registry built → ${OUTPUT_FILE}\n`);
}

buildPreviewRegistry().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
