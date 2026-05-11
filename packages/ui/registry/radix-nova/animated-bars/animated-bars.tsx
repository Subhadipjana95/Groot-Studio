"use client";

import React from 'react';
import { cn } from "@/lib/utils";

interface AnimatedBarsProps {
    numBars?: number;
    gradientFrom?: string;
    gradientTo?: string;
    animationDuration?: number;
    className?: string;
}

const GradientBars: React.FC<AnimatedBarsProps> = ({
    numBars = 20,
    gradientFrom = '#f43f5e',
    gradientTo = 'transparent',
    animationDuration = 3,
    className = '',
}) => {
    const calculateHeight = (index: number, total: number) => {
        const position = index / (total - 1);
        const maxHeight = 100;
        const minHeight = 40;

        const center = 0.5;
        const distanceFromCenter = Math.abs(position - center);
        const heightPercentage = Math.pow(distanceFromCenter * 2, 1.5);

        return minHeight + (maxHeight - minHeight) * heightPercentage;
    };

    return (
        <>
            <style>{`
        @keyframes fluidWave {
          0% { 
            transform: scaleY(var(--initial-scale)); 
            opacity: 0.4;
            filter: brightness(1);
          }
          50% { 
            transform: scaleY(calc(var(--initial-scale) * 1.15)); 
            opacity: 0.8;
            filter: brightness(1.2);
          }
          100% { 
            transform: scaleY(calc(var(--initial-scale) * 0.9)); 
            opacity: 0.5;
            filter: brightness(0.9);
          }
        }
      `}</style>

            <div className={cn("absolute inset-0 z-0 overflow-hidden pointer-events-none", className)}>
                <div
                    className="flex h-full items-end"
                    style={{
                        width: '100%',
                        transform: 'translateZ(0)',
                        backfaceVisibility: 'hidden',
                    }}
                >
                    {Array.from({ length: numBars }).map((_, index) => {
                        const height = calculateHeight(index, numBars);
                        return (
                            <div
                                key={index}
                                className="relative"
                                style={{
                                    flex: 1,
                                    marginLeft: index === 0 ? '0' : '-1px',
                                    height: '100%',
                                    background: `linear-gradient(to top, ${gradientFrom}, ${gradientTo})`,
                                    transform: `scaleY(${height / 100})`,
                                    transformOrigin: 'bottom',
                                    animation: `fluidWave ${animationDuration}s ease-in-out infinite alternate`,
                                    animationDelay: `-${index * (animationDuration / numBars)}s`,
                                    // @ts-ignore
                                    '--initial-scale': height / 100,
                                }}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

interface AnimatedBarsBackgroundProps {
    numBars?: number;
    gradientFrom?: string;
    gradientTo?: string;
    animationDuration?: number;
    backgroundColor?: string;
    children?: React.ReactNode;
    className?: string;
}

export function AnimatedBars({
    numBars = 12,
    gradientFrom = '#f43f5e',
    gradientTo = 'transparent',
    animationDuration = 4,
    backgroundColor,
    children,
    className,
}: AnimatedBarsBackgroundProps) {
    return (
        <section
            className={cn("relative min-h-[400px] w-full flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background", className)}
            style={backgroundColor ? { backgroundColor } : undefined}
        >
            <GradientBars
                numBars={numBars}
                gradientFrom={gradientFrom}
                gradientTo={gradientTo}
                animationDuration={animationDuration}
            />

            {children && (
                <div className="relative z-10 w-full h-full flex items-center justify-center px-4">
                    {children}
                </div>
            )}
        </section>
    );
}
