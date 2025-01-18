import { NextResponse } from 'next/server'
import { processAnalytics } from '@/lib/processors/analyticsProcessor'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const keywords = searchParams.get('keywords')
  const includeReddit = searchParams.get('reddit') === 'true'
  const includeYoutube = searchParams.get('youtube') === 'true'
  const includeFacebook = searchParams.get('facebook') === 'true'

  try {
    const response = await fetch(`http://192.168.2.239:8000/data?keywords=${keywords}&reddit=${includeReddit}&youtube=${includeYoutube}&facebook=${includeFacebook}`)
    const data = await response.json()
    
    const processedData = processAnalytics(data)
    return NextResponse.json(processedData)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 })
  }
}