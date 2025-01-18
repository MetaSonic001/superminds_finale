import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Search, TrendingUp } from 'lucide-react'

export function QuickStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Stats</CardTitle>
        <CardDescription>Your research activity overview</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex flex-col items-center">
            <FileText className="h-8 w-8 text-blue-500 mb-2" />
            <span className="text-2xl font-bold">42</span>
            <span className="text-sm text-muted-foreground">Total Researches</span>
          </div>
          <div className="flex flex-col items-center">
            <Search className="h-8 w-8 text-green-500 mb-2" />
            <span className="text-2xl font-bold">156</span>
            <span className="text-sm text-muted-foreground">Keywords Analyzed</span>
          </div>
          <div className="flex flex-col items-center">
            <TrendingUp className="h-8 w-8 text-orange-500 mb-2" />
            <span className="text-2xl font-bold">23%</span>
            <span className="text-sm text-muted-foreground">Avg. Improvement</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

