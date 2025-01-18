"use client"

import { Filter, Search } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SearchBar() {
  return (
    <div className="flex flex-col gap-4 rounded-lg border bg-card p-4 shadow-sm md:flex-row md:items-center md:gap-6">
      <div className="flex flex-1 items-center gap-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input className="flex-1" placeholder="Search..." />
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Add a Filter
        </Button>
        <Select defaultValue="all-time">
          <SelectTrigger className="w-[130px]">
            <SelectValue placeholder="Select time" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-time">All Time</SelectItem>
            <SelectItem value="last-7">Last 7 days</SelectItem>
            <SelectItem value="last-30">Last 30 days</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="newest">
          <SelectTrigger className="w-[130px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="oldest">Oldest</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

