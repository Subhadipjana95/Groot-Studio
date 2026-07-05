"use client"

import { useState, useEffect, useMemo, memo } from "react"
import { useTheme } from "next-themes"
import {
    Toaster as Sonner,
    useSonner,
    toast,
    type ToasterProps,
    type ToastT,
} from "sonner"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

type ToastPosition =
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right"

const POSITION_CLASSES: Record<ToastPosition, string> = {
    "top-left": "top-6 left-6",
    "top-center": "top-6 left-1/2 -translate-x-1/2",
    "top-right": "top-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "bottom-center": "bottom-6 left-1/2 -translate-x-1/2",
    "bottom-right": "bottom-6 right-6",
}

const ALL_POSITIONS: ToastPosition[] = [
    "top-left",
    "top-center",
    "top-right",
    "bottom-left",
    "bottom-center",
    "bottom-right",
]

const TOAST_GRADIENTS: Record<string, string> = {
    success: "radial-gradient(circle at center, #34d399, #047857)",
    warning: "radial-gradient(circle at center, #fbbf24, #b45309)",
    error: "radial-gradient(circle at center, #f43f5e, #be123c)",
    info: "radial-gradient(circle at center, #38bdf8, #1d4ed8)",
    default: "radial-gradient(circle at center, #a1a1aa, #3f3f46)",
    normal: "radial-gradient(circle at center, #a1a1aa, #3f3f46)",
    loading: "radial-gradient(circle at center, #818cf8, #4338ca)",
}

const getGradient = (t: ToastT) => TOAST_GRADIENTS[t.type || "default"] || TOAST_GRADIENTS.default

const getTitle = (t: ToastT) => {
    const title = t.title
    if (typeof title === "function") {
        const res = title()
        return typeof res === "string" ? res : "Notification"
    }
    return typeof title === "string" ? title : "Notification"
}

const getDescription = (t: ToastT) => {
    const desc = t.description
    if (typeof desc === "function") {
        const res = desc()
        return typeof res === "string" ? res : null
    }
    return typeof desc === "string" ? desc : null
}

interface ToastStackProps {
    position: ToastPosition
    items: ToastT[]
}

