"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Play } from 'lucide-react'
import { useState } from "react"

export function VideoModal() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group relative aspect-video w-full overflow-hidden rounded-xl border bg-muted"
      >
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background/90 shadow-lg transition group-hover:scale-110">
            <Play className="h-6 w-6" />
          </div>
        </div>
        <video
          src="/placeholder.mp4"
          poster="/placeholder.svg"
          className="h-full w-full object-cover"
        />
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl p-0">
          <video
            src="/placeholder.mp4"
            controls
            autoPlay
            className="h-full w-full rounded-lg"
          />
        </DialogContent>
      </Dialog>
    </>
  )
}

