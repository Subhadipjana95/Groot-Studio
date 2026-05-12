import { GlowCard } from "@workspace/ui/registry/radix-nova/glow-card/glow-card";

export default function GlowCardPreview() {
  return (
    <GlowCard className="p-6 w-64">
      <h3 className="text-xl font-bold">Groot Studio</h3>
      <p className="text-muted-foreground text-sm mt-1">Interactive glowing cards.</p>
    </GlowCard>
  );
}
