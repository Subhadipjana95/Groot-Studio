import { Twitter, Github, DiscordIcon, Youtube, MotionIcon, TypeScriptIcon, ReactIcon, TailwindCSSIcon, NextjsIcon, RadixUIIcon, ShadcnuiIcon } from "@workspace/ui/components/icons/icon"
import { Shield, Eye, Share2, Lock, RefreshCw, Mail, FileText, Cpu, ShieldAlert, Scale, GitFork, Users, Cookie, BarChart2, Settings, Sparkles, Zap, ShieldCheck, Home, Info, Globe, GitBranch } from "lucide-react"

export const DATA = {
    title: "Groot Studio",
    description: "Hand-crafted, high-performing, SEO friendly & accessible components designed for modern developers.",
    donateURL: "https://a063.xyz/support",
    GITHUB_USER_NAME: "Subhadipjana95",
    GITHUB_REPO_LINK: "Subhadipjana95/groot-ui",
    DISCORD_SERVER_ID: "1487752291602665574",
    DISCORD_INVITE_LINK: "https://discord.gg/5nJmZYA5f2",


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

    // Nav Links
    NAV_LINKS: [
        { href: "/components", label: "Components" },
        { href: "/templates", label: "Templates" },
        // { href: "/changelog", label: "Changelog" },
        { href: "/sponsors", label: "Sponsors" },
    ],

    // Search Quick Actions Data
    SEARCH_DATA: [
        { id: "nav-home", title: "Go to Home", description: "Navigate to the home page", category: "Navigation", destination: "/", icon: Home },
        { id: "nav-components", title: "Go to Components", description: "Browse all components", category: "Navigation", destination: "/components", icon: Info },
        { id: "nav-sponsors", title: "Go to Sponsors", description: "Check out our sponsors", category: "Navigation", destination: "/sponsors", icon: Globe },
        { id: "social-github", title: "Open GitHub", description: "Visit our GitHub repository", category: "Social", destination: "https://github.com/Subhadipjana95/Groot-Studio", icon: GitBranch },
    ],

    // Footer Links
    product: [
        { name: "Components", href: "/components", tag: "New" },
        { name: "Blocks", href: "/blocks" },
        { name: "Templates", href: "/templates" },
        { name: "Pricing", href: "/pricing", tag: "20% Off" },
    ],
    resources: [
        { name: "Docs", href: "/components/installation" },
        { name: "Blog", href: "https://www.a063.xyz/blog" },
        { name: "Changelog", href: "/changelog" },
        { name: "Sponsors", href: "/sponsors" },
    ],
    company: [
        { name: "About Us", href: "/about" },
        { name: "Cookie Policy", href: "/cookie-policy" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Service Terms", href: "/terms" },
    ],
    socials: [
        { name: "Twitter", href: "https://x.com/Subhadip53874", icon: Twitter },
        { name: "GitHub", href: "https://github.com/Subhadipjana95/Groot-Studio", icon: Github },
        { name: "Discord", href: "https://discord.com/channels/1487752291602665574", icon: DiscordIcon },
        { name: "YouTube", href: "#", icon: Youtube },
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
    ],

    // Stats for about page
    stats: [
        { label: "Open-source components", value: "100+" },
        { label: "GitHub stars", value: "500+" },
        { label: "Discord members", value: "1k+" },
        { label: "Shipped since", value: "2024" },
    ],

    // Privacy Page Data
    privacyPolicies: [
        {
            icon: Eye,
            title: "1. Information We Collect",
            content: "Groot Studio is a static, open-source UI component library. We do not require account creation, login, or any personal information to browse or use our components. The only data we may passively collect is standard server-side analytics (e.g., page views, referrer, browser type) through our hosting provider to understand usage patterns and improve the documentation."
        },
        {
            icon: Shield,
            title: "2. How We Use Your Information",
            content: "Any anonymised usage data collected is used solely to improve the Groot Studio documentation, prioritise component development, and fix broken pages. We do not build user profiles, run ad targeting, or sell your data. If you voluntarily reach out via Discord, email, or GitHub Issues, the information you share is used only to respond to your request."
        },
        {
            icon: Share2,
            title: "3. Third-Party Services",
            content: "Our site may use the following third-party services: Vercel (hosting & edge analytics), Cloudinary (image delivery for component previews), and Unsplash (placeholder images). Each of these services operates under their own privacy policies. We do not embed ad networks, tracking pixels, or social media SDKs that report your activity back to those platforms."
        },
        {
            icon: Lock,
            title: "4. Cookies & Local Storage",
            content: "Groot Studio uses minimal browser storage. Your theme preference (light / dark mode) is saved to localStorage so your setting persists between visits — no cookie banner required. We do not use tracking cookies, session cookies tied to a user account, or any persistent identifiers that could be used to follow you across the web."
        },
        {
            icon: RefreshCw,
            title: "5. Changes to This Policy",
            content: "We may update this Privacy Policy as the project evolves — for example, if we introduce authentication for a future Pro tier or add new integrations. Any material changes will be noted with an updated 'Last updated' date at the top of this page. We recommend checking back periodically, though for a component library the policy is unlikely to change significantly."
        },
        {
            icon: Mail,
            title: "6. Contact",
            content: "If you have questions, concerns, or requests relating to this Privacy Policy or your data, please reach out via GitHub Discussions at github.com/Subhadipjana95/groot-studio or through our Discord community. We aim to respond within 48 hours."
        }
    ],

    // Terms of Service Page Data
    termsOfService: [
        {
            icon: FileText,
            title: "1. Acceptance of Terms",
            content: "By accessing or using Groot Studio — including the website, documentation, component library, and any associated tooling — you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use the service. These terms apply to all visitors, developers, and organisations who access or use Groot Studio."
        },
        {
            icon: Cpu,
            title: "2. Use of the Library",
            content: "Groot Studio is a copy-and-paste component library intended for use in personal, commercial, and open-source projects. Free components are available without restriction. Premium components and templates included in paid plans may only be used within the scope of your active licence. You may not redistribute, resell, or share premium assets publicly or with individuals who have not purchased access."
        },
        {
            icon: GitFork,
            title: "3. Open Source & Licence",
            content: "The free, open-source tier of Groot Studio is released under the MIT Licence. You are free to use, modify, and distribute those components in your own projects with attribution. Premium components are subject to the Groot Studio Commercial Licence and are not covered by the MIT Licence. Refer to the repository's LICENCE file and your purchase receipt for the exact scope of your rights."
        },
        {
            icon: ShieldAlert,
            title: "4. Intellectual Property",
            content: "All design decisions, documentation text, brand assets (including the Groot Studio name and logo), and curated component compositions are the intellectual property of Groot Studio and its creator. Unsplash images and third-party icons retain their respective licences. You may not use the Groot Studio brand name or logo to imply endorsement of your product without prior written permission."
        },
        {
            icon: Scale,
            title: "5. Limitation of Liability",
            content: "Groot Studio is provided \"as is\" without warranty of any kind. We make no guarantees about the availability, accuracy, or fitness for purpose of any component, template, or documentation. In no event shall Groot Studio or its contributors be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of — or inability to use — any part of this library."
        },
        {
            icon: Users,
            title: "6. Community & Conduct",
            content: "Access to the Groot Studio Discord community and GitHub Discussions is a privilege, not a right. We expect all members to interact respectfully, constructively, and in good faith. Spam, harassment, or promotion of unlicensed use of premium assets will result in removal from community spaces. We reserve the right to revoke access at any time without notice."
        },
        {
            icon: RefreshCw,
            title: "7. Changes to These Terms",
            content: "We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting the updated terms on this page. The \"Last updated\" date at the top of the page will reflect the most recent revision. Continued use of Groot Studio after changes are posted constitutes your acceptance of the revised terms."
        },
        {
            icon: Mail,
            title: "8. Contact",
            content: "For questions about these Terms of Service, licensing queries, or business enquiries, please open a GitHub Discussion at github.com/Subhadipjana95/groot-studio or reach out through our Discord community. We aim to respond within 48 hours on business days."
        }
    ],

    // Cookie Policy Data
    cookiePolicy: [
        {
            icon: Cookie,
            title: "1. What Are Cookies?",
            content: "Cookies are small text files stored in your browser when you visit a website. They help websites remember your preferences and understand how you interact with pages. Groot Studio uses a minimal set of storage mechanisms — we only store what is strictly necessary to deliver a pleasant experience."
        },
        {
            icon: Lock,
            title: "2. Strictly Necessary Storage",
            content: "We use localStorage (not cookies) to persist a single preference: your chosen colour theme (light or dark mode). This data never leaves your device, is never sent to a server, and contains no personally identifiable information. No cookie consent banner is shown because no tracking cookies are set."
        },
        {
            icon: BarChart2,
            title: "3. Analytics",
            content: "Our hosting provider (Vercel) may collect anonymised, aggregated analytics such as page views, referrer URLs, and general geographic region. This data is processed at the edge without setting persistent cookies in your browser. We do not use Google Analytics, Mixpanel, or any client-side analytics library that sets tracking cookies."
        },
        {
            icon: Share2,
            title: "4. Third-Party Cookies",
            content: "Groot Studio does not embed third-party advertising, social-sharing buttons, or analytics SDKs that would set cookies from external domains. Images served from Cloudinary and Unsplash are loaded directly via their CDN URLs; those providers may set their own cookies subject to their respective privacy policies, which are outside our control."
        },
        {
            icon: Settings,
            title: "5. Managing Your Preferences",
            content: "Because we do not set tracking or persistent cookies, there is nothing to opt out of on our side. You can clear your localStorage theme preference at any time through your browser's developer tools (Application → Local Storage → grootstudio.com). You can also configure your browser to block all cookies from third-party domains for additional peace of mind."
        },
        {
            icon: RefreshCw,
            title: "6. Updates to This Policy",
            content: "If we ever introduce features that require cookies — for example, authentication for a future Pro tier — we will update this Cookie Policy accordingly, add a clear notice on the site, and obtain any consent required by applicable law. The 'Last updated' date at the top of this page will always reflect the most recent revision."
        }
    ]
} as const;

