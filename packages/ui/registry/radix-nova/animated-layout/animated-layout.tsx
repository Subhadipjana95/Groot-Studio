"use client";

import React, { useState } from "react";
import { motion, LayoutGroup, AnimatePresence, type Transition } from "motion/react";
import { List, LayoutGrid, Layers, Star, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CollectionItem {
    id: string;
    title: string;
    subtitle: string;
    badge: string;
    image: string;
    icon: React.ElementType;
}

export type ViewMode = "list" | "card" | "pack";

// ─── Constants (hoisted – zero per-render cost) ──────────────────────────────

const S: Transition = { type: "spring", stiffness: 400, damping: 32, mass: 0.8 };
const S_TAB: Transition = { type: "spring", stiffness: 500, damping: 35, mass: 0.6 };
const S_CHECK: Transition = { type: "spring", stiffness: 500, damping: 30 };
const FADE: Transition = { duration: 0.12, ease: [0.25, 0.1, 0.25, 1] };

const GPU: React.CSSProperties = { willChange: "transform", transform: "translateZ(0)", backfaceVisibility: "hidden" };
const RESET = { rotate: 0, x: 0, y: 0 };
const PACK_X = 22;

const TABS: { mode: ViewMode; icon: React.ElementType }[] = [
    { mode: "list", icon: List },
    { mode: "card", icon: LayoutGrid },
    { mode: "pack", icon: Layers },
];

// ─── View-mode class maps (avoids repeated ternaries in render) ──────────────

const GRID_CLS: Record<ViewMode, string> = {
    list: "flex flex-col gap-2",
    card: "grid grid-cols-2 gap-3",
    pack: "h-64 flex items-center justify-center mt-4",
};

const CARD_CLS: Record<ViewMode, string> = {
    list: "flex-row gap-4 w-full rounded-lg",
    card: "flex-col gap-3 w-full items-start rounded-xl",
    pack: "absolute w-56 h-56 items-center justify-center rounded-xl",
};

const IMG_CLS: Record<ViewMode, string> = {
    list: "w-16 h-16 rounded-lg border border-border",
    card: "w-full aspect-square rounded-lg border border-border shadow-sm",
    pack: "w-full h-full rounded-lg border border-border shadow-lg",
};

const WRAP_CLS: Record<ViewMode, string> = {
    list: "p-2",
    card: "p-3",
    pack: "py-4",
};

// ─── Sub-components ──────────────────────────────────────────────────────────

const ViewTab = React.memo(function ViewTab({ active, onClick, icon: Icon }: {
    active: boolean; onClick: () => void; icon: React.ElementType;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={cn(
                "relative flex items-center px-2.5 py-1.5 rounded-md outline-none transition-colors duration-150",
                active ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            )}
        >
            {active && (
                <motion.span
                    layoutId="animated-layout-active-tab"
                    className="absolute inset-0 rounded-md bg-primary shadow-sm"
                    transition={S_TAB}
                    style={GPU}
                />
            )}
            <Icon size={14} strokeWidth={2} className={cn("relative z-10 transition-transform duration-200", active && "scale-110")} />
        </button>
    );
});

const ItemInfo = React.memo(function ItemInfo({ item, view }: { item: CollectionItem; view: ViewMode }) {
    const Icon = item.icon;
    const [checked, setChecked] = useState(false);
    const isCard = view === "card";

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.92, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.92, filter: "blur(4px)" }}
            transition={FADE}
            className={cn("flex flex-1 items-center justify-between min-w-0", isCard ? "w-full px-1 pb-1" : "px-0")}
        >
            <div className="flex flex-col gap-0.5 min-w-0">
                <div className="flex items-center justify-start">
                    <h3 className={cn(
                        "font-medium text-[15px] leading-tight truncate transition-colors duration-200",
                        checked ? "text-muted-foreground line-through decoration-muted-foreground/50" : "text-foreground"
                    )}>
                        {item.title}
                    </h3>
                    <span className="flex items-center gap-1 px-1 rounded-sm bg-muted/50 border border-border text-primary text-[10px] font-bold shrink-0 ml-2">
                        <Star size={10} className="text-yellow-500 fill-yellow-500" />
                        {item.badge}
                    </span>
                </div>
                <span className={cn(
                    "text-xs font-medium text-muted-foreground flex items-center gap-1.5 transition-opacity duration-200",
                    checked && "opacity-50"
                )}>
                    <span className="flex items-center justify-center p-[3px] bg-muted/50 border border-border rounded-sm">
                        <Icon size={12} strokeWidth={2} className="text-primary/70 shrink-0" />
                    </span>
                    <span className="truncate">{item.subtitle}</span>
                </span>
            </div>

            <motion.button
                type="button"
                role="checkbox"
                aria-checked={checked}
                onClick={() => setChecked((p) => !p)}
                className={cn(
                    "shrink-0 flex items-center justify-center border transition-all duration-200 outline-none rounded-sm",
                    isCard ? "size-6" : "size-7 mr-2",
                    checked ? "bg-card border-primary text-primary" : "bg-card border-border text-foreground/80 hover:border-primary/40"
                )}
            >
                <AnimatePresence mode="wait">
                    {checked && (
                        <motion.span
                            key="check"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={S_CHECK}
                        >
                            <Check size={isCard ? 14 : 16} strokeWidth={2.5} />
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.button>
        </motion.div>
    );
});

// ─── Main component ──────────────────────────────────────────────────────────

export interface AnimatedLayoutProps {
    items: CollectionItem[];
    defaultView?: ViewMode;
    heading?: string;
    className?: string;
}

export function AnimatedLayout({ items, defaultView = "list", heading = "My Tasks", className }: AnimatedLayoutProps) {
    const [view, setView] = useState<ViewMode>(defaultView);
    const len = items.length;

    return (
        <div className={cn("w-full max-w-xl mx-auto p-4 md:p-8 font-sans select-none", className)}>
            <div className="w-full flex flex-col items-end gap-4">
                <div className="flex items-center justify-between w-full gap-5">
                    <h2 className="text-xl font-medium text-foreground">{heading}</h2>
                    <nav className="flex p-1 bg-muted rounded-lg w-fit border border-border">
                        {TABS.map((t) => (
                            <ViewTab key={t.mode} active={view === t.mode} onClick={() => setView(t.mode)} icon={t.icon} />
                        ))}
                    </nav>
                </div>

                <div className={cn("relative w-full flex flex-col items-center border border-border rounded-xl bg-muted/60", WRAP_CLS[view])}>
                    <LayoutGroup>
                        <motion.div layout transition={S} style={GPU} className={cn("w-full relative", GRID_CLS[view])}>
                            {items.map((item, i) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    transition={S}
                                    style={{ ...GPU, zIndex: view === "pack" ? len - i : 1 }}
                                    animate={view === "pack" ? { rotate: 0, x: (i - (len - 1) / 2) * PACK_X } : RESET}
                                    className={cn("relative flex items-center bg-background p-1.5", CARD_CLS[view])}
                                >
                                    <motion.div layout transition={S} className={cn("relative overflow-hidden shrink-0 bg-background", IMG_CLS[view])}>
                                        <motion.img layout transition={S} src={item.image} alt={item.title} loading="lazy" decoding="async" className="w-full h-full object-cover block" />
                                    </motion.div>
                                    <AnimatePresence mode="popLayout" initial={false}>
                                        {view !== "pack" && <ItemInfo key={`${item.id}-info`} item={item} view={view} />}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </motion.div>
                    </LayoutGroup>
                </div>
            </div>
        </div>
    );
}

export default AnimatedLayout;