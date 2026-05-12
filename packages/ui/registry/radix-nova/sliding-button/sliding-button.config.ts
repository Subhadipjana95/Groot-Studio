import type { ComponentConfig } from "@workspace/ui/types/registry";

export const config: ComponentConfig = {
  name: "sliding-button",
  title: "Sliding Button",
  description: "A high-performance interactive button that slides an icon into view on hover with spring animations and depth shadows.",
  category: { name: "Buttons", slug: "buttons" },
  tier: "free",
  status: "stable",
  label: "new",
  image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777419754/sliding-button_light_ishowx.webp",
  imageDark: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777419755/sliding-button_dark_pwd8ks.webp",
  tags: ["button", "sliding", "motion"],
  preview: { disableSSR: false, height: 200 },
  registryUrl: "https://grootstudio.vercel.app/r/sliding-button.json",
  npmDependencies: ["motion/react", "lucide-react"],
  registryDependencies: ["button"],
  usage: {
    import: `import { SlidingButton } from "@/components/sliding-button"`,
    code: `export default function Demo() {
  return (
    <div className="flex items-center gap-4">
      <SlidingButton variant="default">
        Get Started
      </SlidingButton>
      <SlidingButton variant="outline" iconPosition="left">
        Contact Us
      </SlidingButton>
    </div>
  )
}`,
  },
  props: [
    {
      name: "children",
      type: "ReactNode",
      default: "undefined",
      required: true,
      description: "The content to display inside the button.",
    },
    {
      name: "variant",
      type: "'default' | 'outline'",
      default: "'default'",
      required: false,
      description: "The visual style of the button.",
    },
    {
      name: "iconPosition",
      type: "'left' | 'right'",
      default: "'right'",
      required: false,
      description: "Which side the sliding icon should appear on.",
    },
    {
      name: "className",
      type: "string",
      default: "undefined",
      required: false,
      description: "Optional class names for custom styling.",
    },
  ],
};
