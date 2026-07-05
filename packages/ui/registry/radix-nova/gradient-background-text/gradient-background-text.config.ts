import type { ComponentConfig } from "@workspace/ui/types/registry";

export const config: ComponentConfig = {
  name: "gradient-background-text",
  title: "Gradient Background Text",
  description:
    "Text component featuring an animated background orb field and engraved depth effect.",
  category: { name: "Text Animations", slug: "text-animations" },
  tier: "free",
  status: "stable",
  image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777377127/gradient-background-text_light_z4h7zf.webp",
  imageDark: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777377127/gradient-background-text_dark_jyhqpj.webp",
  tags: ["text", "gradient", "3d"],
  preview: { disableSSR: true, height: 400 },
  registryUrl: "https://grootstudio.vercel.app/r/gradient-background-text.json",
  installAlias: "gradient-background-text",
  npmDependencies: ["motion/react"],
  registryDependencies: [],
  usage: {
    import: `import { GradientBackgroundText } from "@/components/gradient-background-text"`,
    code: `export default function Demo() {
  return <GradientBackgroundText>Groot Studio</GradientBackgroundText>
}`,
  },
  props: [
    {
      name: "children",
      type: "ReactNode",
      required: true,
      description: "Inner text content",
    },
    {
      name: "colors",
      type: "string",
      default: "#cc0066 | #1aff53 | #004d99 | #f5f56b | #a600e6",
      description: "Gradient colors for background animation",
    },
    {
      name: "className",
      type: "string",
      description: "Styling classes",
    },
  ],
};
