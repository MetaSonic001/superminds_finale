import { Metadata } from "next"

import { AdGallery } from "@/components/ad-gallery"
import { AnalyticsSection } from "@/components/analytics-section"
import { Hooks } from "@/components/hooks"
import { InsightsSection } from "@/components/insights-section"
import { LandingPages } from "@/components/landing-pages"
import { Navigation } from "@/components/navigation"
import { SearchHeader } from "@/components/search-header"
import { TrendsSection } from "@/components/trends-section"
import { WordCloudSection } from "@/components/word-cloud-section"
import { YouTubeSection } from "@/components/youtube-section"

export const metadata: Metadata = {
  title: "Analytics Dashboard",
  description: "Advanced analytics dashboard for ad performance and insights",
}

export default function OutputPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <div className="flex-1">
        <SearchHeader />
        <div className="p-4 md:p-6 space-y-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnalyticsSection />
            <LandingPages />
            <Hooks />
          </div>
          <AdGallery />
          <div className="grid gap-6 md:grid-cols-2">
            <InsightsSection />
            <TrendsSection />
          </div>
          <WordCloudSection />
          <YouTubeSection />
        </div>
      </div>
    </div>
  )
}

