import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function YouTubeSection({ data }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top YouTube Videos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((video, key) => (
            <div key={key} className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">{video.title}</h3>
                <p className="text-sm text-muted-foreground">
                  Views: {video.views} | Likes: {video.likes}
                </p>
              </div>
              <Link href={video.url}>Watch</Link>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
