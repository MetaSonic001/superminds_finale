"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";

export function UserProfile() {
  const { user } = useUser();

  if (!user) {
    return <p className="text-center mt-4">Loading...</p>; // Optional: Add a loading state or fallback UI
  }

  return (
    <Card className="max-w-md mx-auto p-4 sm:max-w-lg md:max-w-xl lg:max-w-2xl">
      <CardHeader className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
        <Avatar className="h-16 w-16 sm:h-20 sm:w-20">
          <AvatarImage
            src={user.profileImageUrl || "/placeholder-avatar.jpg"}
            alt={user.fullName || "User"}
          />
          <AvatarFallback>
            {user.firstName?.[0] || "U"}
            {user.lastName?.[0] || "N"}
          </AvatarFallback>
        </Avatar>
        <div className="text-center sm:text-left">
          <CardTitle className="text-lg sm:text-xl md:text-2xl">
            {user.fullName || "Anonymous User"}
          </CardTitle>
          <CardDescription className="text-sm md:text-base">
            {user.emailAddresses[0]?.emailAddress || "No email provided"}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
            <span className="text-sm text-muted-foreground">Subscription</span>
            <span className="text-sm font-medium">Pro Plan</span>
            {/* Replace with actual user plan if available */}
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
            <span className="text-sm text-muted-foreground">
              Next billing date
            </span>
            <span className="text-sm font-medium">July 1, 2023</span>
            {/* Replace with actual billing data if available */}
          </div>
        </div>
        <Button className="w-full mt-6 sm:mt-4" variant="outline">
          Manage Account
        </Button>
      </CardContent>
    </Card>
  );
}
