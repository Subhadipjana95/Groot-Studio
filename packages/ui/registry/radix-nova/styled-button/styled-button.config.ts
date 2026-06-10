import type { ComponentConfig } from "@workspace/ui/types/registry";

export const config: ComponentConfig = {
  name: "styled-button",
  title: "Styled Button",
  description: "An elegant styled button with vibrant radial gradients, shadow glows, and smooth active transitions.",
  category: { name: "Buttons", slug: "buttons" },
  tier: "free",
  status: "stable",
  tags: ["button", "radial-gradient"],
  label: "new",
  preview: { disableSSR: false, height: 160 },
  registryUrl: "https://grootstudio.vercel.app/r/styled-button.json",
  installAlias: "styled-button",
  usage: {
    import: `import { StyledButton } from "@/components/styled-button"`,
    code: `export default function Demo() {
  return (
    <div className="flex items-center gap-4">
      <StyledButton href="/dashborad" variant="rose">
        Dashboard
      </StyledButton>
    </div>
  )
}`,
  },
  props: [
    {
      name: "href",
      type: "string",
      required: true,
      description: "The URL or path that the button links to.",
    },
    {
      name: "children",
      type: "ReactNode",
      required: true,
      description: "The content to display inside the button.",
    },
    {
      name: "variant",
      type: "'neutral' | 'rose' | 'blue'",
      default: "neutral",
      required: false,
      description: "The background color scheme and border color of the button.",
    },
    {
      name: "size",
      type: "'sm' | 'md' | 'lg'",
      default: "md",
      required: false,
      description: "The height and padding size of the button.",
    },
    {
      name: "className",
      type: "string",
      required: false,
      description: "Additional CSS classes for custom styling.",
    },
  ],
};
