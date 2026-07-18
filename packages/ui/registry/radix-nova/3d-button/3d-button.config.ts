import type { ComponentConfig } from "@workspace/ui/types/registry";

export const config: ComponentConfig = {
  name: "3d-button",
  title: "3D Button",
  description: "A premium 3D button component with customizable dual-tone gradients, shimmer effects, and depth shadows.",
  category: { name: "Buttons", slug: "buttons" },
  tier: "free",
  status: "stable",
  image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777376141/3d-button_light_owphex.webp",
  imageDark: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777376141/3d-button_dark_xbvhmf.webp",
  tags: ["button", "3d", "gradient", "shimmer"],
  preview: { disableSSR: false, height: 200 },
  registryUrl: "https://grootstudio.vercel.app/r/3d-button.json",
  installAlias: "3d-button",
  npmDependencies: [],
  registryDependencies: [],
  usage: {
    import: `import { ThreeDButton } from "@/components/grootstudio/3d-button"`,
    code: `export default function Demo() {
  return (
    <div className="flex items-center gap-4">
      <ThreeDButton color1="#cc0066" color2="#660033">
        Pink Button
      </ThreeDButton>
      <ThreeDButton color1="#004d99" color2="#00264d">
        Blue Button
      </ThreeDButton>
    </div>
  )
}`,
  },
  props: [
    {
      name: "color1",
      type: "string",
      default: "undefined",
      required: true,
      description: "The primary light color for the top of the gradient.",
    },
    {
      name: "color2",
      type: "string",
      default: "undefined",
      required: true,
      description: "The secondary dark color for the bottom of the gradient and shadows.",
    },
    {
      name: "href",
      type: "string",
      default: "undefined",
      required: false,
      description: "Optional URL for navigation.",
    },
    {
      name: "openInNewTab",
      type: "boolean",
      default: "false",
      required: false,
      description: "Whether to open the link in a new tab.",
    },
    {
      name: "className",
      type: "string",
      default: "undefined",
      required: false,
      description: "Optional class names for custom styling.",
    }
  ],
};
