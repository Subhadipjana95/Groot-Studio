import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import localFont from "next/font/local"
import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/utilities/theme-provider"
import { LenisProvider } from "@/components/utilities/lenis-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { cn } from "@workspace/ui/lib/utils";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next"

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
  metadataBase: new URL("https://grootstudio.dev"),
  title: {
    default: "Groot Studio - UI Component Library",
    template: "%s | Groot Studio",
  },
  description:
    "High-performing, SEO optimised UI components and blocks designed for modern developers. Built with Next.js, TypeScript, Tailwind CSS, Motion & Radix UI.",
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
  authors: [{ name: "Groot Studio", url: "https://grootstudio.dev" }],
  creator: "Groot Studio",
  publisher: "Groot Studio",

  // Open Graph
  openGraph: {
    title: "Groot Studio - UI Component Library",
    description:
      "High-performing, SEO optimised UI components and blocks designed for modern developers.",
    url: "https://grootstudio.dev",
    siteName: "Groot Studio",
    locale: "en_US",
    type: "website",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Groot Studio - UI Components Library",
    description:
      "High-performing, SEO optimised UI components and blocks designed for modern developers.",
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
    canonical: "https://grootstudio.dev",
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
            <div className="relative flex flex-col w-full min-h-dvh font-sans bg-background selection:bg-brand1/15 selection:text-brand1/75">
              {children}
            </div>
            <Footer />
          </LenisProvider>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
      <Analytics />
    </html>
  )
}
