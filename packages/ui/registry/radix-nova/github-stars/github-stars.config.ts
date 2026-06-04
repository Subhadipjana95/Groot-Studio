import type { ComponentConfig } from "@workspace/ui/types/registry";

export const config: ComponentConfig = {
  name: "github-stars",
  title: "GitHub Stars",
  description:
    "Displays a GitHub repo star count with server-side fetching and tooltips.",
  category: { name: "Components", slug: "components" },
  tier: "free",
  status: "stable",
  image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777377805/github-star_light_jf47tx.webp",
  imageDark: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777377805/github-star_dark_an1u1z.webp",
  tags: ["github", "stars", "stats"],
  hasReactVariant: true,
  // Server component — fetches data server-side, so SSR must stay enabled
  preview: { disableSSR: false, height: 300 },
  registryUrl: "https://grootstudio.vercel.app/r/github-stars.json",
  installAlias: "github-stars",
  npmDependencies: ["lucide-react"],
  registryDependencies: ["Tooltip", "Button"],
  usage: {
    import: `import { GitHubStars } from "@/components/github-stars"`,
    code: `export default function Demo() {
  return <GitHubStars repo="Subhadipjana95/groot-studio" />
}`,
  },
  props: [
    {
      name: "repo",
      type: "string",
      required: true,
      description: "Repository path (owner/repo)",
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
