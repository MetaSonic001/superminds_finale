import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

const integrations = [
  { name: "Google Analytics", description: "Track website traffic and user behavior", connected: true },
  { name: "Mailchimp", description: "Email marketing and automation", connected: false },
  { name: "Slack", description: "Team communication and notifications", connected: true },
  { name: "Zapier", description: "Connect apps and automate workflows", connected: false },
]

export function Integrations() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Integrations</CardTitle>
        <CardDescription>Connect and manage your integrations with other platforms</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {integrations.map((integration) => (
            <div key={integration.name} className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium leading-none">{integration.name}</h3>
                <p className="text-sm text-muted-foreground">{integration.description}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Switch checked={integration.connected} />
                <Button variant="outline" size="sm">
                  {integration.connected ? "Manage" : "Connect"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

