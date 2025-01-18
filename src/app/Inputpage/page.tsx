'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import ProgressIndicator from '@/components/ProgressIndicator'
import TopicSelection from '@/components/TopicSelection'
import OptionalRefinements from '@/components/OptionalRefinements'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export default function InputPage() {
  const [topic, setTopic] = useState('')
  const [keywords, setKeywords] = useState<string[]>([])
  const [competitors, setCompetitors] = useState<string[]>([])
  const [platforms, setPlatforms] = useState<string[]>([])
  const { toast } = useToast()

  const handleStartScraping = () => {
    if (!topic) {
      toast({
        title: "Error",
        description: "Please select a topic before starting.",
        variant: "destructive",
      })
      return
    }
    // Here you would typically initiate the scraping process
    // For now, we'll just show a toast
    toast({
      title: "Scraping Started",
      description: "Your data is being collected. This may take a few minutes.",
    })
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="w-full max-w-4xl mx-auto">
          <CardContent className="p-6">
            <ProgressIndicator currentStep={1} />
            <TopicSelection topic={topic} setTopic={setTopic} />
            <OptionalRefinements
              keywords={keywords}
              setKeywords={setKeywords}
              competitors={competitors}
              setCompetitors={setCompetitors}
              platforms={platforms}
              setPlatforms={setPlatforms}
            />
            <div className="mt-8 flex justify-center">
              <Button size="lg" onClick={handleStartScraping}>
                Start Scraping
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}

