import { MotionIcon, TypeScriptIcon, ReactIcon, TailwindCSSIcon, NextjsIcon, RadixUIIcon, ShadcnuiIcon } from "@workspace/ui/components/icons/icon"
import { Sparkles, Zap, ShieldCheck } from "lucide-react"

export const DATA = {
    title: "Groot Studio",
    description: "Hand-crafted, high-performing, SEO friendly & accessible components designed for modern developers.",
    donateURL: "https://a063.xyz/support",
    GITHUB_USER_NAME: "Subhadipjana95",
    GITHUB_REPO_LINK: "Subhadipjana95/Groot-Studio",
    DISCORD_SERVER_ID: "1487752291602665574",
    DISCORD_INVITE_LINK: "https://discord.gg/5nJmZYA5f2",
    QUERIES_EMAIL: "queries@grootstudio.dev",


    // Changelog Data
    changelog: [
        {
            date: "Apr 16, 2026",
            title: "Initial release",
            description: "Added the first public release with core components and blocks.",
            image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1776286826/Groot-UI_Preview_ojjktb.webp"
        },
        {
            date: "Apr 15, 2026",
            title: "Beta Testing",
            description: "Finalized the core animation engine and stabilized the documentation system for public use.",
        }
    ],

    // Pricing Plans Data
    plans: [
        {
            name: "Free",
            price: "0",
            originalPrice: "0",
            description: "Access to all free components",
            features: [
                "Access to all free components",
                "Copy and paste, no complexity",
                "Built with Next.js, React, Tailwind CSS & Framer Motion",
                "Fully responsive and customizable",
                "Documentation and examples included"
            ],
            cta: "Browse free components",
            variant: "outline",
            icon: Sparkles
        },
        {
            name: "Annual Access",
            price: "169",
            originalPrice: "249",
            description: "Paid yearly",
            features: [
                "Access to 200+ premium Component Blocks",
                "Access to 12+ ready-to-use Templates",
                "1 year of updates and new features",
                "AI-ready prompts for Lovable, V0 and more",
                "Private Discord community access",
                "Copy and paste, no complexity",
                "Built with Next.js, React, Tailwind CSS & Framer Motion",
                "Fully responsive and customizable"
            ],
            cta: "Get Annual Access",
            variant: "outline",
            icon: Zap
        },
        {
            name: "Lifetime Access",
            price: "199",
            originalPrice: "299",
            description: "One-time Purchase",
            features: [
                "Access to 200+ premium Blocks",
                "Access to 12+ ready-to-use Templates",
                "Lifetime updates for all content",
                "Access to all future releases",
                "Private Discord community access",
                "48-hour dedicated support turnaround",
                "AI-ready prompts for Lovable, V0 and more",
                "Copy and paste, no complexity",
                "Built with Next.js, React, Tailwind CSS & Framer Motion",
                "Fully responsive and customizable"
            ],
            cta: "Get Lifetime Access",
            featured: true,
            variant: "default",
            icon: ShieldCheck
        }
    ],

    // Testimonial Reviews
    testimonials: [
        {
            name: 'Steven Tey',
            username: '@steventey',
            role: 'Founder',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80',
            quote: 'bruh this is so good 😍',
            verified: true,
            link: '#',
        },
        {
            name: 'Sully',
            username: '@SullyOmarr',
            role: 'Developer',
            image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=120&q=80',
            quote: 'Bro these are cleeaaann',
            verified: true,
            postImage: 'https://res.cloudinary.com/dfjuuwtr6/image/upload/v1768645965/w4_uzxlxp.webp',
            link: '#',
        },
        {
            name: 'Dillion Verma',
            username: '@dillionverma',
            role: 'Software Engineer',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
            quote: "Testing out @grootstudio's new component blocks. The developer experience is just on another level.",
            verified: true,
            link: '#',
        },
        {
            name: 'Marc Klingen',
            username: '@marcklingen',
            role: 'CEO @ Langfuse',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80',
            quote: '@grootstudio was a godsend when building the current langfuse.com x.com/marcklingen/st...',
            verified: true,
            postImage: 'https://res.cloudinary.com/dfjuuwtr6/image/upload/v1776287225/printsyte_horizontal_wogkir.webp',
            link: '#',
        },
        {
            name: 'Guillermo Rau',
            username: '@rauchg',
            role: 'CEO @ Vercel',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80',
            quote: 'beautiful site 🎨',
            verified: true,
            link: '#',
        },
        {
            name: 'Emily Wang',
            username: '@emilywang',
            role: 'Product Designer',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
            quote: 'Look at this clean UI! All built with @grootstudio in under an hour. Absolute game changer for my workflow.',
            verified: true,
            postImage: 'https://res.cloudinary.com/dfjuuwtr6/image/upload/v1776287226/portfolio_dark_paxfd5.webp',
            link: '#',
        },
        {
            name: 'Mckay Wigley',
            username: '@mckaywigley',
            role: 'Developer',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
            quote: 'Need a beautiful landing page? Use Cursor + Groot Studio. Install components with 1-line of code and tag them with Cursor Composer to have AI do 100% of the work for you. Watch my workflow - it\'s this easy.',
            verified: true,
            postImage: 'https://res.cloudinary.com/dfjuuwtr6/image/upload/v1776286826/Groot-UI_Preview_ojjktb.webp',
            link: '#',
        },
        {
            name: 'Aiden Bai',
            username: '@aidenybai',
            role: 'Software Engineer',
            image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80',
            quote: 'we use grootstudio for Billion.cloud 🤯',
            verified: true,
            link: '#',
        },
        {
            name: 'Saurabh',
            username: '@saurabh',
            role: 'Indie Hacker',
            image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=120&q=80',
            quote: "Finally a UI library that doesn't feel bloated. @grootstudio is what I use for all my fast-shipping projects.",
            verified: true,
            link: '#',
        },
        {
            name: 'Alex',
            username: '@vahaah',
            role: 'Software Engineer',
            image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&q=80',
            quote: 'Thanks, @grootstudio. This is my new favourite UI library, and their Pro templates look magical.',
            verified: true,
            postImage: 'https://res.cloudinary.com/dfjuuwtr6/image/upload/v1774162392/Brain.2.png',
            link: '#',
        },
        {
            name: 'Jordan Hughes',
            username: '@jordanphughes',
            role: 'Designer',
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
            quote: 'This is awesome, congrats @grootstudio !',
            verified: true,
            link: '#',
        },
        {
            name: 'Lee Robinson',
            username: '@leeerob',
            role: 'VP Product @ Vercel',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80',
            quote: 'The attention to detail in @grootstudio is impressive. Great collection for modern web apps.',
            verified: true,
            link: '#',
        }
    ],

    // FAQ Questions and Answers
    faq: [
        {
            id: 'item-1',
            title: 'What is Groot Studio?',
            content:
                'Groot Studio is a collection of beautifully crafted UI components and templates, designed to help developers build modern web applications with ease.',
        },
        {
            id: 'item-2',
            title: 'Who can benefit from Groot Studio?',
            content:
                'Groot Studio is built for developers, founders, product teams, and agencies that want to accelerate idea validation and delivery without sacrificing code quality.',
        },
        {
            id: 'item-3',
            title: 'What features does Groot Studio include?',
            content:
                'Groot Studio offers accessible Radix primitives styled with Tailwind CSS, along with beautiful Framer Motion animations for interactivity. Everything is optimized for Next.js.',
        },
        {
            id: 'item-4',
            title: 'Can I customize components in Groot Studio?',
            content:
                'Absolutely! The philosophy here is "copy and paste" so you own the code. You can easily adjust the Tailwind classes or structure to fit your exact needs.',
        },
        {
            id: 'item-5',
            title: 'Does Groot Studio integrate with my existing tools?',
            content:
                'Yes, it integrates perfectly with standard React toolchains, Next.js, and any framework utilizing Tailwind CSS.',
        },
    ],

    // Tech Stacks
    TECH_STACK: [
        { id: 1, name: "React", designation: "JS Library", icon: ReactIcon },
        { id: 2, name: "Next.js", designation: "Framework", icon: NextjsIcon },
        { id: 3, name: "TypeScript", designation: "Language", icon: TypeScriptIcon },
        { id: 4, name: "Tailwind CSS", designation: "Styling", icon: TailwindCSSIcon },
        { id: 5, name: "Radix UI", designation: "Primitives", icon: RadixUIIcon },
        { id: 6, name: "Motion", designation: "Animations", icon: MotionIcon },
        { id: 7, name: "Shadcn UI", designation: "Components", icon: ShadcnuiIcon },
    ]
} as const;

