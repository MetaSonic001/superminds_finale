import { Metadata } from "next"
import { LineChart, Volume2 } from 'lucide-react'

import { Navigation } from "@/components/navigation"
import { SearchHeader } from "@/components/search-header"
import { Card } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export const metadata: Metadata = {
  title: "Hooks Analysis",
  description: "Performance analysis of ad hooks and copy",
}

const hookStats = [
  {
    text: "Hi, my name's Chris and I'm the founder of The Pet Lab Co.",
    impressions: 123456,
    engagement: "4.5%",
    sentiment: "Positive",
    days: 792,
  },
  // Add more hook stats...
]

export default function HooksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <div className="flex-1">
        <SearchHeader />
        <div className="p-6 space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="p-6">
              <div className="flex items-center gap-2">
                <LineChart className="h-4 w-4 text-muted-foreground" />
                <h3 className="font-semibold">Average Engagement</h3>
              </div>
              <div className="mt-4">
                <div className="text-3xl font-bold">3.2%</div>
                <p className="text-xs text-muted-foreground">+0.8% from last month</p>
              </div>
            </Card>
            {/* Add more summary cards */}
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Hook</TableHead>
                <TableHead className="text-right">Impressions</TableHead>
                <TableHead className="text-right">Engagement</TableHead>
                <TableHead>Sentiment</TableHead>
                <TableHead className="text-right">Days Active</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {hookStats.map((hook) => (
                <TableRow key={hook.text}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Volume2 className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{hook.text}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{hook.impressions.toLocaleString()}</TableCell>
                  <TableCell className="text-right">{hook.engagement}</TableCell>
                  <TableCell>{hook.sentiment}</TableCell>
                  <TableCell className="text-right">{hook.days}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

