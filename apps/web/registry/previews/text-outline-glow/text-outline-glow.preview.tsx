import { TextHoverEffect } from "@workspace/ui/registry/radix-nova/text-outline-glow/text-outline-glow";

export default function TextOutlineGlowPreview() {
  return (
    <div className="flex items-center justify-center h-[300px] w-full p-4">
      <TextHoverEffect text="GROOT UI" fontSize={56} duration={0.5} />
    </div>
  );
}
