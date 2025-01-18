import { Metadata } from "next"
import { Integrations } from "@/components/integrations"

export const metadata: Metadata = {
  title: "Integrations",
  description: "Manage your integrations with other platforms and tools",
}

export default function IntegrationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Integrations</h1>
        <p className="text-muted-foreground">
          Manage your integrations with other platforms and tools
        </p>
      </div>
      <Integrations />
    </div>
  )
}

