import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const videos = [
  { id: '1', title: 'Top 10 Pet Dental Care Tips', views: '1.2M', likes: '45K' },
  { id: '2', title: 'How to Choose the Best Dog Food', views: '890K', likes: '32K' },
  { id: '3', title: 'Natural Remedies for Pet Anxiety', views: '750K', likes: '28K' },
]

export function YouTubeSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top YouTube Videos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {videos.map(video => (
            <div key={video.id} className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">{video.title}</h3>
                <p className="text-sm text-muted-foreground">Views: {video.views} | Likes: {video.likes}</p>
              </div>
              <Button variant="outline">Watch</Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

