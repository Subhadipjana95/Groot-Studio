import type { ComponentConfig } from "@workspace/ui/types/registry";

export const config: ComponentConfig = {
  name: "github-calendar",
  title: "GitHub Calendar",
  description:
    "Fully interactive GitHub contribution calendar with year-switching and tooltips.",
  category: { name: "Components", slug: "components" },
  tier: "free",
  status: "stable",
  image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777376845/github-calender_light_dfldr4.webp",
  imageDark: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777376846/github-calender_dark_zwpype.webp",
  label: "New",
  tags: ["github", "calendar", "contributions"],
  preview: { disableSSR: true, height: 400 },
  registryUrl: "https://grootstudio.vercel.app/r/github-calendar.json",
  installAlias: "github-calendar",
  npmDependencies: ["lucide-react"],
  registryDependencies: [],
  examples: [
    {
      title: "Blue Theme",
      slug: "github-calendar-variant01",
    },
    {
      title: "Circular Cells",
      slug: "github-calendar-variant03",
    },
    {
      title: "Minimal Layout",
      slug: "github-calendar-variant02",
    },
    {
      title: "Custom Range (Sunday Start)",
      slug: "github-calendar-variant04",
    },
  ],
  usage: {
    import: `import { GitHubCalendar } from "@/components/grootstudio/github-calendar"`,
    code: `export default function Demo() {
  return <GitHubCalendar username="Subhadipjana95" />
}`,
  },
  props: [
    {
      name: "username",
      type: "string",
      required: true,
      description: "GitHub username to fetch data for",
    },
    {
      name: "data",
      type: "ContributionData",
      description: "Optional manual contribution data object",
    },
    {
      name: "startDate",
      type: "string",
      description: "Start date in YYYY-MM-DD format",
    },
    {
      name: "endDate",
      type: "string",
      description: "End date in YYYY-MM-DD format",
    },
    {
      name: "startsOnSunday",
      type: "boolean",
      default: "true",
      description: "Whether to start weeks on Sunday or Monday",
    },
    {
      name: "cellSize",
      type: "number",
      default: "12",
      description: "Size of each contribution cell in pixels",
    },
    {
      name: "cellGap",
      type: "number",
      default: "3",
      description: "Gap between cells in pixels",
    },
    {
      name: "cellShape",
      type: "rounded | circle",
      default: "rounded",
      description: "Visual shape of the contribution cells",
    },
    {
      name: "theme",
      type: "string | ThemeColors{{}}",
      default: "github",
      description:
        "Color theme (github, blue, sunset, purple, gray) or custom object",
    },
    {
      name: "showMonthLabels",
      type: "boolean",
      default: "true",
      description: "Display month names at the top",
    },
    {
      name: "showStats",
      type: "boolean",
      default: "true",
      description: "Show contribution count and username stats",
    },
    {
      name: "showLegend",
      type: "boolean",
      default: "true",
      description: "Display the Less/More color legend",
    },
  ],
};
