import { Info, CreditCard, Ban, ShieldAlert, XCircle, Mail } from "lucide-react"

const SUPPORT_EMAIL = "support@grootstudio.dev"

export const refundPolicy = [
    {
        icon: Info,
        title: "1. Overview",
        content: "Groot Studio offers digital sponsorship subscriptions that provide promotional and visibility benefits across the Groot Studio ecosystem. By purchasing a sponsorship subscription, you agree to this Refund Policy."
    },
    {
        icon: CreditCard,
        title: "2. Subscription Billing",
        content: "Sponsorship subscriptions are billed on a recurring monthly basis until cancelled by the sponsor."
    },
    {
        icon: Ban,
        title: "3. Refund Eligibility",
        content: (
            <>
                Due to the nature of sponsorship services and the immediate activation of promotional benefits, payments are generally non-refundable once sponsorship benefits have been activated.
                <br />
                <br />
                Examples of activated benefits include:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Sponsor listing on the website</li>
                    <li>Logo placement</li>
                    <li>Repository recognition</li>
                    <li>Social media mentions</li>
                    <li>Other sponsorship-related promotions</li>
                </ul>
            </>
        )
    },
    {
        icon: ShieldAlert,
        title: "4. Exceptional Refunds",
        content: (
            <>
                Refund requests may be considered on a case-by-case basis in circumstances such as:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Duplicate charges</li>
                    <li>Billing errors</li>
                    <li>Technical issues preventing sponsorship activation</li>
                </ul>
            </>
        )
    },
    {
        icon: XCircle,
        title: "5. Cancellation",
        content: "Sponsors may cancel their subscription at any time. Cancellation prevents future billing but does not automatically generate a refund for previous payments."
    },
    {
        icon: Mail,
        title: "6. Contact",
        content: (
            <>
                For billing or refund inquiries, please reach out on{" "}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-brand1/70 hover:underline underline-offset-2 transition-colors duration-300 cursor-pointer font-medium">
                    {SUPPORT_EMAIL}
                </a>
                . We aim to respond within 48 hours.
            </>
        )
    }
] as const
