"use client"

import ImageCursorTrail from "@workspace/ui/registry/radix-nova/image-trail/image-trail"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

export default function ImageTrailPreview() {
  const images = [
    "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1779383165/8a93491afd90a09985eaddce102b329b_efq8me.jpg",
    "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1779383230/e5b9651df49a4940fbe124fd0a8df131_gvdvvx.jpg",
    "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1779383249/3cfb769f842fb198f4e04e2a3d10be30_c8z9w4.jpg",
    "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1779383361/ac04f0cd44103b4842b42e3d3eeb56d8_idq2x6.jpg",
    "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1779383590/4967f9c721decc9415f4727448c5dd91_x3cgv3.jpg",
    "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1779383546/4776e136af2fca9f4fce218289953224_szaihc.jpg",
    "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1779383714/8c3b369438f3ea034311f6ad63cea0ba_loyee8.jpg",
    "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1779383627/b5e62228f6f5a2b99dee39063b8238b4_tgve5o.jpg",
    "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1779383508/e4e2e5463ccfefc3905eb5363edc6117_y1wowo.jpg",
  ]

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="mx-auto w-full">
      <div className="relative w-full flex items-center justify-center bg-background text-foreground">
        <p className="font-base pointer-events-none absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 text-xl tracking-tight">
          Wiggle your mouse around.
        </p>
        {mounted &&
          createPortal(
            <ImageCursorTrail
              items={images}
              maxNumberOfImages={6}
              distance={60}
              imgClass="sm:w-40 w-28 sm:h-48 h-36 border border-background"
              className="fixed inset-0 z-50 pointer-events-none"
            />,
            document.body
          )}
      </div>
    </section>
  )
}
