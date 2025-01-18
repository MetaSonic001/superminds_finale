"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const adData = [
  { category: "Social Media", impressions: 500000, clicks: 25000, conversions: 1000 },
  { category: "Search", impressions: 300000, clicks: 15000, conversions: 750 },
  { category: "Display", impressions: 700000, clicks: 20000, conversions: 500 },
  { category: "Video", impressions: 400000, clicks: 10000, conversions: 250 },
]

const metrics = ["impressions", "clicks", "conversions"]

export function AdPerformance() {
  const [selectedMetric, setSelectedMetric] = useState("impressions")

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ad Performance</CardTitle>
        <CardDescription>Visualize your ad campaign performance across different categories</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Select onValueChange={setSelectedMetric} defaultValue={selectedMetric}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select metric" />
            </SelectTrigger>
            <SelectContent>
              {metrics.map((metric) => (
                <SelectItem key={metric} value={metric}>
                  {metric.charAt(0).toUpperCase() + metric.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={adData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={selectedMetric} fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

