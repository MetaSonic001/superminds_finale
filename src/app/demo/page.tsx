"use client";
import { useState, useEffect } from "react";
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Youtube, Facebook, MessageCircle } from "lucide-react";

export default function Dashboard() {
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
        `/api/data?keywords=fitness app,gym,diet&reddit=${filters.reddit}&youtube=${filters.youtube}&facebook=${filters.facebook}`,
      );
      const result = await response.json();
      setData(result);
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
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Marketing Analysis Dashboard
          </h1>
          <p className="text-gray-600 mt-2">
            Comprehensive analysis of social media and advertising data
          </p>
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setFilters((f) => ({ ...f, youtube: !f.youtube }))}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              filters.youtube ? "bg-red-500 text-white" : "bg-gray-200"
            }`}
          >
            <Youtube size={20} />
            YouTube
          </button>
          <button
            onClick={() => setFilters((f) => ({ ...f, reddit: !f.reddit }))}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              filters.reddit ? "bg-orange-500 text-white" : "bg-gray-200"
            }`}
          >
            <MessageCircle size={20} />
            Reddit
          </button>
          <button
            onClick={() => setFilters((f) => ({ ...f, facebook: !f.facebook }))}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              filters.facebook ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            <Facebook size={20} />
            Facebook
          </button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Videos Analyzed
              </CardTitle>
              <Youtube className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent></CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Facebook Ads
              </CardTitle>
              <Facebook className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data.facebook.adCount}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Reddit Communities
              </CardTitle>
              <MessageCircle className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {data.reddit.subreddits.length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sentiment Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Comment Sentiment Analysis</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={[
                    {
                      name: "Positive",
                      value: data.youtube.commentSentiment.positive,
                    },
                    {
                      name: "Neutral",
                      value: data.youtube.commentSentiment.neutral,
                    },
                    {
                      name: "Negative",
                      value: data.youtube.commentSentiment.negative,
                    },
                  ]}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Marketing Insights */}
          <Card>
            <CardHeader>
              <CardTitle>Marketing Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data.marketingInsights.map((insight, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900">
                      {insight.category}
                    </h3>
                    <p className="text-gray-600 mt-1">{insight.insight}</p>
                    <p className="text-blue-600 mt-2">
                      💡 {insight.recommendation}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Popular Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Video Titles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data.youtube.popularVideos.slice(0, 5).map((video, index) => (
                  <a
                    key={index}
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <p className="font-medium text-gray-900">{video.title}</p>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Popular Ad Hooks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data.facebook.popularHooks.slice(0, 5).map((hook, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-600">{hook}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

