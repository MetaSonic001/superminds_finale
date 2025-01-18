export interface AdData {
  type: string
  count: number
  percentage: number
}

export interface LandingPage {
  url: string
  visits: number
  percentage: string
}

export interface Hook {
  text: string
  days: number
  audioIndicator?: boolean
}

export interface AdCreative {
  id: string
  pageId: string
  pageName: string
  imageUrl: string
  title: string
  description: string
  daysAgo: string
}

export interface FilterOption {
  label: string
  value: string
}

export interface CreativeTest {
  id: string
  name: string
  status: string
  impressions: number
  clicks: number
  ctr: number
}

export interface TimelineEvent {
  date: string
  title: string
  description: string
  type: 'ad' | 'test' | 'landing-page'
}

