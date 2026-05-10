"use client"

import ImageCursorTrail from "@workspace/ui/registry/radix-nova/image-trail/image-trail"

export default function ImageTrailPreview() {
    const images = [
        "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1200&auto=format",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format",
        "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=1200&auto=format",
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format",
        "https://images.unsplash.com/photo-1465101162946-4377e57745c3?q=80&w=1200&auto=format",
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1200&auto=format",
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?q=80&w=1200&auto=format",
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1200&auto=format",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format",
    ]

    return (
        <section className="mx-auto w-full">
            <div className="relative">
                <p className="absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 text-xl font-base tracking-tight pointer-events-none">
                    Wiggle your mouse around.
                </p>
                <ImageCursorTrail
                    items={images}
                    maxNumberOfImages={5}
                    distance={25}
                    imgClass="sm:w-40 w-28 sm:h-48 h-36 border border-background"
                    className="max-w-4xl rounded-3xl"
                />
            </div>
        </section>
    )
}
