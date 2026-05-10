'use client';

import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

const flairImages = [
    "https://assets.codepen.io/16327/Revised+Flair.png",
    "https://assets.codepen.io/16327/Revised+Flair-1.png",
    "https://assets.codepen.io/16327/Revised+Flair-2.png",
    "https://assets.codepen.io/16327/Revised+Flair-3.png",
    "https://assets.codepen.io/16327/Revised+Flair-4.png",
    "https://assets.codepen.io/16327/Revised+Flair-5.png",
    "https://assets.codepen.io/16327/Revised+Flair-6.png",
    "https://assets.codepen.io/16327/Revised+Flair-7.png",
    "https://assets.codepen.io/16327/Revised+Flair-8.png",
    "https://assets.codepen.io/16327/Revised+Flair.png",
    "https://assets.codepen.io/16327/Revised+Flair-1.png",
    "https://assets.codepen.io/16327/Revised+Flair-2.png",
    "https://assets.codepen.io/16327/Revised+Flair-3.png",
    "https://assets.codepen.io/16327/Revised+Flair-4.png",
    "https://assets.codepen.io/16327/Revised+Flair-5.png",
    "https://assets.codepen.io/16327/Revised+Flair-6.png",
    "https://assets.codepen.io/16327/Revised+Flair-7.png",
    "https://assets.codepen.io/16327/Revised+Flair-8.png",
];

export interface CursorTrailProps extends React.HTMLAttributes<HTMLDivElement> {
    images?: string[];
    distance?: number;
    duration?: number;
    imageSize?: number;
}

export function CursorTrail({
    className,
    images = flairImages,
    distance = 80,
    duration = 1000,
    imageSize = 64,
    ...props
}: CursorTrailProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const imgElements = Array.from(containerRef.current.querySelectorAll('.flair-image')) as HTMLElement[];
        let currentIndex = 0;

        let lastX = 0;
        let lastY = 0;
        let isInitial = true;

        const spawnImage = (x: number, y: number) => {
            const img = imgElements[currentIndex];
            if (!img) return;
            currentIndex = (currentIndex + 1) % imgElements.length;

            // Adjust to center the image on the cursor
            const targetX = x - imageSize / 2;
            const targetY = y - imageSize / 2;

            // Ensure any previous animation is cancelled safely
            if (typeof img.getAnimations === 'function') {
                img.getAnimations().forEach(anim => anim.cancel());
            }

            const randomRotation = Math.random() * 40 - 20;

            img.animate([
                {
                    opacity: 0,
                    transform: `translate(${targetX}px, ${targetY}px) scale(0.2) rotate(0deg)`
                },
                {
                    opacity: 1,
                    transform: `translate(${targetX}px, ${targetY}px) scale(1) rotate(${randomRotation / 2}deg)`,
                    offset: 0.15
                },
                {
                    opacity: 0,
                    transform: `translate(${targetX}px, ${targetY + 80}px) scale(0.8) rotate(${randomRotation}deg)`
                }
            ], {
                duration,
                easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
                fill: 'forwards'
            });
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const currentX = e.clientX - rect.left;
            const currentY = e.clientY - rect.top;

            if (isInitial) {
                lastX = currentX;
                lastY = currentY;
                isInitial = false;
                return;
            }

            const dist = Math.hypot(currentX - lastX, currentY - lastY);

            if (dist > distance) {
                const count = Math.floor(dist / distance);
                for (let i = 1; i <= count; i++) {
                    const t = (i * distance) / dist;
                    const x = lastX + (currentX - lastX) * t;
                    const y = lastY + (currentY - lastY) * t;
                    spawnImage(x, y);
                }

                // Update lastX and lastY to the last spawned point
                const totalT = (count * distance) / dist;
                lastX = lastX + (currentX - lastX) * totalT;
                lastY = lastY + (currentY - lastY) * totalT;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [distance, duration, imageSize]);

    return (
        <div
            className={cn("pointer-events-none fixed inset-0 z-50 overflow-hidden", className)}
            {...props}
        >
            <div ref={containerRef} className="absolute inset-0">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt=""
                        className="flair-image absolute left-0 top-0 object-cover pointer-events-none origin-center"
                        style={{
                            width: imageSize,
                            height: imageSize,
                            transform: 'translate(-100%, -100%)'
                        }}
                        aria-hidden="true"
                    />
                ))}
            </div>
        </div>
    );
}
