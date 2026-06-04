import type { ComponentConfig } from "@workspace/ui/types/registry";

export const config: ComponentConfig = {
  name: "animated-layout",
  title: "Animated Layout",
  description:
    "A layout switcher component with buttery-smooth spring-physics transitions between list, grid, and pack views.",
  category: { name: "Components", slug: "components" },
  tier: "free",
  status: "stable",
  label: "New",
  image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1778985964/animated-layout_light_ayg6jq.webp",
  imageDark: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1778985964/animated-layout_dark_kqvre9.webp",
  tags: ["layout", "animation", "motion"],
  preview: { disableSSR: false, height: 500 },
  registryUrl: "https://grootstudio.vercel.app/r/animated-layout.json",
  installAlias: "animated-layout",
  npmDependencies: ["motion", "lucide-react"],
  registryDependencies: [],
  usage: {
    import: `import { AnimatedLayout } from "@/components/animated-layout"`,
    code: `export default function Demo() {
  return <AnimatedLayout items={[
    {
    id: "1",
    title: "Shadcn UI",
    subtitle: "Components Library",
    badge: "345",
    image: "https://github.com/Subhadipjana95.png",
    icon: CodeXml,
  },
  {
    id: "2",
    title: "Figma",
    subtitle: "Design Tool",
    badge: "105",
    image: "https://github.com/Subhadipjana95.png",
    icon: Brush,
  }
]} heading="My Collection" defaultView="list" />
}`,
  },
  props: [
    {
      name: "items",
      type: "CollectionItem[]",
      required: true,
      description:
        "Array of collection items to display. Each item requires id, title, subtitle, badge, image, and icon.",
    },
    {
      name: "defaultView",
      type: "'list' | 'card' | 'pack'",
      default: "'list'",
      required: false,
      description: "The initial view mode on first render.",
    },
    {
      name: "heading",
      type: "string",
      default: "'My Tasks'",
      required: false,
      description: "Section heading rendered above the tab bar.",
    },
    {
      name: "className",
      type: "string",
      required: false,
      description: "Additional CSS classes applied to the root wrapper.",
    },
  ],
};
