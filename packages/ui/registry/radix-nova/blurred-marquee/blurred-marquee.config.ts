import type { ComponentConfig } from "@workspace/ui/types/registry";

export const config: ComponentConfig = {
  name: "blurred-marquee",
  title: "Blurred Marquee",
  description:
    "Infinite marquee with sophisticated radial blurring and masked logo transitions.",
  category: { name: "Components", slug: "components" },
  tier: "free",
  status: "stable",
  image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777378662/client-marquee-blur_light_u1omgi.webp",
  imageDark: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777378662/client-marquee-blur_dark_duu30j.webp",
  tags: ["marquee", "logos", "blurred"],
  preview: { disableSSR: true, height: 300 },
  registryUrl: "https://grootstudio.vercel.app/r/blurred-marquee.json",
  installAlias: "blurred-marquee",
  npmDependencies: ["motion/react", "react-use-measure", "lucide-react"],
  registryDependencies: [],
  usage: {
    import: `import { BlurredMarquee } from "@/components/blurred-marquee"`,
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
      <BlurredMarquee logos={logos} />
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
      description: "Array of logo objects (src, alt, width, height)",
    },
    {
      name: "className",
      type: "string",
      description: "Styling overrides",
    },
  ],
};
