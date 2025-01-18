import { Metadata } from "next"
import { TeamMembers } from "@/components/team-members"

export const metadata: Metadata = {
  title: "Team",
  description: "Manage your team members and their roles",
}

export default function TeamPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Team</h1>
        <p className="text-muted-foreground">
          Manage your team members and their roles
        </p>
      </div>
      <TeamMembers />
    </div>
  )
}

