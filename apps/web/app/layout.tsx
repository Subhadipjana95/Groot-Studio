import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import localFont from "next/font/local"
import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/utilities/theme-provider"
import { LenisProvider } from "@/components/utilities/lenis-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { cn } from "@workspace/ui/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const gambarino = localFont({
  src: "../public/font/Gambarino-Regular.ttf",
  variable: "--font-gambarino",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://grootstudio.vercel.app"),
  title: {
    default: "Groot Studio - High-performing, SEO friendly UI Components & Blocks for Modern Web",
    template: "%s | Groot Studio",
  },
  description:
    "Hand-crafted, high-performing, SEO friendly & accessible UI components and blocks designed for modern developers. Built with React, Next.js, Tailwind CSS & Radix UI.",
  keywords: [
    "ui components",
    "react components",
    "nextjs",
    "tailwind css",
    "radix ui",
    "typescript",
    "shadcn",
    "ui blocks",
    "web development",
    "design system",
  ],
  authors: [{ name: "Groot Studio", url: "https://grootstudio.vercel.app" }],
  creator: "Groot Studio",
  publisher: "Groot Studio",

  // Open Graph
  openGraph: {
    title: "Groot Studio - High-performing, SEO friendly UI Components & Blocks",
    description:
      "Hand-crafted, high-performing, SEO friendly & accessible components designed for modern developers.",
    url: "https://grootstudio.vercel.app",
    siteName: "Groot Studio",
    locale: "en_US",
    type: "website",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Groot Studio - Premium UI Components & Blocks",
    description:
      "Hand-crafted, high-performing, SEO friendly & accessible components designed for modern developers.",
    creator: "@groot_studio",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: "/icon.png",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",
  },

  // Verification
  verification: {
    google: "your-google-verification-code",
  },

  // Alternates
  alternates: {
    canonical: "https://grootstudio.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", geist.variable, gambarino.variable)}
    >
      <body>
        <ThemeProvider>
          <LenisProvider>
            <Navbar />
            <div className="relative flex min-h-screen flex-col font-sans bg-brand-background selection:bg-primary/15 selection:text-primary">
              {children}
              <Footer />
            </div>
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
