"use client"

import Image from "next/image"
import { Copy, MoreHorizontal } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AdCreative } from "../types"

const adCreatives: AdCreative[] = [
  {
    id: "443D",
    pageId: "petlabco",
    pageName: "PetLab Co.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2K9AY5makl3DunDCGKW2bzuKn4dKHc.png",
    title: "Dog Dental Chews",
    description: "Keep your dog's teeth clean and healthy with our dental chews...",
    daysAgo: "443D",
  },
  // Add more ad creatives...
]

export function AdCreativeGallery() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {adCreatives.map((creative) => (
        <Card key={creative.id} className="overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/placeholder.svg"
                alt={creative.pageName}
                className="rounded-full"
                width={24}
                height={24}
              />
              <span className="font-semibold">{creative.pageName}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">{creative.daysAgo}</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
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
          </CardHeader>
          <CardContent className="p-0">
            <div className="aspect-video relative">
              <Image
                src={creative.imageUrl || "/placeholder.svg"}
                alt={creative.title}
                fill
                className="object-cover"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start p-4">
            <h3 className="font-semibold">{creative.title}</h3>
            <p className="text-sm text-muted-foreground">{creative.description}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

