import { Lightbulb } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function InsightsSection() {
  const insights = [
    "Users are most concerned about dental health for their pets",
    "Video ads featuring pet owners' testimonials perform 30% better",
    "The phrase 'vet-approved' increases click-through rates by 25%",
    "Mobile app users engage 2x more with push notifications about new products",
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5" />
          Actionable Insights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {insights.map((insight, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="font-bold text-primary">{index + 1}.</span>
              <span>{insight}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

