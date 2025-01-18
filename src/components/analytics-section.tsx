"use client"

import { ChevronDown } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AdData } from "@/types"

const data: AdData[] = [
  { type: "Videos", count: 581, percentage: 95 },
  { type: "Images", count: 30, percentage: 5 },
  { type: "Carousel", count: 0, percentage: 0 },
  { type: "DPA / DCO", count: 0, percentage: 0 },
  { type: "Other", count: 0, percentage: 0 },
]

const COLORS = ['#4A4AF4', '#36B37E', '#FF8042', '#8884d8', '#82ca9d']

export function AnalyticsSection() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">Analytics</h2>
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
      <Card className="p-6">
        <div className="flex flex-col space-y-6">
          <div>
            <div className="text-3xl font-bold">611</div>
            <div className="text-sm text-muted-foreground">ADS RUNNING</div>
          </div>
          <div className="h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  startAngle={180}
                  endAngle={-180}
                  paddingAngle={5}
                  dataKey="count"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2">
            {data.map((item, index) => (
              <div key={item.type} className="flex items-center">
                <div
                  className="h-3 w-3 rounded-sm mr-2"
                  style={{ backgroundColor: COLORS[index] }}
                />
                <div className="flex-1 text-sm">{item.type}</div>
                <div className="text-sm font-medium">{item.count}</div>
                <div className="ml-4 text-sm text-muted-foreground w-12 text-right">{item.percentage}%</div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}

