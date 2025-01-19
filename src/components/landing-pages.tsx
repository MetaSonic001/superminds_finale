"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function LandingPages({ data }) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Trending Titles</h2>
      <Card className="p-6">
        <div className="space-y-4">
          {data.slice(0, 5).map((video, index) => (
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
        <Button variant="outline" className="w-full mt-6">
          View All titles
        </Button>
      </Card>
    </div>
  );
}
