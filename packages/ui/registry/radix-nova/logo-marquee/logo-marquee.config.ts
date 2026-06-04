import type { ComponentConfig } from "@workspace/ui/types/registry";

export const config: ComponentConfig = {
  name: "logo-marquee",
  title: "Logo Marquee",
  description:
    "Premium infinite marquee slider with automatic brand fallback and mask fades.",
  category: { name: "Components", slug: "components" },
  tier: "free",
  status: "stable",
  image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777378484/client-marquee_light_f6d3se.webp",
  imageDark: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777378486/client-marquee_dark_vbkxfs.webp",
  tags: ["marquee", "logos"],
  preview: { disableSSR: true, height: 300 },
  registryUrl: "https://grootstudio.vercel.app/r/logo-marquee.json",
  installAlias: "logo-marquee",
  npmDependencies: ["motion/react", "react-use-measure"],
  registryDependencies: [],
  usage: {
    import: `import { LogoMarquee } from "@/components/logo-marquee"`,
    code: `const logos = [
  { src: "https://svgl.app/library/nvidia-wordmark-light.svg", alt: "Nvidia" },
  { src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg", alt: "Claude" },
  { src: "https://svgl.app/library/stripe-wordmark-light.svg", alt: "Stripe" },
  { src: "https://svgl.app/library/rails-wordmark-light.svg", alt: "Rails" },
  { src: "https://svgl.app/library/deno-wordmark-icon_light.svg", alt: "Deno" },
  { src: "https://svgl.app/library/github-wordmark-light.svg", alt: "Github" },
  { src: "https://svgl.app/library/tailwindcss-wordmark-light.svg", alt: "Tailwindcss" },
  { src: "https://svgl.app/library/shadcn-ui-logo_light.svg", alt: "Shadcn ui" },
];

export default function Demo() {
  return (
    <div className="w-full">
      <LogoMarquee logos={logos} />
    </div>
  )
}`,
  },
  props: [
    {
      name: "items",
      type: "Logo[]",
      default: "DEFAULT_ITEMS",
      required: true,
      description: "Array of logo items (src, alt, width, height)",
    },
    {
      name: "className",
      type: "string",
      description: "Container styling",
    },
  ],
};
