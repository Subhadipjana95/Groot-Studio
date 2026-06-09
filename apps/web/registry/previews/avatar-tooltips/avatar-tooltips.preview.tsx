import { AvatarTooltips } from "@workspace/ui/registry/radix-nova/avatar-tooltips/avatar-tooltips";
import { DATA } from "@/data/Data"

export default function Demo() {
  return (
    <main className="flex items-center justify-center">
      <AvatarTooltips items={DATA.TECH_STACK} />
    </main>
  )
}