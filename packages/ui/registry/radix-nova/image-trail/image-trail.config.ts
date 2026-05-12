import type { ComponentConfig } from "@workspace/ui/types/registry";

export const config: ComponentConfig = {
  name: "image-trail",
  title: "Image Trail",
  description: "A very smooth and interactive trail of images that follows your mouse cursor with discrete step interpolation.",
  category: { name: "Effects", slug: "effects" },
  tier: "free",
  status: "stable",
  image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1778445439/image_trail_light_yo7x8b.webp",
  imageDark: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1778445439/image_trail_dark_qne2hh.webp",
  tags: ["image", "trail", "mouse", "effect", "animation"],
  preview: { disableSSR: false, height: 600 },
  registryUrl: "https://grootstudio.vercel.app/r/image-trail.json",
  npmDependencies: [],
  registryDependencies: [],
  usage: {
    import: `import { ImageCursorTrail } from "@/components/image-trail"`,
    code: `export default function Demo() {
  return (
    <ImageCursorTrail
      items={["/image1.jpg", "/image2.jpg"]}
      maxNumberOfImages={5}
      distance={25}
      imgClass="sm:w-40 w-28 sm:h-48 h-36"
      className="max-w-4xl rounded-3xl"
    />
  )
}`,
  },
  props: [
    {
      name: "items",
      type: "string[]",
      default: "[]",
      required: true,
      description: "An array of image URLs to use in the trail.",
    },
    {
      name: "distance",
      type: "number",
      default: "20",
      required: false,
      description: "The fraction of the window width required to trigger spawning a new image. Larger numbers mean closer images.",
    },
    {
      name: "maxNumberOfImages",
      type: "number",
      default: "5",
      required: false,
      description: "The maximum number of images that can be visible on the screen at the same time.",
    },
    {
      name: "fadeAnimation",
      type: "boolean",
      default: "false",
      required: false,
      description: "Whether to automatically fade out the image after 1.5 seconds regardless of trail length.",
    },
    {
      name: "className",
      type: "string",
      default: "undefined",
      required: false,
      description: "Optional class names for the container section.",
    },
    {
      name: "imgClass",
      type: "string",
      default: '"w-40 h-48"',
      required: false,
      description: "Class names for individual image elements, particularly for adjusting sizing constraints.",
    }
  ],
};
