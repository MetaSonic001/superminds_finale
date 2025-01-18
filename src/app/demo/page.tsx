'use client'
import { useState, useEffect } from 'react'

const DemoPage = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch('/api/analytics?keywords=fitness+app,gym,diet&reddit=true&youtube=true&facebook=true')
      const result = await response.json()
      setData(result)
      setLoading(false)
    } catch {
      setError('Failed to fetch data')
      setLoading(false)
    }
  }

  if (loading) return <div className="p-4">Loading...</div>
  if (error) return <div className="p-4 text-red-500">{error}</div>

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Analytics Demo</h1>
      
      {/* Ad Types */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Ad Types</h2>
        <div className="grid grid-cols-2 gap-4">
          {data?.adTypes?.map((ad) => (
            <div key={ad.type} className="bg-white p-4 rounded-lg shadow">
              <div className="font-medium">{ad.type}</div>
              <div className="text-sm text-gray-600">
                Count: {ad.count} ({ad.percentage.toFixed(1)}%)
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Landing Pages */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Landing Pages</h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left">URL</th>
                <th className="px-4 py-2 text-left">Visits</th>
                <th className="px-4 py-2 text-left">Percentage</th>
              </tr>
            </thead>
            <tbody>
              {data?.landingPages?.map((page) => (
                <tr key={page.url} className="border-t">
                  <td className="px-4 py-2">{page.url}</td>
                  <td className="px-4 py-2">{page.visits}</td>
                  <td className="px-4 py-2">{page.percentage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Hooks */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Content Hooks</h2>
        <div className="space-y-4">
          {data?.hooks?.map((hook, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <p className="mb-2">{hook.text}</p>
              <div className="text-sm text-gray-600">
                {hook.days} days ago • {hook.audioIndicator ? '🔊 Has audio' : 'No audio'}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Insights */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Insights</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <ul className="list-disc pl-4 space-y-2">
            {data?.insights?.map((insight, index) => (
              <li key={index}>{insight}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Word Cloud */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Popular Words</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex flex-wrap gap-4">
            {data?.popularWords?.map((word) => (
              <span
                key={word.text}
                style={{ fontSize: `${word.size / 10}rem` }}
                className="text-blue-600"
              >
                {word.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Ads */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Recent Ads</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {data?.ads?.map((ad) => (
            <div key={ad.id} className="bg-white p-4 rounded-lg shadow">
              <img
                src={ad.imageUrl}
                alt={ad.pageName}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <div className="font-medium">{ad.pageName}</div>
              <div className="text-sm text-gray-600">{ad.daysAgo} ago</div>
            </div>
          ))}
        </div>
      </section>

      {/* Debug Raw Data */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Raw Data (Debug)</h2>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-auto max-h-96">
          {JSON.stringify(data, null, 2)}
        </pre>
      </section>
    </div>
  )
}

export default DemoPage