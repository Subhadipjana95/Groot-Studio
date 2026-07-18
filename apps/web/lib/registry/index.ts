// ─────────────────────────────────────────────────────────────────
// AUTO-GENERATED — do not edit manually.
// Run: npm run registry:index
// Last generated: 2026-07-18T02:12:00.866Z
// ─────────────────────────────────────────────────────────────────

import type { ComponentConfig } from "@workspace/ui/types/registry";

/** Complete registry including hidden components. */
export const fullRegistry: ComponentConfig[] = [
  {
    "name": "3d-button",
    "title": "3D Button",
    "description": "A premium 3D button component with customizable dual-tone gradients, shimmer effects, and depth shadows.",
    "category": {
      "name": "Buttons",
      "slug": "buttons"
    },
    "tier": "free",
    "status": "stable",
    "image": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777376141/3d-button_light_owphex.webp",
    "imageDark": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777376141/3d-button_dark_xbvhmf.webp",
    "tags": [
      "button",
      "3d",
      "gradient",
      "shimmer"
    ],
    "preview": {
      "disableSSR": false,
      "height": 200
    },
    "registryUrl": "https://grootstudio.vercel.app/r/3d-button.json",
    "installAlias": "3d-button",
    "npmDependencies": [],
    "registryDependencies": [],
    "usage": {
      "import": "import { ThreeDButton } from \"@/components/grootstudio/3d-button\"",
      "code": "export default function Demo() {\n  return (\n    <div className=\"flex items-center gap-4\">\n      <ThreeDButton color1=\"#cc0066\" color2=\"#660033\">\n        Pink Button\n      </ThreeDButton>\n      <ThreeDButton color1=\"#004d99\" color2=\"#00264d\">\n        Blue Button\n      </ThreeDButton>\n    </div>\n  )\n}"
    },
    "props": [
      {
        "name": "color1",
        "type": "string",
        "default": "undefined",
        "required": true,
        "description": "The primary light color for the top of the gradient."
      },
      {
        "name": "color2",
        "type": "string",
        "default": "undefined",
        "required": true,
        "description": "The secondary dark color for the bottom of the gradient and shadows."
      },
      {
        "name": "href",
        "type": "string",
        "default": "undefined",
        "required": false,
        "description": "Optional URL for navigation."
      },
      {
        "name": "openInNewTab",
        "type": "boolean",
        "default": "false",
        "required": false,
        "description": "Whether to open the link in a new tab."
      },
      {
        "name": "className",
        "type": "string",
        "default": "undefined",
        "required": false,
        "description": "Optional class names for custom styling."
      }
    ],
    "files": [
      {
        "name": "3d-button.tsx",
        "content": "import * as React from \"react\";\r\n\r\nimport { cn } from \"@/lib/utils\";\r\n\r\ninterface ThreeDButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {\r\n  href?: string;\r\n  color1: string; // Keep this light color\r\n  color2: string; // Keep this dark color\r\n  children: React.ReactNode;\r\n  openInNewTab?: boolean;\r\n  className?: string;\r\n}\r\n\r\nconst BUTTON_GRADIENT_STYLE = {\r\n  boxShadow:\r\n    \"0 2px 8px 0 rgba(204,0,102,0.35), 0 1.5px 0 0 rgba(255,255,255,0.25) inset, 0 -2px 8px 0 rgba(204,0,102,0.5) inset, 0 0 0 1px rgba(0,0,0,0.08)\",\r\n} as const;\r\n\r\nconst SHIMMER_STYLE = {\r\n  background:\r\n    \"linear-gradient(180deg,rgba(255,255,255,0.4) 0%,rgba(255,255,255,0) 80%,transparent 100%)\",\r\n  filter: \"blur(0.5px)\",\r\n} as const;\r\n\r\nconst INNER_SHADOW_STYLE = {\r\n  boxShadow:\r\n    \"0 0 0 1px rgba(255,255,255,0.15) inset, 0 1.5px 0 0 rgba(255,255,255,0.2) inset, 0 -2px 4px 0 rgba(204,0,102,0.2) inset\",\r\n} as const;\r\n\r\nexport const ThreeDButton = React.forwardRef<HTMLAnchorElement, ThreeDButtonProps>(\r\n  ({ href, color1, color2, children, openInNewTab = false, className, style, ...props }, ref) => {\r\n    return (\r\n      <a\r\n        ref={ref}\r\n        href={href}\r\n        target={openInNewTab ? \"_blank\" : undefined}\r\n        rel={openInNewTab ? \"noopener noreferrer\" : undefined}\r\n        className={cn(\r\n          \"relative flex h-9 px-4 items-center justify-center rounded-lg text-white cursor-pointer transition-all duration-200 ease-in-out hover:brightness-110 active:scale-95\",\r\n          className\r\n        )}\r\n        style={{\r\n          ...BUTTON_GRADIENT_STYLE,\r\n          \"--color1\": color1,\r\n          \"--color2\": color2,\r\n          background: `linear-gradient(to top, ${color1}, ${color2})`,\r\n          ...style,\r\n        } as React.CSSProperties}\r\n        {...props}\r\n      >\r\n        <span\r\n          className=\"pointer-events-none absolute left-1/2 top-0 z-20 h-2/5 w-[80%] -translate-x-1/2 rounded-t-[inherit]\"\r\n          style={SHIMMER_STYLE}\r\n        />\r\n        <span\r\n          className=\"pointer-events-none absolute inset-0 z-0 rounded-[inherit]\"\r\n          style={INNER_SHADOW_STYLE}\r\n        />\r\n        <span className=\"relative z-30 flex items-center justify-center drop-shadow-sm text-sm font-medium tracking-wide\">\r\n          {children}\r\n        </span>\r\n      </a>\r\n    );\r\n  }\r\n);\r\n\r\nThreeDButton.displayName = \"ThreeDButton\";\r\n"
      }
    ]
  },
  {
    "name": "animated-bars",
    "title": "Animated Bars",
    "description": "A dynamic background component with pulsating, gradient bars that create a fluid energy effect.",
    "category": {
      "name": "Backgrounds",
      "slug": "backgrounds"
    },
    "tier": "free",
    "status": "stable",
    "image": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1778525114/animated_bar_light_bmbgq1.webp",
    "imageDark": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1778525113/animated_bar_dark_w8tvej.webp",
    "tags": [
      "background",
      "gradient",
      "bars"
    ],
    "preview": {
      "disableSSR": false,
      "height": 400
    },
    "registryUrl": "https://grootstudio.vercel.app/r/animated-bars.json",
    "installAlias": "animated-bars",
    "npmDependencies": [],
    "registryDependencies": [],
    "usage": {
      "import": "import { AnimatedBars } from \"@/components/grootstudio/animated-bars\"",
      "code": "export default function Demo() {\n  return (\n    <AnimatedBars numBars={15} gradientFrom=\"rgb(59, 130, 246)\" backgroundColor=\"rgb(2, 6, 23)\">\n      <h1>Energy Waves</h1>\n    </AnimatedBars>\n  )\n}"
    },
    "props": [
      {
        "name": "numBars",
        "type": "number",
        "default": "12",
        "required": false,
        "description": "The number of animated bars to render."
      },
      {
        "name": "gradientFrom",
        "type": "string",
        "default": "rgb(255, 60, 0)",
        "required": false,
        "description": "The starting color of the bar gradient."
      },
      {
        "name": "gradientTo",
        "type": "string",
        "default": "transparent",
        "required": false,
        "description": "The ending color of the bar gradient."
      },
      {
        "name": "animationDuration",
        "type": "number",
        "default": "4",
        "required": false,
        "description": "Duration of the pulse animation in seconds."
      },
      {
        "name": "backgroundColor",
        "type": "string",
        "required": false,
        "description": "The background color of the container. If not provided, uses the theme's background."
      }
    ],
    "examples": [
      {
        "title": "Digital Rhythm",
        "slug": "animated-bars-variant01"
      }
    ],
    "files": [
      {
        "name": "animated-bars.tsx",
        "content": "\"use client\";\r\n\r\nimport React from 'react';\r\nimport { cn } from \"@/lib/utils\";\r\n\r\ninterface AnimatedBarsProps {\r\n    numBars?: number;\r\n    gradientFrom?: string;\r\n    gradientTo?: string;\r\n    animationDuration?: number;\r\n    className?: string;\r\n}\r\n\r\nconst GradientBars: React.FC<AnimatedBarsProps> = ({\r\n    numBars = 20,\r\n    gradientFrom = '#f43f5e',\r\n    gradientTo = 'transparent',\r\n    animationDuration = 3,\r\n    className = '',\r\n}) => {\r\n    const calculateHeight = (index: number, total: number) => {\r\n        const position = index / (total - 1);\r\n        const maxHeight = 100;\r\n        const minHeight = 40;\r\n\r\n        const center = 0.5;\r\n        const distanceFromCenter = Math.abs(position - center);\r\n        const heightPercentage = Math.pow(distanceFromCenter * 2, 1.5);\r\n\r\n        return minHeight + (maxHeight - minHeight) * heightPercentage;\r\n    };\r\n\r\n    return (\r\n        <>\r\n            <style>{`\r\n        @keyframes fluidWave {\r\n          0% { \r\n            transform: scaleY(var(--initial-scale)); \r\n            opacity: 0.4;\r\n            filter: brightness(1);\r\n          }\r\n          50% { \r\n            transform: scaleY(calc(var(--initial-scale) * 1.15)); \r\n            opacity: 0.8;\r\n            filter: brightness(1.2);\r\n          }\r\n          100% { \r\n            transform: scaleY(calc(var(--initial-scale) * 0.9)); \r\n            opacity: 0.5;\r\n            filter: brightness(0.9);\r\n          }\r\n        }\r\n      `}</style>\r\n\r\n            <div className={cn(\"absolute inset-0 z-0 overflow-hidden pointer-events-none\", className)}>\r\n                <div\r\n                    className=\"flex h-full items-end\"\r\n                    style={{\r\n                        width: '100%',\r\n                        transform: 'translateZ(0)',\r\n                        backfaceVisibility: 'hidden',\r\n                    }}\r\n                >\r\n                    {Array.from({ length: numBars }).map((_, index) => {\r\n                        const height = calculateHeight(index, numBars);\r\n                        return (\r\n                            <div\r\n                                key={index}\r\n                                className=\"relative\"\r\n                                style={{\r\n                                    flex: 1,\r\n                                    marginLeft: index === 0 ? '0' : '-1px',\r\n                                    height: '100%',\r\n                                    background: `linear-gradient(to top, ${gradientFrom}, ${gradientTo})`,\r\n                                    transform: `scaleY(${height / 100})`,\r\n                                    transformOrigin: 'bottom',\r\n                                    animation: `fluidWave ${animationDuration}s ease-in-out infinite alternate`,\r\n                                    animationDelay: `-${index * (animationDuration / numBars)}s`,\r\n                                    // @ts-ignore\r\n                                    '--initial-scale': height / 100,\r\n                                }}\r\n                            />\r\n                        );\r\n                    })}\r\n                </div>\r\n            </div>\r\n        </>\r\n    );\r\n};\r\n\r\ninterface AnimatedBarsBackgroundProps {\r\n    numBars?: number;\r\n    gradientFrom?: string;\r\n    gradientTo?: string;\r\n    animationDuration?: number;\r\n    backgroundColor?: string;\r\n    children?: React.ReactNode;\r\n    className?: string;\r\n}\r\n\r\nexport function AnimatedBars({\r\n    numBars = 12,\r\n    gradientFrom = '#f43f5e',\r\n    gradientTo = 'transparent',\r\n    animationDuration = 4,\r\n    backgroundColor,\r\n    children,\r\n    className,\r\n}: AnimatedBarsBackgroundProps) {\r\n    return (\r\n        <section\r\n            className={cn(\"relative min-h-[400px] w-full flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background\", className)}\r\n            style={backgroundColor ? { backgroundColor } : undefined}\r\n        >\r\n            <GradientBars\r\n                numBars={numBars}\r\n                gradientFrom={gradientFrom}\r\n                gradientTo={gradientTo}\r\n                animationDuration={animationDuration}\r\n            />\r\n\r\n            {children && (\r\n                <div className=\"relative z-10 w-full h-full flex items-center justify-center px-4\">\r\n                    {children}\r\n                </div>\r\n            )}\r\n        </section>\r\n    );\r\n}\r\n"
      }
    ]
  },
  {
    "name": "animated-layout",
    "title": "Animated Layout",
    "description": "A layout switcher component with buttery-smooth spring-physics transitions between list, grid, and pack views.",
    "category": {
      "name": "Components",
      "slug": "components"
    },
    "tier": "free",
    "status": "stable",
    "label": "New",
    "image": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1778985964/animated-layout_light_ayg6jq.webp",
    "imageDark": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1778985964/animated-layout_dark_kqvre9.webp",
    "tags": [
      "layout",
      "animation",
      "motion"
    ],
    "preview": {
      "disableSSR": false,
      "height": 500
    },
    "registryUrl": "https://grootstudio.vercel.app/r/animated-layout.json",
    "installAlias": "animated-layout",
    "npmDependencies": [
      "motion",
      "lucide-react"
    ],
    "registryDependencies": [],
    "usage": {
      "import": "import { AnimatedLayout } from \"@/components/grootstudio/animated-layout\"",
      "code": "export default function Demo() {\n  return <AnimatedLayout items={[\n    {\n    id: \"1\",\n    title: \"Shadcn UI\",\n    subtitle: \"Components Library\",\n    badge: \"345\",\n    image: \"https://github.com/Subhadipjana95.png\",\n    icon: CodeXml,\n  },\n  {\n    id: \"2\",\n    title: \"Figma\",\n    subtitle: \"Design Tool\",\n    badge: \"105\",\n    image: \"https://github.com/Subhadipjana95.png\",\n    icon: Brush,\n  }\n]} heading=\"My Collection\" defaultView=\"list\" />\n}"
    },
    "props": [
      {
        "name": "items",
        "type": "CollectionItem[]",
        "required": true,
        "description": "Array of collection items to display. Each item requires id, title, subtitle, badge, image, and icon."
      },
      {
        "name": "defaultView",
        "type": "list | card | pack",
        "default": "list",
        "required": false,
        "description": "The initial view mode on first render."
      },
      {
        "name": "heading",
        "type": "string",
        "default": "My Tasks",
        "required": false,
        "description": "Section heading rendered above the tab bar."
      },
      {
        "name": "className",
        "type": "string",
        "required": false,
        "description": "Additional CSS classes applied to the root wrapper."
      }
    ],
    "files": [
      {
        "name": "animated-layout.tsx",
        "content": "\"use client\";\r\n\r\nimport React, { useState } from \"react\";\r\nimport { motion, LayoutGroup, AnimatePresence, type Transition } from \"motion/react\";\r\nimport { List, LayoutGrid, Layers, Star, Check } from \"lucide-react\";\r\nimport { cn } from \"@/lib/utils\";\r\n\r\nexport interface CollectionItem {\r\n    id: string;\r\n    title: string;\r\n    subtitle: string;\r\n    badge: string;\r\n    image: string;\r\n    icon: React.ElementType;\r\n}\r\n\r\nexport type ViewMode = \"list\" | \"card\" | \"pack\";\r\n\r\n// ─── Constants (hoisted – zero per-render cost) ──────────────────────────────\r\n\r\nconst S: Transition = { type: \"spring\", stiffness: 400, damping: 32, mass: 0.8 };\r\nconst S_TAB: Transition = { type: \"spring\", stiffness: 500, damping: 35, mass: 0.6 };\r\nconst S_CHECK: Transition = { type: \"spring\", stiffness: 500, damping: 30 };\r\nconst FADE: Transition = { duration: 0.12, ease: [0.25, 0.1, 0.25, 1] };\r\n\r\nconst GPU: React.CSSProperties = { willChange: \"transform\", transform: \"translateZ(0)\", backfaceVisibility: \"hidden\" };\r\nconst RESET = { rotate: 0, x: 0, y: 0 };\r\nconst PACK_X = 22;\r\n\r\nconst TABS: { mode: ViewMode; icon: React.ElementType }[] = [\r\n    { mode: \"list\", icon: List },\r\n    { mode: \"card\", icon: LayoutGrid },\r\n    { mode: \"pack\", icon: Layers },\r\n];\r\n\r\n// ─── View-mode class maps (avoids repeated ternaries in render) ──────────────\r\n\r\nconst GRID_CLS: Record<ViewMode, string> = {\r\n    list: \"flex flex-col gap-2\",\r\n    card: \"grid grid-cols-2 gap-3\",\r\n    pack: \"h-64 flex items-center justify-center mt-4\",\r\n};\r\n\r\nconst CARD_CLS: Record<ViewMode, string> = {\r\n    list: \"flex-row gap-4 w-full rounded-lg\",\r\n    card: \"flex-col gap-3 w-full items-start rounded-xl\",\r\n    pack: \"absolute w-56 h-56 items-center justify-center rounded-xl\",\r\n};\r\n\r\nconst IMG_CLS: Record<ViewMode, string> = {\r\n    list: \"w-16 h-16 rounded-lg border border-border\",\r\n    card: \"w-full aspect-square rounded-lg border border-border shadow-sm\",\r\n    pack: \"w-full h-full rounded-lg border border-border shadow-lg\",\r\n};\r\n\r\nconst WRAP_CLS: Record<ViewMode, string> = {\r\n    list: \"p-2\",\r\n    card: \"p-3\",\r\n    pack: \"py-4\",\r\n};\r\n\r\n// ─── Sub-components ──────────────────────────────────────────────────────────\r\n\r\nconst ViewTab = React.memo(function ViewTab({ active, onClick, icon: Icon }: {\r\n    active: boolean; onClick: () => void; icon: React.ElementType;\r\n}) {\r\n    return (\r\n        <button\r\n            type=\"button\"\r\n            onClick={onClick}\r\n            className={cn(\r\n                \"relative flex items-center px-2.5 py-1.5 rounded-md outline-none transition-colors duration-150\",\r\n                active ? \"text-primary-foreground\" : \"text-muted-foreground hover:text-foreground\"\r\n            )}\r\n        >\r\n            {active && (\r\n                <motion.span\r\n                    layoutId=\"animated-layout-active-tab\"\r\n                    className=\"absolute inset-0 rounded-md bg-primary shadow-sm\"\r\n                    transition={S_TAB}\r\n                    style={GPU}\r\n                />\r\n            )}\r\n            <Icon size={14} strokeWidth={2} className={cn(\"relative z-10 transition-transform duration-200\", active && \"scale-110\")} />\r\n        </button>\r\n    );\r\n});\r\n\r\nconst ItemInfo = React.memo(function ItemInfo({ item, view }: { item: CollectionItem; view: ViewMode }) {\r\n    const Icon = item.icon;\r\n    const [checked, setChecked] = useState(false);\r\n    const isCard = view === \"card\";\r\n\r\n    return (\r\n        <motion.div\r\n            layout\r\n            initial={{ opacity: 0, scale: 0.92, filter: \"blur(4px)\" }}\r\n            animate={{ opacity: 1, scale: 1, filter: \"blur(0px)\" }}\r\n            exit={{ opacity: 0, scale: 0.92, filter: \"blur(4px)\" }}\r\n            transition={FADE}\r\n            className={cn(\"flex flex-1 items-center justify-between min-w-0\", isCard ? \"w-full px-1 pb-1\" : \"px-0\")}\r\n        >\r\n            <div className=\"flex flex-col gap-0.5 min-w-0\">\r\n                <div className=\"flex items-center justify-start\">\r\n                    <h3 className={cn(\r\n                        \"font-medium text-[15px] leading-tight truncate transition-colors duration-200\",\r\n                        checked ? \"text-muted-foreground line-through decoration-muted-foreground/50\" : \"text-foreground\"\r\n                    )}>\r\n                        {item.title}\r\n                    </h3>\r\n                    <span className=\"flex items-center gap-1 px-1 rounded-sm bg-muted/50 border border-border text-primary text-[10px] font-bold shrink-0 ml-2\">\r\n                        <Star size={10} className=\"text-yellow-500 fill-yellow-500\" />\r\n                        {item.badge}\r\n                    </span>\r\n                </div>\r\n                <span className={cn(\r\n                    \"text-xs font-medium text-muted-foreground flex items-center gap-1.5 transition-opacity duration-200\",\r\n                    checked && \"opacity-50\"\r\n                )}>\r\n                    <span className=\"flex items-center justify-center p-[3px] bg-muted/50 border border-border rounded-sm\">\r\n                        <Icon size={12} strokeWidth={2} className=\"text-primary/70 shrink-0\" />\r\n                    </span>\r\n                    <span className=\"truncate\">{item.subtitle}</span>\r\n                </span>\r\n            </div>\r\n\r\n            <motion.button\r\n                type=\"button\"\r\n                role=\"checkbox\"\r\n                aria-checked={checked}\r\n                onClick={() => setChecked((p) => !p)}\r\n                className={cn(\r\n                    \"shrink-0 flex items-center justify-center border transition-all duration-200 outline-none rounded-sm\",\r\n                    isCard ? \"size-6\" : \"size-7 mr-2\",\r\n                    checked ? \"bg-card border-primary text-primary\" : \"bg-card border-border text-foreground/80 hover:border-primary/40\"\r\n                )}\r\n            >\r\n                <AnimatePresence mode=\"wait\">\r\n                    {checked && (\r\n                        <motion.span\r\n                            key=\"check\"\r\n                            initial={{ scale: 0, opacity: 0 }}\r\n                            animate={{ scale: 1, opacity: 1 }}\r\n                            exit={{ scale: 0, opacity: 0 }}\r\n                            transition={S_CHECK}\r\n                        >\r\n                            <Check size={isCard ? 14 : 16} strokeWidth={2.5} />\r\n                        </motion.span>\r\n                    )}\r\n                </AnimatePresence>\r\n            </motion.button>\r\n        </motion.div>\r\n    );\r\n});\r\n\r\n// ─── Main component ──────────────────────────────────────────────────────────\r\n\r\nexport interface AnimatedLayoutProps {\r\n    items: CollectionItem[];\r\n    defaultView?: ViewMode;\r\n    heading?: string;\r\n    className?: string;\r\n}\r\n\r\nexport function AnimatedLayout({ items, defaultView = \"list\", heading = \"My Tasks\", className }: AnimatedLayoutProps) {\r\n    const [view, setView] = useState<ViewMode>(defaultView);\r\n    const len = items.length;\r\n\r\n    return (\r\n        <div className={cn(\"w-full max-w-xl mx-auto p-4 md:p-8 font-sans select-none\", className)}>\r\n            <div className=\"w-full flex flex-col items-end gap-4\">\r\n                <div className=\"flex items-center justify-between w-full gap-5\">\r\n                    <h2 className=\"text-xl font-medium text-foreground\">{heading}</h2>\r\n                    <nav className=\"flex p-1 bg-muted rounded-lg w-fit border border-border\">\r\n                        {TABS.map((t) => (\r\n                            <ViewTab key={t.mode} active={view === t.mode} onClick={() => setView(t.mode)} icon={t.icon} />\r\n                        ))}\r\n                    </nav>\r\n                </div>\r\n\r\n                <div className={cn(\"relative w-full flex flex-col items-center border border-border rounded-xl bg-muted/60\", WRAP_CLS[view])}>\r\n                    <LayoutGroup>\r\n                        <motion.div layout transition={S} style={GPU} className={cn(\"w-full relative\", GRID_CLS[view])}>\r\n                            {items.map((item, i) => (\r\n                                <motion.div\r\n                                    key={item.id}\r\n                                    layout\r\n                                    transition={S}\r\n                                    style={{ ...GPU, zIndex: view === \"pack\" ? len - i : 1 }}\r\n                                    animate={view === \"pack\" ? { rotate: 0, x: (i - (len - 1) / 2) * PACK_X } : RESET}\r\n                                    className={cn(\"relative flex items-center bg-background p-1.5\", CARD_CLS[view])}\r\n                                >\r\n                                    <motion.div layout transition={S} className={cn(\"relative overflow-hidden shrink-0 bg-background\", IMG_CLS[view])}>\r\n                                        <motion.img layout transition={S} src={item.image} alt={item.title} loading=\"lazy\" decoding=\"async\" className=\"w-full h-full object-cover block\" />\r\n                                    </motion.div>\r\n                                    <AnimatePresence mode=\"popLayout\" initial={false}>\r\n                                        {view !== \"pack\" && <ItemInfo key={`${item.id}-info`} item={item} view={view} />}\r\n                                    </AnimatePresence>\r\n                                </motion.div>\r\n                            ))}\r\n                        </motion.div>\r\n                    </LayoutGroup>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    );\r\n}\r\n\r\nexport default AnimatedLayout;"
      }
    ]
  },
  {
    "name": "avatar-tooltips",
    "title": "Avatar Tooltips",
    "description": "Interactive overlapping avatars that reveal animated, spring-based tooltips on hover.",
    "category": {
      "name": "Components",
      "slug": "components"
    },
    "tier": "free",
    "status": "stable",
    "image": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777376434/avatar-tooltip_light_pvqzhq.webp",
    "imageDark": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777376434/avatar-tooltip_dark_uaapdx.webp",
    "tags": [
      "avatar",
      "tooltip",
      "popups",
      "motion"
    ],
    "preview": {
      "disableSSR": true,
      "height": 200
    },
    "registryUrl": "https://grootstudio.vercel.app/r/avatar-tooltips.json",
    "installAlias": "avatar-tooltips",
    "npmDependencies": [
      "motion/react"
    ],
    "registryDependencies": [],
    "usage": {
      "import": "import { AvatarTooltips } from \"@/components/grootstudio/avatar-tooltips\"",
      "code": "import { Github, Twitter, Linkedin, Mail } from \"lucide-react\"\n\nexport default function Demo() {\n  const items = [\n    { id: 1, name: \"GitHub\", designation: \"Developer Platform\", icon: Github },\n    { id: 2, name: \"Twitter\", designation: \"Social Media\", icon: Twitter },\n    { id: 3, name: \"LinkedIn\", designation: \"Professional Network\", icon: Linkedin },\n    { id: 4, name: \"Email\", designation: \"Contact Us\", icon: Mail },\n  ]\n\n  return (\n    <main className=\"flex items-center justify-center\">\n      <AvatarTooltips items={items} />\n    </main>\n  )\n}"
    },
    "props": [
      {
        "name": "items",
        "type": "AvatarItem[]",
        "default": "[]",
        "required": true,
        "description": "Array of items containing id, name, designation and a React icon component."
      },
      {
        "name": "className",
        "type": "string",
        "default": "undefined",
        "required": false,
        "description": "Additional CSS classes for the container element."
      }
    ],
    "files": [
      {
        "name": "avatar-tooltips.tsx",
        "content": "\"use client\";\r\n\r\nimport React, { useState } from \"react\";\r\nimport { motion, useTransform, useMotionValue, useSpring, AnimatePresence } from \"motion/react\";\r\nimport { cn } from \"@/lib/utils\";\r\n\r\nexport type AvatarItem = {\r\n  readonly id: string | number;\r\n  readonly name: string;\r\n  readonly designation?: string;\r\n  readonly icon: React.ElementType;\r\n};\r\n\r\nconst AvatarTooltipItem = ({ item }: { item: AvatarItem }) => {\r\n  const x = useMotionValue(0);\r\n  const [isHovered, setIsHovered] = useState(false);\r\n  const Icon = item.icon;\r\n\r\n  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), {\r\n    stiffness: 100,\r\n    damping: 15,\r\n  });\r\n\r\n  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), {\r\n    stiffness: 100,\r\n    damping: 15,\r\n  });\r\n\r\n  return (\r\n    <div\r\n      className=\"group relative -mr-2\"\r\n      onMouseEnter={() => setIsHovered(true)}\r\n      onMouseLeave={() => setIsHovered(false)}\r\n      onMouseMove={(e) => {\r\n        const rect = e.currentTarget.getBoundingClientRect();\r\n        x.set(e.clientX - rect.left - rect.width / 2);\r\n      }}\r\n    >\r\n      <AnimatePresence mode=\"popLayout\">\r\n        {isHovered && (\r\n          <motion.div\r\n            initial={{ opacity: 0, y: 10, scale: 0.95 }}\r\n            animate={{ opacity: 1, y: 0, scale: 1 }}\r\n            exit={{ opacity: 0, y: 10, scale: 0.95 }}\r\n            transition={{\r\n              type: \"spring\",\r\n              stiffness: 260,\r\n              damping: 20,\r\n            }}\r\n            style={{\r\n              left: \"50%\",\r\n              translateX: \"-50%\",\r\n              rotate: rotate,\r\n              x: translateX,\r\n            }}\r\n            className=\"pointer-events-none absolute bottom-full mb-3 z-50 flex flex-col items-center rounded-md border bg-popover px-3 py-1.5 text-xs text-popover-foreground shadow-xl backdrop-blur-sm\"\r\n          >\r\n            <div className=\"absolute bottom-[-4.73px] left-1/2 -translate-x-1/2 h-2 w-2 rotate-45 border-b border-r rounded-[1px] bg-popover\" />\r\n            <p className=\"relative z-10 whitespace-nowrap text-sm font-semibold leading-none\">\r\n              {item.name}\r\n            </p>\r\n            {item.designation && (\r\n              <p className=\"relative z-10 mt-1 whitespace-nowrap text-[10px] text-muted-foreground leading-none\">\r\n                {item.designation}\r\n              </p>\r\n            )}\r\n          </motion.div>\r\n        )}\r\n      </AnimatePresence>\r\n\r\n      <div className=\"relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-border bg-background shadow-sm transition-transform duration-300 group-hover:z-30 group-hover:scale-110 active:scale-95\">\r\n        <Icon className=\"size-6 text-foreground\" />\r\n      </div>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport function AvatarTooltips({ items, className }: { items: readonly AvatarItem[], className?: string }) {\r\n  return (\r\n    <div className={cn(\"flex flex-col items-center gap-3 mt-4 relative\", className)}>\r\n      <div className=\"flex items-center justify-center -space-x-2\">\r\n        {items.map((item) => (\r\n          <AvatarTooltipItem key={item.id} item={item} />\r\n        ))}\r\n      </div>\r\n    </div>\r\n  );\r\n}"
      }
    ]
  },
  {
    "name": "blurred-marquee",
    "title": "Blurred Marquee",
    "description": "Infinite marquee with sophisticated radial blurring and masked logo transitions.",
    "category": {
      "name": "Components",
      "slug": "components"
    },
    "tier": "free",
    "status": "stable",
    "visibility": false,
    "image": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777378662/client-marquee-blur_light_u1omgi.webp",
    "imageDark": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777378662/client-marquee-blur_dark_duu30j.webp",
    "tags": [
      "marquee",
      "logos",
      "blurred"
    ],
    "preview": {
      "disableSSR": true,
      "height": 300
    },
    "registryUrl": "https://grootstudio.vercel.app/r/blurred-marquee.json",
    "installAlias": "blurred-marquee",
    "npmDependencies": [
      "motion/react",
      "react-use-measure",
      "lucide-react"
    ],
    "registryDependencies": [],
    "usage": {
      "import": "import { BlurredMarquee } from \"@/components/grootstudio/blurred-marquee\"",
      "code": "const logos = [\n  { src: \"https://svgl.app/library/nvidia-wordmark-light.svg\", alt: \"Nvidia\" },\n  { src: \"https://svgl.app/library/claude-ai-wordmark-icon_light.svg\", alt: \"Claude\" },\n  { src: \"https://svgl.app/library/stripe-wordmark-light.svg\", alt: \"Stripe\" },\n  { src: \"https://svgl.app/library/rails-wordmark-light.svg\", alt: \"Rails\" },\n  { src: \"https://svgl.app/library/deno-wordmark-icon_light.svg\", alt: \"Deno\" },\n  { src: \"https://svgl.app/library/github-wordmark-light.svg\", alt: \"Github\" },\n  { src: \"https://svgl.app/library/tailwindcss-wordmark-light.svg\", alt: \"Tailwindcss\" },\n  { src: \"https://svgl.app/library/shadcn-ui-logo_light.svg\", alt: \"Shadcn ui\" },\n];\n\nexport default function Demo() {\n  return (\n    <div className=\"w-full\">\n      <BlurredMarquee logos={logos} />\n    </div>\n  )\n}"
    },
    "props": [
      {
        "name": "items",
        "type": "Logo[]",
        "default": "DEFAULT_ITEMS",
        "required": true,
        "description": "Array of logo objects (src, alt, width, height)"
      },
      {
        "name": "className",
        "type": "string",
        "description": "Styling overrides"
      }
    ],
    "files": [
      {
        "name": "blurred-marquee.tsx",
        "content": "\"use client\"\r\n\r\nimport React, { memo, useState, useEffect } from \"react\"\r\nimport { cn } from \"@/lib/utils\"\r\nimport { PlusIcon } from \"lucide-react\"\r\nimport {\r\n  useMotionValue,\r\n  animate,\r\n  motion,\r\n  HTMLMotionProps,\r\n} from \"motion/react\"\r\nimport useMeasure from \"react-use-measure\"\r\n\r\nexport type Logo = {\r\n  src: string\r\n  alt: string\r\n  width?: number\r\n  height?: number\r\n}\r\n\r\ntype InfiniteSliderProps = {\r\n  children: React.ReactNode\r\n  gap?: number\r\n  duration?: number\r\n  durationOnHover?: number\r\n  direction?: \"horizontal\" | \"vertical\"\r\n  reverse?: boolean\r\n  className?: string\r\n}\r\n\r\nconst InfiniteSlider = memo(function InfiniteSlider({\r\n  children,\r\n  gap = 16,\r\n  duration = 25,\r\n  durationOnHover,\r\n  direction = \"horizontal\",\r\n  reverse = false,\r\n  className,\r\n}: InfiniteSliderProps) {\r\n  const [currentDuration, setCurrentDuration] = useState(duration)\r\n  const [ref, { width, height }] = useMeasure()\r\n  const translation = useMotionValue(0)\r\n  const [isTransitioning, setIsTransitioning] = useState(false)\r\n  const [key, setKey] = useState(0)\r\n\r\n  useEffect(() => {\r\n    const size = direction === \"horizontal\" ? width : height\r\n    const contentSize = size + gap\r\n    const from = reverse ? -contentSize / 2 : 0\r\n    const to = reverse ? 0 : -contentSize / 2\r\n\r\n    let controls\r\n\r\n    if (isTransitioning) {\r\n      controls = animate(translation, [translation.get(), to], {\r\n        ease: \"linear\",\r\n        duration:\r\n          currentDuration *\r\n          Math.abs((translation.get() - to) / contentSize),\r\n        onComplete: () => {\r\n          setIsTransitioning(false)\r\n          setKey((prev) => prev + 1)\r\n        },\r\n      })\r\n    } else {\r\n      controls = animate(translation, [from, to], {\r\n        ease: \"linear\",\r\n        duration: currentDuration,\r\n        repeat: Infinity,\r\n        repeatType: \"loop\",\r\n        repeatDelay: 0,\r\n        onRepeat: () => translation.set(from),\r\n      })\r\n    }\r\n\r\n    return controls?.stop\r\n  }, [\r\n    key,\r\n    translation,\r\n    currentDuration,\r\n    width,\r\n    height,\r\n    gap,\r\n    isTransitioning,\r\n    direction,\r\n    reverse,\r\n  ])\r\n\r\n  const hoverProps = durationOnHover\r\n    ? {\r\n        onHoverStart: () => {\r\n          setIsTransitioning(true)\r\n          setCurrentDuration(durationOnHover)\r\n        },\r\n        onHoverEnd: () => {\r\n          setIsTransitioning(true)\r\n          setCurrentDuration(duration)\r\n        },\r\n      }\r\n    : {}\r\n\r\n  return (\r\n    <div className={cn(\"overflow-hidden\", className)}>\r\n      <motion.div\r\n        ref={ref}\r\n        className=\"flex w-max\"\r\n        style={{\r\n          ...(direction === \"horizontal\"\r\n            ? { x: translation }\r\n            : { y: translation }),\r\n          gap: `${gap}px`,\r\n          flexDirection: direction === \"horizontal\" ? \"row\" : \"column\",\r\n        }}\r\n        {...hoverProps}\r\n      >\r\n        {children}\r\n        {children}\r\n      </motion.div>\r\n    </div>\r\n  )\r\n})\r\n\r\nconst GRADIENT_ANGLES = { top: 0, right: 90, bottom: 180, left: 270 }\r\n\r\ntype ProgressiveBlurProps = {\r\n  direction?: keyof typeof GRADIENT_ANGLES\r\n  blurLayers?: number\r\n  blurIntensity?: number\r\n  className?: string\r\n} & HTMLMotionProps<\"div\">\r\n\r\nconst ProgressiveBlur = memo(function ProgressiveBlur({\r\n  direction = \"bottom\",\r\n  blurLayers = 8,\r\n  blurIntensity = 0.25,\r\n  className,\r\n  ...props\r\n}: ProgressiveBlurProps) {\r\n  const layers = Math.max(blurLayers, 2)\r\n  const segmentSize = 1 / (blurLayers + 1)\r\n  const angle = GRADIENT_ANGLES[direction]\r\n\r\n  return (\r\n    <div className={cn(\"relative\", className)}>\r\n      {Array.from({ length: layers }).map((_, index) => {\r\n        const gradientStops = [\r\n          index * segmentSize,\r\n          (index + 1) * segmentSize,\r\n          (index + 2) * segmentSize,\r\n          (index + 3) * segmentSize,\r\n        ]\r\n          .map(\r\n            (pos, posIndex) =>\r\n              `rgba(255,255,255,${\r\n                posIndex === 1 || posIndex === 2 ? 1 : 0\r\n              }) ${pos * 100}%`\r\n          )\r\n          .join(\", \")\r\n\r\n        const gradient = `linear-gradient(${angle}deg, ${gradientStops})`\r\n\r\n        return (\r\n          <motion.div\r\n            key={index}\r\n            className=\"pointer-events-none absolute inset-0 rounded-[inherit]\"\r\n            style={{\r\n              maskImage: gradient,\r\n              WebkitMaskImage: gradient,\r\n              backdropFilter: `blur(${index * blurIntensity}px)`,\r\n            }}\r\n            {...props}\r\n          />\r\n        )\r\n      })}\r\n    </div>\r\n  )\r\n})\r\n\r\nconst LogoImage = memo(function LogoImage({ logo }: { logo: Logo }) {\r\n  return (\r\n    <img\r\n      alt={logo.alt}\r\n      src={logo.src}\r\n      width={logo.width ?? \"auto\"}\r\n      height={logo.height ?? \"auto\"}\r\n      loading=\"lazy\"\r\n      className=\"pointer-events-none h-4 select-none md:h-5 dark:brightness-0 dark:invert\"\r\n    />\r\n  )\r\n})\r\n\r\nexport const BlurredMarquee = memo(function BlurredMarquee({\r\n  logos,\r\n  className,\r\n}: {\r\n  logos: Logo[]\r\n  className?: string\r\n}) {\r\n  return (\r\n    <div\r\n      className={cn(\r\n        \"relative mx-auto max-w-6xl bg-linear-to-r from-secondary via-transparent to-secondary py-6 md:border-x\",\r\n        className\r\n      )}\r\n    >\r\n      <div className=\"-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t\" />\r\n\r\n      <InfiniteSlider gap={52} reverse duration={60} durationOnHover={20}>\r\n        {logos.map((logo) => (\r\n          <LogoImage key={logo.alt} logo={logo} />\r\n        ))}\r\n      </InfiniteSlider>\r\n\r\n      <ProgressiveBlur\r\n        blurIntensity={1}\r\n        className=\"pointer-events-none absolute top-0 left-0 h-full w-40\"\r\n        direction=\"left\"\r\n      />\r\n      <ProgressiveBlur\r\n        blurIntensity={1}\r\n        className=\"pointer-events-none absolute top-0 right-0 h-full w-40\"\r\n        direction=\"right\"\r\n      />\r\n\r\n      <div className=\"-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b\" />\r\n\r\n      <PlusIcon\r\n        className=\"-top-[12.5px] -right-[12.5px] absolute z-10 hidden size-6 md:block text-slate-800 dark:text-slate-300\"\r\n        strokeWidth={1}\r\n      />\r\n      <PlusIcon\r\n        className=\"-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block text-slate-800 dark:text-slate-300\"\r\n        strokeWidth={1}\r\n      />\r\n    </div>\r\n  )\r\n})\r\n\r\nBlurredMarquee.displayName = \"BlurredMarquee\""
      }
    ]
  },
  {
    "name": "cursor-trail",
    "title": "Cursor Trail",
    "description": "A smooth and refined shape trail effect that beautifully interpolates along your mouse cursor path.",
    "category": {
      "name": "Effects",
      "slug": "effects"
    },
    "tier": "free",
    "status": "stable",
    "image": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1778443195/cursor-trail_light_f7ug7e.webp",
    "imageDark": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1778443195/cursor-trail_dark_jdzcdz.webp",
    "tags": [
      "cursor",
      "trail",
      "mouse",
      "effect",
      "animation"
    ],
    "preview": {
      "disableSSR": false,
      "height": 400
    },
    "registryUrl": "https://grootstudio.vercel.app/r/cursor-trail.json",
    "installAlias": "cursor-trail",
    "npmDependencies": [],
    "registryDependencies": [],
    "usage": {
      "import": "import { CursorTrail } from \"@/components/grootstudio/cursor-trail\"",
      "code": "export default function Demo() {\n  return (\n    <div className=\"relative w-full h-full overflow-hidden\">\n      <CursorTrail />\n    </div>\n  )\n}"
    },
    "props": [
      {
        "name": "images",
        "type": "string[]",
        "default": "flairImages",
        "required": false,
        "description": "An array of image URLs to use in the trail."
      },
      {
        "name": "distance",
        "type": "number",
        "default": "60",
        "required": false,
        "description": "The distance in pixels the cursor must move before a new image spawns."
      },
      {
        "name": "duration",
        "type": "number",
        "default": "1000",
        "required": false,
        "description": "The duration of the individual image animation in milliseconds."
      },
      {
        "name": "imageSize",
        "type": "number",
        "default": "64",
        "required": false,
        "description": "The width and height of the trail images in pixels."
      },
      {
        "name": "className",
        "type": "string",
        "default": "undefined",
        "required": false,
        "description": "Optional class names for custom styling."
      }
    ],
    "files": [
      {
        "name": "cursor-trail.tsx",
        "content": "'use client';\r\n\r\nimport React, { useEffect, useRef } from 'react';\r\nimport { cn } from \"@/lib/utils\";\r\n\r\nconst flairImages = [\r\n    \"https://assets.codepen.io/16327/Revised+Flair.png\",\r\n    \"https://assets.codepen.io/16327/Revised+Flair-1.png\",\r\n    \"https://assets.codepen.io/16327/Revised+Flair-2.png\",\r\n    \"https://assets.codepen.io/16327/Revised+Flair-3.png\",\r\n    \"https://assets.codepen.io/16327/Revised+Flair-4.png\",\r\n    \"https://assets.codepen.io/16327/Revised+Flair-5.png\",\r\n    \"https://assets.codepen.io/16327/Revised+Flair-6.png\",\r\n    \"https://assets.codepen.io/16327/Revised+Flair-7.png\",\r\n    \"https://assets.codepen.io/16327/Revised+Flair-8.png\",\r\n    \"https://assets.codepen.io/16327/Revised+Flair.png\",\r\n    \"https://assets.codepen.io/16327/Revised+Flair-1.png\",\r\n    \"https://assets.codepen.io/16327/Revised+Flair-2.png\",\r\n    \"https://assets.codepen.io/16327/Revised+Flair-3.png\",\r\n    \"https://assets.codepen.io/16327/Revised+Flair-4.png\",\r\n    \"https://assets.codepen.io/16327/Revised+Flair-5.png\",\r\n    \"https://assets.codepen.io/16327/Revised+Flair-6.png\",\r\n    \"https://assets.codepen.io/16327/Revised+Flair-7.png\",\r\n    \"https://assets.codepen.io/16327/Revised+Flair-8.png\",\r\n];\r\n\r\nexport interface CursorTrailProps extends React.HTMLAttributes<HTMLDivElement> {\r\n    images?: string[];\r\n    distance?: number;\r\n    duration?: number;\r\n    imageSize?: number;\r\n}\r\n\r\nexport function CursorTrail({\r\n    className,\r\n    images = flairImages,\r\n    distance = 80,\r\n    duration = 1000,\r\n    imageSize = 64,\r\n    ...props\r\n}: CursorTrailProps) {\r\n    const containerRef = useRef<HTMLDivElement>(null);\r\n\r\n    useEffect(() => {\r\n        if (!containerRef.current) return;\r\n\r\n        const imgElements = Array.from(containerRef.current.querySelectorAll('.flair-image')) as HTMLElement[];\r\n        let currentIndex = 0;\r\n\r\n        let lastX = 0;\r\n        let lastY = 0;\r\n        let isInitial = true;\r\n\r\n        const spawnImage = (x: number, y: number) => {\r\n            const img = imgElements[currentIndex];\r\n            if (!img) return;\r\n            currentIndex = (currentIndex + 1) % imgElements.length;\r\n\r\n            // Adjust to center the image on the cursor\r\n            const targetX = x - imageSize / 2;\r\n            const targetY = y - imageSize / 2;\r\n\r\n            // Ensure any previous animation is cancelled safely\r\n            if (typeof img.getAnimations === 'function') {\r\n                img.getAnimations().forEach(anim => anim.cancel());\r\n            }\r\n\r\n            const randomRotation = Math.random() * 40 - 20;\r\n\r\n            img.animate([\r\n                {\r\n                    opacity: 0,\r\n                    transform: `translate(${targetX}px, ${targetY}px) scale(0.2) rotate(0deg)`\r\n                },\r\n                {\r\n                    opacity: 1,\r\n                    transform: `translate(${targetX}px, ${targetY}px) scale(1) rotate(${randomRotation / 2}deg)`,\r\n                    offset: 0.15\r\n                },\r\n                {\r\n                    opacity: 0,\r\n                    transform: `translate(${targetX}px, ${targetY + 80}px) scale(0.8) rotate(${randomRotation}deg)`\r\n                }\r\n            ], {\r\n                duration,\r\n                easing: 'cubic-bezier(0.25, 1, 0.5, 1)',\r\n                fill: 'forwards'\r\n            });\r\n        };\r\n\r\n        const handleMouseMove = (e: MouseEvent) => {\r\n            if (!containerRef.current) return;\r\n            const rect = containerRef.current.getBoundingClientRect();\r\n            const currentX = e.clientX - rect.left;\r\n            const currentY = e.clientY - rect.top;\r\n\r\n            if (isInitial) {\r\n                lastX = currentX;\r\n                lastY = currentY;\r\n                isInitial = false;\r\n                return;\r\n            }\r\n\r\n            const dist = Math.hypot(currentX - lastX, currentY - lastY);\r\n\r\n            if (dist > distance) {\r\n                const count = Math.floor(dist / distance);\r\n                for (let i = 1; i <= count; i++) {\r\n                    const t = (i * distance) / dist;\r\n                    const x = lastX + (currentX - lastX) * t;\r\n                    const y = lastY + (currentY - lastY) * t;\r\n                    spawnImage(x, y);\r\n                }\r\n\r\n                // Update lastX and lastY to the last spawned point\r\n                const totalT = (count * distance) / dist;\r\n                lastX = lastX + (currentX - lastX) * totalT;\r\n                lastY = lastY + (currentY - lastY) * totalT;\r\n            }\r\n        };\r\n\r\n        window.addEventListener('mousemove', handleMouseMove);\r\n        return () => window.removeEventListener('mousemove', handleMouseMove);\r\n    }, [distance, duration, imageSize]);\r\n\r\n    return (\r\n        <div\r\n            className={cn(\"pointer-events-none fixed inset-0 z-50 overflow-hidden\", className)}\r\n            {...props}\r\n        >\r\n            <div ref={containerRef} className=\"absolute inset-0\">\r\n                {images.map((src, index) => (\r\n                    <img\r\n                        key={index}\r\n                        src={src}\r\n                        alt=\"\"\r\n                        className=\"flair-image absolute left-0 top-0 object-cover pointer-events-none origin-center\"\r\n                        style={{\r\n                            width: imageSize,\r\n                            height: imageSize,\r\n                            transform: 'translate(-100%, -100%)'\r\n                        }}\r\n                        aria-hidden=\"true\"\r\n                    />\r\n                ))}\r\n            </div>\r\n        </div>\r\n    );\r\n}\r\n"
      }
    ]
  },
  {
    "name": "discord-online",
    "title": "Discord Online",
    "description": "Live Discord member presence count using Next.js server components.",
    "category": {
      "name": "Components",
      "slug": "components"
    },
    "tier": "free",
    "status": "stable",
    "image": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777377565/discord-online_light_aiynof.webp",
    "imageDark": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777377565/discord-online_dark_mwjdlu.webp",
    "tags": [
      "discord",
      "presence"
    ],
    "hasReactVariant": true,
    "preview": {
      "disableSSR": false,
      "height": 300
    },
    "registryUrl": "https://grootstudio.vercel.app/r/discord-online.json",
    "installAlias": "discord-online",
    "npmDependencies": [
      "lucide-react"
    ],
    "registryDependencies": [
      "Button",
      "Tooltip"
    ],
    "usage": {
      "import": "import { DiscordOnline } from \"@/components/grootstudio/discord-online\"",
      "code": "export default function Demo() {\n  return <DiscordOnline guildId=\"1234567891487752291602665574\" />\n}"
    },
    "props": [
      {
        "name": "guildId",
        "type": "string",
        "required": true,
        "description": "Target Discord Guild ID"
      },
      {
        "name": "inviteURL",
        "type": "string",
        "required": true,
        "description": "Target Discord Guild Invite URL"
      },
      {
        "name": "label",
        "type": "string",
        "description": "Label to display"
      },
      {
        "name": "className",
        "type": "string",
        "description": "Optional Class name to style the component"
      }
    ],
    "files": [
      {
        "name": "discord-online.tsx",
        "content": "import { cn } from \"@/lib/utils\";\r\nimport {\r\n  Tooltip,\r\n  TooltipContent,\r\n  TooltipProvider,\r\n  TooltipTrigger,\r\n} from \"@/components/ui/tooltip\";\r\nimport { Button } from \"@/components/ui/button\";\r\n\r\ninterface DiscordOnlineProps {\r\n  guildId: string; // Discord server ID to fetch presence count for\r\n  inviteURL?: string; // Optional custom invite URL    \r\n  className?: string;\r\n  label?: string; // Optional label for the tooltip (default: \"members online in our Discord\")\r\n}\r\n\r\nasync function getPresenceCount(guildId: string): Promise<number> {\r\n  try {\r\n    const res = await fetch(\r\n      `https://discord.com/api/guilds/${guildId}/widget.json`,\r\n      { next: { revalidate: 60 } },\r\n    );\r\n    if (!res.ok) return 0;\r\n    const data = (await res.json()) as { presence_count?: number };\r\n    return Number(data?.presence_count) || 0;\r\n  } catch {\r\n    return 0;\r\n  }\r\n}\r\n\r\nexport async function DiscordOnline({\r\n  guildId,\r\n  inviteURL,\r\n  className,\r\n  label = \"members online in our Discord\",\r\n}: DiscordOnlineProps) {\r\n  const count = await getPresenceCount(guildId);\r\n\r\n  return (\r\n    <TooltipProvider>\r\n      <Tooltip>\r\n        <TooltipTrigger asChild>\r\n          <Button\r\n            variant=\"ghost\"\r\n            className={cn(\"h-9 gap-1.5 pr-1.5 pl-2 border-border dark:border-input hover:bg-input\", className)}\r\n            asChild\r\n          >\r\n            <a\r\n              href={inviteURL || `https://discord.com/invite/${guildId}`}\r\n              target=\"_blank\"\r\n              rel=\"noopener noreferrer\"\r\n            >\r\n              <svg\r\n                width=\"16\"\r\n                height=\"16\"\r\n                viewBox=\"0 0 24 24\"\r\n                fill=\"currentColor\"\r\n                className=\"shrink-0\"\r\n                aria-hidden=\"true\"\r\n              >\r\n                <path d=\"M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z\" />\r\n              </svg>\r\n              <span className=\"inline-flex items-center gap-1.5\">\r\n                <span className=\"relative flex h-1.5 w-1.5 shrink-0\">\r\n                  <span className=\"absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75\" />\r\n                  <span className=\"relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-600\" />\r\n                </span>\r\n                <span className=\"text-[0.8125rem] text-muted-foreground tabular-nums\">\r\n                  {count.toLocaleString()}\r\n                </span>\r\n              </span>\r\n            </a>\r\n          </Button>\r\n        </TooltipTrigger>\r\n        <TooltipContent className=\"font-sans\">\r\n          {count.toLocaleString()} {label}\r\n        </TooltipContent>\r\n      </Tooltip>\r\n    </TooltipProvider>\r\n  );\r\n}"
      }
    ]
  },
  {
    "name": "drag-button",
    "title": "Drag Button",
    "description": "An interactive draggable button requiring a left-to-right swipe to confirm actions, featuring optional success animations and spring physics.",
    "category": {
      "name": "Buttons",
      "slug": "buttons"
    },
    "tier": "free",
    "status": "stable",
    "label": "new",
    "image": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777464486/drag-button_light_u5kvmb.webp",
    "imageDark": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777464486/drag-button_dark_k8kt8l.webp",
    "tags": [
      "button",
      "drag",
      "swipe",
      "motion"
    ],
    "preview": {
      "disableSSR": false,
      "height": 250
    },
    "registryUrl": "https://grootstudio.vercel.app/r/drag-button.json",
    "installAlias": "drag-button",
    "npmDependencies": [
      "motion/react",
      "lucide-react"
    ],
    "registryDependencies": [
      "button"
    ],
    "usage": {
      "import": "import { DragButton } from \"@/components/grootstudio/drag-button\"",
      "code": "export default function Demo() {\n  const [status, setStatus] = React.useState(\"Slide to Checkout\");\n\n  const handleComplete = () => {\n    setStatus(\"Order Placed!\");\n    setTimeout(() => {\n      setStatus(\"Slide to Pay\");\n    }, 1500);\n  };\n\n  return (\n    <div className=\"flex justify-center items-center gap-8\">\n      <DragButton \n          onDragComplete={handleComplete}\n          colorLight=\"#a5b4fc\"\n          colorDark=\"#4338ca\"\n        >\n          {status}\n        </DragButton>\n    </div>\n  );\n}"
    },
    "props": [
      {
        "name": "children",
        "type": "ReactNode",
        "default": "undefined",
        "required": true,
        "description": "The content to display inside the button."
      },
      {
        "name": "onDragComplete",
        "type": "() => void",
        "default": "undefined",
        "required": false,
        "description": "Callback triggered when the handle reaches the end of the button."
      },
      {
        "name": "showConfirmation",
        "type": "boolean",
        "default": "true",
        "required": false,
        "description": "Whether to show the success animation after a successful drag."
      },
      {
        "name": "successIcon",
        "type": "ReactNode",
        "default": "<Check />",
        "required": false,
        "description": "Custom icon to show during the success animation."
      },
      {
        "name": "variant",
        "type": "default | outline",
        "default": "default",
        "required": false,
        "description": "The visual style of the button."
      },
      {
        "name": "className",
        "type": "string",
        "default": "undefined",
        "required": false,
        "description": "Optional class names for custom styling."
      }
    ],
    "files": [
      {
        "name": "drag-button.tsx",
        "content": "\"use client\";\r\n\r\nimport React from \"react\";\r\nimport { Button } from \"@/components/ui/button\";\r\nimport { ArrowRight, Check } from \"lucide-react\";\r\nimport { cn } from \"@/lib/utils\";\r\nimport { motion, useMotionValue, useTransform, AnimatePresence } from \"motion/react\";\r\n\r\nexport interface DragButtonProps\r\n    extends Omit<React.ComponentProps<typeof Button>, \"variant\"> {\r\n    children: React.ReactNode;\r\n    onDragComplete?: () => void; // callback function to be called when the drag is completed\r\n    showConfirmation?: boolean; // whether to show the confirmation animation\r\n    variant?: keyof typeof BOX_SHADOW; // \"default\" | \"outline\"\r\n    className?: string;\r\n    successIcon?: React.ReactNode; // optional icon to be shown when the drag is completed\r\n    colorLight?: string; // light color of gradient drag-handle(use hex color code)\r\n    colorDark?: string; // dark color of gradient drag-handle(use hex color code)\r\n}\r\n\r\nconst DEFAULT_COLORS = {\r\n    light: \"#f5f56b\",\r\n    dark: \"#cc0066\"\r\n} as const;\r\n\r\nconst HANDLE_SIZE = 40;\r\nconst GAP_PX = 4;\r\n\r\nconst SPRING_TRANSITION = { type: \"spring\", stiffness: 600, damping: 40 } as const;\r\n\r\nconst SHIMMER_STYLE = {\r\n    background:\r\n        \"linear-gradient(180deg,rgba(255,255,255,0.4) 0%,rgba(255,255,255,0) 80%,transparent 100%)\",\r\n    filter: \"blur(0.5px)\",\r\n} as const;\r\n\r\nconst BOX_SHADOW = {\r\n    default:\r\n        \"inset 0 2px 3px 0 rgba(255,255,255,0.15), inset 0 -3px 6px 0 rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.1)\",\r\n    outline:\r\n        \"inset 0 2px 4px 0 rgba(0,0,0,0.12), inset 0 -2px 2px 0 rgba(255,255,255,0.3), inset 0 0 0 1px rgba(0,0,0,0.06)\",\r\n} as const;\r\n\r\nexport const DragButton = React.forwardRef<\r\n    HTMLButtonElement,\r\n    DragButtonProps\r\n>(\r\n    (\r\n        {\r\n            children,\r\n            className,\r\n            variant = \"default\",\r\n            onDragComplete,\r\n            showConfirmation = true,\r\n            successIcon = <Check className=\"size-5\" />,\r\n            colorLight = DEFAULT_COLORS.light,\r\n            colorDark = DEFAULT_COLORS.dark,\r\n            ...props\r\n        },\r\n        externalRef\r\n    ) => {\r\n        const [isSuccess, setIsSuccess] = React.useState(false);\r\n        const [travelDistance, setTravelDistance] = React.useState(0);\r\n        const dragX = useMotionValue(0);\r\n        const textOpacity = useTransform(dragX, [0, travelDistance], [1, 0.1]);\r\n\r\n        const gradient = `linear-gradient(to top, ${colorLight}, ${colorDark})`;\r\n\r\n        const iconStyle = {\r\n            background: gradient,\r\n            boxShadow: `0 2px 8px 0 ${colorDark}59, 0 1.5px 0 0 rgba(255,255,255,0.25) inset, 0 -2px 8px 0 ${colorDark}80 inset, 0 0 0 1px rgba(0,0,0,0.08)`,\r\n        };\r\n\r\n        const innerShadowStyle = {\r\n            boxShadow: `0 0 0 1px rgba(255,255,255,0.15) inset, 0 1.5px 0 0 rgba(255,255,255,0.2) inset, 0 -2px 4px 0 ${colorDark}33 inset`,\r\n        };\r\n\r\n        const containerRef = React.useRef<HTMLButtonElement | null>(null);\r\n\r\n        const mergedRef = React.useCallback(\r\n            (node: HTMLButtonElement | null) => {\r\n                containerRef.current = node;\r\n                if (typeof externalRef === \"function\") externalRef(node);\r\n                else if (externalRef)\r\n                    (\r\n                        externalRef as React.MutableRefObject<HTMLButtonElement | null>\r\n                    ).current = node;\r\n\r\n                if (!node) return;\r\n\r\n                const measure = () => {\r\n                    setTravelDistance(node.offsetWidth - HANDLE_SIZE - GAP_PX * 2.5);\r\n                };\r\n\r\n                measure();\r\n                const ro = new ResizeObserver(measure);\r\n                ro.observe(node);\r\n            },\r\n            [externalRef]\r\n        );\r\n\r\n        const handleDragEnd = () => {\r\n            if (dragX.get() >= travelDistance - 5) {\r\n                if (showConfirmation) {\r\n                    setIsSuccess(true);\r\n                    onDragComplete?.();\r\n\r\n                    setTimeout(() => {\r\n                        setIsSuccess(false);\r\n                        dragX.set(0);\r\n                    }, 1500);\r\n                } else {\r\n                    onDragComplete?.();\r\n                    dragX.set(0);\r\n                }\r\n            } else {\r\n                dragX.set(0);\r\n            }\r\n        };\r\n\r\n        return (\r\n            <Button\r\n                ref={mergedRef}\r\n                variant={variant}\r\n                className={cn(\r\n                    \"relative h-12 min-w-[200px] cursor-grab overflow-hidden rounded-xl p-1 text-sm font-medium transition-all duration-300 flex items-center select-none\",\r\n                    isSuccess && \"pointer-events-none\",\r\n                    className\r\n                )}\r\n                {...props}\r\n            >\r\n                {/* Progress bar background */}\r\n                <motion.div\r\n                    className=\"absolute left-1 top-1 bottom-1 bg-white/10 rounded-lg pointer-events-none z-0\"\r\n                    style={{ width: useTransform(dragX, (v) => v + HANDLE_SIZE) }}\r\n                />\r\n\r\n                {/* Background text */}\r\n                <motion.span\r\n                    style={{ opacity: textOpacity }}\r\n                    className=\"relative z-10 mx-auto transition-all duration-500 text-shadow-black/10 text-shadow-lg pointer-events-none pl-8\"\r\n                >\r\n                    {children}\r\n                </motion.span>\r\n\r\n                {/* Draggable Handle */}\r\n                <motion.div\r\n                    drag={!isSuccess ? \"x\" : false}\r\n                    dragConstraints={{ left: 0, right: travelDistance }}\r\n                    dragElastic={0}\r\n                    dragMomentum={false}\r\n                    onDragEnd={handleDragEnd}\r\n                    style={{\r\n                        x: dragX,\r\n                        ...iconStyle,\r\n                        zIndex: 40,\r\n                        width: HANDLE_SIZE,\r\n                        height: HANDLE_SIZE,\r\n                        left: 4,\r\n                        position: \"absolute\",\r\n                        borderRadius: \"10px\",\r\n                        top: 0,\r\n                        bottom: 0,\r\n                        marginTop: \"auto\",\r\n                        marginBottom: \"auto\",\r\n                    }}\r\n                    animate={{\r\n                        opacity: isSuccess ? 0 : 1,\r\n                        scale: isSuccess ? 0.8 : 1,\r\n                    }}\r\n                    transition={SPRING_TRANSITION}\r\n                    className={cn(\r\n                        \"flex items-center justify-center text-white cursor-grab active:cursor-grabbing\",\r\n                        isSuccess && \"cursor-default\"\r\n                    )}\r\n                >\r\n                    <span\r\n                        className=\"pointer-events-none absolute left-1/2 top-0 z-20 h-2/5 w-[80%] -translate-x-1/2 rounded-t-[inherit]\"\r\n                        style={SHIMMER_STYLE}\r\n                    />\r\n                    <span\r\n                        className=\"pointer-events-none absolute inset-0 z-0 rounded-[inherit]\"\r\n                        style={innerShadowStyle}\r\n                    />\r\n                    <ArrowRight size={20} className=\"drop-shadow-sm relative z-30\" />\r\n                </motion.div>\r\n\r\n                {/* Success Overlay */}\r\n                <AnimatePresence>\r\n                    {isSuccess && (\r\n                        <motion.div\r\n                            initial={{ scale: 0, opacity: 0 }}\r\n                            animate={{ scale: 1, opacity: 1 }}\r\n                            exit={{ scale: 0, opacity: 0 }}\r\n                            transition={{ ...SPRING_TRANSITION, bounce: 0.1 }}\r\n                            className=\"absolute inset-0 z-50 flex items-center justify-center text-white shadow-lg\"\r\n                            style={{\r\n                                background: gradient,\r\n                                borderRadius: \"8px\"\r\n                            }}\r\n                        >\r\n                            <motion.div\r\n                                initial={{ scale: 0.5, rotate: -45, opacity: 0 }}\r\n                                animate={{ scale: 1, rotate: 0, opacity: 1 }}\r\n                                transition={{ delay: 0.1, type: \"spring\", stiffness: 300, damping: 20 }}\r\n                            >\r\n                                {successIcon}\r\n                            </motion.div>\r\n                        </motion.div>\r\n                    )}\r\n                </AnimatePresence>\r\n            </Button>\r\n        );\r\n    }\r\n);\r\n\r\nDragButton.displayName = \"DragButton\";\r\n"
      }
    ]
  },
  {
    "name": "github-calendar",
    "title": "GitHub Calendar",
    "description": "Fully interactive GitHub contribution calendar with year-switching and tooltips.",
    "category": {
      "name": "Components",
      "slug": "components"
    },
    "tier": "free",
    "status": "stable",
    "image": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777376845/github-calender_light_dfldr4.webp",
    "imageDark": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777376846/github-calender_dark_zwpype.webp",
    "label": "New",
    "tags": [
      "github",
      "calendar",
      "contributions"
    ],
    "preview": {
      "disableSSR": true,
      "height": 400
    },
    "registryUrl": "https://grootstudio.vercel.app/r/github-calendar.json",
    "installAlias": "github-calendar",
    "npmDependencies": [
      "lucide-react"
    ],
    "registryDependencies": [],
    "examples": [
      {
        "title": "Blue Theme",
        "slug": "github-calendar-variant01"
      },
      {
        "title": "Circular Cells",
        "slug": "github-calendar-variant03"
      },
      {
        "title": "Minimal Layout",
        "slug": "github-calendar-variant02"
      },
      {
        "title": "Custom Range (Sunday Start)",
        "slug": "github-calendar-variant04"
      }
    ],
    "usage": {
      "import": "import { GitHubCalendar } from \"@/components/grootstudio/github-calendar\"",
      "code": "export default function Demo() {\n  return <GitHubCalendar username=\"Subhadipjana95\" />\n}"
    },
    "props": [
      {
        "name": "username",
        "type": "string",
        "required": true,
        "description": "GitHub username to fetch data for"
      },
      {
        "name": "data",
        "type": "ContributionData",
        "description": "Optional manual contribution data object"
      },
      {
        "name": "startDate",
        "type": "string",
        "description": "Start date in YYYY-MM-DD format"
      },
      {
        "name": "endDate",
        "type": "string",
        "description": "End date in YYYY-MM-DD format"
      },
      {
        "name": "startsOnSunday",
        "type": "boolean",
        "default": "true",
        "description": "Whether to start weeks on Sunday or Monday"
      },
      {
        "name": "cellSize",
        "type": "number",
        "default": "12",
        "description": "Size of each contribution cell in pixels"
      },
      {
        "name": "cellGap",
        "type": "number",
        "default": "3",
        "description": "Gap between cells in pixels"
      },
      {
        "name": "cellShape",
        "type": "rounded | circle",
        "default": "rounded",
        "description": "Visual shape of the contribution cells"
      },
      {
        "name": "theme",
        "type": "string | ThemeColors{{}}",
        "default": "github",
        "description": "Color theme (github, blue, sunset, purple, gray) or custom object"
      },
      {
        "name": "showMonthLabels",
        "type": "boolean",
        "default": "true",
        "description": "Display month names at the top"
      },
      {
        "name": "showStats",
        "type": "boolean",
        "default": "true",
        "description": "Show contribution count and username stats"
      },
      {
        "name": "showLegend",
        "type": "boolean",
        "default": "true",
        "description": "Display the Less/More color legend"
      }
    ],
    "files": [
      {
        "name": "github-calendar.tsx",
        "content": "\"use client\"\r\n\r\nimport { memo, useMemo, useState, useEffect, useId, useRef } from \"react\"\r\nimport { cn } from \"@/lib/utils\"\r\nimport { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from \"@/components/ui/tooltip\"\r\n\r\n// ─── Types ────────────────────────────────────────────────────────────────────\r\n\r\nexport type ContributionLevel = 0 | 1 | 2 | 3 | 4\r\n\r\nexport type ContributionData = {\r\n    [date: string]: {\r\n        level: ContributionLevel\r\n        label?: string\r\n        count?: number\r\n    }\r\n}\r\n\r\nexport type ThemeColors = {\r\n    level0: string\r\n    level1: string\r\n    level2: string\r\n    level3: string\r\n    level4: string\r\n}\r\n\r\nexport type CellShape = \"rounded\" | \"circle\"\r\n\r\nexport type GithubCalendarProps = {\r\n\r\n    username?: string // GitHub username \r\n    data?: ContributionData //Optional - Only for manual data\r\n    startDate?: string\r\n    endDate?: string\r\n    startsOnSunday?: boolean //Want to start weeks on Sunday or not ? \r\n    cellSize?: number\r\n    cellGap?: number\r\n    cellShape?: CellShape //Rounded | Circle\r\n    theme?: \"github\" | \"blue\" | \"sunset\" | \"purple\" | \"gray\" | ThemeColors\r\n    showMonthLabels?: boolean // Want the month labels on top \r\n    showStats?: boolean\r\n    showLegend?: boolean\r\n    className?: string // Custom class for custom styling\r\n}\r\n\r\n// ─── Built-in themes ──────────────────────────────────────────────────────────\r\n\r\nconst THEMES: Record<string, ThemeColors> = {\r\n    github: {\r\n        level0: \"#ebedf0\",\r\n        level1: \"#9be9a8\",\r\n        level2: \"#40c463\",\r\n        level3: \"#30a14e\",\r\n        level4: \"#216e39\",\r\n    },\r\n    blue: {\r\n        level0: \"#eff6ff\",\r\n        level1: \"#bfdbfe\",\r\n        level2: \"#60a5fa\",\r\n        level3: \"#2563eb\",\r\n        level4: \"#1e3a8a\",\r\n    },\r\n    sunset: {\r\n        level0: \"#fff7ed\",\r\n        level1: \"#fed7aa\",\r\n        level2: \"#fb923c\",\r\n        level3: \"#ea580c\",\r\n        level4: \"#7c2d12\",\r\n    },\r\n    purple: {\r\n        level0: \"#faf5ff\",\r\n        level1: \"#e9d5ff\",\r\n        level2: \"#a855f7\",\r\n        level3: \"#7e22ce\",\r\n        level4: \"#3b0764\",\r\n    },\r\n    gray: {\r\n        level0: \"#f3f4f6\",\r\n        level1: \"#d1d5db\",\r\n        level2: \"#9ca3af\",\r\n        level3: \"#4b5563\",\r\n        level4: \"#111827\",\r\n    },\r\n}\r\n\r\nconst DARK_THEMES: Record<string, ThemeColors> = {\r\n    github: {\r\n        level0: \"#161b22\",\r\n        level1: \"#0e4429\",\r\n        level2: \"#006d32\",\r\n        level3: \"#26a641\",\r\n        level4: \"#39d353\",\r\n    },\r\n    blue: {\r\n        level0: \"#161e2b\",\r\n        level1: \"#1e3a5f\",\r\n        level2: \"#1d4ed8\",\r\n        level3: \"#3b82f6\",\r\n        level4: \"#93c5fd\",\r\n    },\r\n    sunset: {\r\n        level0: \"#261a13\",\r\n        level1: \"#7c2d12\",\r\n        level2: \"#c2410c\",\r\n        level3: \"#f97316\",\r\n        level4: \"#fdba74\",\r\n    },\r\n    purple: {\r\n        level0: \"#191124\",\r\n        level1: \"#3b0764\",\r\n        level2: \"#6b21a8\",\r\n        level3: \"#a855f7\",\r\n        level4: \"#d8b4fe\",\r\n    },\r\n    gray: {\r\n        level0: \"#13181f\",\r\n        level1: \"#374151\",\r\n        level2: \"#6b7280\",\r\n        level3: \"#9ca3af\",\r\n        level4: \"#e5e7eb\",\r\n    },\r\n}\r\n\r\n// ─── Helpers ──────────────────────────────────────────────────────────────────\r\n\r\nfunction parseDate(dateStr: string): Date {\r\n    const parts = dateStr.split(\"-\").map(Number)\r\n    const y = parts[0] ?? 0\r\n    const m = parts[1] ?? 1\r\n    const d = parts[2] ?? 1\r\n    return new Date(y, m - 1, d)\r\n}\r\n\r\nfunction formatDate(date: Date): string {\r\n    const y = date.getFullYear()\r\n    const m = String(date.getMonth() + 1).padStart(2, \"0\")\r\n    const d = String(date.getDate()).padStart(2, \"0\")\r\n    return `${y}-${m}-${d}`\r\n}\r\n\r\nfunction addDays(date: Date, days: number): Date {\r\n    const d = new Date(date)\r\n    d.setDate(d.getDate() + days)\r\n    return d\r\n}\r\n\r\nconst MONTH_NAMES = [\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\", \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\"]\r\n\r\n// ─── API fetch ────────────────────────────────────────────────────────────────\r\n\r\ntype APIResponse = {\r\n    total: Record<string, number>\r\n    contributions: { date: string; count: number; level: number }[]\r\n}\r\n\r\nasync function fetchContributions(username: string): Promise<ContributionData> {\r\n    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`)\r\n    if (!res.ok) {\r\n        throw new Error(`Could not fetch contributions for \"${username}\" (${res.status})`)\r\n    }\r\n    const json: APIResponse = await res.json()\r\n\r\n    const result: ContributionData = {}\r\n    for (const entry of json.contributions) {\r\n        result[entry.date] = {\r\n            level: Math.min(4, Math.max(0, entry.level)) as ContributionLevel,\r\n            count: entry.count,\r\n        }\r\n    }\r\n    return result\r\n}\r\n\r\n// ─── Build calendar grid ──────────────────────────────────────────────────────\r\n\r\nfunction buildGrid(\r\n    startDate: string,\r\n    endDate: string,\r\n    startsOnSunday: boolean\r\n): { weeks: (string | null)[][]; monthLabels: { label: string; weekIndex: number }[]; gridStart: string } {\r\n    const start = parseDate(startDate)\r\n    const end = parseDate(endDate)\r\n\r\n    const startDay = startsOnSunday ? 0 : 1\r\n    const startDow = start.getDay()\r\n    const offset = ((startDow - startDay) + 7) % 7\r\n    const gridStart = addDays(start, -offset)\r\n\r\n    const weeks: (string | null)[][] = []\r\n    const monthLabels: { label: string; weekIndex: number }[] = []\r\n\r\n    let current = new Date(gridStart)\r\n    let weekIndex = 0\r\n    let lastMonth = -1\r\n\r\n    while (current <= end || (weeks.length > 0 && (weeks[weeks.length - 1]?.length ?? 0) < 7)) {\r\n        const week: (string | null)[] = []\r\n\r\n        for (let d = 0; d < 7; d++) {\r\n            const dateStr = formatDate(current)\r\n            const isInRange = current >= start && current <= end\r\n            week.push(isInRange ? dateStr : null)\r\n\r\n            if (isInRange && current.getMonth() !== lastMonth) {\r\n                lastMonth = current.getMonth()\r\n                monthLabels.push({ label: MONTH_NAMES[current.getMonth()]!, weekIndex })\r\n            }\r\n\r\n            current = addDays(current, 1)\r\n        }\r\n\r\n        weeks.push(week)\r\n        weekIndex++\r\n\r\n        if (current > end && weeks.length > 0 && (weeks[weeks.length - 1]?.every((d) => d === null || parseDate(d) > end) ?? false)) break\r\n    }\r\n\r\n    return { weeks, monthLabels, gridStart: formatDate(gridStart) }\r\n}\r\n\r\n// ─── Tooltip state type ───────────────────────────────────────────────────────\r\n\r\ntype TooltipState = {\r\n    visible: boolean\r\n    date: string\r\n    count: number | undefined\r\n    label: string | undefined\r\n    x: number\r\n    y: number\r\n}\r\n\r\n// ─── Loading Skeleton ─────────────────────────────────────────────────────────\r\n\r\nfunction CalendarSkeleton({ cellSize = 12, cellGap = 3, className }: { cellSize?: number; cellGap?: number; className?: string }) {\r\n    const step = cellSize + cellGap\r\n    const weeks = 53\r\n    const days = 7\r\n    return (\r\n        <div className={cn(\"w-fit mx-auto space-y-3 animate-pulse\", className)}>\r\n            <div className=\"flex gap-6\">\r\n                <div className=\"h-4 w-32 rounded bg-muted\" />\r\n                <div className=\"h-4 w-20 rounded bg-muted\" />\r\n                <div className=\"h-4 w-24 rounded bg-muted\" />\r\n            </div>\r\n            <div className=\"overflow-x-auto\">\r\n                <svg\r\n                    width={weeks * step - cellGap}\r\n                    height={16 + days * step - cellGap}\r\n                    className=\"overflow-visible\"\r\n                >\r\n                    {Array.from({ length: weeks }).map((_, wi) =>\r\n                        Array.from({ length: days }).map((_, di) => (\r\n                            <rect\r\n                                key={`${wi}-${di}`}\r\n                                x={wi * step}\r\n                                y={16 + di * step}\r\n                                width={cellSize}\r\n                                height={cellSize}\r\n                                rx={cellSize * 0.2}\r\n                                className=\"fill-muted\"\r\n                            />\r\n                        ))\r\n                    )}\r\n                </svg>\r\n            </div>\r\n        </div>\r\n    )\r\n}\r\n\r\n// ─── Main component ───────────────────────────────────────────────────────────\r\n\r\nexport const GithubCalendar = memo(function GithubCalendar({\r\n    username,\r\n    data: dataProp,\r\n    startDate,\r\n    endDate,\r\n    startsOnSunday = true,\r\n    cellSize = 12,\r\n    cellGap = 3,\r\n    cellShape = \"rounded\",\r\n    theme = \"github\",\r\n    showMonthLabels = true,\r\n    showStats = true,\r\n    showLegend = true,\r\n    className,\r\n}: GithubCalendarProps) {\r\n    const id = useId()\r\n    // Scroll ref — used to auto-scroll to most recent months on compact viewports\r\n    const scrollRef = useRef<HTMLDivElement>(null)\r\n    const [isDark, setIsDark] = useState(false)\r\n\r\n    useEffect(() => {\r\n        const checkDark = () => {\r\n            setIsDark(\r\n                document.documentElement.classList.contains(\"dark\") ||\r\n                document.body.classList.contains(\"dark\")\r\n            )\r\n        }\r\n\r\n        checkDark()\r\n\r\n        const observer = new MutationObserver(checkDark)\r\n        const opts = { attributes: true, attributeFilter: [\"class\"] }\r\n        observer.observe(document.documentElement, opts)\r\n        observer.observe(document.body, opts)\r\n\r\n        return () => observer.disconnect()\r\n    }, [])\r\n\r\n    // ── Fetch state ────────────────────────────────────────────────────────\r\n    const [fetchedData, setFetchedData] = useState<ContributionData | null>(null)\r\n    const [loading, setLoading] = useState(!!username)\r\n    const [fetchError, setFetchError] = useState<string | null>(null)\r\n\r\n    useEffect(() => {\r\n        if (!username) return\r\n        setFetchedData(null)\r\n        setFetchError(null)\r\n        setLoading(true)\r\n\r\n        fetchContributions(username)\r\n            .then((d) => setFetchedData(d))\r\n            .catch((e) => setFetchError(e instanceof Error ? e.message : String(e)))\r\n            .finally(() => setLoading(false))\r\n    }, [username])\r\n\r\n    // ── Choose data source ─────────────────────────────────────────────────\r\n    const data: ContributionData = dataProp ?? fetchedData ?? {}\r\n\r\n    // ── Resolve dates ──────────────────────────────────────────────────────\r\n    const resolvedEnd = endDate ?? formatDate(new Date())\r\n    const resolvedStart = useMemo(() => {\r\n        if (startDate) return startDate\r\n        const d = parseDate(resolvedEnd)\r\n        d.setFullYear(d.getFullYear() - 1)\r\n        d.setDate(d.getDate() + 1)\r\n        return formatDate(d)\r\n    }, [startDate, resolvedEnd])\r\n\r\n    // ── Resolve theme colors ───────────────────────────────────────────────\r\n    const lightColors: ThemeColors =\r\n        typeof theme === \"object\" ? theme : (THEMES[theme] ?? THEMES.github!)\r\n    const darkColors: ThemeColors =\r\n        typeof theme === \"object\" ? theme : (DARK_THEMES[theme] ?? DARK_THEMES.github!)\r\n\r\n    const activeColors = isDark ? darkColors : lightColors\r\n\r\n    // ── Tooltip state ──────────────────────────────────────────────────────\r\n    const [tooltip, setTooltip] = useState<TooltipState>({\r\n        visible: false,\r\n        date: \"\",\r\n        count: undefined,\r\n        label: undefined,\r\n        x: 0,\r\n        y: 0,\r\n    })\r\n\r\n    // ── Build grid ─────────────────────────────────────────────────────────\r\n    const { weeks, monthLabels, gridStart } = useMemo(\r\n        () => buildGrid(resolvedStart, resolvedEnd, startsOnSunday),\r\n        [resolvedStart, resolvedEnd, startsOnSunday]\r\n    )\r\n\r\n    // ── Stats ──────────────────────────────────────────────────────────────\r\n    const stats = useMemo(() => {\r\n        const entries = Object.entries(data)\r\n        const total = entries.reduce((sum, [, v]) => sum + (v.count ?? (v.level > 0 ? 1 : 0)), 0)\r\n        const activeDays = entries.filter(([, v]) => v.level > 0).length\r\n        const maxStreak = (() => {\r\n            let max = 0\r\n            let cur = 0\r\n            const sorted = entries\r\n                .filter(([, v]) => v.level > 0)\r\n                .map(([d]) => d)\r\n                .sort()\r\n            for (let i = 0; i < sorted.length; i++) {\r\n                if (i === 0) { cur = 1; max = 1; continue }\r\n                const prev = parseDate(sorted[i - 1]!)\r\n                const curr = parseDate(sorted[i]!)\r\n                const diff = (curr.getTime() - prev.getTime()) / 86400000\r\n                if (diff === 1) { cur++; max = Math.max(max, cur) }\r\n                else cur = 1\r\n            }\r\n            return max\r\n        })()\r\n        return { total, activeDays, maxStreak }\r\n    }, [data])\r\n\r\n    // ── Dimensions ────────────────────────────────────────────────────────\r\n    const step = cellSize + cellGap\r\n    const monthLabelHeight = showMonthLabels ? 20 : 0\r\n    const svgWidth = weeks.length * step - cellGap\r\n    const svgHeight = monthLabelHeight + 7 * step - cellGap\r\n\r\n    // Auto-scroll to the right end (most recent months) — must be before early returns\r\n    useEffect(() => {\r\n        if (scrollRef.current) {\r\n            scrollRef.current.scrollLeft = scrollRef.current.scrollWidth\r\n        }\r\n    }, [fetchedData, dataProp])\r\n\r\n    // ── Loading / error states ───────────────────────────\r\n    if (loading) {\r\n        return <CalendarSkeleton cellSize={cellSize} cellGap={cellGap} className={className} />\r\n    }\r\n\r\n    if (fetchError) {\r\n        return (\r\n            <div className={cn(\"w-fit mx-auto flex items-center gap-2 rounded-md border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive\", className)}>\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\">\r\n                    <circle cx=\"12\" cy=\"12\" r=\"10\" /><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\" /><line x1=\"12\" y1=\"16\" x2=\"12.01\" y2=\"16\" />\r\n                </svg>\r\n                {fetchError}\r\n            </div>\r\n        )\r\n    }\r\n\r\n    const cellRx = cellShape === \"circle\" ? cellSize / 2 : cellSize * 0.2\r\n\r\n    return (\r\n        <div className={cn(\"w-full overflow-x-hidden border rounded-sm\", className)}>\r\n            <div className=\"w-fit mx-auto max-w-full flex flex-col gap-3 p-3\">\r\n                <div\r\n                    ref={scrollRef}\r\n                    className=\"relative overflow-x-auto\"\r\n                    style={{ scrollbarWidth: \"none\", msOverflowStyle: \"none\" } as React.CSSProperties}\r\n                >\r\n                    <svg\r\n                        width={svgWidth}\r\n                        height={svgHeight}\r\n                        viewBox={`0 0 ${svgWidth} ${svgHeight}`}\r\n                        className=\"overflow-visible\"\r\n                    >\r\n                        {/* month labels */}\r\n                        {showMonthLabels && (() => {\r\n                            const byWeek = new Map<number, string>()\r\n                            monthLabels.forEach(({ label, weekIndex }) =>\r\n                                byWeek.set(weekIndex, label)\r\n                            )\r\n                            return Array.from(byWeek.entries()).map(([weekIndex, label]) => (\r\n                                <text\r\n                                    key={`${label}-${weekIndex}`}\r\n                                    x={weekIndex * step}\r\n                                    y={10}\r\n                                    fontSize={14}\r\n                                    fill={isDark ? \"#fafafa\" : \"#0a0a0a\"}\r\n                                    fontFamily=\"inherit\"\r\n                                >\r\n                                    {label}\r\n                                </text>\r\n                            ))\r\n                        })()}\r\n\r\n                        {/* cells */}\r\n                        {weeks.map((week, wi) =>\r\n                            week.map((date, di) => {\r\n                                const entry = date ? data[date] : undefined\r\n                                const level: ContributionLevel = entry?.level ?? 0\r\n                                const cellCenterX = wi * step + cellSize / 2\r\n                                const cellTopY = monthLabelHeight + di * step\r\n\r\n                                if (!date) {\r\n                                    const cellDate = formatDate(addDays(parseDate(gridStart), wi * 7 + di))\r\n                                    if (cellDate > resolvedEnd) return null\r\n                                }\r\n\r\n                                return (\r\n                                    <rect\r\n                                        key={`${wi}-${di}`}\r\n                                        x={wi * step}\r\n                                        y={cellTopY}\r\n                                        width={cellSize}\r\n                                        height={cellSize}\r\n                                        rx={cellRx}\r\n                                        fill={activeColors[`level${level}` as keyof ThemeColors]}\r\n                                        style={{ transition: \"opacity 0.1s\" }}\r\n                                        onMouseEnter={() => {\r\n                                            if (!date) return\r\n                                            setTooltip({\r\n                                                visible: true,\r\n                                                date,\r\n                                                count: entry?.count,\r\n                                                label: entry?.label,\r\n                                                x: cellCenterX,\r\n                                                y: cellTopY,\r\n                                            })\r\n                                        }}\r\n                                        onMouseLeave={() =>\r\n                                            setTooltip((t) => ({ ...t, visible: false }))\r\n                                        }\r\n                                    />\r\n                                )\r\n                            })\r\n                        )}\r\n                    </svg>\r\n\r\n                    {/* tooltip */}\r\n                    {tooltip.visible && (\r\n                        <TooltipProvider>\r\n                            <Tooltip open>\r\n                                <TooltipTrigger asChild>\r\n                                    <div\r\n                                        className=\"pointer-events-none absolute z-50\"\r\n                                        style={{\r\n                                            left: tooltip.x,\r\n                                            top: tooltip.y,\r\n                                            width: 1,\r\n                                            height: 1,\r\n                                        }}\r\n                                    />\r\n                                </TooltipTrigger>\r\n                                <TooltipContent side=\"top\">\r\n                                    <div className=\"font-medium\">\r\n                                        {tooltip.label\r\n                                            ? tooltip.label\r\n                                            : tooltip.count !== undefined\r\n                                                ? `${tooltip.count} contribution${tooltip.count !== 1 ? \"s\" : \"\"}`\r\n                                        : data[tooltip.date]?.level !== undefined\r\n                                                    ? `Level ${data[tooltip.date]?.level}`\r\n                                                    : \"No contributions\"}\r\n                                    </div>\r\n                                    <div className=\"text-muted\">{tooltip.date}</div>\r\n                                </TooltipContent>\r\n                            </Tooltip>\r\n                        </TooltipProvider>\r\n                    )}\r\n                </div>\r\n\r\n                <div className=\"flex items-start justify-between gap-x-4\">\r\n\r\n                    {/* legend (left) */}\r\n                    {showLegend && (\r\n                        <div className=\"flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground shrink-0 mt-0.5\">\r\n                            <span>Less</span>\r\n                            {([0, 1, 2, 3, 4] as ContributionLevel[]).map((level) => (\r\n                                <svg key={level} width={cellSize} height={cellSize}>\r\n                                    <rect\r\n                                        width={cellSize}\r\n                                        height={cellSize}\r\n                                        rx={cellRx}\r\n                                        fill={activeColors[`level${level}`]}\r\n                                    />\r\n                                </svg>\r\n                            ))}\r\n                            <span>More</span>\r\n                        </div>\r\n                    )}\r\n\r\n                    {/* stats line (right) */}\r\n                    {showStats && (\r\n                        <div className=\"flex flex-1 flex-wrap justify-end gap-x-1 text-sm text-muted-foreground ml-auto\">\r\n                            {username && (\r\n                                <span className=\"font-semibold text-foreground\">@{username}</span>\r\n                            )}\r\n                            <span>contributed</span>\r\n                            <span className=\"font-semibold text-foreground\">{stats.total.toLocaleString()}</span>\r\n                            <span>this year on</span>\r\n                            <a href={`https://github.com/${username}`} className=\"underline font-medium text-foreground\">GitHub</a>\r\n                        </div>\r\n                    )}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    )\r\n})\r\n\r\nGithubCalendar.displayName = \"GithubCalendar\""
      }
    ]
  },
  {
    "name": "github-stars",
    "title": "GitHub Stars",
    "description": "Displays a GitHub repo star count with server-side fetching and tooltips.",
    "category": {
      "name": "Components",
      "slug": "components"
    },
    "tier": "free",
    "status": "stable",
    "image": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777377805/github-star_light_jf47tx.webp",
    "imageDark": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777377805/github-star_dark_an1u1z.webp",
    "tags": [
      "github",
      "stars",
      "stats"
    ],
    "hasReactVariant": true,
    "preview": {
      "disableSSR": false,
      "height": 300
    },
    "registryUrl": "https://grootstudio.vercel.app/r/github-stars.json",
    "installAlias": "github-stars",
    "npmDependencies": [
      "lucide-react"
    ],
    "registryDependencies": [
      "Tooltip",
      "Button"
    ],
    "usage": {
      "import": "import { GitHubStars } from \"@/components/grootstudio/github-stars\"",
      "code": "export default function Demo() {\n  return <GitHubStars repo=\"Subhadipjana95/groot-studio\" />\n}"
    },
    "props": [
      {
        "name": "repo",
        "type": "string",
        "required": true,
        "description": "Repository path (owner/repo)"
      },
      {
        "name": "label",
        "type": "string",
        "description": "Label to display"
      },
      {
        "name": "className",
        "type": "string",
        "description": "Optional Class name to style the component"
      }
    ],
    "files": [
      {
        "name": "github-stars.tsx",
        "content": "import { cva, type VariantProps } from \"class-variance-authority\";\r\nimport { cn } from \"@/lib/utils\";\r\nimport { Button } from \"@/components/ui/button\";\r\nimport {\r\n  Tooltip,\r\n  TooltipContent,\r\n  TooltipProvider,\r\n  TooltipTrigger,\r\n} from \"@/components/ui/tooltip\";\r\n\r\nconst githubStarsVariants = cva(\"gap-1.5 pr-1.5 pl-2\", {\r\n  variants: {\r\n    size: {\r\n      default: \"h-9 text-sm\",\r\n      sm: \"h-8 text-xs\",\r\n      lg: \"h-10 text-base pr-2 pl-2.5\",\r\n    },\r\n  },\r\n  defaultVariants: {\r\n    size: \"default\",\r\n  }\r\n});\r\n\r\ninterface GitHubStarsProps extends VariantProps<typeof githubStarsVariants> {\r\n  repo: string;\r\n  locales?: Intl.LocalesArgument;\r\n  className?: string;\r\n}\r\n\r\nasync function getStarCount(repo: string): Promise<number> {\r\n  try {\r\n    const res = await fetch(`https://api.github.com/repos/${repo}`, {\r\n      next: { revalidate: 86400 },\r\n    });\r\n\r\n    if (!res.ok) return 0;\r\n\r\n    const data = (await res.json()) as { stargazers_count?: number };\r\n    return Number(data?.stargazers_count) || 0;\r\n  } catch {\r\n    return 0;\r\n  }\r\n}\r\n\r\nexport async function GitHubStars({\r\n  repo, // GitHub repository in `owner/repo` format.\r\n  locales = \"en-US\", // Optional locales for number formatting\r\n  className, // Optional class name for Styling\r\n  size // Optional size for the button\r\n}: GitHubStarsProps) {\r\n  const count = await getStarCount(repo);\r\n\r\n  const formatted = new Intl.NumberFormat(locales, {\r\n    notation: \"compact\",\r\n    compactDisplay: \"short\",\r\n  })\r\n    .format(count)\r\n    .toLowerCase();\r\n\r\n  const full = new Intl.NumberFormat(locales).format(count);\r\n\r\n  return (\r\n    <TooltipProvider>\r\n      <Tooltip>\r\n        <TooltipTrigger asChild>\r\n          <Button\r\n            className={cn(githubStarsVariants({ size }), \"border-border dark:border-input hover:bg-input\", className)}\r\n            variant=\"ghost\"\r\n            asChild\r\n          >\r\n            <a\r\n              href={`https://github.com/${repo}`}\r\n              target=\"_blank\"\r\n              rel=\"noopener noreferrer\"\r\n            >\r\n              <svg\r\n                className=\"-translate-y-px\"\r\n                viewBox=\"0 0 24 24\"\r\n                width=\"16\"\r\n                height=\"16\"\r\n                aria-hidden=\"true\"\r\n              >\r\n                <path\r\n                  d=\"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12\"\r\n                  fill=\"currentColor\"\r\n                />\r\n              </svg>\r\n              <span className=\"text-[0.8125rem] text-muted-foreground tabular-nums\">\r\n                {formatted}\r\n              </span>\r\n            </a>\r\n          </Button>\r\n        </TooltipTrigger>\r\n        <TooltipContent className=\"font-sans\">{full} stars</TooltipContent>\r\n      </Tooltip>\r\n    </TooltipProvider>\r\n  );\r\n}\r\n"
      }
    ]
  },
  {
    "name": "glow-card",
    "title": "Glow Card",
    "description": "A card with a dynamic glowing cursor-tracking hover effect.",
    "category": {
      "name": "Components",
      "slug": "components"
    },
    "tier": "free",
    "status": "stable",
    "visibility": false,
    "image": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777378888/glow-card_light_ucxzze.webp",
    "imageDark": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777378889/glow-card_dark_lzl9me.webp",
    "tags": [
      "card",
      "glow",
      "effect"
    ],
    "preview": {
      "disableSSR": true,
      "height": 400
    },
    "registryUrl": "https://grootstudio.vercel.app/r/glow-card.json",
    "installAlias": "glow-card",
    "npmDependencies": [],
    "registryDependencies": [],
    "usage": {
      "import": "import { GlowCard } from \"@/components/grootstudio/glow-card\"",
      "code": "export default function Demo() {\n  return (\n    <GlowCard className=\"p-6\">\n      <h3 className=\"text-xl font-bold\">Groot Studio</h3>\n      <p className=\"text-muted-foreground\">Interactive glowing cards.</p>\n    </GlowCard>\n  )\n}"
    },
    "props": [
      {
        "name": "children",
        "type": "ReactNode",
        "required": true,
        "description": "Content inside the card"
      },
      {
        "name": "glowColor",
        "type": "string",
        "default": "rgba(var(--primary), 0.2)",
        "description": "Radial gradient color for the glow effect"
      },
      {
        "name": "className",
        "type": "string",
        "description": "Custom CSS classes"
      }
    ],
    "files": [
      {
        "name": "glow-card.tsx",
        "content": "import { cn } from \"@/lib/utils\"\r\n\r\ninterface GlowCardProps {\r\n  children: React.ReactNode\r\n  className?: string\r\n}\r\n\r\nexport function GlowCard({ children, className }: GlowCardProps) {\r\n  return (\r\n    <div\r\n      className={cn(\r\n        \"relative rounded-xl border border-white/10 bg-white/5 p-6\",\r\n        \"shadow-[0_0_30px_rgba(120,80,255,0.15)]\",\r\n        \"hover:shadow-[0_0_40px_rgba(120,80,255,0.3)]\",\r\n        \"transition-shadow duration-300\",\r\n        className\r\n      )}\r\n    >\r\n      {children}\r\n    </div>\r\n  )\r\n}"
      }
    ]
  },
  {
    "name": "gradient-background-text",
    "title": "Gradient Background Text",
    "description": "Text component featuring an animated background orb field and engraved depth effect.",
    "category": {
      "name": "Text Animations",
      "slug": "text-animations"
    },
    "tier": "free",
    "status": "stable",
    "image": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777377127/gradient-background-text_light_z4h7zf.webp",
    "imageDark": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777377127/gradient-background-text_dark_jyhqpj.webp",
    "tags": [
      "text",
      "gradient",
      "3d"
    ],
    "preview": {
      "disableSSR": true,
      "height": 400
    },
    "registryUrl": "https://grootstudio.vercel.app/r/gradient-background-text.json",
    "installAlias": "gradient-background-text",
    "npmDependencies": [
      "motion/react"
    ],
    "registryDependencies": [],
    "usage": {
      "import": "import { GradientBackgroundText } from \"@/components/grootstudio/gradient-background-text\"",
      "code": "export default function Demo() {\n  return <GradientBackgroundText>Groot Studio</GradientBackgroundText>\n}"
    },
    "props": [
      {
        "name": "children",
        "type": "ReactNode",
        "required": true,
        "description": "Inner text content"
      },
      {
        "name": "colors",
        "type": "string",
        "default": "#cc0066 | #1aff53 | #004d99 | #f5f56b | #a600e6",
        "description": "Gradient colors for background animation"
      },
      {
        "name": "className",
        "type": "string",
        "description": "Styling classes"
      }
    ],
    "files": [
      {
        "name": "gradient-background-text.tsx",
        "content": "\"use client\";\r\n\r\nimport React, { memo, useMemo } from \"react\";\r\nimport { motion, MotionProps } from \"motion/react\";\r\nimport { cn } from \"@/lib/utils\";\r\n\r\ninterface GradientTextProps extends Omit<\r\n  React.HTMLAttributes<HTMLElement>,\r\n  keyof MotionProps | \"style\"\r\n> {\r\n  className?: string;\r\n  children: React.ReactNode;\r\n  as?: React.ElementType;\r\n  colors?: string;\r\n  style?: React.CSSProperties;\r\n}\r\n\r\nconst keyframesStyle = `\r\n@keyframes gradient-border {\r\n  0%, 100% { border-radius: 37% 29% 27% 27% / 28% 25% 41% 37%; }\r\n  25% { border-radius: 47% 29% 39% 49% / 61% 19% 66% 26%; }\r\n  50% { border-radius: 57% 23% 47% 72% / 63% 17% 66% 33%; }\r\n  75% { border-radius: 28% 49% 29% 100% / 93% 20% 64% 25%; }\r\n}\r\n@keyframes gradient-1 {\r\n  0%, 100% { top: 0; right: 0; }\r\n  50% { top: 50%; right: 25%; }\r\n  75% { top: 25%; right: 50%; }\r\n}\r\n@keyframes gradient-2 {\r\n  0%, 100% { top: 0; left: 0; }\r\n  60% { top: 75%; left: 25%; }\r\n  85% { top: 50%; left: 50%; }\r\n}\r\n@keyframes gradient-3 {\r\n  0%, 100% { bottom: 0; left: 0; }\r\n  40% { bottom: 50%; left: 25%; }\r\n  65% { bottom: 25%; left: 50%; }\r\n}\r\n@keyframes gradient-4 {\r\n  0%, 100% { bottom: 0; right: 0; }\r\n  50% { bottom: 25%; right: 40%; }\r\n  90% { bottom: 50%; right: 25%; }\r\n}\r\n@media (prefers-reduced-motion: reduce) {\r\n  .groot-gradient-orb {\r\n    animation: none !important;\r\n  }\r\n}\r\n`;\r\n\r\nconst depthStyles: React.CSSProperties = {\r\n  textShadow: `\r\n    0px 1px 0px rgba(0,0,0,0.45),\r\n    0px 2px 0px rgba(0,0,0,0.4),\r\n    0px 3px 0px rgba(0,0,0,0.35),\r\n    0px 4px 0px rgba(0,0,0,0.25),\r\n    0px 5px 0px rgba(0,0,0,0.15),\r\n    0px 6px 0px rgba(0,0,0,0.08),\r\n    0px 8px 12px rgba(0,0,0,0.35),\r\n    0px -1px 0px rgba(255,255,255,0.1)\r\n  `,\r\n  transform: \"translateZ(16px)\",\r\n  filter: \"drop-shadow(0 8px 12px rgba(0,0,0,0.4))\",\r\n};\r\n\r\nconst perspectiveStyle: React.CSSProperties = {\r\n  perspective: \"600px\",\r\n  perspectiveOrigin: \"50% 50%\",\r\n  display: \"inline-flex\",\r\n  transformStyle: \"preserve-3d\",\r\n};\r\n\r\nconst motionStyle: React.CSSProperties = {\r\n  ...depthStyles,\r\n  transformStyle: \"preserve-3d\",\r\n  willChange: \"transform\",\r\n};\r\n\r\nconst rimLightStyle: React.CSSProperties = {\r\n  background:\r\n    \"linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)\",\r\n};\r\n\r\nconst rimShadowStyle: React.CSSProperties = {\r\n  background:\r\n    \"linear-gradient(90deg, transparent, rgba(0,0,0,0.4), transparent)\",\r\n};\r\n\r\nconst ORB_CLASS =\r\n  \"groot-gradient-orb pointer-events-none absolute h-[30vw] w-[30vw] animate-[gradient-border_6s_ease-in-out_infinite] mix-blend-overlay blur-lg\";\r\n\r\nconst GradientBackgroundText = memo(function GradientBackgroundText({\r\n  className,\r\n  children,\r\n  as: Component = \"span\",\r\n  colors = \"#cc0066, #1aff53, #004d99, #f5f56b, #a600e6\",\r\n  style,\r\n  ...props\r\n}: GradientTextProps) {\r\n  const MotionComponent = useMemo(() => motion.create(Component), [Component]);\r\n\r\n  const colorArray = useMemo(\r\n    () => colors.split(\",\").map((c) => c.trim()),\r\n    [colors],\r\n  );\r\n\r\n  const mergedMotionStyle = useMemo(\r\n    () => ({ ...motionStyle, ...style }),\r\n    [style],\r\n  );\r\n\r\n  return (\r\n    <span style={perspectiveStyle}>\r\n      <style dangerouslySetInnerHTML={{ __html: keyframesStyle }} />\r\n      <MotionComponent\r\n        className={cn(\r\n          \"relative inline-flex overflow-hidden font-bold tracking-tight text-transparent bg-clip-text px-2 pb-1.5 rounded-xl\",\r\n          className,\r\n        )}\r\n        style={mergedMotionStyle}\r\n        {...props}\r\n      >\r\n        {children}\r\n\r\n        <span\r\n          aria-hidden\r\n          className=\"pointer-events-none absolute inset-x-0 top-0 h-px\"\r\n          style={rimLightStyle}\r\n        />\r\n\r\n        <span\r\n          aria-hidden\r\n          className=\"pointer-events-none absolute inset-x-0 bottom-0 h-px\"\r\n          style={rimShadowStyle}\r\n        />\r\n\r\n        <span\r\n          aria-hidden\r\n          className=\"pointer-events-none absolute inset-0 mix-blend-darken dark:mix-blend\"\r\n        >\r\n          <span\r\n            className={cn(\r\n              ORB_CLASS,\r\n              \"-top-1/2 animate-[gradient-border_6s_ease-in-out_infinite,gradient-1_12s_ease-in-out_infinite_alternate]\",\r\n            )}\r\n            style={{ backgroundColor: colorArray[0] }}\r\n          />\r\n          <span\r\n            className={cn(\r\n              ORB_CLASS,\r\n              \"right-0 top-0 animate-[gradient-border_6s_ease-in-out_infinite,gradient-2_12s_ease-in-out_infinite_alternate]\",\r\n            )}\r\n            style={{ backgroundColor: colorArray[1] }}\r\n          />\r\n          <span\r\n            className={cn(\r\n              ORB_CLASS,\r\n              \"bottom-0 left-0 animate-[gradient-border_6s_ease-in-out_infinite,gradient-3_12s_ease-in-out_infinite_alternate]\",\r\n            )}\r\n            style={{ backgroundColor: colorArray[2] }}\r\n          />\r\n          <span\r\n            className={cn(\r\n              ORB_CLASS,\r\n              \"-bottom-1/2 right-0 animate-[gradient-border_6s_ease-in-out_infinite,gradient-4_12s_ease-in-out_infinite_alternate]\",\r\n            )}\r\n            style={{ backgroundColor: colorArray[3] }}\r\n          />\r\n        </span>\r\n      </MotionComponent>\r\n    </span>\r\n  );\r\n});\r\n\r\nGradientBackgroundText.displayName = \"GradientBackgroundText\";\r\n\r\nexport { GradientBackgroundText };\r\n"
      }
    ]
  },
  {
    "name": "gradient-text-fill",
    "title": "Gradient Text",
    "description": "High-impact text component with moving color orbs and 3D depth.",
    "category": {
      "name": "Text Animations",
      "slug": "text-animations"
    },
    "tier": "free",
    "status": "stable",
    "label": "new",
    "image": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777377361/gradient-text-fill_light_mvkhox.webp",
    "imageDark": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777377361/gradient-text-fill_dark_vp5qbx.webp",
    "tags": [
      "text",
      "gradient",
      "motion"
    ],
    "preview": {
      "disableSSR": true,
      "height": 400
    },
    "registryUrl": "https://grootstudio.vercel.app/r/gradient-text-fill.json",
    "installAlias": "gradient-text-fill",
    "npmDependencies": [
      "motion/react"
    ],
    "registryDependencies": [],
    "usage": {
      "import": "import { GradientText } from \"@/components/grootstudio/gradient-text\"",
      "code": "export default function Demo() {\n  return <GradientText>Groot Studio</GradientText>\n}"
    },
    "props": [
      {
        "name": "children",
        "type": "ReactNode",
        "required": true,
        "description": "Text or elements to animate"
      },
      {
        "name": "colors",
        "type": "string",
        "default": "#cc0066 | #1aff53 | #004d99 | #f5f56b | #a600e6",
        "description": "Comma-separated hex colors for the orbs"
      },
      {
        "name": "as",
        "type": "ElementType",
        "default": "span",
        "description": "The HTML tag to render as"
      },
      {
        "name": "className",
        "type": "string",
        "description": "Typography and positioning classes"
      }
    ],
    "files": [
      {
        "name": "gradient-text-fill.tsx",
        "content": "\"use client\"\r\n\r\nimport React, { memo, useMemo } from \"react\"\r\nimport { motion, MotionProps } from \"motion/react\"\r\nimport { cn } from \"@/lib/utils\"\r\n\r\ninterface GradientTextProps\r\n  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps | \"style\"> {\r\n  className?: string\r\n  children: React.ReactNode\r\n  as?: React.ElementType\r\n  colors?: string\r\n  style?: React.CSSProperties\r\n}\r\n\r\nconst keyframesStyle = `\r\n@keyframes gradient-border {\r\n  0%, 100% { border-radius: 37% 29% 27% 27% / 28% 25% 41% 37%; }\r\n  25% { border-radius: 47% 29% 39% 49% / 61% 19% 66% 26%; }\r\n  50% { border-radius: 57% 23% 47% 72% / 63% 17% 66% 33%; }\r\n  75% { border-radius: 28% 49% 29% 100% / 93% 20% 64% 25%; }\r\n}\r\n@keyframes gradient-1 {\r\n  0%, 100% { top: 0; right: 0; }\r\n  50% { top: 50%; right: 25%; }\r\n  75% { top: 25%; right: 50%; }\r\n}\r\n@keyframes gradient-2 {\r\n  0%, 100% { top: 0; left: 0; }\r\n  60% { top: 75%; left: 25%; }\r\n  85% { top: 50%; left: 50%; }\r\n}\r\n@keyframes gradient-3 {\r\n  0%, 100% { bottom: 0; left: 0; }\r\n  40% { bottom: 50%; left: 25%; }\r\n  65% { bottom: 25%; left: 50%; }\r\n}\r\n@keyframes gradient-4 {\r\n  0%, 100% { bottom: 0; right: 0; }\r\n  50% { bottom: 25%; right: 40%; }\r\n  90% { bottom: 50%; right: 25%; }\r\n}\r\n@media (prefers-reduced-motion: reduce) {\r\n  .groot-orb { animation: none !important; }\r\n}\r\n`\r\n\r\nconst ORB_BASE =\r\n  \"groot-orb pointer-events-none absolute h-[30vw] w-[30vw] mix-blend-overlay blur-lg\"\r\n\r\nconst GradientText = memo(function GradientText({\r\n  className,\r\n  children,\r\n  as: Component = \"span\",\r\n  colors = \"#cc0066, #1aff53, #004d99, #f5f56b, #a600e6\",\r\n  style,\r\n  ...props\r\n}: GradientTextProps) {\r\n  const MotionComponent = useMemo(() => motion.create(Component), [Component])\r\n\r\n  const colorArray = useMemo(\r\n    () => colors.split(\",\").map((c) => c.trim()),\r\n    [colors]\r\n  )\r\n\r\n  return (\r\n    <MotionComponent\r\n      className={cn(\r\n        \"relative inline-flex overflow-hidden bg-foreground text-transparent bg-clip-text py-1\",\r\n        className\r\n      )}\r\n      style={style}\r\n      {...props}\r\n    >\r\n      <style dangerouslySetInnerHTML={{ __html: keyframesStyle }} />\r\n      {children}\r\n      <span\r\n        aria-hidden\r\n        className=\"pointer-events-none absolute inset-0 mix-blend-lighten dark:mix-blend-darken\"\r\n      >\r\n        <span\r\n          className={cn(ORB_BASE, \"-top-1/2 animate-[gradient-border_6s_ease-in-out_infinite,gradient-1_12s_ease-in-out_infinite_alternate]\")}\r\n          style={{ backgroundColor: colorArray[0] }}\r\n        />\r\n        <span\r\n          className={cn(ORB_BASE, \"right-0 top-0 animate-[gradient-border_6s_ease-in-out_infinite,gradient-2_12s_ease-in-out_infinite_alternate]\")}\r\n          style={{ backgroundColor: colorArray[1] }}\r\n        />\r\n        <span\r\n          className={cn(ORB_BASE, \"bottom-0 left-0 animate-[gradient-border_6s_ease-in-out_infinite,gradient-3_12s_ease-in-out_infinite_alternate]\")}\r\n          style={{ backgroundColor: colorArray[2] }}\r\n        />\r\n        <span\r\n          className={cn(ORB_BASE, \"-bottom-1/2 right-0 animate-[gradient-border_6s_ease-in-out_infinite,gradient-4_12s_ease-in-out_infinite_alternate]\")}\r\n          style={{ backgroundColor: colorArray[3] }}\r\n        />\r\n      </span>\r\n    </MotionComponent>\r\n  )\r\n})\r\n\r\nGradientText.displayName = \"GradientText\"\r\n\r\nexport { GradientText }"
      }
    ]
  },
  {
    "name": "image-trail",
    "title": "Image Trail",
    "description": "A very smooth and interactive trail of images that follows your mouse cursor with discrete step interpolation.",
    "category": {
      "name": "Effects",
      "slug": "effects"
    },
    "tier": "free",
    "status": "stable",
    "label": "New",
    "image": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1778445439/image_trail_light_yo7x8b.webp",
    "imageDark": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1778445439/image_trail_dark_qne2hh.webp",
    "tags": [
      "image",
      "trail",
      "mouse",
      "animation"
    ],
    "preview": {
      "disableSSR": false,
      "height": 600
    },
    "registryUrl": "https://grootstudio.vercel.app/r/image-trail.json",
    "installAlias": "image-trail",
    "npmDependencies": [
      "motion/react"
    ],
    "registryDependencies": [],
    "usage": {
      "import": "import { ImageCursorTrail } from \"@/components/grootstudio/image-trail\"",
      "code": "export default function Demo() {\n  return (\n    <ImageCursorTrail\n      items={[\"/image1.jpg\", \"/image2.jpg\"]}\n      maxNumberOfImages={5}\n      distance={45}\n      imgClass=\"sm:w-40 w-28 sm:h-48 h-36\"\n      className=\"max-w-4xl rounded-3xl\"\n    />\n  )\n}"
    },
    "props": [
      {
        "name": "items",
        "type": "string[]",
        "default": "[]",
        "required": true,
        "description": "An array of image URLs to use in the trail."
      },
      {
        "name": "distance",
        "type": "number",
        "default": "40",
        "required": false,
        "description": "The fraction of the window width required to trigger spawning a new image. Larger numbers mean closer images."
      },
      {
        "name": "maxNumberOfImages",
        "type": "number",
        "default": "5",
        "required": false,
        "description": "The maximum number of images that can be visible on the screen at the same time."
      },
      {
        "name": "className",
        "type": "string",
        "default": "undefined",
        "required": false,
        "description": "Optional class names for the container section."
      },
      {
        "name": "imgClass",
        "type": "string",
        "default": "\"w-40 h-48\"",
        "required": false,
        "description": "Class names for individual image elements, particularly for adjusting sizing constraints."
      }
    ],
    "files": [
      {
        "name": "image-trail.tsx",
        "content": "\"use client\"\r\n\r\nimport { useRef, useEffect, type ReactNode } from \"react\"\r\nimport { animate } from \"motion/react\"\r\nimport { cn } from \"@/lib/utils\"\r\n\r\ninterface ImageMouseTrailProps {\r\n  items: string[]\r\n  children?: ReactNode\r\n  className?: string\r\n  imgClass?: string\r\n  distance?: number\r\n  maxNumberOfImages?: number\r\n}\r\n\r\nexport default function ImageCursorTrail({\r\n  items = [],\r\n  children,\r\n  className,\r\n  imgClass = \"w-40 h-48\",\r\n  distance = 40,\r\n  maxNumberOfImages = 8,\r\n}: ImageMouseTrailProps) {\r\n  const containerRef = useRef<HTMLDivElement>(null)\r\n  const lastPositionRef = useRef({ x: 0, y: 0 })\r\n  const globalIndexRef = useRef(0)\r\n  const zIndexRef = useRef(1)\r\n  const timeoutsRef = useRef<Set<ReturnType<typeof setTimeout>>>(new Set())\r\n\r\n  useEffect(() => {\r\n    const handleMove = (e: MouseEvent | TouchEvent) => {\r\n      const clientX = \"touches\" in e ? e.touches[0]?.clientX : e.clientX\r\n      const clientY = \"touches\" in e ? e.touches[0]?.clientY : e.clientY\r\n\r\n      if (clientX === undefined || clientY === undefined) return\r\n\r\n      const lastX = lastPositionRef.current.x\r\n      const lastY = lastPositionRef.current.y\r\n      \r\n      if (lastX === 0 && lastY === 0) {\r\n        lastPositionRef.current = { x: clientX, y: clientY }\r\n        return\r\n      }\r\n\r\n      const dist = Math.hypot(clientX - lastX, clientY - lastY)\r\n\r\n      if (dist > distance) {\r\n        const count = Math.floor(dist / distance)\r\n        \r\n        for (let i = 1; i <= count; i++) {\r\n          const t = i / count\r\n          const x = lastX + (clientX - lastX) * t\r\n          const y = lastY + (clientY - lastY) * t\r\n          activateImage(x, y)\r\n        }\r\n        \r\n        lastPositionRef.current = { x: clientX, y: clientY }\r\n      }\r\n    }\r\n\r\n    window.addEventListener(\"mousemove\", handleMove)\r\n    window.addEventListener(\"touchmove\", handleMove)\r\n    \r\n    return () => {\r\n      window.removeEventListener(\"mousemove\", handleMove)\r\n      window.removeEventListener(\"touchmove\", handleMove)\r\n      timeoutsRef.current.forEach((t) => clearTimeout(t))\r\n      timeoutsRef.current.clear()\r\n    }\r\n  }, [distance, items, maxNumberOfImages])\r\n\r\n  const activateImage = (clientX: number, clientY: number) => {\r\n    if (!containerRef.current || !items || items.length === 0) return\r\n\r\n    const containerRect = containerRef.current.getBoundingClientRect()\r\n    const relativeX = clientX - containerRect.left\r\n    const relativeY = clientY - containerRect.top\r\n    \r\n    const img = document.createElement(\"img\")\r\n    img.src = items[globalIndexRef.current % items.length]!\r\n    img.alt = \"\"\r\n    img.setAttribute(\"aria-hidden\", \"true\")\r\n    img.className = cn(\r\n      \"pointer-events-none absolute rounded-3xl object-cover shadow-xl\",\r\n      imgClass\r\n    )\r\n    \r\n    Object.assign(img.style, {\r\n      left: `${relativeX}px`,\r\n      top: `${relativeY}px`,\r\n      zIndex: String(zIndexRef.current),\r\n      position: \"absolute\",\r\n      transform: \"translate(-50%, -50%) scale(0)\",\r\n      opacity: \"0\",\r\n    })\r\n    \r\n    containerRef.current.appendChild(img)\r\n    \r\n    const activeImages = containerRef.current.querySelectorAll(\"img\")\r\n    if (activeImages.length > maxNumberOfImages) {\r\n      activeImages[0]?.remove()\r\n    }\r\n    \r\n    const rotation = Math.random() * 20 - 10\r\n\r\n    animate(img, \r\n      { \r\n        scale: [0, 1],\r\n        opacity: [0, 1],\r\n        rotate: [rotation - 10, rotation]\r\n      }, \r\n      { \r\n        type: \"spring\",\r\n        stiffness: 400,\r\n        damping: 20,\r\n        mass: 0.8\r\n      }\r\n    )\r\n\r\n    const timer = setTimeout(() => {\r\n      const controls = animate(img, \r\n        { \r\n          scale: 0,\r\n          opacity: 0,\r\n          rotate: rotation + 10\r\n        }, \r\n        { \r\n          duration: 0.4, \r\n          ease: \"backIn\" \r\n        }\r\n      )\r\n      \r\n      controls.then(() => {\r\n        img.remove()\r\n        timeoutsRef.current.delete(timer)\r\n      })\r\n    }, 1000)\r\n\r\n    timeoutsRef.current.add(timer)\r\n    \r\n    globalIndexRef.current++\r\n    zIndexRef.current = (zIndexRef.current % 10000) + 1\r\n  }\r\n\r\n  return (\r\n    <div\r\n      ref={containerRef}\r\n      className={cn(\r\n        \"relative grid w-full isolate place-content-center bg-transparent\",\r\n        className\r\n      )}\r\n    >\r\n      <div className=\"relative z-10001\">{children}</div>\r\n    </div>\r\n  )\r\n}\r\n"
      }
    ]
  },
  {
    "name": "logo-grid",
    "title": "Logo Grid",
    "description": "Clean grid of client logos with dashed plus-sign separators.",
    "category": {
      "name": "Components",
      "slug": "components"
    },
    "tier": "free",
    "status": "stable",
    "image": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777378066/client-grid_lighht_iglnwa.webp",
    "imageDark": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777378066/client-grid_dark_ei9qu3.webp",
    "tags": [
      "grid",
      "logos",
      "layout"
    ],
    "preview": {
      "disableSSR": true,
      "height": 400
    },
    "registryUrl": "https://grootstudio.vercel.app/r/logo-grid.json",
    "installAlias": "logo-grid",
    "npmDependencies": [
      "lucide-react"
    ],
    "registryDependencies": [],
    "usage": {
      "import": "import { LogoGrid } from \"@/components/grootstudio/logo-grid\"",
      "code": "export default function Demo() {\n  return (\n  <LogoGrid \n  logos={[\n    {\n      src: \"https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777378066/nvidia-wordmark-light_rby94r.webp\",\n      alt: \"NVIDIA\",\n    },\n    {\n      src: \"https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777378067/github-wordmark-light_b6f50g.webp\",\n      alt: \"GitHub\",\n    },\n    {\n      src: \"https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777378067/python-wordmark-light_b0o0x8.webp\",\n      alt: \"Python\",\n    },\n    {\n      src: \"https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777378066/vercel-wordmark-light_y4v7h8.webp\",\n      alt: \"Vercel\",\n    },\n    {\n      src: \"https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777378067/nodejs-wordmark-light_y30xga.webp\",\n      alt: \"Node.js\",\n    },\n    {\n      src: \"https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777378066/typescript-wordmark-light_zmyr6r.webp\",\n      alt: \"TypeScript\",\n    }\n  ]}\n  />\n  )\n}"
    },
    "props": [
      {
        "name": "items",
        "type": "Logo[]",
        "default": "DEFAULT_ITEMS",
        "required": true,
        "description": "Array of logos (src, alt, width, height)"
      },
      {
        "name": "className",
        "type": "string",
        "description": "Container styling"
      }
    ],
    "files": [
      {
        "name": "logo-grid.tsx",
        "content": "\"use client\"\r\n\r\nimport React, { memo, useMemo } from \"react\"\r\nimport { cn } from \"@/lib/utils\"\r\nimport { PlusIcon } from \"lucide-react\"\r\n\r\nexport type Logo = {\r\n  src: string\r\n  alt: string\r\n  width?: number\r\n  height?: number\r\n}\r\n\r\nconst LogoImage = memo(function LogoImage({ logo }: { logo: Logo }) {\r\n  return (\r\n    <img\r\n      alt={logo.alt}\r\n      src={logo.src}\r\n      width={logo.width}\r\n      height={logo.height}\r\n      loading=\"lazy\"\r\n      className=\"pointer-events-none h-4 select-none md:h-5 dark:brightness-0 dark:invert\"\r\n    />\r\n  )\r\n})\r\n\r\ntype LogoCardProps = React.ComponentProps<\"div\"> & { logo: Logo }\r\n\r\nconst LogoCard = memo(function LogoCard({\r\n  logo,\r\n  className,\r\n  children,\r\n  ...props\r\n}: LogoCardProps) {\r\n  return (\r\n    <div\r\n      className={cn(\r\n        \"relative flex items-center justify-center bg-background px-4 py-8 md:p-8\",\r\n        className\r\n      )}\r\n      {...props}\r\n    >\r\n      <LogoImage logo={logo} />\r\n      {children}\r\n    </div>\r\n  )\r\n})\r\n\r\nexport const LogoGrid = memo(function LogoGrid({\r\n  logos,\r\n  className,\r\n}: {\r\n  logos: Logo[]\r\n  className?: string\r\n}) {\r\n  const gridLogos = useMemo(() => logos.slice(0, 8), [logos])\r\n\r\n  return (\r\n    <div\r\n      className={cn(\r\n        \"relative grid grid-cols-2 border-x md:grid-cols-4\",\r\n        className\r\n      )}\r\n    >\r\n      <div className=\"-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t\" />\r\n\r\n      {gridLogos.map((logo, i) => {\r\n        const isHighlighted = i === 0 || i === 2 || i === 5 || i === 7\r\n\r\n        return (\r\n          <LogoCard\r\n            key={logo.alt}\r\n            logo={logo}\r\n            className={cn(\r\n              i < 4 && \"border-b\",\r\n              (i === 4 || i === 5) && \"border-b md:border-b-0\",\r\n              (i === 0 || i === 2 || i === 4 || i === 6) && \"border-r\",\r\n              (i === 1 || i === 5) && \"md:border-r\",\r\n              isHighlighted\r\n                ? \"bg-secondary dark:bg-secondary/30\"\r\n                : \"bg-background\"\r\n            )}\r\n          >\r\n            {(i === 0 || i === 1 || i === 2) && (\r\n              <PlusIcon\r\n                className=\"-right-[12.5px] -bottom-[12.5px] absolute z-10 hidden size-6 md:block text-slate-800 dark:text-slate-300\"\r\n                strokeWidth={1}\r\n              />\r\n            )}\r\n            {(i === 0 || i === 2 || i === 4) && (\r\n              <PlusIcon\r\n                className=\"-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 md:hidden text-slate-800 dark:text-slate-300\"\r\n                strokeWidth={1}\r\n              />\r\n            )}\r\n          </LogoCard>\r\n        )\r\n      })}\r\n\r\n      <div className=\"-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b\" />\r\n    </div>\r\n  )\r\n})\r\n\r\nLogoGrid.displayName = \"LogoGrid\""
      }
    ]
  },
  {
    "name": "logo-marquee",
    "title": "Logo Marquee",
    "description": "Premium infinite marquee slider with automatic brand fallback and mask fades.",
    "category": {
      "name": "Components",
      "slug": "components"
    },
    "tier": "free",
    "status": "stable",
    "image": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777378484/client-marquee_light_f6d3se.webp",
    "imageDark": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777378486/client-marquee_dark_vbkxfs.webp",
    "tags": [
      "marquee",
      "logos"
    ],
    "preview": {
      "disableSSR": true,
      "height": 300
    },
    "registryUrl": "https://grootstudio.vercel.app/r/logo-marquee.json",
    "installAlias": "logo-marquee",
    "npmDependencies": [
      "motion/react",
      "react-use-measure"
    ],
    "registryDependencies": [],
    "usage": {
      "import": "import { LogoMarquee } from \"@/components/grootstudio/logo-marquee\"",
      "code": "const logos = [\n  { src: \"https://svgl.app/library/nvidia-wordmark-light.svg\", alt: \"Nvidia\" },\n  { src: \"https://svgl.app/library/claude-ai-wordmark-icon_light.svg\", alt: \"Claude\" },\n  { src: \"https://svgl.app/library/stripe-wordmark-light.svg\", alt: \"Stripe\" },\n  { src: \"https://svgl.app/library/rails-wordmark-light.svg\", alt: \"Rails\" },\n  { src: \"https://svgl.app/library/deno-wordmark-icon_light.svg\", alt: \"Deno\" },\n  { src: \"https://svgl.app/library/github-wordmark-light.svg\", alt: \"Github\" },\n  { src: \"https://svgl.app/library/tailwindcss-wordmark-light.svg\", alt: \"Tailwindcss\" },\n  { src: \"https://svgl.app/library/shadcn-ui-logo_light.svg\", alt: \"Shadcn ui\" },\n];\n\nexport default function Demo() {\n  return (\n    <div className=\"w-full\">\n      <LogoMarquee logos={logos} />\n    </div>\n  )\n}"
    },
    "props": [
      {
        "name": "items",
        "type": "Logo[]",
        "default": "DEFAULT_ITEMS",
        "required": true,
        "description": "Array of logo items (src, alt, width, height)"
      },
      {
        "name": "className",
        "type": "string",
        "description": "Container styling"
      }
    ],
    "files": [
      {
        "name": "logo-marquee.tsx",
        "content": "\"use client\"\r\n\r\nimport React, { memo, useState, useEffect } from \"react\"\r\nimport { cn } from \"@/lib/utils\"\r\nimport { useMotionValue, animate, motion } from \"motion/react\"\r\nimport useMeasure from \"react-use-measure\"\r\n\r\nexport type Logo = {\r\n  src: string\r\n  alt: string\r\n  width?: number\r\n  height?: number\r\n}\r\n\r\ntype InfiniteSliderProps = {\r\n  children: React.ReactNode\r\n  gap?: number\r\n  duration?: number\r\n  durationOnHover?: number\r\n  direction?: \"horizontal\" | \"vertical\"\r\n  reverse?: boolean\r\n  className?: string\r\n}\r\n\r\nconst InfiniteSlider = memo(function InfiniteSlider({\r\n  children,\r\n  gap = 16,\r\n  duration = 25,\r\n  durationOnHover,\r\n  direction = \"horizontal\",\r\n  reverse = false,\r\n  className,\r\n}: InfiniteSliderProps) {\r\n  const [currentDuration, setCurrentDuration] = useState(duration)\r\n  const [ref, { width, height }] = useMeasure()\r\n  const translation = useMotionValue(0)\r\n  const [isTransitioning, setIsTransitioning] = useState(false)\r\n  const [key, setKey] = useState(0)\r\n\r\n  useEffect(() => {\r\n    const size = direction === \"horizontal\" ? width : height\r\n    const contentSize = size + gap\r\n    const from = reverse ? -contentSize / 2 : 0\r\n    const to = reverse ? 0 : -contentSize / 2\r\n\r\n    let controls\r\n\r\n    if (isTransitioning) {\r\n      controls = animate(translation, [translation.get(), to], {\r\n        ease: \"linear\",\r\n        duration:\r\n          currentDuration *\r\n          Math.abs((translation.get() - to) / contentSize),\r\n        onComplete: () => {\r\n          setIsTransitioning(false)\r\n          setKey((prev) => prev + 1)\r\n        },\r\n      })\r\n    } else {\r\n      controls = animate(translation, [from, to], {\r\n        ease: \"linear\",\r\n        duration: currentDuration,\r\n        repeat: Infinity,\r\n        repeatType: \"loop\",\r\n        repeatDelay: 0,\r\n        onRepeat: () => translation.set(from),\r\n      })\r\n    }\r\n\r\n    return controls?.stop\r\n  }, [\r\n    key,\r\n    translation,\r\n    currentDuration,\r\n    width,\r\n    height,\r\n    gap,\r\n    isTransitioning,\r\n    direction,\r\n    reverse,\r\n  ])\r\n\r\n  const hoverProps = durationOnHover\r\n    ? {\r\n        onHoverStart: () => {\r\n          setIsTransitioning(true)\r\n          setCurrentDuration(durationOnHover)\r\n        },\r\n        onHoverEnd: () => {\r\n          setIsTransitioning(true)\r\n          setCurrentDuration(duration)\r\n        },\r\n      }\r\n    : {}\r\n\r\n  return (\r\n    <div className={cn(\"overflow-hidden\", className)}>\r\n      <motion.div\r\n        ref={ref}\r\n        className=\"flex w-max\"\r\n        style={{\r\n          ...(direction === \"horizontal\"\r\n            ? { x: translation }\r\n            : { y: translation }),\r\n          gap: `${gap}px`,\r\n          flexDirection: direction === \"horizontal\" ? \"row\" : \"column\",\r\n        }}\r\n        {...hoverProps}\r\n      >\r\n        {children}\r\n        {children}\r\n      </motion.div>\r\n    </div>\r\n  )\r\n})\r\n\r\nconst LogoImage = memo(function LogoImage({ logo }: { logo: Logo }) {\r\n  return (\r\n    <img\r\n      alt={logo.alt}\r\n      src={logo.src}\r\n      width={logo.width ?? \"auto\"}\r\n      height={logo.height ?? \"auto\"}\r\n      loading=\"lazy\"\r\n      className=\"pointer-events-none h-4 select-none md:h-5 dark:brightness-0 dark:invert\"\r\n    />\r\n  )\r\n})\r\n\r\nexport const LogoMarquee = memo(function LogoMarquee({\r\n  logos,\r\n  className,\r\n}: {\r\n  logos: Logo[]\r\n  className?: string\r\n}) {\r\n  return (\r\n    <div\r\n      className={cn(\r\n        \"max-w-7xl mx-auto overflow-hidden py-4 mask-[linear-gradient(to_right,transparent,black_25%,black_75%,transparent)]\",\r\n        className\r\n      )}\r\n    >\r\n      <InfiniteSlider gap={42} reverse duration={80} durationOnHover={25}>\r\n        {[...logos, ...logos].map((logo, i) => (\r\n          <LogoImage key={`${logo.alt}-${i}`} logo={logo} />\r\n        ))}\r\n      </InfiniteSlider>\r\n    </div>\r\n  )\r\n})\r\n\r\nLogoMarquee.displayName = \"LogoMarquee\""
      }
    ]
  },
  {
    "name": "pebble-toast",
    "title": "Pebble Toast",
    "description": "A stack style notification toast with micro-animations and dynamic gradients.",
    "category": {
      "name": "Components",
      "slug": "components"
    },
    "tier": "free",
    "status": "stable",
    "label": "new",
    "tags": [
      "toast",
      "notification",
      "micro-interaction",
      "motion"
    ],
    "image": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1783242560/pebble-toast_light_sfxw62.webp",
    "imageDark": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1783242560/pebble-toast_dark_qogrrq.webp",
    "preview": {
      "disableSSR": true,
      "height": 100
    },
    "registryUrl": "https://grootstudio.vercel.app/r/pebble-toast.json",
    "installAlias": "pebble-toast",
    "npmDependencies": [
      "sonner",
      "motion",
      "lucide-react",
      "next-themes"
    ],
    "registryDependencies": [],
    "usage": {
      "extra": [
        {
          "title": "Add the Toaster component.",
          "fileName": "app/layout.tsx",
          "code": "import { Toaster } from \"@/components/grootstudio/pebble-toast\"\n\nexport default function RootLayout({ children }) {\n  return (\n    <html lang=\"en\">\n      <head />\n      <body>\n        <main>{children}</main>\n        <Toaster position=\"bottom-right\" />\n      </body>\n    </html>\n  )\n}",
          "highlightLines": [
            1,
            9
          ]
        }
      ],
      "import": "\"use client\"\nimport { toast } from \"sonner\"",
      "importHighlightLines": [
        2
      ],
      "code": "export default function Demo() {\n  return (\n    <div className=\"w-full  h-screen flex justify-center items-center\">\n      <button onClick={() => { toast(\"Event has been created\") }}>\n        Render Toast\n      </button>\n    </div>\n  )\n}"
    },
    "examples": [
      {
        "title": "Toast Positions",
        "slug": "pebble-toast-variant01"
      }
    ],
    "props": [
      {
        "name": "success",
        "type": "(message: string | React.ReactNode, options?: ToastOptions) => void",
        "default": "-",
        "required": false,
        "description": "Function to trigger a success toast variant with a green gradient."
      },
      {
        "name": "warning",
        "type": "(message: string | React.ReactNode, options?: ToastOptions) => void",
        "default": "-",
        "required": false,
        "description": "Function to trigger a warning toast variant with a yellow gradient."
      },
      {
        "name": "error",
        "type": "(message: string | React.ReactNode, options?: ToastOptions) => void",
        "default": "-",
        "required": false,
        "description": "Function to trigger an error toast variant with a red gradient."
      },
      {
        "name": "info",
        "type": "(message: string | React.ReactNode, options?: ToastOptions) => void",
        "default": "-",
        "required": false,
        "description": "Function to trigger an info toast variant with a blue gradient."
      },
      {
        "name": "promise",
        "type": "(promise: Promise<any>, options: PromiseOptions) => void",
        "default": "-",
        "required": false,
        "description": "Function to trigger a promise-based toast that updates dynamically on resolution/rejection."
      },
      {
        "name": "duration",
        "type": "number",
        "default": "6000",
        "required": false,
        "description": "Default duration of the toast in milliseconds."
      },
      {
        "name": "position",
        "type": "top-left | top-center | top-right | bottom-left | bottom-center | bottom-right",
        "default": "bottom-right",
        "required": false,
        "description": "Default position of the toast stack."
      }
    ],
    "files": [
      {
        "name": "pebble-toast.tsx",
        "content": "\"use client\"\r\n\r\nimport { useState, useEffect, useMemo, memo } from \"react\"\r\nimport { useTheme } from \"next-themes\"\r\nimport {\r\n    Toaster as Sonner,\r\n    useSonner,\r\n    toast,\r\n    type ToasterProps,\r\n    type ToastT,\r\n} from \"sonner\"\r\nimport { X } from \"lucide-react\"\r\nimport { motion, AnimatePresence } from \"motion/react\"\r\n\r\ntype ToastPosition =\r\n    | \"top-left\"\r\n    | \"top-center\"\r\n    | \"top-right\"\r\n    | \"bottom-left\"\r\n    | \"bottom-center\"\r\n    | \"bottom-right\"\r\n\r\nconst POSITION_CLASSES: Record<ToastPosition, string> = {\r\n    \"top-left\": \"top-6 left-6\",\r\n    \"top-center\": \"top-6 left-1/2 -translate-x-1/2\",\r\n    \"top-right\": \"top-6 right-6\",\r\n    \"bottom-left\": \"bottom-6 left-6\",\r\n    \"bottom-center\": \"bottom-6 left-1/2 -translate-x-1/2\",\r\n    \"bottom-right\": \"bottom-6 right-6\",\r\n}\r\n\r\nconst ALL_POSITIONS: ToastPosition[] = [\r\n    \"top-left\",\r\n    \"top-center\",\r\n    \"top-right\",\r\n    \"bottom-left\",\r\n    \"bottom-center\",\r\n    \"bottom-right\",\r\n]\r\n\r\nconst TOAST_GRADIENTS: Record<string, string> = {\r\n    success: \"radial-gradient(circle at center, #34d399, #047857)\",\r\n    warning: \"radial-gradient(circle at center, #fbbf24, #b45309)\",\r\n    error: \"radial-gradient(circle at center, #f43f5e, #be123c)\",\r\n    info: \"radial-gradient(circle at center, #38bdf8, #1d4ed8)\",\r\n    default: \"radial-gradient(circle at center, #a1a1aa, #3f3f46)\",\r\n    normal: \"radial-gradient(circle at center, #a1a1aa, #3f3f46)\",\r\n    loading: \"radial-gradient(circle at center, #818cf8, #4338ca)\",\r\n}\r\n\r\nconst getGradient = (t: ToastT) => TOAST_GRADIENTS[t.type || \"default\"] || TOAST_GRADIENTS.default\r\n\r\nconst getTitle = (t: ToastT) => {\r\n    const title = t.title\r\n    if (typeof title === \"function\") {\r\n        const res = title()\r\n        return typeof res === \"string\" ? res : \"Notification\"\r\n    }\r\n    return typeof title === \"string\" ? title : \"Notification\"\r\n}\r\n\r\nconst getDescription = (t: ToastT) => {\r\n    const desc = t.description\r\n    if (typeof desc === \"function\") {\r\n        const res = desc()\r\n        return typeof res === \"string\" ? res : null\r\n    }\r\n    return typeof desc === \"string\" ? desc : null\r\n}\r\n\r\ninterface ToastStackProps {\r\n    position: ToastPosition\r\n    items: ToastT[]\r\n}\r\n\r\nconst ToastStack = memo(\r\n    ({ position, items }: ToastStackProps) => {\r\n        const [hoveredId, setHoveredId] = useState<number | string | null>(null)\r\n        const [fullyExpandedId, setFullyExpandedId] = useState<number | string | null>(null)\r\n\r\n        useEffect(() => {\r\n            if (hoveredId !== null && !items.some((t) => t.id === hoveredId)) {\r\n                setHoveredId(null)\r\n                setFullyExpandedId(null)\r\n            }\r\n        }, [items, hoveredId])\r\n\r\n        const displayedItems = useMemo(() => [...items].reverse(), [items])\r\n        const positionClass = POSITION_CLASSES[position] || POSITION_CLASSES[\"bottom-right\"]\r\n        const isLeftAligned = position.includes(\"left\")\r\n        const initialX = isLeftAligned ? -12 : 12\r\n\r\n        return (\r\n            <div className={`fixed z-9999 pointer-events-none ${positionClass}`}>\r\n                <div className=\"flex flex-row items-center justify-center\">\r\n                    <AnimatePresence initial={false}>\r\n                        {displayedItems.map((item, idx) => {\r\n                            const isFirst = idx === 0\r\n                            const isHovered = hoveredId === item.id\r\n                            const isExpanded = hoveredId !== null ? isHovered : idx === displayedItems.length - 1\r\n                            const isFullyExpanded = fullyExpandedId === item.id\r\n\r\n                            const hoveredIndex = displayedItems.findIndex((i) => i.id === hoveredId)\r\n                            const isRightOfHovered = hoveredIndex !== -1 && idx === hoveredIndex + 1\r\n\r\n                            const marginLeft = isHovered || isRightOfHovered ? 6 : -12\r\n                            const gradient = getGradient(item)\r\n\r\n                            return (\r\n                                <motion.div\r\n                                    key={item.id}\r\n                                    onMouseEnter={() => setHoveredId(item.id)}\r\n                                    onMouseLeave={() => {\r\n                                        setHoveredId(null)\r\n                                        setFullyExpandedId(null)\r\n                                    }}\r\n                                    onAnimationComplete={() => isExpanded && setFullyExpandedId(item.id)}\r\n                                    initial={{\r\n                                        width: 40,\r\n                                        scale: 1,\r\n                                        marginLeft: isFirst ? 0 : -24,\r\n                                        opacity: 0,\r\n                                        x: initialX,\r\n                                        filter: \"blur(2px)\",\r\n                                    }}\r\n                                    animate={{\r\n                                        width: isExpanded ? \"auto\" : 40,\r\n                                        scale: isExpanded ? 1.05 : 1,\r\n                                        marginLeft: isFirst ? 0 : marginLeft,\r\n                                        opacity: 1,\r\n                                        x: 0,\r\n                                        filter: \"blur(0px)\",\r\n                                    }}\r\n                                    exit={{\r\n                                        width: 0,\r\n                                        scale: 0.8,\r\n                                        opacity: 0,\r\n                                        marginLeft: 0,\r\n                                        x: initialX,\r\n                                        filter: \"blur(2px)\",\r\n                                    }}\r\n                                    transition={{\r\n                                        type: \"spring\",\r\n                                        stiffness: 180,\r\n                                        damping: 25,\r\n                                        filter: { ease: \"easeOut\", duration: 0.3 },\r\n                                        opacity: { ease: \"easeOut\", duration: 0.3 },\r\n                                    }}\r\n                                    style={{ zIndex: isHovered ? 50 : idx + 1 }}\r\n                                    className=\"relative h-10 p-0.75 pr-3 flex items-center justify-start border bg-card rounded-4xl cursor-pointer overflow-hidden shrink-0 select-none shadow-sm hover:shadow-lg transition-shadow duration-300 pointer-events-auto\"\r\n                                >\r\n                                    <div className=\"relative w-8 h-8 border border-white/10 rounded-full overflow-hidden shrink-0 group/avatar shadow-inner cursor-pointer\">\r\n                                        <AnimatePresence mode=\"popLayout\" initial={false}>\r\n                                            <motion.div\r\n                                                key={gradient}\r\n                                                initial={{ filter: \"blur(2px)\", opacity: 0 }}\r\n                                                animate={{ filter: \"blur(0px)\", opacity: 1 }}\r\n                                                exit={{ filter: \"blur(2px)\", opacity: 0 }}\r\n                                                transition={{ duration: 0.3, ease: \"easeOut\" }}\r\n                                                style={{ backgroundImage: gradient }}\r\n                                                className=\"absolute inset-0\"\r\n                                            />\r\n                                        </AnimatePresence>\r\n                                        <div\r\n                                            className=\"absolute inset-0 opacity-[0.18] mix-blend-overlay pointer-events-none z-10\"\r\n                                            style={{\r\n                                                backgroundImage: `url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")`\r\n                                            }}\r\n                                        />\r\n                                        {item.type === \"loading\" && (\r\n                                            <div className=\"absolute inset-0 flex items-center justify-center bg-black/35 z-20\">\r\n                                                <div className=\"sonner-loading-wrapper\" style={{ position: \"relative\", inset: \"auto\", \"--size\": \"16px\" } as React.CSSProperties}>\r\n                                                    <div className=\"sonner-spinner\">\r\n                                                        {Array(12).fill(0).map((_, i) => (\r\n                                                            <div\r\n                                                                className=\"sonner-loading-bar\"\r\n                                                                key={i}\r\n                                                                style={{\r\n                                                                    background: \"white\",\r\n                                                                    animationDelay: `${-1.2 + i * 0.1}s`,\r\n                                                                    transform: `rotate(${i * 30}deg) translate(146%)`\r\n                                                                }}\r\n                                                            />\r\n                                                        ))}\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        )}\r\n                                        {isFullyExpanded && (\r\n                                            <div\r\n                                                onClick={(e) => {\r\n                                                    e.stopPropagation()\r\n                                                    setHoveredId(null)\r\n                                                    setFullyExpandedId(null)\r\n                                                    toast.dismiss(item.id)\r\n                                                }}\r\n                                                className=\"absolute inset-0 bg-background/60 flex items-center justify-center cursor-pointer opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-200 z-30\"\r\n                                            >\r\n                                                <X className=\"w-4 h-4 text-foreground/80 stroke-[2.5]\" />\r\n                                            </div>\r\n                                        )}\r\n                                    </div>\r\n\r\n                                    <motion.div\r\n                                        initial={false}\r\n                                        animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -10 }}\r\n                                        transition={{ duration: 0.2, ease: \"easeInOut\" }}\r\n                                        className=\"flex flex-col items-start justify-center ml-2 shrink-0 select-none text-left cursor-default\"\r\n                                    >\r\n                                        <AnimatePresence mode=\"wait\">\r\n                                            {isExpanded && (\r\n                                                <motion.div\r\n                                                    key={`${item.id}-${getTitle(item)}-${getDescription(item) || \"\"}`}\r\n                                                    initial={{ opacity: 0, filter: \"blur(2px)\", y: 4, x: -4 }}\r\n                                                    animate={{ opacity: 1, filter: \"blur(0px)\", y: 0, x: 0 }}\r\n                                                    exit={{ opacity: 0, filter: \"blur(2px)\", y: 4, x: -4 }}\r\n                                                    transition={{ duration: 0.2, ease: \"easeOut\" }}\r\n                                                >\r\n                                                    <p className=\"text-muted-foreground text-[13px] font-medium leading-none\">\r\n                                                        {getTitle(item)}\r\n                                                    </p>\r\n                                                    {getDescription(item) && (\r\n                                                        <p className=\"text-muted-foreground text-[10px] font-normal leading-tight mt-0.5 line-clamp-1\">\r\n                                                            {getDescription(item)}\r\n                                                        </p>\r\n                                                    )}\r\n                                                </motion.div>\r\n                                            )}\r\n                                        </AnimatePresence>\r\n                                    </motion.div>\r\n                                </motion.div>\r\n                            )\r\n                        })}\r\n                    </AnimatePresence>\r\n                </div>\r\n            </div>\r\n        )\r\n    },\r\n    (prev, next) =>\r\n        prev.position === next.position &&\r\n        prev.items.length === next.items.length &&\r\n        prev.items.every((item, i) => {\r\n            const nextItem = next.items[i]\r\n            return (\r\n                item.id === nextItem?.id &&\r\n                item.type === nextItem?.type &&\r\n                item.title === nextItem?.title &&\r\n                item.description === nextItem?.description\r\n            )\r\n        })\r\n)\r\n\r\nconst Toaster = ({\r\n    duration = 6000,\r\n    position = \"bottom-right\",\r\n    ...props\r\n}: ToasterProps) => {\r\n    const { theme = \"system\" } = useTheme()\r\n    const { toasts: rawToasts } = useSonner()\r\n\r\n    const groups = useMemo(() => {\r\n        const items = rawToasts.filter((t): t is ToastT => \"title\" in t || !(\"dismiss\" in t))\r\n        return items.reduce((acc, item) => {\r\n            const pos = (item.position || position || \"bottom-right\") as ToastPosition\r\n            if (!acc[pos]) acc[pos] = []\r\n            acc[pos].push(item)\r\n            return acc\r\n        }, {} as Record<ToastPosition, ToastT[]>)\r\n    }, [rawToasts, position])\r\n\r\n    return (\r\n        <>\r\n            <div\r\n                aria-hidden=\"true\"\r\n                style={{\r\n                    position: \"fixed\",\r\n                    width: 1,\r\n                    height: 1,\r\n                    overflow: \"hidden\",\r\n                    clip: \"rect(0 0 0 0)\",\r\n                    clipPath: \"inset(50%)\",\r\n                    whiteSpace: \"nowrap\",\r\n                }}\r\n            >\r\n                <Sonner\r\n                    theme={theme as ToasterProps[\"theme\"]}\r\n                    duration={duration}\r\n                    position={position}\r\n                    {...props}\r\n                />\r\n            </div>\r\n\r\n            {ALL_POSITIONS.map((pos) => (\r\n                <ToastStack\r\n                    key={pos}\r\n                    position={pos}\r\n                    items={groups[pos] || []}\r\n                />\r\n            ))}\r\n        </>\r\n    )\r\n}\r\n\r\nexport { Toaster }"
      }
    ]
  },
  {
    "name": "press-button",
    "title": "Press Button",
    "description": "An industry-grade neobrutalist button with a 3D press effect and highly flexible theming.",
    "category": {
      "name": "Buttons",
      "slug": "buttons"
    },
    "tier": "free",
    "status": "stable",
    "image": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777533103/press-button_light_zlxjzv.webp",
    "tags": [
      "button",
      "3d",
      "press",
      "neobrutalism"
    ],
    "preview": {
      "disableSSR": false,
      "height": 200
    },
    "registryUrl": "https://grootstudio.vercel.app/r/press-button.json",
    "installAlias": "press-button",
    "usage": {
      "import": "import { PressButton } from \"@/components/grootstudio/press-button\"",
      "code": "export default function Demo() {\n  return (\n    <div className=\"flex items-center gap-4\">\n      <PressButton>Default</PressButton>\n\n      <PressButton className=\"bg-indigo-600 text-white shadow-[4px_4px_0_0_#3730a3] border-[#3730a3]\">\n        Custom Indigo\n      </PressButton>\n    </div>\n  )\n}"
    },
    "props": [
      {
        "name": "variant",
        "type": "string",
        "default": "neutral",
        "description": "The visual style of the button."
      },
      {
        "name": "size",
        "type": "string",
        "default": "default",
        "description": "The size of the button."
      },
      {
        "name": "asChild",
        "type": "boolean",
        "default": "false",
        "description": "Whether to render the button as a child element using Radix Slot."
      }
    ],
    "files": [
      {
        "name": "press-button.tsx",
        "content": "\"use client\";\r\n\r\nimport * as React from \"react\";\r\nimport { Slot } from \"@radix-ui/react-slot\";\r\nimport { cva, type VariantProps } from \"class-variance-authority\";\r\nimport { cn } from \"@/lib/utils\";\r\n\r\nconst buttonVariants = cva(\r\n  \"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none bg-secondary text-secondary-foreground shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-foreground hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none\",\r\n  {\r\n    variants: {\r\n      \r\n      size: {\r\n        default: \"h-11 px-6 py-2\",\r\n        sm: \"h-9 px-4 text-xs\",\r\n        lg: \"h-14 px-10 text-base\",\r\n        icon: \"h-11 w-11\",\r\n      },\r\n    },\r\n    defaultVariants: {\r\n      size: \"default\",\r\n    },\r\n  }\r\n);\r\n\r\nexport interface PressButtonProps\r\n  extends React.ButtonHTMLAttributes<HTMLButtonElement>,\r\n    VariantProps<typeof buttonVariants> {\r\n  asChild?: boolean;\r\n}\r\n\r\nconst PressButton = React.forwardRef<HTMLButtonElement, PressButtonProps>(\r\n  ({ className, size, asChild = false, ...props }, ref) => {\r\n    const Comp = asChild ? Slot : \"button\";\r\n    return (\r\n      <Comp\r\n        className={cn(buttonVariants({ size, className }))}\r\n        ref={ref}\r\n        {...props}\r\n      />\r\n    );\r\n  }\r\n);\r\nPressButton.displayName = \"PressButton\";\r\n\r\nexport { PressButton, buttonVariants };"
      }
    ]
  },
  {
    "name": "sliding-button",
    "title": "Sliding Button",
    "description": "A high-performance interactive button that slides an icon into view on hover with spring animations and depth shadows.",
    "category": {
      "name": "Buttons",
      "slug": "buttons"
    },
    "tier": "free",
    "status": "stable",
    "image": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777419754/sliding-button_light_ishowx.webp",
    "imageDark": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777419755/sliding-button_dark_pwd8ks.webp",
    "tags": [
      "button",
      "sliding",
      "motion"
    ],
    "preview": {
      "disableSSR": false,
      "height": 200
    },
    "registryUrl": "https://grootstudio.vercel.app/r/sliding-button.json",
    "installAlias": "sliding-button",
    "npmDependencies": [
      "motion/react",
      "lucide-react"
    ],
    "registryDependencies": [
      "button"
    ],
    "usage": {
      "import": "import { SlidingButton } from \"@/components/grootstudio/sliding-button\"",
      "code": "export default function Demo() {\n  return (\n    <div className=\"flex items-center gap-4\">\n      <SlidingButton variant=\"default\">\n        Get Started\n      </SlidingButton>\n      <SlidingButton variant=\"outline\" iconPosition=\"left\">\n        Contact Us\n      </SlidingButton>\n    </div>\n  )\n}"
    },
    "props": [
      {
        "name": "children",
        "type": "ReactNode",
        "default": "undefined",
        "required": true,
        "description": "The content to display inside the button."
      },
      {
        "name": "variant",
        "type": "default | outline",
        "default": "default",
        "required": false,
        "description": "The visual style of the button."
      },
      {
        "name": "iconPosition",
        "type": "left | right",
        "default": "right",
        "required": false,
        "description": "Which side the sliding icon should appear on."
      },
      {
        "name": "className",
        "type": "string",
        "default": "undefined",
        "required": false,
        "description": "Optional class names for custom styling."
      }
    ],
    "files": [
      {
        "name": "sliding-button.tsx",
        "content": "\"use client\";\r\n\r\nimport React from \"react\";\r\nimport { Button } from \"@/components/ui/button\";\r\nimport { ArrowUpRight } from \"lucide-react\";\r\nimport { cn } from \"@/lib/utils\";\r\nimport { motion } from \"motion/react\";\r\n\r\nexport interface SlidingButtonProps\r\n  extends Omit<React.ComponentProps<typeof Button>, \"variant\"> {\r\n  children: React.ReactNode;\r\n  iconPosition?: \"left\" | \"right\";\r\n  variant?: keyof typeof BOX_SHADOW;\r\n  className?: string;\r\n}\r\n\r\nconst ICON_PX = 40;\r\nconst GAP_PX = 4;\r\n\r\nconst SPRING_SLIDE = { type: \"spring\", stiffness: 300, damping: 28 } as const;\r\nconst SPRING_ROTATE = { type: \"spring\", stiffness: 400, damping: 20 } as const;\r\n\r\nconst ICON_STYLE = {\r\n  background: \"linear-gradient(to top, #f5f56b, #cc0066)\",\r\n  boxShadow:\r\n    \"0 2px 8px 0 rgba(204,0,102,0.35), 0 1.5px 0 0 rgba(255,255,255,0.25) inset, 0 -2px 8px 0 rgba(204,0,102,0.5) inset, 0 0 0 1px rgba(0,0,0,0.08)\",\r\n} as const;\r\n\r\nconst SHIMMER_STYLE = {\r\n  background:\r\n    \"linear-gradient(180deg,rgba(255,255,255,0.4) 0%,rgba(255,255,255,0) 80%,transparent 100%)\",\r\n  filter: \"blur(0.5px)\",\r\n} as const;\r\n\r\nconst INNER_SHADOW_STYLE = {\r\n  boxShadow:\r\n    \"0 0 0 1px rgba(255,255,255,0.15) inset, 0 1.5px 0 0 rgba(255,255,255,0.2) inset, 0 -2px 4px 0 rgba(204,0,102,0.2) inset\",\r\n} as const;\r\n\r\nconst BOX_SHADOW = {\r\n  default:\r\n    \"inset 0 2px 3px 0 rgba(255,255,255,0.15), inset 0 -3px 6px 0 rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.1)\",\r\n  outline:\r\n    \"inset 0 2px 4px 0 rgba(0,0,0,0.12), inset 0 -2px 2px 0 rgba(255,255,255,0.3), inset 0 0 0 1px rgba(0,0,0,0.06)\",\r\n} as const;\r\n\r\nexport const SlidingButton = React.forwardRef<\r\n  HTMLButtonElement,\r\n  SlidingButtonProps\r\n>(\r\n  (\r\n    { children, className, variant = \"default\", iconPosition = \"right\", ...props },\r\n    externalRef\r\n  ) => {\r\n    const [isHovered, setIsHovered] = React.useState(false);\r\n    const [travelDistance, setTravelDistance] = React.useState(0);\r\n\r\n    const mergedRef = React.useCallback(\r\n      (node: HTMLButtonElement | null) => {\r\n        if (typeof externalRef === \"function\") externalRef(node);\r\n        else if (externalRef)\r\n          (\r\n            externalRef as React.MutableRefObject<HTMLButtonElement | null>\r\n          ).current = node;\r\n\r\n        if (!node) return;\r\n\r\n        const measure = () =>\r\n          setTravelDistance(node.clientWidth - ICON_PX - GAP_PX * 2);\r\n\r\n        measure();\r\n\r\n        const ro = new ResizeObserver(measure);\r\n        ro.observe(node);\r\n      },\r\n      [externalRef]\r\n    );\r\n\r\n    const slideX = isHovered\r\n      ? iconPosition === \"right\"\r\n        ? -travelDistance\r\n        : travelDistance\r\n      : 0;\r\n    const rotateX = isHovered ? 360 : 0;\r\n\r\n    return (\r\n      <Button\r\n        ref={mergedRef}\r\n        variant={variant}\r\n        aria-label={children?.toString()}\r\n        onMouseEnter={() => setIsHovered(true)}\r\n        onMouseLeave={() => setIsHovered(false)}\r\n        className={cn(\r\n          \"relative h-12 w-fit cursor-pointer overflow-hidden rounded-xl p-1 text-sm font-medium transition-all duration-500 flex items-center active:scale-[0.98]\",\r\n          iconPosition === \"right\"\r\n            ? \"ps-6 pe-14 hover:ps-14 hover:pe-6\"\r\n            : \"ps-14 pe-6 hover:ps-6 hover:pe-14\",\r\n          className\r\n        )}\r\n        style={{ boxShadow: BOX_SHADOW[variant as keyof typeof BOX_SHADOW] }}\r\n        {...props}\r\n      >\r\n        <span\r\n          className=\"relative z-10 transition-all duration-500 text-shadow-black/10 text-shadow-lg\"\r\n        >\r\n          {children}\r\n        </span>\r\n\r\n        <motion.div\r\n          aria-hidden\r\n          className={cn(\r\n            \"absolute z-20 flex h-10 w-10 items-center justify-center rounded-lg text-white\",\r\n            iconPosition === \"right\" ? \"right-1\" : \"left-1\"\r\n          )}\r\n          style={ICON_STYLE}\r\n          animate={{ x: slideX, rotate: rotateX }}\r\n          transition={SPRING_SLIDE}\r\n        >\r\n          <span\r\n            className=\"pointer-events-none absolute left-1/2 top-0 z-20 h-2/5 w-[80%] -translate-x-1/2 rounded-t-[inherit]\"\r\n            style={SHIMMER_STYLE}\r\n          />\r\n          <span\r\n            className=\"pointer-events-none absolute inset-0 z-0 rounded-[inherit]\"\r\n            style={INNER_SHADOW_STYLE}\r\n          />\r\n          <motion.span\r\n            className=\"relative z-30 flex items-center justify-center drop-shadow-sm\"\r\n            animate={{ rotate: isHovered ? 45 : 0 }}\r\n            transition={SPRING_ROTATE}\r\n          >\r\n            <ArrowUpRight size={16} />\r\n          </motion.span>\r\n        </motion.div>\r\n      </Button>\r\n    );\r\n  }\r\n);\r\n\r\nSlidingButton.displayName = \"SlidingButton\";\r\n"
      }
    ]
  },
  {
    "name": "styled-button",
    "title": "Styled Button",
    "description": "An elegant styled button with vibrant radial gradients, shadow glows, and smooth active transitions.",
    "category": {
      "name": "Buttons",
      "slug": "buttons"
    },
    "tier": "free",
    "status": "stable",
    "tags": [
      "button",
      "radial-gradient"
    ],
    "preview": {
      "disableSSR": false,
      "height": 160
    },
    "registryUrl": "https://grootstudio.vercel.app/r/styled-button.json",
    "installAlias": "styled-button",
    "image": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1781080509/Styled_Button_light_m8jwor.webp",
    "imageDark": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1781080509/Styled_Button_dark_jyefju.webp",
    "usage": {
      "import": "import { StyledButton } from \"@/components/grootstudio/styled-button\"",
      "code": "export default function Demo() {\n  return (\n    <div className=\"flex items-center gap-4\">\n      <StyledButton href=\"/dashborad\" variant=\"rose\">\n        Dashboard\n      </StyledButton>\n    </div>\n  )\n}"
    },
    "props": [
      {
        "name": "href",
        "type": "string",
        "required": true,
        "description": "The URL or path that the button links to."
      },
      {
        "name": "children",
        "type": "ReactNode",
        "required": true,
        "description": "The content to display inside the button."
      },
      {
        "name": "variant",
        "type": "neutral | rose | blue",
        "default": "neutral",
        "required": false,
        "description": "The background color scheme and border color of the button."
      },
      {
        "name": "size",
        "type": "sm | md | lg",
        "default": "md",
        "required": false,
        "description": "The height and padding size of the button."
      },
      {
        "name": "className",
        "type": "string",
        "required": false,
        "description": "Additional CSS classes for custom styling."
      }
    ],
    "files": [
      {
        "name": "styled-button.tsx",
        "content": "import * as React from \"react\";\r\nimport Link from \"next/link\";\r\nimport {cva, VariantProps} from \"class-variance-authority\";\r\nimport {cn} from \"@/lib/utils\";\r\n\r\nconst buttonVariants = cva(\r\n    \"inline-flex shrink-0 items-center justify-center rounded-md text-sm font-semibold text-shadow-lg shadow-accent border active:scale-95 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none antialiased\",\r\n    {\r\n        variants: {\r\n            size: {\r\n                sm: \"h-8 px-3\",\r\n                md: \"h-10 px-4\",\r\n                lg: \"h-12 px-6\",\r\n            },\r\n            variant:{\r\n                default: \"bg-radial from-foreground/50 to-muted/80 ring-2 ring-foreground/20 border-foreground/60\",\r\n                rose: \"text-background bg-radial from-rose-500 to-rose-800 border-rose-400 ring-2 ring-rose-800 hover:bg-radial hover:from-rose-600 hover:to-rose-900\",\r\n                blue: \"text-background bg-radial from-blue-500 to-blue-800 border-blue-400 ring-2 ring-blue-800 hover:bg-radial hover:from-blue-500 hover:to-blue-900\",\r\n            }\r\n        },\r\n        defaultVariants: {\r\n            size: \"md\",\r\n            variant: \"default\"\r\n        },\r\n    }\r\n);\r\n\r\ntype StyledButtonProps = VariantProps<typeof buttonVariants> & {\r\n    href: string;\r\n    children: React.ReactNode;\r\n    className?: string;\r\n};\r\n\r\nconst StyledButton = React.forwardRef<HTMLAnchorElement, StyledButtonProps>(\r\n    ({ href, children, className, size, variant, ...props }, ref) => {\r\n        return (\r\n            <Link\r\n                href={href}\r\n                className={cn(buttonVariants({ size, variant, className }))}\r\n                ref={ref}\r\n                {...props}\r\n            >\r\n                {children}\r\n            </Link>\r\n        );\r\n    }\r\n);\r\n\r\nStyledButton.displayName = \"StyledButton\";\r\n\r\nexport { StyledButton, buttonVariants };"
      }
    ]
  },
  {
    "name": "text-outline-glow",
    "title": "Text Outline Glow",
    "description": "An animated text hover effect with glowing outlines and cursor-following reveals.",
    "category": {
      "name": "Text Animations",
      "slug": "text-animations"
    },
    "tier": "free",
    "status": "stable",
    "label": "New",
    "image": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1778518238/text-outline_light_fed6ts.webp",
    "imageDark": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1778518238/text-outline_dark_r0wuob.webp",
    "tags": [
      "hover",
      "glow",
      "cursor",
      "gsap"
    ],
    "preview": {
      "disableSSR": false,
      "height": 300
    },
    "registryUrl": "https://grootstudio.vercel.app/r/text-outline-glow.json",
    "installAlias": "text-outline-glow",
    "npmDependencies": [
      "gsap",
      "@gsap/react"
    ],
    "registryDependencies": [],
    "usage": {
      "import": "import { TextHoverEffect } from \"@/components/grootstudio/text-outline-glow\"",
      "code": "export default function Demo() {\n  return (\n    <div className=\"flex items-center justify-center h-[300px] w-full\">\n      <TextHoverEffect text=\"GROOT\" />\n    </div>\n  )\n}"
    },
    "props": [
      {
        "name": "text",
        "type": "string",
        "default": "undefined",
        "required": true,
        "description": "The text to display and animate."
      },
      {
        "name": "duration",
        "type": "number",
        "default": "0",
        "required": false,
        "description": "The duration of the cursor-following gradient animation."
      },
      {
        "name": "fontSize",
        "type": "number",
        "default": "56",
        "required": false,
        "description": "The font size of the SVG text."
      },
      {
        "name": "colors",
        "type": "colorArray[] | string",
        "default": "#eab308 | #ef4444 | #3b82f6 | #06b6d4 | #8b5cf6",
        "required": false,
        "description": "Array of colors for the glowing gradient outline."
      }
    ],
    "files": [
      {
        "name": "text-outline-glow.tsx",
        "content": "import React, { useRef, useState, useEffect } from \"react\"\r\nimport { useGSAP } from \"@gsap/react\"\r\nimport gsap from \"gsap\"\r\n\r\nexport const TextHoverEffect = ({\r\n  text,\r\n  duration,\r\n  fontSize = 56,\r\n  colors = [\"#eab308\", \"#ef4444\", \"#3b82f6\", \"#06b6d4\", \"#8b5cf6\"],\r\n  textFill,\r\n}: {\r\n  text: string\r\n  duration?: number\r\n  fontSize?: number\r\n  colors?: string[]\r\n  textFill?: string\r\n}) => {\r\n  const svgRef = useRef<SVGSVGElement>(null)\r\n  const maskGradientRef = useRef(null)\r\n  const animatedTextRef = useRef(null)\r\n  const [cursor, setCursor] = useState({ x: 0, y: 0 })\r\n  const [hovered, setHovered] = useState(false)\r\n  const [maskPosition, setMaskPosition] = useState({ cx: \"50%\", cy: \"50%\" })\r\n\r\n  useGSAP(\r\n    () => {\r\n      gsap.fromTo(\r\n        animatedTextRef.current,\r\n        { strokeDashoffset: 1000, strokeDasharray: 1000 },\r\n        {\r\n          strokeDashoffset: 0,\r\n          strokeDasharray: 1000,\r\n          duration: 4,\r\n          ease: \"power2.inOut\",\r\n        }\r\n      )\r\n    },\r\n    { scope: svgRef }\r\n  )\r\n\r\n  const updateCursorPosition = (x: number, y: number) => {\r\n    if (svgRef.current && x !== null && y !== null) {\r\n      const svgRect = svgRef.current.getBoundingClientRect()\r\n      const cxPercentage = ((x - svgRect.left) / svgRect.width) * 100\r\n      const cyPercentage = ((y - svgRect.top) / svgRect.height) * 100\r\n\r\n      const newPosition = {\r\n        cx: `${cxPercentage}%`,\r\n        cy: `${cyPercentage}%`,\r\n      }\r\n\r\n      setMaskPosition(newPosition)\r\n\r\n      gsap.to(maskGradientRef.current, {\r\n        attr: newPosition,\r\n        duration: duration ?? 0,\r\n        ease: \"power2.out\",\r\n      })\r\n    }\r\n  }\r\n\r\n  useEffect(() => {\r\n    updateCursorPosition(cursor.x, cursor.y)\r\n  }, [cursor, duration])\r\n\r\n  const handleMouseEnter = () => setHovered(true)\r\n  const handleMouseLeave = () => setHovered(false)\r\n  const handleMouseMove = (e: React.MouseEvent) => {\r\n    setCursor({ x: e.clientX, y: e.clientY })\r\n  }\r\n\r\n  const handleTouchStart = (e: React.TouchEvent) => {\r\n    e.preventDefault() \r\n    setHovered(true)\r\n    if (e.touches.length > 0) {\r\n      const touch = e.touches[0]\r\n      if (touch) {\r\n        setCursor({ x: touch.clientX, y: touch.clientY })\r\n      }\r\n    }\r\n  }\r\n\r\n  const handleTouchMove = (e: React.TouchEvent) => {\r\n    e.preventDefault()\r\n    if (e.touches.length > 0) {\r\n      const touch = e.touches[0]\r\n      if (touch) {\r\n        setCursor({ x: touch.clientX, y: touch.clientY })\r\n      }\r\n    }\r\n  }\r\n\r\n  const handleTouchEnd = (e: React.TouchEvent) => {\r\n    e.preventDefault()\r\n    setHovered(false)\r\n  }\r\n\r\n  return (\r\n    <svg\r\n      ref={svgRef}\r\n      width=\"100%\"\r\n      height=\"100%\"\r\n      viewBox=\"0 0 300 100\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n      onMouseEnter={handleMouseEnter}\r\n      onMouseLeave={handleMouseLeave}\r\n      onMouseMove={handleMouseMove}\r\n      onTouchStart={handleTouchStart}\r\n      onTouchMove={handleTouchMove}\r\n      onTouchEnd={handleTouchEnd}\r\n      onTouchCancel={handleTouchEnd}\r\n      className=\"select-none\"\r\n    >\r\n      <defs>\r\n        <linearGradient\r\n          id=\"textGradient\"\r\n          gradientUnits=\"userSpaceOnUse\"\r\n          cx=\"50%\"\r\n          cy=\"50%\"\r\n          r=\"20%\"\r\n        >\r\n          {hovered && (\r\n            <>\r\n              {colors.map((color, idx) => (\r\n                <stop\r\n                  key={idx}\r\n                  offset={\r\n                    colors.length === 1\r\n                      ? \"0%\"\r\n                      : `${(idx / (colors.length - 1)) * 100}%`\r\n                  }\r\n                  stopColor={color}\r\n                />\r\n              ))}\r\n            </>\r\n          )}\r\n        </linearGradient>\r\n        <radialGradient\r\n          id=\"revealMask\"\r\n          ref={maskGradientRef}\r\n          gradientUnits=\"userSpaceOnUse\"\r\n          r=\"25%\"\r\n          cx={maskPosition.cx}\r\n          cy={maskPosition.cy}\r\n        >\r\n          <stop offset=\"0%\" stopColor=\"white\" />\r\n          <stop offset=\"100%\" stopColor=\"black\" />\r\n        </radialGradient>\r\n        <mask id=\"textMask\">\r\n          <rect\r\n            x=\"0\"\r\n            y=\"0\"\r\n            width=\"100%\"\r\n            height=\"100%\"\r\n            fill=\"url(#revealMask)\"\r\n          />\r\n        </mask>\r\n      </defs>\r\n\r\n      {[0, 1, 2].map((_, idx) => (\r\n        <text\r\n          key={idx}\r\n          ref={idx === 1 ? animatedTextRef : undefined}\r\n          x=\"50%\"\r\n          y=\"50%\"\r\n          textAnchor=\"middle\"\r\n          dominantBaseline=\"middle\"\r\n          strokeWidth=\"0.8\"\r\n          className={`${textFill ? '' : 'fill-muted'} font-[helvetica] font-bold ${\r\n            idx === 0\r\n              ? \"stroke-neutral-300 dark:stroke-neutral-800\"\r\n              : idx === 1\r\n                ? \"stroke-neutral-300 dark:stroke-neutral-800\"\r\n                : \"\"\r\n          }`}\r\n          stroke={idx === 2 ? \"url(#textGradient)\" : undefined}\r\n          mask={idx === 2 ? \"url(#textMask)\" : undefined}\r\n          style={{\r\n            ...(textFill ? { fill: textFill } : {}),\r\n            fontSize,\r\n            opacity: idx === 0 && !hovered ? 0 : idx === 0 ? 0.7 : 1,\r\n          }}\r\n        >\r\n          {text}\r\n        </text>\r\n      ))}\r\n    </svg>\r\n  )\r\n}\r\n"
      }
    ]
  },
  {
    "name": "theme-toggler",
    "title": "Theme Toggler",
    "description": "A minimal theme toggle button with a cinematic full-screen curtain wipe animation. Supports vertical and horizontal directions.",
    "category": {
      "name": "Components",
      "slug": "components"
    },
    "tier": "free",
    "status": "stable",
    "label": "New",
    "image": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1779050609/theme-toggler_light_il8wew.webp",
    "imageDark": "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1779050609/theme-toggler_dark_poqkn4.webp",
    "tags": [
      "theme",
      "dark-mode",
      "toggle"
    ],
    "preview": {
      "disableSSR": true,
      "height": 300
    },
    "registryUrl": "https://grootstudio.vercel.app/r/theme-toggler.json",
    "installAlias": "theme-toggler",
    "npmDependencies": [
      "lucide-react"
    ],
    "registryDependencies": [],
    "usage": {
      "import": "import { ThemeToggler } from \"@/components/grootstudio/theme-toggler\"",
      "code": "export default function Demo() {\n  return <ThemeToggler direction=\"vertical\" duration={550} />\n}"
    },
    "props": [
      {
        "name": "direction",
        "type": "vertical | horizontal",
        "default": "vertical",
        "required": false,
        "description": "Direction of animation: Vertical sweeps top-to-bottom, horizontal sweeps left-to-right."
      },
      {
        "name": "duration",
        "type": "number",
        "default": "550",
        "required": false,
        "description": "Duration of animation in milliseconds."
      },
      {
        "name": "defaultTheme",
        "type": "light | dark",
        "default": "light",
        "required": false,
        "description": "Initial theme. Auto-detected from the document's dark class."
      },
      {
        "name": "onThemeChange",
        "type": "(theme: Theme) => void",
        "required": false,
        "description": "Callback fired after the theme change animation completes."
      },
      {
        "name": "className",
        "type": "string",
        "required": false,
        "description": "Additional Tailwind classes for custom styling."
      }
    ],
    "files": [
      {
        "name": "theme-toggler.tsx",
        "content": "\"use client\";\r\n\r\nimport { useRef, useEffect, useReducer } from \"react\";\r\nimport { createPortal } from \"react-dom\";\r\nimport { Moon, Sun } from \"lucide-react\";\r\nimport { cn } from \"@/lib/utils\";\r\n\r\n// ─── Types ────────────────────────────────────────────────────────────────────\r\n\r\nexport type Theme = \"light\" | \"dark\";\r\n\r\nexport interface ThemeTogglerProps {\r\n  direction?: \"vertical\" | \"horizontal\";\r\n  duration?: number;\r\n  defaultTheme?: Theme;\r\n  onThemeChange?: (theme: Theme) => void;\r\n  className?: string;\r\n}\r\n\r\n// ─── Helpers ──────────────────────────────────────────────────────────────────\r\n\r\nconst EASING = \"cubic-bezier(0.76, 0, 0.24, 1)\";\r\n\r\nfunction peekNextThemeBg(): string {\r\n  const html = document.documentElement;\r\n  html.classList.toggle(\"dark\");\r\n  const bg = getComputedStyle(document.body).backgroundColor;\r\n  html.classList.toggle(\"dark\");\r\n  return bg || getComputedStyle(document.body).color || \"currentColor\";\r\n}\r\n\r\n// ─── Component ────────────────────────────────────────────────────────────────\r\n\r\nexport function ThemeToggler({\r\n  direction = \"vertical\",\r\n  duration = 550,\r\n  defaultTheme = \"light\",\r\n  onThemeChange,\r\n  className,\r\n}: ThemeTogglerProps) {\r\n  const [, forceRender] = useReducer((x: number) => x + 1, 0);\r\n  const animatingRef = useRef(false);\r\n  const curtainRef = useRef<HTMLDivElement>(null);\r\n  const themeRef = useRef<Theme>(defaultTheme);\r\n\r\n  const isV = direction === \"vertical\";\r\n  const scale0 = isV ? \"scaleY(0)\" : \"scaleX(0)\";\r\n  const scale1 = isV ? \"scaleY(1)\" : \"scaleX(1)\";\r\n  const originIn = isV ? \"top center\" : \"left center\";\r\n  const originOut = isV ? \"bottom center\" : \"right center\";\r\n\r\n  useEffect(() => {\r\n    const isDark = document.documentElement.classList.contains(\"dark\");\r\n    themeRef.current = isDark ? \"dark\" : \"light\";\r\n    forceRender();\r\n  }, []);\r\n\r\n  const toggle = () => {\r\n    if (animatingRef.current) return;\r\n    const curtain = curtainRef.current;\r\n    if (!curtain) return;\r\n    animatingRef.current = true;\r\n\r\n    const next: Theme = themeRef.current === \"dark\" ? \"light\" : \"dark\";\r\n    curtain.style.background = peekNextThemeBg();\r\n\r\n    curtain.style.transition = \"none\";\r\n    curtain.style.transformOrigin = originIn;\r\n    curtain.style.transform = scale0;\r\n\r\n    curtain.getBoundingClientRect();\r\n    curtain.style.transition = `transform ${duration}ms ${EASING}`;\r\n    curtain.style.transform = scale1;\r\n\r\n    setTimeout(() => {\r\n      themeRef.current = next;\r\n      document.documentElement.classList.toggle(\"dark\", next === \"dark\");\r\n      onThemeChange?.(next);\r\n      forceRender();\r\n\r\n      curtain.style.transformOrigin = originOut;\r\n      requestAnimationFrame(() => {\r\n        requestAnimationFrame(() => {\r\n          curtain.style.transform = scale0;\r\n        });\r\n      });\r\n    }, duration);\r\n\r\n    setTimeout(() => {\r\n      curtain.style.transition = \"none\";\r\n      curtain.style.transform = scale0;\r\n      curtain.style.transformOrigin = originIn;\r\n      animatingRef.current = false;\r\n    }, duration * 2 + 100);\r\n  };\r\n\r\n  const isDark = themeRef.current === \"dark\";\r\n\r\n  return (\r\n    <>\r\n      {typeof document !== \"undefined\" &&\r\n        createPortal(\r\n          <div\r\n            ref={curtainRef}\r\n            aria-hidden=\"true\"\r\n            className=\"fixed inset-0 pointer-events-none\"\r\n            style={{ transform: scale0, transformOrigin: originIn, zIndex: 99999 }}\r\n          />,\r\n          document.body\r\n        )}\r\n\r\n      <button\r\n        type=\"button\"\r\n        onClick={toggle}\r\n        className={cn(\r\n          \"w-9 h-9 bg-muted text-muted-foreground border border-border flex items-center justify-center rounded-full cursor-pointer outline-none hover:bg-muted/50 transition-colors\",\r\n          className\r\n        )}\r\n        aria-label={isDark ? \"Switch to light mode\" : \"Switch to dark mode\"}\r\n      >\r\n        {isDark ? <Sun size={20} /> : <Moon size={20} />}\r\n      </button>\r\n    </>\r\n  );\r\n}"
      }
    ]
  }
];

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
