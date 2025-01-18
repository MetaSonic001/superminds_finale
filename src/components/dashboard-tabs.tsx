"use client"

import { Analytics } from "@/components/analytics"
import { CreativeTests } from "@/components/creative-tests"
import { HooksAnalysis } from "@/components/hooks-analysis"
import { LandingPages } from "@/components/landing-pages"
import { Timeline } from "@/components/timeline"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function DashboardTabs() {
  return (
    <Tabs defaultValue="analytics" className="space-y-4">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="creative-tests">Creative Tests</TabsTrigger>
        <TabsTrigger value="landing-pages">Landing Pages</TabsTrigger>
        <TabsTrigger value="hooks">Hooks</TabsTrigger>
        <TabsTrigger value="timeline">Timeline</TabsTrigger>
      </TabsList>
      <TabsContent value="analytics" className="space-y-4">
        <Analytics />
      </TabsContent>
      <TabsContent value="creative-tests" className="space-y-4">
        <CreativeTests />
      </TabsContent>
      <TabsContent value="landing-pages" className="space-y-4">
        <LandingPages />
      </TabsContent>
      <TabsContent value="hooks" className="space-y-4">
        <HooksAnalysis />
      </TabsContent>
      <TabsContent value="timeline" className="space-y-4">
        <Timeline />
      </TabsContent>
    </Tabs>
  )
}

