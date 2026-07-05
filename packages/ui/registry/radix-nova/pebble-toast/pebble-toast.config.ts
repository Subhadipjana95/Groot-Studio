import type { ComponentConfig } from "@workspace/ui/types/registry";

export const config: ComponentConfig = {
  name: "pebble-toast",
  title: "Pebble Toast",
  description: "A stack style notification toast with micro-animations and dynamic gradients.",
  category: { name: "Components", slug: "components" },
  tier: "free",
  status: "stable",
  label: "new",
  tags: ["toast", "notification", "micro-interaction", "motion"],
  preview: { disableSSR: true, height: 100 },
  registryUrl: "https://grootstudio.vercel.app/r/pebble-toast.json",
  installAlias: "pebble-toast",
  npmDependencies: ["sonner", "motion", "lucide-react"],
  registryDependencies: [],
  usage: {
    import: `import { Toaster } from "@/components/pebble-toast"; // For Global usage, place this import line on root layout.tsx file
import { toast } from "sonner";`,
    code: `export default function Demo() {
  return (
    <>
      <Toaster position="bottom-right" /> {/* For Global use render this component once in your root layout file below {children} */}
      <button onClick={() => { toast("Event has been created") }}>
        Render Toast
      </button>
    </>
  )
}`,
  },
  examples: [
    {
      title: "Toast Positions",
      slug: "pebble-toast-variant01",
    }],
  props: [
    {
      name: "duration",
      type: "number",
      default: "6000",
      required: false,
      description: "Default duration of the toast in milliseconds.",
    },
    {
      name: "position",
      type: "'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'",
      default: "'bottom-right'",
      required: false,
      description: "Default position of the toast stack.",
    },
  ],
};
