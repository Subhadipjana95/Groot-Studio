import { Sparkles, Gift, Edit3, Ban, Eye, RefreshCw, XCircle, AlertTriangle, Shield, Mail } from "lucide-react"

const SPONSORS_EMAIL = "sponsors@grootstudio.dev";

export const sponsorshipTerms = [
    {
        icon: Sparkles,
        title: "1. Sponsorship Program",
        content: "Groot Studio offers sponsorship opportunities for companies, products, organizations and individuals seeking visibility within the Groot Studio community and ecosystem."
    },
    {
        icon: Gift,
        title: "2. Sponsorship Benefits",
        content: (
            <>
                Benefits vary depending on the selected sponsorship tier and may include:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Logo placement on the Sponsors page</li>
                    <li>Website backlink</li>
                    <li>Recognition in project documentation</li>
                    <li>Repository acknowledgements</li>
                    <li>Social media mentions</li>
                    <li>Other promotional opportunities</li>
                </ul>
            </>
        )
    },
    {
        icon: Edit3,
        title: "3. Sponsor Responsibilities",
        content: (
            <>
                Sponsors must provide:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Accurate company information</li>
                    <li>Appropriate logos and branding assets</li>
                    <li>A valid website destination</li>
                </ul>
            </>
        )
    },
    {
        icon: Ban,
        title: "4. Content Restrictions",
        content: (
            <>
                Groot Studio reserves the right to reject or remove sponsorships associated with:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Illegal products or services</li>
                    <li>Hate speech or discrimination</li>
                    <li>Malicious software</li>
                    <li>Adult content</li>
                    <li>Gambling services</li>
                    <li>Fraudulent or misleading activities</li>
                    <li>Any content deemed harmful to the community</li>
                </ul>
            </>
        )
    },
    {
        icon: Eye,
        title: "5. Placement and Visibility",
        content: "Sponsor placement, ordering and visibility may vary based on sponsorship tier, available space and design considerations."
    },
    {
        icon: RefreshCw,
        title: "6. Subscription Renewal",
        content: "Sponsorship subscriptions renew automatically according to the selected billing cycle unless cancelled."
    },
    {
        icon: XCircle,
        title: "7. Cancellation and Removal",
        content: (
            <>
                Groot Studio reserves the right to suspend or remove sponsorship benefits if:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Payment fails</li>
                    <li>A subscription is cancelled</li>
                    <li>A sponsor violates these terms</li>
                </ul>
            </>
        )
    },
    {
        icon: AlertTriangle,
        title: "8. Limitation of Guarantees",
        content: "Groot Studio does not guarantee specific traffic, leads, conversions, sales or business outcomes resulting from sponsorship participation."
    },
    {
        icon: Shield,
        title: "9. No Endorsement",
        content: "Sponsorship does not imply endorsement. Groot Studio reserves the right to display sponsor logos and links as part of the sponsorship program without implying approval, recommendation or endorsement of the sponsor's products or services."
    },
    {
        icon: Mail,
        title: "10. Contact",
        content: (
            <>
                For sponsorship-related inquiries, please reach out on{" "}
                <a href={`mailto:${SPONSORS_EMAIL}`} className="text-brand1/70 hover:underline underline-offset-2 transition-colors duration-300 cursor-pointer font-medium">
                    {SPONSORS_EMAIL}
                </a>
                . We aim to respond within 48 hours.
            </>
        )
    }
] as const
