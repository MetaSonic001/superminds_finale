import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Button variant="ghost">Back</Button>
          <Button>Start Scraping</Button>
        </div>
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Data scraping complies with ethical research guidelines. Results may vary based on input details.
        </p>
      </div>
    </footer>
  )
}

