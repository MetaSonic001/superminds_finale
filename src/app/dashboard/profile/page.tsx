import { Metadata } from "next"
import { ProfileForm } from "@/components/profile-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Profile",
  description: "Manage your account settings and preferences",
}

export default function ProfilePage() {
  return (
    <div className="flex-1 w-full max-w-full overflow-hidden px-4 md:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="space-y-6 pb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
            <p className="text-muted-foreground">
              Manage your account settings and preferences
            </p>
          </div>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>Update your account details and preferences.</CardDescription>
            </CardHeader>
            <CardContent>
              <ProfileForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}