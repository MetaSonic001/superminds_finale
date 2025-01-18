"use client"

import { Calendar } from 'lucide-react'
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

const timelineData = [
  {
    date: "2023-01",
    events: [
      {
        type: "ad",
        title: "New Campaign Launch",
        description: "Launched new product campaign across all platforms",
        metrics: { impressions: "125K", engagement: "4.2%" },
      },
    ],
    metrics: { value: 85 },
  },
  {
    date: "2023-02",
    events: [
      {
        type: "hook",
        title: "New Hook Testing",
        description: "Started testing new content hooks",
        metrics: { engagement: "High", sentiment: "Positive" },
      },
    ],
    metrics: { value: 88 },
  },
  // Add more timeline data as needed
]

export function Timeline() {
  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Timeline</h2>
          <p className="text-muted-foreground">
            Track your campaign history and performance
          </p>
        </div>
        <Button>Add Event</Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Performance Timeline</CardTitle>
            <CardDescription>
              Track performance metrics over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer height={300}>
              <LineChart
                data={timelineData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="metrics.value"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Event Timeline</CardTitle>
            <CardDescription>
              Chronological view of campaign events
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] pr-4">
              <div className="space-y-8">
                {timelineData.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border bg-background">
                        <Calendar className="h-4 w-4" />
                      </div>
                      {i < timelineData.length - 1 && (
                        <div className="h-full w-px bg-border" />
                      )}
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">
                        {item.date}
                      </div>
                      {item.events.map((event, j) => (
                        <Card key={j}>
                          <CardHeader>
                            <CardTitle className="text-base">
                              {event.title}
                            </CardTitle>
                            <CardDescription>{event.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="grid grid-cols-2 gap-4">
                              {Object.entries(event.metrics).map(([key, value]) => (
                                <div key={key}>
                                  <div className="text-sm font-medium capitalize">
                                    {key}
                                  </div>
                                  <div className="text-2xl font-bold">
                                    {value}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

