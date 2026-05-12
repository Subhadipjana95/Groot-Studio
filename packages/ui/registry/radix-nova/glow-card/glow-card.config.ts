import type { ComponentConfig } from "@workspace/ui/types/registry";

export const config: ComponentConfig = {
  name: "glow-card",
  title: "Glow Card",
  description: "A card with a dynamic glowing cursor-tracking hover effect.",
  category: { name: "Components", slug: "components" },
  tier: "free",
  status: "stable",
  image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777378888/glow-card_light_ucxzze.webp",
  imageDark: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777378889/glow-card_dark_lzl9me.webp",
  tags: ["card", "glow", "effect"],
  preview: { disableSSR: true, height: 400 },
  registryUrl: "https://grootstudio.vercel.app/r/glow-card.json",
  npmDependencies: [],
  registryDependencies: [],
  usage: {
    import: `import { GlowCard } from "@/components/glow-card"`,
    code: `export default function Demo() {
  return (
    <GlowCard className="p-6">
      <h3 className="text-xl font-bold">Groot Studio</h3>
      <p className="text-muted-foreground">Interactive glowing cards.</p>
    </GlowCard>
  )
}`,
  },
  props: [
    {
      name: "children",
      type: "ReactNode",
      required: true,
      description: "Content inside the card",
    },
    {
      name: "glowColor",
      type: "string",
      default: "rgba(var(--primary), 0.2)",
      description: "Radial gradient color for the glow effect",
    },
    {
      name: "className",
      type: "string",
      description: "Custom CSS classes",
    },
  ],
};
