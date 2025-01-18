import { Metadata } from "next";
import { UserProfile } from "@/components/user-profile";
import { ResearchHistory } from "@/components/research-history";
import { RecentActivity } from "@/components/recent-activity";
import { QuickStats } from "@/components/quick-stats";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Manage your ad research and insights",
};

export default function DashboardPage() {
  return (
    <div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <UserProfile />
        <QuickStats />
        <RecentActivity />
      </div>
      <ResearchHistory />
    </div>
  );
}
