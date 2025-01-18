"use client"

import { Clock, Link } from 'lucide-react'
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

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const data = {
  activeAds: 611,
  mediaBreakdown: [
    { type: "Videos", count: 581, percentage: "95%" },
    { type: "Images", count: 30, percentage: "5%" },
    { type: "Carousel", count: 0, percentage: "0%" },
    { type: "DPA/DCO", count: 0, percentage: "0%" },
    { type: "Other", count: 0, percentage: "0%" },
  ],
  landingPages: [
    {
      url: "offers.thepetlabco.com/probiotic-c...",
      views: 62,
      percentage: "10%",
    },
    {
      url: "offers.thepetlabco.com/probright-...",
      views: 47,
      percentage: "8%",
    },
    {
      url: "campaigns.thepetlabco.com/pbc_q...",
      views: 37,
      percentage: "6%",
    },
  ],
  topHooks: [
    {
      text: "Hi, my name's Chris and I'm the founder of The Pet Lab Co.",
      days: 792,
    },
    {
      text: "Hey PetLab Co family, I just wanted to let you guys know that as our valued customers we have a very special private Facebook group for you all...",
      days: 792,
    },
    {
      text: "signs of yeast issues in your dog's paws.",
      days: 610,
    },
  ],
}

export function Analytics() {
  return (
    <div className="grid gap-6 pt-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Ads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.activeAds}</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
            <ResponsiveContainer className="mt-4" height={100}>
              <LineChart data={data.mediaBreakdown}>
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={false}
                />
                <XAxis dataKey="type" hide />
                <YAxis hide />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Media Mix</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer height={200}>
              <BarChart data={data.mediaBreakdown}>
                <Bar
                  dataKey="count"
                  fill="hsl(var(--primary))"
                  radius={[4, 4, 0, 0]}
                />
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Landing Pages</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px]">
              <div className="space-y-4">
                {data.landingPages.map((page) => (
                  <div
                    key={page.url}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <Link className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{page.url}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>{page.views}</span>
                      <span className="text-muted-foreground">
                        {page.percentage}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <Tabs defaultValue="youtube" className="h-full space-y-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Social Analytics</CardTitle>
                <TabsList>
                  <TabsTrigger value="youtube">YouTube</TabsTrigger>
                  <TabsTrigger value="reddit">Reddit</TabsTrigger>
                  <TabsTrigger value="facebook">Facebook</TabsTrigger>
                </TabsList>
              </div>
            </CardHeader>
            <CardContent className="pt-2">
              <ScrollArea className="h-[300px]">
                <div className="space-y-4">
                  {data.topHooks.map((hook, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <p className="flex-1 truncate">{hook.text}</p>
                      <div className="ml-4 flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{hook.days} days</span>
                      </div>
                    </div>
                  ))}
                </div>
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </CardContent>
          </Tabs>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Word Cloud</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-square rounded-lg border bg-muted" />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

