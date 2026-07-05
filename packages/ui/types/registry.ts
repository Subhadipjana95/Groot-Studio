// packages/ui/types/registry.ts
// Shared type contract for all component config files.
// This is the single source of truth for the shape of component metadata.

export type ComponentTier = "free" | "premium";
export type ComponentCategory = "components" | "blocks" | "templates" | "general" | "social" | "animations" | "marquee";
export type ComponentStatus = "stable" | "new" | "beta" | "deprecated";
export type ComponentRenderer = "client" | "server";

export interface PropDefinition {
  name: string;
  type: string;
  required?: boolean;
  default?: string;
  description: string;
}

export interface ChangelogEntry {
  version: string;
  date: string;
  note: string;
}

export interface ComponentFile {
  name: string;
  content: string;
}

export interface ComponentConfig {
  // ── Identity
  name: string;          // matches the folder name and slug (e.g. "glow-card")
  title: string;         // Human-readable title (e.g. "Glow Card")
  description: string;
  category: {
    name: string;        // Display name (e.g. "Blocks")
    slug: string;        // URL-safe slug (e.g. "blocks")
  };
  tier: ComponentTier;
  status: ComponentStatus;
  label?: string;        // Optional badge text (e.g. "New", "Beta")
  image?: string;        // Optional preview image URL (Light mode or default)
  imageDark?: string;    // Optional preview image URL (Dark mode)
  publishedAt?: string;  // ISO date string

  // ── Discovery
  tags: string[];

  // ── Preview config
  preview: {
    /**
     * disableSSR: true  → uses next/dynamic with ssr:false (motion/canvas/animation components)
     * disableSSR: false → uses next/dynamic with ssr:true  (server components that fetch data)
     * Defaults to true (safe for most client components)
     */
    disableSSR?: boolean;
    height?: number;
  };

  // ── Installation
  registryUrl: string;
  installAlias?: string;
  npmDependencies?: string[];
  registryDependencies?: string[];

  // ── Component Source Files
  files?: ComponentFile[];

  // ── Usage code shown in docs
  usage: {
    import: string;
    importFileName?: string;
    importHighlightLines?: number[];
    code: string;
    codeFileName?: string;
    codeHighlightLines?: number[];
    extra?: {
      title?: string;
      code: string;
      fileName?: string;
      highlightLines?: number[];
    }[];
  };

  // ── Examples (Variants)
  examples?: {
    title: string;
    slug: string; // The slug in the previewRegistry (e.g. "icon-cloud-images")
    previewHeight?: number;
  }[];

  // ── Visibility
  /**
   * Whether this component is visible on the public site.
   * Defaults to `true` when omitted. Set to `false` to hide
   * from the components page, slug routes, and sitemap.
   */
  visibility?: boolean;

  // ── Framework Support
  hasReactVariant?: boolean;

  // ── Props table
  props: PropDefinition[];

  // ── Optional changelog (future use)
  changelog?: ChangelogEntry[];
}
