import type { ComponentConfig } from "@workspace/ui/types/registry";

export const config: ComponentConfig = {
  name: "theme-toggler",
  title: "Theme Toggler",
  description:
    "A minimal theme toggle button with a cinematic full-screen curtain wipe animation. Supports vertical and horizontal directions.",
  category: { name: "Components", slug: "components" },
  tier: "free",
  status: "stable",
  label: "New",
  image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1779050609/theme-toggler_light_il8wew.webp",
  imageDark: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1779050609/theme-toggler_dark_poqkn4.webp",
  tags: ["theme", "dark-mode", "toggle"],
  preview: { disableSSR: true, height: 300 },
  registryUrl: "https://grootstudio.vercel.app/r/theme-toggler.json",
  installAlias: "theme-toggler",
  npmDependencies: ["lucide-react"],
  registryDependencies: [],
  usage: {
    import: `import { ThemeToggler } from "@/components/grootstudio/theme-toggler"`,
    code: `export default function Demo() {
  return <ThemeToggler direction="vertical" duration={550} />
}`,
  },
  props: [
    {
      name: "direction",
      type: "vertical | horizontal",
      default: "vertical",
      required: false,
      description:
        "Direction of animation: Vertical sweeps top-to-bottom, horizontal sweeps left-to-right.",
    },
    {
      name: "duration",
      type: "number",
      default: "550",
      required: false,
      description: "Duration of animation in milliseconds.",
    },
    {
      name: "defaultTheme",
      type: "light | dark",
      default: "light",
      required: false,
      description: "Initial theme. Auto-detected from the document's dark class.",
    },
    {
      name: "onThemeChange",
      type: "(theme: Theme) => void",
      required: false,
      description: "Callback fired after the theme change animation completes.",
    },
    {
      name: "className",
      type: "string",
      required: false,
      description: "Additional Tailwind classes for custom styling.",
    },
  ],
};
