import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function UserProfile() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-14 w-14">
          <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>John Doe</CardTitle>
          <CardDescription>john.doe@example.com</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Subscription</span>
            <span className="text-sm font-medium">Pro Plan</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Next billing date</span>
            <span className="text-sm font-medium">July 1, 2023</span>
          </div>
        </div>
        <Button className="w-full mt-4" variant="outline">Manage Account</Button>
      </CardContent>
    </Card>
  )
}

