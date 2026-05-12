import { ComponentConfig } from "@workspace/ui/types/registry";

export const config: ComponentConfig = {
  name: "press-button",
  title: "Press Button",
  description: "An industry-grade neobrutalist button with a 3D press effect and highly flexible theming.",
  category: { name: "Buttons", slug: "buttons" },
  tier: "free",
  status: "stable",
  image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777533103/press-button_light_zlxjzv.webp",
  tags: ["button", "3d", "press", "neobrutalism"],
  preview: { disableSSR: false, height: 200 },
  registryUrl: "https://grootstudio.vercel.app/r/press-button.json",
  usage: {
    import: `import { PressButton } from "@/components/press-button"`,
    code: `export default function Demo() {
  return (
    <div className="flex items-center gap-4">
      <PressButton>Default</PressButton>

      <PressButton className="bg-indigo-600 text-white shadow-[4px_4px_0_0_#3730a3] border-[#3730a3]">
        Custom Indigo
      </PressButton>
    </div>
  )
}`,
  },
  props: [
    {
      name: "variant",
      type: "string",
      default: "neutral",
      description: "The visual style of the button.",
    },
    {
      name: "size",
      type: "string",
      default: "default",
      description: "The size of the button.",
    },
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description: "Whether to render the button as a child element using Radix Slot.",
    },
  ],
};