const ToastStack = memo(
    ({ position, items }: ToastStackProps) => {
        const [hoveredId, setHoveredId] = useState<number | string | null>(null)
        const [fullyExpandedId, setFullyExpandedId] = useState<number | string | null>(null)

        useEffect(() => {
            if (hoveredId !== null && !items.some((t) => t.id === hoveredId)) {
                setHoveredId(null)
                setFullyExpandedId(null)
            }
        }, [items, hoveredId])

        const displayedItems = useMemo(() => [...items].reverse(), [items])
        const positionClass = POSITION_CLASSES[position] || POSITION_CLASSES["bottom-right"]
        const isLeftAligned = position.includes("left")
        const initialX = isLeftAligned ? -12 : 12

        return (
            <div className={`fixed z-9999 pointer-events-none ${positionClass}`}>
                <div className="flex flex-row items-center justify-center">
                    <AnimatePresence initial={false}>
                        {displayedItems.map((item, idx) => {
                            const isFirst = idx === 0
                            const isHovered = hoveredId === item.id
                            const isExpanded = hoveredId !== null ? isHovered : idx === displayedItems.length - 1
                            const isFullyExpanded = fullyExpandedId === item.id

                            const hoveredIndex = displayedItems.findIndex((i) => i.id === hoveredId)
                            const isRightOfHovered = hoveredIndex !== -1 && idx === hoveredIndex + 1

                            const marginLeft = isHovered || isRightOfHovered ? 6 : -12
                            const gradient = getGradient(item)

                            return (
                                <motion.div
                                    key={item.id}
                                    onMouseEnter={() => setHoveredId(item.id)}
                                    onMouseLeave={() => {
                                        setHoveredId(null)
                                        setFullyExpandedId(null)
                                    }}
                                    onAnimationComplete={() => isExpanded && setFullyExpandedId(item.id)}
                                    initial={{
                                        width: 40,
                                        scale: 1,
                                        marginLeft: isFirst ? 0 : -24,
                                        opacity: 0,
                                        x: initialX,
                                        filter: "blur(2px)",
                                    }}
                                    animate={{
                                        width: isExpanded ? "auto" : 40,
                                        scale: isExpanded ? 1.05 : 1,
                                        marginLeft: isFirst ? 0 : marginLeft,
                                        opacity: 1,
                                        x: 0,
                                        filter: "blur(0px)",
                                    }}
                                    exit={{
                                        width: 0,
                                        scale: 0.8,
                                        opacity: 0,
                                        marginLeft: 0,
                                        x: initialX,
                                        filter: "blur(2px)",
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 180,
                                        damping: 25,
                                        filter: { ease: "easeOut", duration: 0.3 },
                                        opacity: { ease: "easeOut", duration: 0.3 },
                                    }}
                                    style={{ zIndex: isHovered ? 50 : idx + 1 }}
                                    className="relative h-10 p-0.75 pr-3 flex items-center justify-start border bg-card rounded-4xl cursor-pointer overflow-hidden shrink-0 select-none shadow-sm hover:shadow-lg transition-shadow duration-300 pointer-events-auto"
                                >
                                    <div className="relative w-8 h-8 border border-white/10 rounded-full overflow-hidden shrink-0 group/avatar shadow-inner cursor-pointer">
                                        <AnimatePresence mode="popLayout" initial={false}>
                                            <motion.div
                                                key={gradient}
                                                initial={{ filter: "blur(2px)", opacity: 0 }}
                                                animate={{ filter: "blur(0px)", opacity: 1 }}
                                                exit={{ filter: "blur(2px)", opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                                style={{ backgroundImage: gradient }}
                                                className="absolute inset-0"
                                            />
                                        </AnimatePresence>
                                        <div
                                            className="absolute inset-0 opacity-[0.18] mix-blend-overlay pointer-events-none z-10"
                                            style={{
                                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                                            }}
                                        />
                                        {item.type === "loading" && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/35 z-20">
                                                <div className="sonner-loading-wrapper" style={{ position: "relative", inset: "auto", "--size": "16px" } as React.CSSProperties}>
                                                    <div className="sonner-spinner">
                                                        {Array(12).fill(0).map((_, i) => (
                                                            <div
                                                                className="sonner-loading-bar"
                                                                key={i}
                                                                style={{
                                                                    background: "white",
                                                                    animationDelay: `${-1.2 + i * 0.1}s`,
                                                                    transform: `rotate(${i * 30}deg) translate(146%)`
                                                                }}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {isFullyExpanded && (
                                            <div
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    setHoveredId(null)
                                                    setFullyExpandedId(null)
                                                    toast.dismiss(item.id)
                                                }}
                                                className="absolute inset-0 bg-background/60 flex items-center justify-center cursor-pointer opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-200 z-30"
                                            >
                                                <X className="w-4 h-4 text-foreground/80 stroke-[2.5]" />
                                            </div>
                                        )}
                                    </div>

                                    <motion.div
                                        initial={false}
                                        animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -10 }}
                                        transition={{ duration: 0.2, ease: "easeInOut" }}
                                        className="flex flex-col items-start justify-center ml-2 shrink-0 select-none text-left cursor-default"
                                    >
                                        <AnimatePresence mode="wait">
                                            {isExpanded && (
                                                <motion.div
                                                    key={`${item.id}-${getTitle(item)}-${getDescription(item) || ""}`}
                                                    initial={{ opacity: 0, filter: "blur(2px)", y: 4, x: -4 }}
                                                    animate={{ opacity: 1, filter: "blur(0px)", y: 0, x: 0 }}
                                                    exit={{ opacity: 0, filter: "blur(2px)", y: 4, x: -4 }}
                                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                                >
                                                    <p className="text-muted-foreground text-[13px] font-medium leading-none">
                                                        {getTitle(item)}
                                                    </p>
                                                    {getDescription(item) && (
                                                        <p className="text-muted-foreground text-[10px] font-normal leading-tight mt-0.5 line-clamp-1">
                                                            {getDescription(item)}
                                                        </p>
                                                    )}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </div>
            </div>
        )
    },
    (prev, next) =>
        prev.position === next.position &&
        prev.items.length === next.items.length &&
        prev.items.every((item, i) => {
            const nextItem = next.items[i]
            return (
                item.id === nextItem?.id &&
                item.type === nextItem?.type &&
                item.title === nextItem?.title &&
                item.description === nextItem?.description
            )
        })
)

const Toaster = ({
    duration = 6000,
    position = "bottom-right",
    ...props
}: ToasterProps) => {
    const { theme = "system" } = useTheme()
    const { toasts: rawToasts } = useSonner()

    const groups = useMemo(() => {
        const items = rawToasts.filter((t): t is ToastT => "title" in t || !("dismiss" in t))
        return items.reduce((acc, item) => {
            const pos = (item.position || position || "bottom-right") as ToastPosition
            if (!acc[pos]) acc[pos] = []
            acc[pos].push(item)
            return acc
        }, {} as Record<ToastPosition, ToastT[]>)
    }, [rawToasts, position])

    return (
        <>
            <div
                aria-hidden="true"
                style={{
                    position: "fixed",
                    width: 1,
                    height: 1,
                    overflow: "hidden",
                    clip: "rect(0 0 0 0)",
                    clipPath: "inset(50%)",
                    whiteSpace: "nowrap",
                }}
            >
                <Sonner
                    theme={theme as ToasterProps["theme"]}
                    duration={duration}
                    position={position}
                    {...props}
                />
            </div>

            {ALL_POSITIONS.map((pos) => (
                <ToastStack
                    key={pos}
                    position={pos}
                    items={groups[pos] || []}
                />
            ))}
        </>
    )
}

export { Toaster }