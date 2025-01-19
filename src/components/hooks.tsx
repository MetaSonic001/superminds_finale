"use client";

import { Volume2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Hook } from "@/types";

export function Hooks({ data }) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Top Performing Hooks</h2>
      <Card className="p-6">
        <div className="space-y-6">
          {data.slice(0, 5).map((hook, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-600">{hook}</p>
            </div>
          ))}
        </div>
        <Button variant="outline" className="w-full mt-6">
          View All Hooks
        </Button>
      </Card>
    </div>
  );
}
