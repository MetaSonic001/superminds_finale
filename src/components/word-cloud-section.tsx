"use client";
import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as d3 from "d3";
import cloud from "d3-cloud";

export function WordCloudSection({ data }) {
  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current && data && Array.isArray(data)) {
      // Ensure data is in the correct format
      const formattedData = data.map((d) =>
        typeof d === "string" ? { text: d, size: Math.random() * 50 + 10 } : d,
      );

      const svg = d3.select(svgRef.current);
      const width = svg.node().getBoundingClientRect().width;
      const height = 300;

      // Clear previous drawings
      svg.selectAll("*").remove();

      const layout = cloud()
        .size([width, height])
        .words(formattedData)
        .padding(5)
        .rotate(() => (Math.random() > 0.5 ? 90 : 0))
        .font("Impact")
        .fontSize((d) => d.size)
        .on("end", draw);

      layout.start();

      function draw(words) {
        svg
          .attr("width", width)
          .attr("height", height)
          .attr("viewBox", `0 0 ${width} ${height}`)
          .append("g")
          .attr("transform", `translate(${width / 2},${height / 2})`)
          .selectAll("text")
          .data(words)
          .enter()
          .append("text")
          .style("font-size", (d) => `${d.size}px`)
          .style("font-family", "Impact")
          .style(
            "fill",
            () => d3.schemeCategory10[Math.floor(Math.random() * 10)],
          )
          .attr("text-anchor", "middle")
          .attr(
            "transform",
            (d) => `translate(${d.x},${d.y})rotate(${d.rotate})`,
          )
          .text((d) => d.text);
      }
    }
  }, [data]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Word Cloud</CardTitle>
      </CardHeader>
      <CardContent>
        <svg ref={svgRef} width="100%" height="300"></svg>
      </CardContent>
    </Card>
  );
}
