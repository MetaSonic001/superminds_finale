"use client"

import { ExternalLink } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { LandingPage } from "../types"

const landingPages: LandingPage[] = [
  {
    url: "offers.thepetlabco.com/probiotic-c...",
    visits: 62,
    percentage: "10%",
  },
  {
    url: "offers.thepetlabco.com/probright-...",
    visits: 47,
    percentage: "8%",
  },
  {
    url: "campaigns.thepetlabco.com/pbc_q...",
    visits: 37,
    percentage: "6%",
  },
  {
    url: "offers.thepetlabco.com/probiotic-a...",
    visits: 35,
    percentage: "6%",
  },
  {
    url: "campaigns.petlabco.co.uk/prb_qui...",
    visits: 25,
    percentage: "4%",
  },
  {
    url: "campaigns.thepetlabco.de/prb_qui...",
    visits: 20,
    percentage: "3%",
  },
  {
    url: "offers.thepetlabco.ca/probiotic-ch...",
    visits: 19,
    percentage: "3%",
  },
]

export function LandingPages() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Landing Pages</h2>
      <Card className="p-6">
        <div className="space-y-4">
          {landingPages.map((page) => (
            <div
              key={page.url}
              className="flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-2 min-w-0">
                <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <span className="text-sm truncate">{page.url}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">{page.visits}</span>
                <span className="text-sm text-muted-foreground w-12 text-right">{page.percentage}</span>
              </div>
            </div>
          ))}
        </div>
        <Button variant="outline" className="w-full mt-6">
          View All Landing Pages
        </Button>
      </Card>
    </div>
  )
}

