import { Metadata } from "next"
import { CalendarDays } from 'lucide-react'

import { Navigation } from "@/components/navigation"
import { SearchHeader } from "@/components/search-header"
import { Card, CardContent } from "@/components/ui/card"
import { TimelineEvent } from "@/types"

export const metadata: Metadata = {
  title: "Timeline",
  description: "View the history of your ad campaigns",
}

const events: TimelineEvent[] = [
  {
    date: "2024-01-19",
    title: "New Ad Campaign Launched",
    description: "Dog Dental Chews campaign started running on Facebook and Instagram",
    type: "ad",
  },
  // Add more events@.
]

export default function TimelinePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <div className="flex-1">
        <SearchHeader />
        <div className="p-4">
          <div className="space-y-8">
            {events.map((event, index) => (
              <Card key={index}>
                <CardContent className="flex items-start gap-4 pt-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                    <CalendarDays className="h-4 w-4" />
                  </div>
                  <div className="grid gap-1">
                    <time className="text-sm text-muted-foreground">
                      {new Date(event.date).toLocaleDateString()}
                    </time>
                    <h3 className="font-semibold">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {event.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

