import { Metadata } from "next"

import { Navigation } from "@/components/navigation"
import { SearchHeader } from "@/components/search-header"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export const metadata: Metadata = {
  title: "Creative Tests",
  description: "View and analyze creative test results",
}

const tests = [
  {
    id: "TEST-001",
    name: "Dog Dental Chews - Video vs Image",
    status: "Active",
    impressions: 12500,
    clicks: 450,
    ctr: 3.6,
  },
  // Add more tests...
]

export default function TestsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <div className="flex-1">
        <SearchHeader />
        <div className="p-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Test Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Impressions</TableHead>
                <TableHead className="text-right">Clicks</TableHead>
                <TableHead className="text-right">CTR</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tests.map((test) => (
                <TableRow key={test.id}>
                  <TableCell className="font-medium">{test.name}</TableCell>
                  <TableCell>{test.status}</TableCell>
                  <TableCell className="text-right">{test.impressions.toLocaleString()}</TableCell>
                  <TableCell className="text-right">{test.clicks.toLocaleString()}</TableCell>
                  <TableCell className="text-right">{test.ctr}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

