"use client"

import { Volume2 } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Hook } from "@/types"

const hooks: Hook[] = [
  {
    text: "Hi, my name's Chris and I'm the founder of The Pet Lab Co.",
    days: 792,
    audioIndicator: true,
  },
  {
    text: "Hey PetLab Co family, I just wanted to let you guys know that as our valued customers we have a very special private Facebook group for you all...",
    days: 792,
    audioIndicator: true,
  },
  {
    text: "signs of yeast issues in your dog's paws.",
    days: 610,
    audioIndicator: true,
  },
  {
    text: "If you don't brush your dog's teeth every week, listen to this...",
    days: 456,
    audioIndicator: true,
  },
]

export function Hooks() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Top Performing Hooks</h2>
      <Card className="p-6">
        <div className="space-y-6">
          {hooks.map((hook, index) => (
            <div key={index} className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-2">
                {hook.audioIndicator && (
                  <Volume2 className="h-4 w-4 mt-1 text-muted-foreground flex-shrink-0" />
                )}
                <span className="text-sm">{hook.text}</span>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-sm text-muted-foreground">{hook.days} days</span>
              </div>
            </div>
          ))}
        </div>
        <Button variant="outline" className="w-full mt-6">
          View All Hooks
        </Button>
      </Card>
    </div>
  )
}

