"use client"

import Image from "next/image"
import { Copy, MoreHorizontal } from 'lucide-react'
import { useState } from 'react'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const initialAds = [
  {
    id: "443D",
    pageName: "PetLab Co.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2K9AY5makl3DunDCGKW2bzuKn4dKHc.png",
    daysAgo: "443D",
  },
  // Add more initial ads...
]

export function AdGallery() {
  const [ads, setAds] = useState(initialAds)

  const loadMoreAds = () => {
    // Simulating API fetch for more ads
    const newAds = [
      // Add new ad objects here
    ]
    setAds([...ads, ...newAds])
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Ad Creatives</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {ads.map((ad) => (
          <Card key={ad.id} className="overflow-hidden">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    alt={ad.pageName}
                    width={32}
                    height={32}
                  />
                </div>
                <span className="font-medium">{ad.pageName}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">{ad.daysAgo}</span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy Ad ID
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="aspect-video relative">
              <Image
                src={ad.imageUrl || "/placeholder.svg"}
                alt="Ad Creative"
                fill
                className="object-cover"
              />
            </div>
          </Card>
        ))}
      </div>
      <div className="flex justify-center">
        <Button onClick={loadMoreAds}>Load More Ads</Button>
      </div>
    </div>
  )
}

