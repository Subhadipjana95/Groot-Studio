import type { ComponentConfig } from "@workspace/ui/types/registry";

export const config: ComponentConfig = {
  name: "animated-bars",
  title: "Animated Bars",
  description: "A dynamic background component with pulsating, gradient bars that create a fluid energy effect.",
  category: { name: "Backgrounds", slug: "backgrounds" },
  tier: "free",
  status: "stable",
  label: "New",
  image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1778525114/animated_bar_light_bmbgq1.webp",
  imageDark: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1778525113/animated_bar_dark_w8tvej.webp",
  tags: ["background", "gradient", "bars"],
  preview: { disableSSR: false, height: 400 },
  registryUrl: "https://grootstudio.vercel.app/r/animated-bars.json",
  installAlias: "animated-bars",
  npmDependencies: [],
  registryDependencies: [],
  usage: {
    import: `import { AnimatedBars } from "@/components/animated-bars"`,
    code: `export default function Demo() {
  return (
    <AnimatedBars numBars={15} gradientFrom="rgb(59, 130, 246)" backgroundColor="rgb(2, 6, 23)">
      <h1>Energy Waves</h1>
    </AnimatedBars>
  )
}`,
  },
  props: [
    {
      name: "numBars",
      type: "number",
      default: "12",
      required: false,
      description: "The number of animated bars to render.",
    },
    {
      name: "gradientFrom",
      type: "string",
      default: "rgb(255, 60, 0)",
      required: false,
      description: "The starting color of the bar gradient.",
    },
    {
      name: "gradientTo",
      type: "string",
      default: "transparent",
      required: false,
      description: "The ending color of the bar gradient.",
    },
    {
      name: "animationDuration",
      type: "number",
      default: "4",
      required: false,
      description: "Duration of the pulse animation in seconds.",
    },
    {
      name: "backgroundColor",
      type: "string",
      required: false,
      description: "The background color of the container. If not provided, uses the theme's background.",
    }
  ],
  examples: [
    {
      title: "Digital Rhythm",
      slug: "animated-bars-variant01",
    },
  ],
};
