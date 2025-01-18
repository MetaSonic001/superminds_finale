import { Metadata } from "next"
import { BarChart, ExternalLink } from 'lucide-react'

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
  title: "Landing Pages Analysis",
  description: "Detailed analysis of landing page performance",
}

const landingPageStats = [
  {
    url: "offers.thepetlabco.com/probiotic-c...",
    visits: 62345,
    conversions: 1234,
    rate: "1.98%",
    revenue: "$12,345",
  },
  // Add more landing page stats...
]

export default function LandingPagesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <div className="flex-1">
        <SearchHeader />
        <div className="p-6 space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="p-6">
              <div className="flex items-center gap-2">
                <BarChart className="h-4 w-4 text-muted-foreground" />
                <h3 className="font-semibold">Total Visits</h3>
              </div>
              <div className="mt-4">
                <div className="text-3xl font-bold">234.5K</div>
                <p className="text-xs text-muted-foreground">+12.3% from last month</p>
              </div>
            </Card>
            {/* Add more summary cards */}
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Landing Page URL</TableHead>
                <TableHead className="text-right">Visits</TableHead>
                <TableHead className="text-right">Conversions</TableHead>
                <TableHead className="text-right">Conv. Rate</TableHead>
                <TableHead className="text-right">Revenue</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {landingPageStats.map((page) => (
                <TableRow key={page.url}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{page.url}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{page.visits.toLocaleString()}</TableCell>
                  <TableCell className="text-right">{page.conversions.toLocaleString()}</TableCell>
                  <TableCell className="text-right">{page.rate}</TableCell>
                  <TableCell className="text-right">{page.revenue}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

