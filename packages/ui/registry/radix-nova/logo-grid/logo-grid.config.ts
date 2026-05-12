import type { ComponentConfig } from "@workspace/ui/types/registry";

export const config: ComponentConfig = {
  name: "logo-grid",
  title: "Logo Grid",
  description: "Clean grid of client logos with dashed plus-sign separators.",
  category: { name: "Components", slug: "components" },
  tier: "free",
  status: "stable",
  image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777378066/client-grid_lighht_iglnwa.webp",
  imageDark: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777378066/client-grid_dark_ei9qu3.webp",
  tags: ["grid", "logos", "layout"],
  preview: { disableSSR: true, height: 400 },
  registryUrl: "https://grootstudio.vercel.app/r/logo-grid.json",
  npmDependencies: ["lucide-react"],
  registryDependencies: [],
  usage: {
    import: `import { LogoGrid } from "@/components/logo-grid"`,
    code: `export default function Demo() {
  return (
  <LogoGrid 
  logos={[
    {
      src: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777378066/nvidia-wordmark-light_rby94r.webp",
      alt: "NVIDIA",
    },
    {
      src: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777378067/github-wordmark-light_b6f50g.webp",
      alt: "GitHub",
    },
    {
      src: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777378067/python-wordmark-light_b0o0x8.webp",
      alt: "Python",
    },
    {
      src: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777378066/vercel-wordmark-light_y4v7h8.webp",
      alt: "Vercel",
    },
    {
      src: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777378067/nodejs-wordmark-light_y30xga.webp",
      alt: "Node.js",
    },
    {
      src: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777378066/typescript-wordmark-light_zmyr6r.webp",
      alt: "TypeScript",
    }
  ]}
  />
  )
}`,
  },
  props: [
    {
      name: "items",
      type: "Logo[]",
      default: "DEFAULT_ITEMS",
      required: true,
      description: "Array of logos (src, alt, width, height)",
    },
    {
      name: "className",
      type: "string",
      description: "Container styling",
    },
  ],
};
