import { useState } from 'react'
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

interface OptionalRefinementsProps {
  keywords: string[]
  setKeywords: (keywords: string[]) => void
  competitors: string[]
  setCompetitors: (competitors: string[]) => void
  platforms: string[]
  setPlatforms: (platforms: string[]) => void
}

const adPlatforms = [
  "YouTube",
  "Google Ads",
  "Instagram",
  "Facebook",
  "TikTok",
  "Reddit",
]

export default function OptionalRefinements({
  keywords,
  setKeywords,
  competitors,
  setCompetitors,
  platforms,
  setPlatforms,
}: OptionalRefinementsProps) {
  const [keywordInput, setKeywordInput] = useState('')
  const [competitorInput, setCompetitorInput] = useState('')

  const handleKeywordAdd = () => {
    if (keywordInput.trim()) {
      setKeywords((prev) => [...prev, keywordInput.trim()])
      setKeywordInput('')
    }
  }

  const handleCompetitorAdd = () => {
    if (competitorInput.trim()) {
      setCompetitors((prev) => [...prev, competitorInput.trim()])
      setCompetitorInput('')
    }
  }

  const handlePlatformToggle = (platform: string) => {
    setPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="keywords">Refine Your Search with Keywords (Optional)</Label>
        <div className="flex mt-1">
          <Input
            id="keywords"
            placeholder="Add keywords"
            value={keywordInput}
            onChange={(e) => setKeywordInput(e.target.value)}
            className="mr-2"
          />
          <Button onClick={handleKeywordAdd}>Add</Button>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {keywords.map((keyword, index) => (
            <Badge key={index} variant="secondary">
              {keyword}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <Label htmlFor="competitors">List Competitor Apps or Products (Optional)</Label>
        <div className="flex mt-1">
          <Input
            id="competitors"
            placeholder="Add competitors"
            value={competitorInput}
            onChange={(e) => setCompetitorInput(e.target.value)}
            className="mr-2"
          />
          <Button onClick={handleCompetitorAdd}>Add</Button>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {competitors.map((competitor, index) => (
            <Badge key={index} variant="secondary">
              {competitor}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <Label>Select Ad Platforms for Scraping (Optional)</Label>
        <div className="mt-2 grid grid-cols-2 gap-4">
          {adPlatforms.map((platform) => (
            <Button
              key={platform}
              variant={platforms.includes(platform) ? "default" : "outline"}
              onClick={() => handlePlatformToggle(platform)}
              className="justify-start"
            >
              {platform}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

