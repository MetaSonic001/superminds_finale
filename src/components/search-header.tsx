"use client"

import { Calendar, Filter, Search, SortDesc } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SearchHeader() {
  return (
    <div className="flex items-center justify-between space-x-4 p-4">
      <div className="flex flex-1 items-center space-x-4">
        <div className="relative w-96">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search..." className="pl-8" />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex items-center space-x-4">
        <Select defaultValue="all-time">
          <SelectTrigger className="w-32">
            <Calendar className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Select time" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-time">All Time</SelectItem>
            <SelectItem value="last-7">Last 7 days</SelectItem>
            <SelectItem value="last-30">Last 30 days</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="sm">
          <SortDesc className="mr-2 h-4 w-4" />
          Newest
        </Button>
      </div>
    </div>
  )
}

