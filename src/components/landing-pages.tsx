"use client"

import { ExternalLink, Globe, TrendingUp } from 'lucide-react'
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
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const landingPages = [
  {
    url: "offers.thepetlabco.com/probiotic",
    views: 62345,
    conversions: 1234,
    rate: "10.2%",
    trend: [
      { date: "2023-01", value: 1200 },
      { date: "2023-02", value: 1400 },
      { date: "2023-03", value: 1600 },
      { date: "2023-04", value: 1800 },
    ],
  },
  {
    url: "offers.thepetlabco.com/probright",
    views: 47123,
    conversions: 982,
    rate: "8.4%",
    trend: [
      { date: "2023-01", value: 900 },
      { date: "2023-02", value: 1100 },
      { date: "2023-03", value: 1300 },
      { date: "2023-04", value: 1500 },
    ],
  },
  // Add more landing pages as needed
]

const performanceData = [
  { name: "Jan", views: 4000, conversions: 240 },
  { name: "Feb", views: 3000, conversions: 198 },
  { name: "Mar", views: 2000, conversions: 980 },
  { name: "Apr", views: 2780, conversions: 908 },
  { name: "May", views: 1890, conversions: 800 },
  { name: "Jun", views: 2390, conversions: 800 },
]

export function LandingPages() {
  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Landing Pages</h2>
          <p className="text-muted-foreground">
            Monitor and analyze landing page performance
          </p>
        </div>
        <Button>Add New Page</Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {landingPages.map((page, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                Landing Page {i + 1}
              </CardTitle>
              <CardDescription className="truncate">{page.url}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-medium">Total Views</div>
                  <div className="text-2xl font-bold">
                    {page.views.toLocaleString()}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium">Conversion Rate</div>
                  <div className="text-2xl font-bold">{page.rate}</div>
                </div>
              </div>
              <ResponsiveContainer height={100}>
                <LineChart data={page.trend}>
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
              <Separator />
              <div className="flex justify-between">
                <Button variant="outline" size="sm">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Analytics
                </Button>
                <Button variant="outline" size="sm">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Performance Overview</CardTitle>
            <CardDescription>
              Views and conversions across all landing pages
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer height={300}>
              <BarChart data={performanceData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="views"
                  fill="hsl(var(--primary))"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="conversions"
                  fill="hsl(var(--primary)/.3)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Pages</CardTitle>
            <CardDescription>
              Pages with the highest conversion rates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>URL</TableHead>
                    <TableHead>Views</TableHead>
                    <TableHead>Conversions</TableHead>
                    <TableHead>Rate</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {landingPages.map((page, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{page.url}</TableCell>
                      <TableCell>{page.views.toLocaleString()}</TableCell>
                      <TableCell>{page.conversions.toLocaleString()}</TableCell>
                      <TableCell>{page.rate}</TableCell>
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

