"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

const tabs = [
  { name: "Ad Library", href: "/output" },
  { name: "Creative Tests", href: "/output/tests" },
  { name: "Landing Pages", href: "/output/landing-pages" },
  { name: "Hooks", href: "/output/hooks" },
  { name: "Timeline", href: "/output/timeline" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="border-b">
      <div className="flex h-14 items-center px-4 gap-6">
        {tabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === tab.href
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            {tab.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}

