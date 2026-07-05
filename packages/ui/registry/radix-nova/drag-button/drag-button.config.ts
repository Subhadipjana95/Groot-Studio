import type { ComponentConfig } from "@workspace/ui/types/registry";

export const config: ComponentConfig = {
  name: "drag-button",
  title: "Drag Button",
  description: "An interactive draggable button requiring a left-to-right swipe to confirm actions, featuring optional success animations and spring physics.",
  category: { name: "Buttons", slug: "buttons" },
  tier: "free",
  status: "stable",
  label: "new",
  image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777464486/drag-button_light_u5kvmb.webp",
  imageDark: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777464486/drag-button_dark_k8kt8l.webp",
  tags: ["button", "drag", "swipe", "motion"],
  preview: { disableSSR: false, height: 250 },
  registryUrl: "https://grootstudio.vercel.app/r/drag-button.json",
  installAlias: "drag-button",
  npmDependencies: ["motion/react", "lucide-react"],
  registryDependencies: ["button"],
  usage: {
    import: `import { DragButton } from "@/components/drag-button"`,
    code: `export default function Demo() {
  const [status, setStatus] = React.useState("Slide to Checkout");

  const handleComplete = () => {
    setStatus("Order Placed!");
    setTimeout(() => {
      setStatus("Slide to Pay");
    }, 1500);
  };

  return (
    <div className="flex justify-center items-center gap-8">
      <DragButton 
          onDragComplete={handleComplete}
          colorLight="#a5b4fc"
          colorDark="#4338ca"
        >
          {status}
        </DragButton>
    </div>
  );
}`,
  },
  props: [
    {
      name: "children",
      type: "ReactNode",
      default: "undefined",
      required: true,
      description: "The content to display inside the button.",
    },
    {
      name: "onDragComplete",
      type: "() => void",
      default: "undefined",
      required: false,
      description: "Callback triggered when the handle reaches the end of the button.",
    },
    {
      name: "showConfirmation",
      type: "boolean",
      default: "true",
      required: false,
      description: "Whether to show the success animation after a successful drag.",
    },
    {
      name: "successIcon",
      type: "ReactNode",
      default: "<Check />",
      required: false,
      description: "Custom icon to show during the success animation.",
    },
    {
      name: "variant",
      type: "default | outline",
      default: "default",
      required: false,
      description: "The visual style of the button.",
    },
    {
      name: "className",
      type: "string",
      default: "undefined",
      required: false,
      description: "Optional class names for custom styling.",
    },
  ],
};
