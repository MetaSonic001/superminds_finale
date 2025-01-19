"use client";
import { Metadata } from "next";

import { AdGallery } from "@/components/ad-gallery";
import { AnalyticsSection } from "@/components/analytics-section";
import { Hooks } from "@/components/hooks";
import { InsightsSection } from "@/components/insights-section";
import { LandingPages } from "@/components/landing-pages";
import { Navigation } from "@/components/navigation";
import { SearchHeader } from "@/components/search-header";
import { TrendsSection } from "@/components/trends-section";
import { WordCloudSection } from "@/components/word-cloud-section";
import { YouTubeSection } from "@/components/youtube-section";
import { useEffect, useState } from "react";

export default function OutputPage() {
  interface DataType {
    youtube: {
      videoCount: number;
      commentSentiment: {
        positive: number;
        neutral: number;
        negative: number;
      };
      popularVideos: { title: string; url: string }[];
    };
    facebook: {
      adCount: number;
      popularHooks: string[];
    };
    reddit: {
      subreddits: string[];
    };
    marketingInsights: {
      category: string;
      insight: string;
      recommendation: string;
    }[];
    wordcloud: string[];
  }

  const [data, setData] = useState<DataType | null>(null);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    youtube: true,
    reddit: true,
    facebook: true,
  });

  useEffect(() => {
    fetchData();
  }, [filters]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/data?keywords=finance&reddit=${filters.reddit}&youtube=${filters.youtube}&facebook=${filters.facebook}`,
      );
      const result = await response.json();
      setData(result);
      console.log(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  if (loading || !data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <div className="flex-1">
        <SearchHeader />
        <div className="p-4 md:p-6 space-y-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnalyticsSection />
            <LandingPages data={data.youtube.popularVideos} />
            <Hooks data={data.facebook.popularHooks} />
          </div>
          <AdGallery />
          <div className="grid gap-6 md:grid-cols-2">
            <InsightsSection />
            <TrendsSection data={data.youtube.commentSentiment} />
          </div>
          <WordCloudSection data={data.wordcloud} />
          <YouTubeSection data={data.youtube.popularVideos} />
        </div>
      </div>
    </div>
  );
}
