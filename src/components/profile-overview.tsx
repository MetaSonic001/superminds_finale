import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ProfileOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Agency Overview</CardTitle>
        <CardDescription>Your marketing agency at a glance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4 mb-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src="/placeholder-avatar.jpg" alt="John Doe" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl font-bold">John Doe</h2>
            <p className="text-muted-foreground">Founder & CEO</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-1">Agency Type</h3>
            <p>Full-Service Digital Marketing</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Specializations</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>SEO</Badge>
              <Badge>PPC</Badge>
              <Badge>Social Media Marketing</Badge>
              <Badge>Content Marketing</Badge>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Years in Business</h3>
            <p>5 years</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Team Size</h3>
            <p>15-20 employees</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Notable Clients</h3>
            <p>TechCorp, FashionBrand, LocalBiz</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

