"use client"

import { Check, X } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const features = [
  {
    name: "Automated Ad Research",
    sparkAgency: true,
    competitor1: false,
    competitor2: true,
  },
  {
    name: "AI-Powered Insights",
    sparkAgency: true,
    competitor1: false,
    competitor2: false,
  },
  {
    name: "Real-time Analysis",
    sparkAgency: true,
    competitor1: true,
    competitor2: false,
  },
  {
    name: "Competitor Tracking",
    sparkAgency: true,
    competitor1: true,
    competitor2: true,
  },
  {
    name: "Custom Reports",
    sparkAgency: true,
    competitor1: false,
    competitor2: true,
  },
]

export function ComparisonTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[300px]">Feature</TableHead>
          <TableHead className="text-center">SparkAgency</TableHead>
          <TableHead className="text-center">Competitor 1</TableHead>
          <TableHead className="text-center">Competitor 2</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {features.map((feature) => (
          <TableRow key={feature.name}>
            <TableCell className="font-medium">{feature.name}</TableCell>
            <TableCell className="text-center">
              {feature.sparkAgency ? (
                <Check className="mx-auto h-4 w-4 text-primary" />
              ) : (
                <X className="mx-auto h-4 w-4 text-muted-foreground" />
              )}
            </TableCell>
            <TableCell className="text-center">
              {feature.competitor1 ? (
                <Check className="mx-auto h-4 w-4 text-primary" />
              ) : (
                <X className="mx-auto h-4 w-4 text-muted-foreground" />
              )}
            </TableCell>
            <TableCell className="text-center">
              {feature.competitor2 ? (
                <Check className="mx-auto h-4 w-4 text-primary" />
              ) : (
                <X className="mx-auto h-4 w-4 text-muted-foreground" />
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

