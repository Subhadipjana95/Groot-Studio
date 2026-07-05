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
  image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1783242560/pebble-toast_light_sfxw62.webp",
  imageDark: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1783242560/pebble-toast_dark_qogrrq.webp",
  preview: { disableSSR: true, height: 100 },
  registryUrl: "https://grootstudio.vercel.app/r/pebble-toast.json",
  installAlias: "pebble-toast",
  npmDependencies: ["sonner", "motion", "lucide-react"],
  registryDependencies: [],
  usage: {
    extra:[
      {
        title: "Add the Toaster component.",
        fileName: "app/layout.tsx",
        code: `import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>{children}</main>
        <Toaster position="bottom-right" />
      </body>
    </html>
  )
}`,
  highlightLines: [1, 9],
      }
    ],
    import: `"use client"
import { toast } from "sonner"`,
    importHighlightLines: [2],
    code: `export default function Demo() {
  return (
    <div className="w-full  h-screen flex justify-center items-center">
      <button onClick={() => { toast("Event has been created") }}>
        Render Toast
      </button>
    </div>
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
      name: "success",
      type: "(message: string | React.ReactNode, options?: ToastOptions) => void",
      default: "-",
      required: false,
      description: "Function to trigger a success toast variant with a green gradient.",
    },
    {
      name: "warning",
      type: "(message: string | React.ReactNode, options?: ToastOptions) => void",
      default: "-",
      required: false,
      description: "Function to trigger a warning toast variant with a yellow gradient.",
    },
    {
      name: "error",
      type: "(message: string | React.ReactNode, options?: ToastOptions) => void",
      default: "-",
      required: false,
      description: "Function to trigger an error toast variant with a red gradient.",
    },
    {
      name: "info",
      type: "(message: string | React.ReactNode, options?: ToastOptions) => void",
      default: "-",
      required: false,
      description: "Function to trigger an info toast variant with a blue gradient.",
    },
    {
      name: "promise",
      type: "(promise: Promise<any>, options: PromiseOptions) => void",
      default: "-",
      required: false,
      description: "Function to trigger a promise-based toast that updates dynamically on resolution/rejection.",
    },
    {
      name: "duration",
      type: "number",
      default: "6000",
      required: false,
      description: "Default duration of the toast in milliseconds.",
    },
    {
      name: "position",
      type: "top-left | top-center | top-right | bottom-left | bottom-center | bottom-right",
      default: "bottom-right",
      required: false,
      description: "Default position of the toast stack.",
    },
  ],
};
