"use client"

import { useEffect, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import * as d3 from 'd3'
import cloud from 'd3-cloud'

const words = [
  { text: 'dental', size: 40 },
  { text: 'chews', size: 35 },
  { text: 'probiotic', size: 30 },
  { text: 'healthy', size: 25 },
  { text: 'pet', size: 20 },
  { text: 'dog', size: 18 },
  { text: 'cat', size: 16 },
  { text: 'nutrition', size: 14 },
  { text: 'supplement', size: 12 },
  { text: 'vet', size: 10 },
]

export function WordCloudSection() {
  const svgRef = useRef(null)

  useEffect(() => {
    if (svgRef.current) {
      const svg = d3.select(svgRef.current)
      const width = svg.node().getBoundingClientRect().width
      const height = 300

      const layout = cloud()
        .size([width, height])
        .words(words)
        .padding(5)
        .rotate(() => ~~(Math.random() * 2) * 90)
        .font("Impact")
        .fontSize(d => d.size)
        .on("end", draw)

      layout.start()

      function draw(words) {
        svg.selectAll("*").remove()

        svg
          .attr("width", layout.size()[0])
          .attr("height", layout.size()[1])
          .append("g")
          .attr("transform", `translate(${layout.size()[0] / 2},${layout.size()[1] / 2})`)
          .selectAll("text")
          .data(words)
          .enter()
          .append("text")
          .style("font-size", d => `${d.size}px`)
          .style("font-family", "Impact")
          .attr("text-anchor", "middle")
          .attr("transform", d => `translate(${d.x},${d.y})rotate(${d.rotate})`)
          .text(d => d.text)
      }
    }
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Word Cloud</CardTitle>
      </CardHeader>
      <CardContent>
        <svg ref={svgRef} width="100%" height="300"></svg>
      </CardContent>
    </Card>
  )
}

