import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const teamMembers = [
  { name: "John Doe", role: "Admin", email: "john@example.com", avatar: "/avatars/john.jpg" },
  { name: "Jane Smith", role: "Editor", email: "jane@example.com", avatar: "/avatars/jane.jpg" },
  { name: "Mike Johnson", role: "Viewer", email: "mike@example.com", avatar: "/avatars/mike.jpg" },
]

export function TeamMembers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>Manage your team and their access levels</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {teamMembers.map((member) => (
            <div key={member.email} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">{member.name}</p>
                  <p className="text-sm text-muted-foreground">{member.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">{member.role}</span>
                <Button variant="outline" size="sm">Edit</Button>
              </div>
            </div>
          ))}
        </div>
        <Button className="mt-4 w-full">Add Team Member</Button>
      </CardContent>
    </Card>
  )
}

