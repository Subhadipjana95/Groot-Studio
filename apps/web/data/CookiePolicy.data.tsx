import { Share2, Lock, RefreshCw, Cookie, BarChart2, Settings, Mail } from "lucide-react"

const SUPPORT_EMAIL = "support@grootstudio.dev"
export const cookiePolicy = [
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
        content: "Our hosting provider (Vercel) may collect anonymised, aggregated analytics such as page views, referrer URLs, and general geographic region. This data is processed at the edge without setting persistent cookies in your browser. We do not use Google Analytics, Mixpanel, or any client-side analytics library that sets tracking cookies. We may use privacy-focused analytics provided by our hosting platform to understand aggregate usage patterns and improve the website experience."
    },
    {
        icon: Share2,
        title: "4. Third-Party Cookies",
        content: "Groot Studio does not embed third-party advertising, social-sharing buttons, or analytics SDKs that would set cookies from external domains. Images served from Cloudinary and Unsplash are loaded directly via their CDN URLs; those providers may set their own cookies subject to their respective privacy policies, which are outside our control."
    },
    {
        icon: Settings,
        title: "5. Managing Your Preferences",
        content: "Because we do not set tracking or persistent cookies, there is nothing to opt out of on our side. You can clear your saved theme preference at any time by clearing your browser storage or resetting site data through your browser settings. You can also configure your browser to block all cookies from third-party domains for additional peace of mind."
    },
    {
        icon: RefreshCw,
        title: "6. Updates to This Policy",
        content: "If we ever introduce features that require cookies — for example, authentication for a future Pro tier — we will update this Cookie Policy accordingly, add a clear notice on the site, and obtain any consent required by applicable law. The 'Last updated' date at the top of this page will always reflect the most recent revision."
    },
    {
        icon: Mail,
        title: "7. Contact",
        content: (
            <>
                If you have questions, concerns or requests relating to this Cookie Policy or your data, please reach out on{" "}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-brand1/70 hover:underline underline-offset-2 transition-colors duration-300 cursor-pointer font-medium">
                    {SUPPORT_EMAIL}
                </a>
                . We aim to respond within 48 hours.
            </>
        )
    }
] as const