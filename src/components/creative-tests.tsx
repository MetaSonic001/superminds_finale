"use client"

import { BarChart3, ImageIcon, Play, Share2 } from 'lucide-react'
import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
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

const creatives = [
  {
    id: 1,
    type: "video",
    title: "Main Product Video",
    thumbnail: "/placeholder.svg",
    performance: {
      impressions: "125K",
      engagement: "4.2%",
      conversion: "2.1%",
    },
    metrics: {
      views: "12,453",
      likes: "843",
      shares: "234",
    },
  },
  {
    id: 2,
    type: "image",
    title: "Product Lifestyle Shot",
    thumbnail: "/placeholder.svg",
    performance: {
      impressions: "98K",
      engagement: "3.8%",
      conversion: "1.9%",
    },
    metrics: {
      views: "8,234",
      likes: "567",
      shares: "123",
    },
  },
  // Add more creatives as needed
]

export function CreativeTests() {
  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Creative Tests</h2>
          <p className="text-muted-foreground">
            Analyze and compare creative performance across platforms
          </p>
        </div>
        <Button>Create New Test</Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {creatives.map((creative) => (
          <Card key={creative.id}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {creative.type === "video" ? (
                  <Play className="h-4 w-4" />
                ) : (
                  <ImageIcon className="h-4 w-4" />
                )}
                {creative.title}
              </CardTitle>
              <CardDescription>
                {creative.type === "video" ? "Video Creative" : "Image Creative"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-video overflow-hidden rounded-md">
                <Image
                  src={creative.thumbnail || "/placeholder.svg"}
                  alt={creative.title}
                  width={300}
                  height={169}
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="outline" className="w-full">
                      <BarChart3 className="mr-2 h-4 w-4" />
                      Stats
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">Performance</h4>
                      <div className="grid gap-2">
                        <div className="grid grid-cols-2 text-sm">
                          <span className="text-muted-foreground">
                            Impressions:
                          </span>
                          <span>{creative.performance.impressions}</span>
                        </div>
                        <div className="grid grid-cols-2 text-sm">
                          <span className="text-muted-foreground">
                            Engagement:
                          </span>
                          <span>{creative.performance.engagement}</span>
                        </div>
                        <div className="grid grid-cols-2 text-sm">
                          <span className="text-muted-foreground">
                            Conversion:
                          </span>
                          <span>{creative.performance.conversion}</span>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                <Button variant="outline" className="w-full">
                  <Play className="mr-2 h-4 w-4" />
                  Play
                </Button>
                <Button variant="outline" className="w-full">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
              <Separator />
              <div className="grid grid-cols-3 gap-4 text-center text-sm">
                <div>
                  <div className="text-muted-foreground">Views</div>
                  <div className="font-medium">{creative.metrics.views}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Likes</div>
                  <div className="font-medium">{creative.metrics.likes}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Shares</div>
                  <div className="font-medium">{creative.metrics.shares}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Performance Comparison</CardTitle>
          <CardDescription>
            Compare metrics across different creatives
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Creative</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Impressions</TableHead>
                  <TableHead>Engagement</TableHead>
                  <TableHead>Conversion</TableHead>
                  <TableHead>Views</TableHead>
                  <TableHead>Likes</TableHead>
                  <TableHead>Shares</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {creatives.map((creative) => (
                  <TableRow key={creative.id}>
                    <TableCell>{creative.title}</TableCell>
                    <TableCell className="capitalize">{creative.type}</TableCell>
                    <TableCell>{creative.performance.impressions}</TableCell>
                    <TableCell>{creative.performance.engagement}</TableCell>
                    <TableCell>{creative.performance.conversion}</TableCell>
                    <TableCell>{creative.metrics.views}</TableCell>
                    <TableCell>{creative.metrics.likes}</TableCell>
                    <TableCell>{creative.metrics.shares}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}

