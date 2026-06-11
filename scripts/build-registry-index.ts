#!/usr/bin/env tsx
/**
 * scripts/build-registry-index.ts
 *
 * Scans packages/ui/registry/radix-nova/ for *.config.ts files,
 * imports each config, and writes a fully-typed auto-generated index to
 * apps/web/lib/registry/index.ts.
 *
 * Run: npm run registry:index
 */

import { readdirSync, writeFileSync, existsSync, readFileSync } from "fs";
import { join, resolve } from "path";
import { pathToFileURL } from "url";

const REGISTRY_DIR = resolve("packages/ui/registry/radix-nova");
const OUTPUT_FILE = resolve("apps/web/lib/registry/index.ts");

async function buildIndex() {
  console.log("📦  Building registry index...\n");

  const folders = readdirSync(REGISTRY_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();

  const configs: any[] = [];

  for (const folder of folders) {
    const configPath = join(REGISTRY_DIR, folder, `${folder}.config.ts`);

    if (!existsSync(configPath)) {
      console.warn(`  ⚠️   No config found for: ${folder} — skipping`);
      continue;
    }

    try {
      // tsx registers the TypeScript loader, so direct import works
      const mod = await import(pathToFileURL(configPath).href);
      if (!mod.config) {
        console.warn(`  ⚠️   ${folder}.config.ts has no named export "config" — skipping`);
        continue;
      }

      const config = { ...mod.config };

      // Read all .tsx and .ts files in the folder (except the config file itself)
      const componentFiles = readdirSync(join(REGISTRY_DIR, folder))
        .filter((f) => (f.endsWith(".tsx") || f.endsWith(".ts")) && !f.endsWith(".config.ts"));

      config.files = componentFiles.map((fileName) => {
        const filePath = join(REGISTRY_DIR, folder, fileName);
        const content = readFileSync(filePath, "utf-8");
        return {
          name: fileName,
          content,
        };
      });

      configs.push(config);
      console.log(`  ✅  ${folder} (${config.files.length} files)`);
    } catch (err: any) {
      console.error(`  ❌  Failed to import ${folder}.config.ts:`, err.message);
    }
  }

  // Sort alphabetically by name
  configs.sort((a, b) => a.name.localeCompare(b.name));

  const output = `// ─────────────────────────────────────────────────────────────────
// AUTO-GENERATED — do not edit manually.
// Run: npm run registry:index
// Last generated: ${new Date().toISOString()}
// ─────────────────────────────────────────────────────────────────

import type { ComponentConfig } from "@workspace/ui/types/registry";

/** Complete registry including hidden components. */
export const fullRegistry: ComponentConfig[] = ${JSON.stringify(configs, null, 2)};

/**
 * Public registry — only components with visibility !== false.
 * All page-level consumers should use this export.
 */
export const registry: ComponentConfig[] = fullRegistry.filter(
  (c) => c.visibility !== false,
);

// ── Filtered views ──────────────────────────────────────────────
export const freeComponents    = registry.filter((c) => c.tier === "free");
export const premiumComponents = registry.filter((c) => c.tier === "premium");
export const newComponents     = registry.filter((c) => c.status === "new");

// ── Lookup helpers ───────────────────────────────────────────────
export function getComponent(name: string): ComponentConfig | undefined {
  return registry.find((c) => c.name === name);
}

export function getByCategory(category: ComponentConfig["category"]["slug"]): ComponentConfig[] {
  return registry.filter((c) => c.category.slug === category);
}

export function getByTag(tag: string): ComponentConfig[] {
  return registry.filter((c) => c.tags.includes(tag));
}
`;

  writeFileSync(OUTPUT_FILE, output, "utf-8");

  console.log(`\n🎉  Registry index built — ${configs.length} components`);
  console.log(`    Output → ${OUTPUT_FILE}\n`);
}

buildIndex().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
