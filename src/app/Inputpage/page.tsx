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

const adPlatforms = [
  "YouTube",
  "Google Ads",
  "Instagram",
  "Facebook",
  "TikTok",
  "Reddit",
];

export default function InputPage() {
  const [topic, setTopic] = useState('');
  const [customTopic, setCustomTopic] = useState('');
  const [keywords, setKeywords] = useState([]);
  const [keywordInput, setKeywordInput] = useState('');
  const [competitors, setCompetitors] = useState([]);
  const [competitorInput, setCompetitorInput] = useState('');
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

  const handleCompetitorAdd = () => {
    if (competitorInput.trim()) {
      setCompetitors((prev) => [...prev, competitorInput.trim()]);
      setCompetitorInput('');
    }
  };

  const handlePlatformToggle = (platform) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    );
  };

  const handleStartScraping = () => {
    if (!topic && !customTopic) {
      toast({
        title: "Error",
        description: "Please select a topic before starting.",
        variant: "destructive",
      });
      return;
    }

    const formData = {
      topic: topic || customTopic,
      keywords,
      competitors,
      platforms: selectedPlatforms,
    };

    console.log('Form data:', formData);
    
    toast({
      title: "Starting Analysis",
      description: "Your data is being collected. This may take a few minutes.",
    });
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
                <Label htmlFor="keywords">Refine Your Search with Keywords (Optional)</Label>
                <div className="flex mt-1">
                  <Input
                    id="keywords"
                    placeholder="Add keywords"
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

              {/* Competitors Section */}
              <div>
                <Label htmlFor="competitors">List Competitor Apps or Products (Optional)</Label>
                <div className="flex mt-1">
                  <Input
                    id="competitors"
                    placeholder="Add competitors"
                    value={competitorInput}
                    onChange={(e) => setCompetitorInput(e.target.value)}
                    className="mr-2"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleCompetitorAdd();
                      }
                    }}
                  />
                  <Button onClick={handleCompetitorAdd}>Add</Button>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {competitors.map((competitor, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary"
                      className="cursor-pointer"
                      onClick={() => setCompetitors(competitors.filter((_, i) => i !== index))}
                    >
                      {competitor} ×
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Platforms Section */}
              <div>
                <Label>Select Ad Platforms for Scraping (Optional)</Label>
                <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {adPlatforms.map((platform) => (
                    <Button
                      key={platform}
                      variant={selectedPlatforms.includes(platform) ? "default" : "outline"}
                      onClick={() => handlePlatformToggle(platform)}
                      className="justify-start"
                    >
                      {platform}
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