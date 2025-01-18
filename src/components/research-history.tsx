"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MoreHorizontal, Plus, FileText, Eye, Pencil, Trash2 } from 'lucide-react'

const researchData = [
  {
    id: 1,
    name: "Competitor Analysis: Tech Startups",
    date: "2023-05-15",
    status: "Completed",
    keywords: 35,
    insights: 12,
  },
  {
    id: 2,
    name: "Social Media Sentiment: Product Launch",
    date: "2023-05-10",
    status: "In Progress",
    keywords: 50,
    insights: 8,
  },
  {
    id: 3,
    name: "Ad Performance: Q2 Campaign",
    date: "2023-05-05",
    status: "Completed",
    keywords: 28,
    insights: 15,
  },
]

export function ResearchHistory() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredResearch = researchData.filter((research) =>
    research.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Research History</CardTitle>
        <CardDescription>View and manage your previous researches</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-4">
          <Input
            placeholder="Search researches..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
          <Button>
            <Plus className="mr-2 h-4 w-4" /> New Research
          </Button>
        </div>
        {filteredResearch.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Research Name</TableHead>
                <TableHead>Date Created</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Keywords</TableHead>
                <TableHead>Insights</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredResearch.map((research) => (
                <TableRow key={research.id}>
                  <TableCell className="font-medium">{research.name}</TableCell>
                  <TableCell>{research.date}</TableCell>
                  <TableCell>{research.status}</TableCell>
                  <TableCell>{research.keywords}</TableCell>
                  <TableCell>{research.insights}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" /> View details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Pencil className="mr-2 h-4 w-4" /> Edit research
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" /> Delete research
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="text-center py-4">
            <FileText className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-semibold text-gray-900">No researches found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Get started by creating a new research project.
            </p>
            <div className="mt-6">
              <Button>
                <Plus className="mr-2 h-4 w-4" /> New Research
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

