import type { ComponentConfig } from "@workspace/ui/types/registry";

export const config: ComponentConfig = {
  name: "text-outline-glow",
  title: "Text Outline Glow",
  description: "An animated text hover effect with glowing outlines and cursor-following reveals.",
  category: { name: "Text Animations", slug: "text-animations" },
  tier: "free",
  status: "stable",
  label: "New",
  image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777376141/text-outline-glow_light_owphex.webp",
  imageDark: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777376141/text-outline-glow_dark_xbvhmf.webp",
  tags: ["hover", "glow", "cursor", "gsap"],
  preview: { disableSSR: false, height: 300 },
  registryUrl: "https://grootui.vercel.app/r/text-outline-glow.json",
  npmDependencies: ["gsap", "@gsap/react"],
  registryDependencies: [],
  usage: {
    import: `import { TextHoverEffect } from "@/components/text-outline-glow"`,
    code: `export default function Demo() {
  return (
    <div className="flex items-center justify-center h-[300px] w-full">
      <TextHoverEffect text="GROOT" />
    </div>
  )
}`,
  },
  props: [
    {
      name: "text",
      type: "string",
      default: "undefined",
      required: true,
      description: "The text to display and animate.",
    },
    {
      name: "duration",
      type: "number",
      default: "0",
      required: false,
      description: "The duration of the cursor-following gradient animation.",
    },
    {
      name: "fontSize",
      type: "number",
      default: "56",
      required: false,
      description: "The font size of the SVG text.",
    },
    {
      name: "colors",
      type: "string[]",
      default: '["#eab308", "#ef4444", "#3b82f6", "#06b6d4", "#8b5cf6"]',
      required: false,
      description: "Array of colors for the glowing gradient outline.",
    }
  ],
};
