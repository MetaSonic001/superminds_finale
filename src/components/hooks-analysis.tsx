"use client"

import { Clock, ThumbsUp, TrendingUp } from 'lucide-react'
import {
  Bar,
  BarChart,
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const hooks = [
  {
    text: "Hi, my name's Chris and I'm the founder of The Pet Lab Co.",
    days: 792,
    engagement: "High",
    sentiment: "Positive",
    performance: [
      { date: "2023-01", value: 85 },
      { date: "2023-02", value: 88 },
      { date: "2023-03", value: 92 },
      { date: "2023-04", value: 90 },
    ],
  },
  {
    text: "Hey PetLab Co family, I just wanted to let you guys know...",
    days: 792,
    engagement: "Medium",
    sentiment: "Positive",
    performance: [
      { date: "2023-01", value: 75 },
      { date: "2023-02", value: 78 },
      { date: "2023-03", value: 82 },
      { date: "2023-04", value: 80 },
    ],
  },
  // Add more hooks as needed
]

const performanceData = [
  { name: "Jan", engagement: 85, sentiment: 90 },
  { name: "Feb", engagement: 88, sentiment: 85 },
  { name: "Mar", engagement: 92, sentiment: 88 },
  { name: "Apr", engagement: 90, sentiment: 92 },
  { name: "May", engagement: 85, sentiment: 90 },
  { name: "Jun", engagement: 88, sentiment: 85 },
]

export function HooksAnalysis() {
  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Hooks Analysis</h2>
          <p className="text-muted-foreground">
            Analyze and optimize your content hooks
          </p>
        </div>
        <Button>Create New Hook</Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {hooks.map((hook, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>Hook {i + 1}</CardTitle>
              <CardDescription className="line-clamp-2">{hook.text}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-medium">Engagement</div>
                  <div className="text-2xl font-bold">{hook.engagement}</div>
                </div>
                <div>
                  <div className="text-sm font-medium">Sentiment</div>
                  <div className="text-2xl font-bold">{hook.sentiment}</div>
                </div>
              </div>
              <ResponsiveContainer height={100}>
                <LineChart data={hook.performance}>
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    dot={false}
                  />
                  <XAxis dataKey="date" hide />
                  <YAxis hide />
                  <Tooltip />
                </LineChart>
              </ResponsiveContainer>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4" />
                  {hook.days} days
                </div>
                <div className="flex items-center">
                  <ThumbsUp className="mr-1 h-4 w-4" />
                  {hook.engagement} engagement
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
            <CardDescription>
              Engagement and sentiment analysis over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer height={300}>
              <BarChart data={performanceData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="engagement"
                  fill="hsl(var(--primary))"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="sentiment"
                  fill="hsl(var(--primary)/.3)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Hooks</CardTitle>
            <CardDescription>
              Hooks with the highest engagement rates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Hook</TableHead>
                    <TableHead>Days Active</TableHead>
                    <TableHead>Engagement</TableHead>
                    <TableHead>Sentiment</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {hooks.map((hook, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">
                        <div className="line-clamp-1">{hook.text}</div>
                      </TableCell>
                      <TableCell>{hook.days}</TableCell>
                      <TableCell>{hook.engagement}</TableCell>
                      <TableCell>{hook.sentiment}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

