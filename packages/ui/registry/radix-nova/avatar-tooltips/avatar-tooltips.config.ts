import type { ComponentConfig } from "@workspace/ui/types/registry";

export const config: ComponentConfig = {
  name: "avatar-tooltips",
  title: "Avatar Tooltips",
  description: "Interactive overlapping avatars that reveal animated, spring-based tooltips on hover.",
  category: { name: "Components", slug: "components" },
  tier: "free",
  status: "stable",
  image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777376434/avatar-tooltip_light_pvqzhq.webp",
  imageDark: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777376434/avatar-tooltip_dark_uaapdx.webp",
  tags: ["avatar", "tooltip", "popups", "motion"],
  preview: { disableSSR: true, height: 200 },
  registryUrl: "https://grootstudio.vercel.app/r/avatar-tooltips.json",
  installAlias: "avatar-tooltips",
  npmDependencies: ["motion/react"],
  registryDependencies: [],
  usage: {
    import: `import { AvatarTooltips } from "@/components/avatar-tooltips"`,
    code: `import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function Demo() {
  const items = [
    { id: 1, name: "GitHub", designation: "Developer Platform", icon: Github },
    { id: 2, name: "Twitter", designation: "Social Media", icon: Twitter },
    { id: 3, name: "LinkedIn", designation: "Professional Network", icon: Linkedin },
    { id: 4, name: "Email", designation: "Contact Us", icon: Mail },
  ]

  return (
    <main className="flex items-center justify-center">
      <AvatarTooltips items={items} />
    </main>
  )
}`,
  },
  props: [
    {
      name: "items",
      type: "AvatarItem[]",
      default: "[]",
      required: true,
      description: "Array of items containing id, name, designation and a React icon component.",
    },
    {
      name: "className",
      type: "string",
      default: "undefined",
      required: false,
      description: "Additional CSS classes for the container element.",
    },
  ],
};
