import { RefreshCw, Mail, FileText, Cpu, ShieldAlert, Scale, GitFork, Users, Gavel, CreditCard } from "lucide-react"

const SUPPORT_EMAIL = "support@grootstudio.dev"

export const termsOfService = [
    {
        icon: FileText,
        title: "1. Acceptance of Terms",
        content: "By accessing or using Groot Studio — including the website, documentation, component library, and any associated tooling — you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use the service. These terms apply to all visitors, developers, and organisations who access or use Groot Studio."
    },
    {
        icon: Cpu,
        title: "2. Use of the Library",
        content: "Groot Studio is a copy-and-paste component library intended for use in personal, commercial, and open-source projects. Free components are available without restriction. Certain premium components, templates, or future paid offerings may be subject to additional licensing terms and access restrictions."
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
        icon: Gavel,
        title: "7. Governing Law",
        content: "These Terms shall be governed and interpreted in accordance with the laws of India without regard to conflict of law principles."
    },
    {
        icon: CreditCard,
        title: "8. Payment/Sponsorship",
        content: "Sponsorship subscriptions and any future paid products are subject to their respective pricing, billing, cancellation and refund terms published on the website."
    },
    {
        icon: RefreshCw,
        title: "9. Changes to These Terms",
        content: "We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting the updated terms on this page. The \"Last updated\" date at the top of the page will reflect the most recent revision. Continued use of Groot Studio after changes are posted constitutes your acceptance of the revised terms."
    },
    {
        icon: Mail,
        title: "10. Contact",
        content: (
            <>
                For questions about these Terms of Service, licensing queries or business enquiries, please reach out on{" "}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-brand1/70 hover:underline underline-offset-2 transition-colors duration-300 cursor-pointer font-medium">
                    {SUPPORT_EMAIL}
                </a>
                . We aim to respond within 48 hours.
            </>
        )
    }
] as const