import type { ComponentConfig } from "@workspace/ui/types/registry";

export const config: ComponentConfig = {
  // Note: the slug used in the docs is "gradient-text" but the source file
  // is gradient-text-fill. The name here matches the folder name.
  name: "gradient-text-fill",
  title: "Gradient Text",
  description:
    "High-impact text component with moving color orbs and 3D depth.",
  category: { name: "Text Animations", slug: "text-animations" },
  tier: "free",
  status: "stable",
  label: "new",
  image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777377361/gradient-text-fill_light_mvkhox.webp",
  imageDark: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777377361/gradient-text-fill_dark_vp5qbx.webp",
  tags: ["text", "gradient", "motion"],
  preview: { disableSSR: true, height: 400 },
  registryUrl: "https://grootstudio.vercel.app/r/gradient-text-fill.json",
  installAlias: "gradient-text-fill",
  npmDependencies: ["motion/react"],
  registryDependencies: [],
  usage: {
    import: `import { GradientText } from "@/components/grootstudio/gradient-text"`,
    code: `export default function Demo() {
  return <GradientText>Groot Studio</GradientText>
}`,
  },
  props: [
    {
      name: "children",
      type: "ReactNode",
      required: true,
      description: "Text or elements to animate",
    },
    {
      name: "colors",
      type: "string",
      default: "#cc0066 | #1aff53 | #004d99 | #f5f56b | #a600e6",
      description: "Comma-separated hex colors for the orbs",
    },
    {
      name: "as",
      type: "ElementType",
      default: "span",
      description: "The HTML tag to render as",
    },
    {
      name: "className",
      type: "string",
      description: "Typography and positioning classes",
    },
  ],
};
