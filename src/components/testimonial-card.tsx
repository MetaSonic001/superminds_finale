import { Card, CardContent } from "@/components/ui/card"
import { Star } from 'lucide-react'
import Image from "next/image"

export function TestimonialCard({
  quote,
  author,
  role,
  company,
}: {
  quote: string
  author: string
  role: string
  company: string
}) {
  return (
    <Card>
      <CardContent className="flex flex-col gap-4 p-6">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-sm text-muted-foreground">{quote}</p>
        <div className="flex items-center gap-4">
          <Image
            src="/placeholder.svg"
            alt={author}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="text-sm font-semibold">{author}</p>
            <p className="text-xs text-muted-foreground">
              {role}, {company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

