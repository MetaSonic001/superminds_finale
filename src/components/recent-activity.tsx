import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    user: "John Doe",
    action: "completed research on",
    target: "AI in Marketing",
    time: "2 hours ago",
  },
  {
    user: "Jane Smith",
    action: "started a new analysis for",
    target: "Social Media Trends",
    time: "5 hours ago",
  },
  {
    user: "Mike Johnson",
    action: "updated competitor data for",
    target: "Tech Startups",
    time: "1 day ago",
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions from you and your team</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center gap-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src={`/placeholder-avatar-${index + 1}.jpg`} alt={activity.user} />
                <AvatarFallback>{activity.user[0]}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {activity.user} {activity.action}{" "}
                  <span className="font-bold">{activity.target}</span>
                </p>
                <p className="text-sm text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

