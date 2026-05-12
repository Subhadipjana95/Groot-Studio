import type { ComponentConfig } from "@workspace/ui/types/registry";

export const config: ComponentConfig = {
  name: "discord-online",
  title: "Discord Online",
  description:
    "Live Discord member presence count using Next.js server components.",
  category: { name: "Components", slug: "components" },
  tier: "free",
  status: "stable",
  image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777377565/discord-online_light_aiynof.webp",
  imageDark: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777377565/discord-online_dark_mwjdlu.webp",
  tags: ["discord", "presence"],
  hasReactVariant: true,
  // Server component — fetches data server-side, SSR must stay on
  preview: { disableSSR: false, height: 300 },
  registryUrl: "https://grootstudio.vercel.app/r/discord-online.json",
  npmDependencies: ["lucide-react"],
  registryDependencies: ["Button", "Tooltip"],
  usage: {
    import: `import { DiscordOnline } from "@/components/discord-online"`,
    code: `export default function Demo() {
  return <DiscordOnline guildId="1234567891487752291602665574" />
}`,
  },
  props: [
    {
      name: "guildId",
      type: "string",
      required: true,
      description: "Target Discord Guild ID",
    },
    {
      name: "inviteURL",
      type: "string",
      required: true,
      description: "Target Discord Guild Invite URL",
    },
    {
      name: "label",
      type: "string",
      description: "Label to display",
    },
    {
      name: "className",
      type: "string",
      description: "Optional Class name to style the component",
    },
  ],
};
