import { Shield, Eye, Share2, Lock, RefreshCw, Mail } from "lucide-react"

const SUPPORT_EMAIL = "support@grootstudio.dev"
export const privacyPolicies = [
    {
        icon: Eye,
        title: "1. Information We Collect",
        content: "If you choose to contact us, apply for sponsorship or purchase a product or subscription, we may receive information such as your name, email address, company name, billing details and any information you voluntarily provide."
    },
    {
        icon: Shield,
        title: "2. How We Use Your Information",
        content: "We process information only for legitimate business purposes such as providing services, responding to inquiries, processing sponsorships and improving Groot Studio. We do not build user profiles, run ad targeting or sell your data. If you voluntarily reach out via Discord, email or GitHub Issues, the information you share is used only to respond to your request."
    },
    {
        icon: Share2,
        title: "3. Third-Party Services",
        content: "Our site may use the following third-party services: Vercel (hosting & edge analytics), Cloudinary (image delivery for component previews) and Unsplash (placeholder images). Each of these services operates under their own privacy policies. We do not embed ad networks, tracking pixels or social media SDKs that report your activity back to those platforms."
    },
    {
        icon: Lock,
        title: "4. Cookies & Local Storage",
        content: "Groot Studio uses minimal browser storage. Your theme preference (light/dark mode) is saved to localStorage so your setting persists between visits — no cookie banner required. We do not use tracking cookies, session cookies tied to a user account, or any persistent identifiers that could be used to follow you across the web."
    },
    {
        icon: RefreshCw,
        title: "5. Changes to This Policy",
        content: "We may update this Privacy Policy as the project evolves — for example, if we introduce authentication for a future Pro tier or add new integrations. Any material changes will be noted with an updated 'Last updated' date at the top of this page. We recommend checking back periodically, though for a component library the policy is unlikely to change significantly."
    },
    {
        icon: Mail,
        title: "6. Contact",
        content: (
            <>
                If you have questions, concerns or requests relating to this Privacy Policy or your data, please reach out on{" "}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-brand1/70 hover:underline underline-offset-2 transition-colors duration-300 cursor-pointer font-medium">
                    {SUPPORT_EMAIL}
                </a>
                . We aim to respond within 48 hours.
            </>
        )
    }
] as const