import { Metadata } from "next"
import { ResearchList } from "@/components/research-list"
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'

export const metadata: Metadata = {
  title: "Researches",
  description: "Manage and view your research projects",
}

export default function ResearchesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Researches</h1>
          <p className="text-muted-foreground">
            Manage and view your research projects
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> New Research
        </Button>
      </div>
      <ResearchList />
    </div>
  )
}

