'use client'

import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

const topics = [
  "Fitness",
  "E-learning",
  "Health and Wellness",
  "Digital Marketing",
  "Mobile App Development",
  "Sustainable Living",
  "Other"
];

const platforms = [
  { id: 'youtube', label: 'YouTube' },
  { id: 'reddit', label: 'Reddit' },
  { id: 'facebook', label: 'Facebook' }
];

export default function InputPage() {
  const [topic, setTopic] = useState('');
  const [customTopic, setCustomTopic] = useState('');
  const [keywords, setKeywords] = useState([]);
  const [keywordInput, setKeywordInput] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const { toast } = useToast();

  const handleTopicSelect = (value) => {
    if (value === 'Other') {
      setTopic('');
    } else {
      setTopic(value);
      setCustomTopic('');
    }
  };

  const handleKeywordAdd = () => {
    if (keywordInput.trim()) {
      setKeywords((prev) => [...prev, keywordInput.trim()]);
      setKeywordInput('');
    }
  };

  const handlePlatformToggle = (platformId) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platformId)
        ? prev.filter((p) => p !== platformId)
        : [...prev, platformId]
    );
  };

  const handleStartScraping = async () => {
    if (!topic && !customTopic) {
      toast({
        title: "Error",
        description: "Please select a topic before starting.",
        variant: "destructive",
      });
      return;
    }

    if (keywords.length === 0) {
      toast({
        title: "Error",
        description: "Please add at least one keyword.",
        variant: "destructive",
      });
      return;
    }

    if (selectedPlatforms.length === 0) {
      toast({
        title: "Error",
        description: "Please select at least one platform.",
        variant: "destructive",
      });
      return;
    }

    // Construct API URL with parameters
    const baseUrl = 'http://127.0.0.1:8000/data';
    const params = new URLSearchParams();
    
    // Add keywords
    params.append('keywords', keywords.join(','));
    
    // Add platform parameters
    platforms.forEach(platform => {
      params.append(platform.id, selectedPlatforms.includes(platform.id).toString());
    });

    const apiUrl = `${baseUrl}?${params.toString()}`;

    try {
      toast({
        title: "Starting Analysis",
        description: "Your data is being collected. This may take a few minutes.",
      });

      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      
      // Handle the response data here
      console.log('API Response:', data);
      
      toast({
        title: "Analysis Complete",
        description: "Your data has been collected successfully.",
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      toast({
        title: "Error",
        description: "Failed to fetch data. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="w-full max-w-4xl mx-auto">
          <CardContent className="p-6">
            {/* Progress Indicator */}
            <div className="mb-8">
              <Progress value={33} className="w-full" />
              <div className="flex justify-between mt-2">
                {['Input Details', 'Scraping Data', 'Insights'].map((step, index) => (
                  <div
                    key={step}
                    className={`text-sm ${
                      index === 0 ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>

            {/* Topic Selection */}
            <div className="mb-6">
              <Label>Select a Field or Topic for Analysis *</Label>
              <Select onValueChange={handleTopicSelect} value={topic}>
                <SelectTrigger className="w-full mt-1">
                  <SelectValue placeholder="Select topic..." />
                </SelectTrigger>
                <SelectContent>
                  {topics.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {topic === 'Other' && (
                <div className="mt-2">
                  <Input
                    placeholder="Enter custom topic"
                    value={customTopic}
                    onChange={(e) => setCustomTopic(e.target.value)}
                  />
                </div>
              )}
            </div>

            {/* Keywords Section */}
            <div className="space-y-6">
              <div>
                <Label htmlFor="keywords">Enter Keywords for Analysis *</Label>
                <div className="flex mt-1">
                  <Input
                    id="keywords"
                    placeholder="Add keywords (e.g., fitness app, gym, diet)"
                    value={keywordInput}
                    onChange={(e) => setKeywordInput(e.target.value)}
                    className="mr-2"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleKeywordAdd();
                      }
                    }}
                  />
                  <Button onClick={handleKeywordAdd}>Add</Button>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {keywords.map((keyword, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary"
                      className="cursor-pointer"
                      onClick={() => setKeywords(keywords.filter((_, i) => i !== index))}
                    >
                      {keyword} ×
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Platforms Section */}
              <div>
                <Label>Select Platforms for Analysis *</Label>
                <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {platforms.map((platform) => (
                    <Button
                      key={platform.id}
                      variant={selectedPlatforms.includes(platform.id) ? "default" : "outline"}
                      onClick={() => handlePlatformToggle(platform.id)}
                      className="justify-start"
                    >
                      {platform.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 flex justify-center">
              <Button size="lg" onClick={handleStartScraping}>
                Start Analysis
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}