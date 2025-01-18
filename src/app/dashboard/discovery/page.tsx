"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Heart,
  MessageCircle,
  Share2,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";

// Mock data with categories and tags
const posts = [
  {
    id: 1,
    height: 320,
    title: "Cozy Mountain Retreat",
    description: "A peaceful getaway in the mountains with stunning views.",
    likes: 234,
    comments: 45,
    category: "Travel",
    tags: ["nature", "mountains", "photography"],
  },
  {
    id: 2,
    height: 480,
    title: "Urban Photography",
    description: "Capturing city life in black and white.",
    likes: 189,
    comments: 23,
    category: "Photography",
    tags: ["city", "black and white", "street"],
  },
  {
    id: 3,
    height: 400,
    title: "Minimalist Design",
    description: "Less is more: exploring minimalist interior design concepts.",
    likes: 567,
    comments: 89,
    category: "Design",
    tags: ["interior", "minimal", "modern"],
  },
  {
    id: 4,
    height: 360,
    title: "Nature's Beauty",
    description: "Exploring the hidden gems of natural landscapes.",
    likes: 432,
    comments: 67,
    category: "Photography",
    tags: ["nature", "landscape", "outdoor"],
  },
  {
    id: 5,
    height: 440,
    title: "Modern Architecture",
    description: "Contemporary building designs that inspire.",
    likes: 321,
    comments: 34,
    category: "Architecture",
    tags: ["modern", "building", "design"],
  },
  {
    id: 6,
    height: 280,
    title: "Street Art",
    description: "Urban expression through colorful murals.",
    likes: 654,
    comments: 98,
    category: "Art",
    tags: ["urban", "street", "culture"],
  },
];

const categories = [
  "All",
  "Travel",
  "Photography",
  "Design",
  "Architecture",
  "Art",
];

const PinterestGrid = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeFilters, setActiveFilters] = useState([]);

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesTags =
      activeFilters.length === 0 ||
      post.tags.some((tag) => activeFilters.includes(tag));
    return matchesSearch && matchesCategory && matchesTags;
  });

  const handleRemoveFilter = (filter) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Discover Amazing Posts
        </h1>

        {/* Search and Filter Bar */}
        <div className="mb-8 space-y-4">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                className="pl-10"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex gap-2">
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Categories</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {categories.map((category) => (
                  <DropdownMenuItem
                    key={category}
                    className="cursor-pointer"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                    {selectedCategory === category && " ✓"}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Popular Tags</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {["nature", "modern", "design", "urban", "photography"].map(
                  (tag) => (
                    <DropdownMenuItem
                      key={tag}
                      className="cursor-pointer"
                      onClick={() => {
                        if (!activeFilters.includes(tag)) {
                          setActiveFilters([...activeFilters, tag]);
                        }
                      }}
                    >
                      {tag}
                      {activeFilters.includes(tag) && " ✓"}
                    </DropdownMenuItem>
                  ),
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Active Filters */}
          {(activeFilters.length > 0 || selectedCategory !== "All") && (
            <div className="flex flex-wrap gap-2">
              {selectedCategory !== "All" && (
                <Button
                  variant="secondary"
                  size="sm"
                  className="flex items-center gap-1"
                  onClick={() => setSelectedCategory("All")}
                >
                  {selectedCategory}
                  <X className="h-3 w-3 ml-1" />
                </Button>
              )}
              {activeFilters.map((filter) => (
                <Button
                  key={filter}
                  variant="secondary"
                  size="sm"
                  className="flex items-center gap-1"
                  onClick={() => handleRemoveFilter(filter)}
                >
                  {filter}
                  <X className="h-3 w-3 ml-1" />
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* Grid Layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="break-inside-avoid mb-6"
              onMouseEnter={() => setHoveredId(post.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Card className="relative bg-white rounded-xl overflow-hidden transition-transform duration-300 hover:shadow-2xl">
                <div className="relative">
                  <img
                    src={`/api/placeholder/${400}/${post.height}`}
                    alt={post.title}
                    className="w-full h-auto object-cover"
                  />
                  {hoveredId === post.id && (
                    <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                        <div className="flex justify-between items-center text-white">
                          <div className="flex items-center space-x-4">
                            <button className="flex items-center space-x-1 hover:text-red-500">
                              <Heart className="w-5 h-5" />
                              <span>{post.likes}</span>
                            </button>
                            <button className="flex items-center space-x-1">
                              <MessageCircle className="w-5 h-5" />
                              <span>{post.comments}</span>
                            </button>
                          </div>
                          <button className="p-2 hover:bg-white/20 rounded-full">
                            <Share2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg font-semibold">
                      {post.title}
                    </CardTitle>
                    <span className="text-xs text-gray-500 px-2 py-1 bg-gray-100 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <CardDescription className="text-sm text-gray-600">
                    {post.description}
                  </CardDescription>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-gray-600 px-2 py-1 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200"
                        onClick={() => {
                          if (!activeFilters.includes(tag)) {
                            setActiveFilters([...activeFilters, tag]);
                          }
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              No posts found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PinterestGrid;
