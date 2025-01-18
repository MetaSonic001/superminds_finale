import { Metadata } from "next"
import { AdPerformance } from "@/components/ad-performance"

export const metadata: Metadata = {
  title: "Ad Performance",
  description: "Analyze and visualize your ad campaign performance",
}

export default function AdPerformancePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Ad Performance</h1>
        <p className="text-muted-foreground">
          Analyze and visualize your ad campaign performance
        </p>
      </div>
      <AdPerformance />
    </div>
  )
}

