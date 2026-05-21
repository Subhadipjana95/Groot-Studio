"use client"

import { useRef, useEffect, type ReactNode } from "react"
import { animate } from "motion/react"
import { cn } from "@/lib/utils"

interface ImageMouseTrailProps {
  items: string[]
  children?: ReactNode
  className?: string
  imgClass?: string
  distance?: number
  maxNumberOfImages?: number
}

export default function ImageCursorTrail({
  items = [],
  children,
  className,
  imgClass = "w-40 h-48",
  distance = 40,
  maxNumberOfImages = 8,
}: ImageMouseTrailProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const lastPositionRef = useRef({ x: 0, y: 0 })
  const globalIndexRef = useRef(0)
  const zIndexRef = useRef(1)
  const timeoutsRef = useRef<Set<ReturnType<typeof setTimeout>>>(new Set())

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0]?.clientX : e.clientX
      const clientY = "touches" in e ? e.touches[0]?.clientY : e.clientY

      if (clientX === undefined || clientY === undefined) return

      const lastX = lastPositionRef.current.x
      const lastY = lastPositionRef.current.y
      
      if (lastX === 0 && lastY === 0) {
        lastPositionRef.current = { x: clientX, y: clientY }
        return
      }

      const dist = Math.hypot(clientX - lastX, clientY - lastY)

      if (dist > distance) {
        const count = Math.floor(dist / distance)
        
        for (let i = 1; i <= count; i++) {
          const t = i / count
          const x = lastX + (clientX - lastX) * t
          const y = lastY + (clientY - lastY) * t
          activateImage(x, y)
        }
        
        lastPositionRef.current = { x: clientX, y: clientY }
      }
    }

    window.addEventListener("mousemove", handleMove)
    window.addEventListener("touchmove", handleMove)
    
    return () => {
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("touchmove", handleMove)
      timeoutsRef.current.forEach((t) => clearTimeout(t))
      timeoutsRef.current.clear()
    }
  }, [distance, items, maxNumberOfImages])

  const activateImage = (clientX: number, clientY: number) => {
    if (!containerRef.current || !items || items.length === 0) return

    const containerRect = containerRef.current.getBoundingClientRect()
    const relativeX = clientX - containerRect.left
    const relativeY = clientY - containerRect.top
    
    const img = document.createElement("img")
    img.src = items[globalIndexRef.current % items.length]!
    img.alt = ""
    img.setAttribute("aria-hidden", "true")
    img.className = cn(
      "pointer-events-none absolute rounded-3xl object-cover shadow-xl",
      imgClass
    )
    
    Object.assign(img.style, {
      left: `${relativeX}px`,
      top: `${relativeY}px`,
      zIndex: String(zIndexRef.current),
      position: "absolute",
      transform: "translate(-50%, -50%) scale(0)",
      opacity: "0",
    })
    
    containerRef.current.appendChild(img)
    
    const activeImages = containerRef.current.querySelectorAll("img")
    if (activeImages.length > maxNumberOfImages) {
      activeImages[0]?.remove()
    }
    
    const rotation = Math.random() * 20 - 10

    animate(img, 
      { 
        scale: [0, 1],
        opacity: [0, 1],
        rotate: [rotation - 10, rotation]
      }, 
      { 
        type: "spring",
        stiffness: 400,
        damping: 20,
        mass: 0.8
      }
    )

    const timer = setTimeout(() => {
      const controls = animate(img, 
        { 
          scale: 0,
          opacity: 0,
          rotate: rotation + 10
        }, 
        { 
          duration: 0.4, 
          ease: "backIn" 
        }
      )
      
      controls.then(() => {
        img.remove()
        timeoutsRef.current.delete(timer)
      })
    }, 1000)

    timeoutsRef.current.add(timer)
    
    globalIndexRef.current++
    zIndexRef.current = (zIndexRef.current % 10000) + 1
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative grid w-full isolate place-content-center bg-transparent",
        className
      )}
    >
      <div className="relative z-10001">{children}</div>
    </div>
  )
}
