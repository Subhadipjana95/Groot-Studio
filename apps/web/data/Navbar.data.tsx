import { Twitter, Github, DiscordIcon, Youtube } from "@workspace/ui/components/icons/icon"
import { Home, Info, Globe, GitBranch } from "lucide-react"

export const navbarData = {
    NAV_LINKS: [
        { href: "/components", label: "Components" },
        { href: "/templates", label: "Templates" },
        // { href: "/changelog", label: "Changelog" },
        { href: "/sponsors", label: "Sponsors" },
    ],

    SEARCH_DATA: [
        { id: "nav-home", title: "Go to Home", description: "Navigate to the home page", category: "Navigation", destination: "/", icon: Home },
        { id: "nav-components", title: "Go to Components", description: "Browse all components", category: "Navigation", destination: "/components", icon: Info },
        { id: "nav-sponsors", title: "Go to Sponsors", description: "Check out our sponsors", category: "Navigation", destination: "/sponsors", icon: Globe },
        { id: "social-github", title: "Open GitHub", description: "Visit our GitHub repository", category: "Social", destination: "https://github.com/Subhadipjana95/Groot-Studio", icon: GitBranch },
    ],

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
} as const;
