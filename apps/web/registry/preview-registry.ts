// ─────────────────────────────────────────────────────────────────
// AUTO-GENERATED — do not edit manually.
// Run: npm run registry:previews
// Last generated: 2026-07-18T02:11:24.328Z
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
  "3d-button": dynamic(
    () => import("./previews/3d-button/3d-button.preview"),
    { loading: () => null }
  ),
  "animated-bars": dynamic(
    () => import("./previews/animated-bars/animated-bars.preview"),
    { loading: () => null }
  ),
  "animated-bars-variant01": dynamic(
    () => import("./previews/animated-bars/animated-bars-variant01.preview"),
    { loading: () => null }
  ),
  "animated-layout": dynamic(
    () => import("./previews/animated-layout/animated-layout.preview"),
    { loading: () => null }
  ),
  "avatar-tooltips": dynamic(
    () => import("./previews/avatar-tooltips/avatar-tooltips.preview"),
    { ssr: false, loading: () => null }
  ),
  "blurred-marquee": dynamic(
    () => import("./previews/blurred-marquee/blurred-marquee.preview"),
    { ssr: false, loading: () => null }
  ),
  "cursor-trail": dynamic(
    () => import("./previews/cursor-trail/cursor-trail.preview"),
    { loading: () => null }
  ),
  "discord-online": dynamic(
    () => import("./previews/discord-online/discord-online.preview"),
    { loading: () => null }
  ),
  "drag-button": dynamic(
    () => import("./previews/drag-button/drag-button.preview"),
    { loading: () => null }
  ),
  "github-calendar": dynamic(
    () => import("./previews/github-calendar/github-calendar.preview"),
    { ssr: false, loading: () => null }
  ),
  "github-calendar-variant01": dynamic(
    () => import("./previews/github-calendar/github-calendar-variant01.preview"),
    { ssr: false, loading: () => null }
  ),
  "github-calendar-variant02": dynamic(
    () => import("./previews/github-calendar/github-calendar-variant02.preview"),
    { ssr: false, loading: () => null }
  ),
  "github-calendar-variant03": dynamic(
    () => import("./previews/github-calendar/github-calendar-variant03.preview"),
    { ssr: false, loading: () => null }
  ),
  "github-calendar-variant04": dynamic(
    () => import("./previews/github-calendar/github-calendar-variant04.preview"),
    { ssr: false, loading: () => null }
  ),
  "github-stars": dynamic(
    () => import("./previews/github-stars/github-stars.preview"),
    { loading: () => null }
  ),
  "glow-card": dynamic(
    () => import("./previews/glow-card/glow-card.preview"),
    { ssr: false, loading: () => null }
  ),
  "gradient-background-text": dynamic(
    () => import("./previews/gradient-background-text/gradient-background-text.preview"),
    { ssr: false, loading: () => null }
  ),
  "gradient-text-fill": dynamic(
    () => import("./previews/gradient-text-fill/gradient-text-fill.preview"),
    { ssr: false, loading: () => null }
  ),
  "image-trail": dynamic(
    () => import("./previews/image-trail/image-trail.preview"),
    { loading: () => null }
  ),
  "logo-grid": dynamic(
    () => import("./previews/logo-grid/logo-grid.preview"),
    { ssr: false, loading: () => null }
  ),
  "logo-marquee": dynamic(
    () => import("./previews/logo-marquee/logo-marquee.preview"),
    { ssr: false, loading: () => null }
  ),
  "pebble-toast": dynamic(
    () => import("./previews/pebble-toast/pebble-toast.preview"),
    { ssr: false, loading: () => null }
  ),
  "pebble-toast-variant01": dynamic(
    () => import("./previews/pebble-toast/pebble-toast-variant01.preview"),
    { ssr: false, loading: () => null }
  ),
  "press-button": dynamic(
    () => import("./previews/press-button/press-button.preview"),
    { loading: () => null }
  ),
  "sliding-button": dynamic(
    () => import("./previews/sliding-button/sliding-button.preview"),
    { loading: () => null }
  ),
  "styled-button": dynamic(
    () => import("./previews/styled-button/styled-button.preview"),
    { loading: () => null }
  ),
  "text-outline-glow": dynamic(
    () => import("./previews/text-outline-glow/text-outline-glow.preview"),
    { loading: () => null }
  ),
  "theme-toggler": dynamic(
    () => import("./previews/theme-toggler/theme-toggler.preview"),
    { ssr: false, loading: () => null }
  )
} as const;

export type PreviewName = keyof typeof previewRegistry;
