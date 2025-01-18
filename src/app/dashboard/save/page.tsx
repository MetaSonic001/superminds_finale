import React from "react";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Heart, MessageCircle, Share2, Search, BookmarkX } from "lucide-react";

// Static data for saved posts
const savedPosts = [
  {
    id: 1,
    height: 320,
    title: "Mountain Adventure Photography",
    description: "Capturing the essence of mountain exploration and adventure.",
    likes: 234,
    comments: 45,
    category: "Travel",
    tags: ["nature", "adventure", "photography"],
  },
  {
    id: 2,
    height: 400,
    title: "Modern Living Room Design",
    description: "Contemporary interior design ideas for your living space.",
    likes: 189,
    comments: 23,
    category: "Interior",
    tags: ["design", "modern", "home"],
  },
  {
    id: 3,
    height: 360,
    title: "Urban Street Photography",
    description: "A glimpse into city life through the lens.",
    likes: 567,
    comments: 89,
    category: "Photography",
    tags: ["urban", "street", "city"],
  },
  {
    id: 4,
    height: 280,
    title: "Minimalist Workspace Setup",
    description: "Clean and productive workspace arrangements.",
    likes: 432,
    comments: 67,
    category: "Workspace",
    tags: ["minimal", "productivity", "setup"],
  },
];

const SavedPostsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Saved Posts</h1>
          <div className="text-sm text-gray-500">
            {savedPosts.length} posts saved
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input className="pl-10" placeholder="Search saved posts..." />
        </div>

        {/* Posts Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
          {savedPosts.map((post) => (
            <div key={post.id} className="break-inside-avoid mb-6">
              <Card className="relative bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative group">
                  <img
                    src={`/api/placeholder/${400}/${post.height}`}
                    alt={post.title}
                    className="w-full h-auto object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                  <CardDescription className="text-sm text-gray-600 mb-3">
                    {post.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-gray-600 px-2 py-1 bg-gray-100 rounded-full"
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

        {/* Empty State (hidden when there are posts) */}
        {savedPosts.length === 0 && (
          <div className="text-center py-16">
            <BookmarkX className="mx-auto h-16 w-16 text-gray-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">No saved posts yet</h2>
            <p className="text-gray-500">
              Start saving posts by clicking the bookmark icon on any post
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedPostsPage;
