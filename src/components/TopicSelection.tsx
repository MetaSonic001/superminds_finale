import { useState } from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const topics = [
  "Fitness",
  "E-learning",
  "Health and Wellness",
  "Digital Marketing",
  "Mobile App Development",
  "Sustainable Living",
  "Other",
]

interface TopicSelectionProps {
  topic: string
  setTopic: (topic: string) => void
}

export default function TopicSelection({ topic, setTopic }: TopicSelectionProps) {
  const [open, setOpen] = useState(false)
  const [customTopic, setCustomTopic] = useState('')

  const handleTopicSelect = (selectedTopic: string) => {
    if (selectedTopic === 'Other') {
      setTopic('')
    } else {
      setTopic(selectedTopic)
      setCustomTopic('')
    }
    setOpen(false)
  }

  return (
    <div className="mb-6">
      <Label htmlFor="topic">Select a Field or Topic for Analysis *</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {topic || "Select topic..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0">
          <Command>
            <CommandInput placeholder="Search topic..." />
            <CommandEmpty>No topic found.</CommandEmpty>
            <CommandGroup>
              {topics.map((t) => (
                <CommandItem
                  key={t}
                  onSelect={() => handleTopicSelect(t)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      topic === t ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {t}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
      {topic === '' && (
        <div className="mt-2">
          <Input
            placeholder="Enter custom topic"
            value={customTopic}
            onChange={(e) => {
              setCustomTopic(e.target.value)
              setTopic(e.target.value)
            }}
          />
        </div>
      )}
    </div>
  )
}

