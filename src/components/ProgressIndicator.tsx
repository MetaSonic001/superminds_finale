import { Progress } from "@/components/ui/progress"

interface ProgressIndicatorProps {
  currentStep: number
}

export default function ProgressIndicator({ currentStep }: ProgressIndicatorProps) {
  const steps = ['Input Details', 'Scraping Data', 'Insights']
  const progress: number = (currentStep / steps.length) * 100

  return (
    <div className="mb-8">
      <Progress value={progress} className="w-full" />
      <div className="flex justify-between mt-2">
        {steps.map((step, index) => (
          <div
            key={step}
            className={`text-sm ${
              index + 1 <= currentStep ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  )
}

