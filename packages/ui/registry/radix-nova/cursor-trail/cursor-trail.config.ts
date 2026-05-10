import type { ComponentConfig } from "@workspace/ui/types/registry";

export const config: ComponentConfig = {
  name: "cursor-trail",
  title: "Cursor Trail",
  description: "A smooth and refined shape trail effect that beautifully interpolates along your mouse cursor path.",
  category: { name: "Effects", slug: "effects" },
  tier: "free",
  status: "stable",
  label: "New",
  image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1778443195/cursor-trail_light_f7ug7e.webp",
  imageDark: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1778443195/cursor-trail_dark_jdzcdz.webp",
  tags: ["cursor", "trail", "mouse", "effect", "animation"],
  preview: { disableSSR: false, height: 400 },
  registryUrl: "https://grootui.vercel.app/r/cursor-trail.json",
  npmDependencies: [],
  registryDependencies: [],
  usage: {
    import: `import { CursorTrail } from "@/components/cursor-trail"`,
    code: `export default function Demo() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <CursorTrail />
    </div>
  )
}`,
  },
  props: [
    {
      name: "images",
      type: "string[]",
      default: "flairImages",
      required: false,
      description: "An array of image URLs to use in the trail.",
    },
    {
      name: "distance",
      type: "number",
      default: "60",
      required: false,
      description: "The distance in pixels the cursor must move before a new image spawns.",
    },
    {
      name: "duration",
      type: "number",
      default: "1000",
      required: false,
      description: "The duration of the individual image animation in milliseconds.",
    },
    {
      name: "imageSize",
      type: "number",
      default: "64",
      required: false,
      description: "The width and height of the trail images in pixels.",
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
