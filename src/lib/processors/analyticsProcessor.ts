interface RawData {
    youtube_videos: any[];
    youtube_comments: any[];
    facebook_ads: any[];
    reddit_posts: any[];
    wordcloud: string[];
  }
  
  interface WordCloudItem {
    text: string;
    size: number;
  }
  
  interface TimelineData {
    name: string;
    value: number;
  }
  
  interface AdData {
    type: string;
    count: number;
    percentage: number;
  }
  
  interface LandingPage {
    url: string;
    visits: number;
    percentage: string;
  }
  
  interface Hook {
    text: string;
    days: number;
    audioIndicator: boolean;
  }
  
  interface Ad {
    id: string;
    pageName: string;
    imageUrl: string;
    daysAgo: string;
  }
  
  interface ProcessedData {
    adTypes: AdData[];
    landingPages: LandingPage[];
    hooks: Hook[];
    ads: Ad[];
    insights: string[];
    timelineData: TimelineData[];
    popularWords: WordCloudItem[];
    youtubeData: YouTubeData[];  // Added youtubeData property
  }
  
  interface YouTubeData {
    video_id: string;
    title: string;
    description: string;
    comments: string[];
  }
  
  export function processAnalytics(rawData: RawData): ProcessedData {
    return {
      adTypes: processAdTypes(rawData),
      landingPages: processLandingPages(rawData),
      hooks: processHooks(rawData),
      ads: processAds(rawData),
      insights: generateInsights(rawData),
      timelineData: generateTimelineData(rawData),
      popularWords: processWordCloud(rawData.wordcloud),
      youtubeData: processYouTubeVideos(rawData),  // Added youtubeData processing
    }
  }
  
  function processYouTubeVideos(data: RawData): YouTubeData[] {
    // Create a map to associate comments with video IDs
    const videoCommentsMap = new Map<string, string[]>();
  
    // Populate the map with comments
    data.youtube_comments.forEach(comment => {
      if (videoCommentsMap.has(comment.video_id)) {
        videoCommentsMap.get(comment.video_id)?.push(comment.comment);
      } else {
        videoCommentsMap.set(comment.video_id, [comment.comment]);
      }
    });
  
    // Create an array of youtubeData objects
    return data.youtube_videos.map(video => ({
      video_id: video.video_id,
      title: video.title,
      description: video.description,
      comments: videoCommentsMap.get(video.video_id) || [],  // Get comments associated with this video ID
    }));
  }
  
  function processAdTypes(data: RawData): AdData[] {
    const videoCount = data.youtube_videos.length;
    const facebookAdCount = data.facebook_ads.length;
    const totalCount = videoCount + facebookAdCount;
  
    return [
      { type: "Videos", count: videoCount, percentage: (videoCount / totalCount) * 100 },
      { type: "Facebook Ads", count: facebookAdCount, percentage: (facebookAdCount / totalCount) * 100 },
    ]
  }
  
  function processLandingPages(data: RawData): LandingPage[] {
    const urls = new Map<string, number>();
    data.facebook_ads.forEach(ad => {
      const url = new URL(ad.ad_snapshot_url).hostname;
      urls.set(url, (urls.get(url) || 0) + 1);
    });
  
    const totalVisits = Array.from(urls.values()).reduce((a, b) => a + b, 0);
  
    return Array.from(urls.entries())
      .map(([url, visits]) => ({
        url,
        visits,
        percentage: `${Math.round((visits / totalVisits) * 100)}%`
      }))
      .sort((a, b) => b.visits - a.visits)
      .slice(0, 7); // Limiting to top 7
  }
  
  function processHooks(data: RawData): Hook[] {
    return data.youtube_videos.map(video => ({
      text: video.description.split('.')[0], // First sentence
      days: Math.floor(Math.random() * 800), // Simulated days
      audioIndicator: false // Assuming no audio indicator for now
    })).slice(0, 4); // Limiting to top 4 hooks
  }
  
  function processAds(data: RawData): Ad[] {
    return data.facebook_ads.map((ad, index) => ({
      id: `${index + 1}D`,
      pageName: ad.page_name,
      imageUrl: ad.ad_snapshot_url, // Directly use the snapshot URL for the image
      daysAgo: `${index + 1}D`
    }));
  }
  
  function generateInsights(data: RawData): string[] {
    const insights = [
      `${data.youtube_videos.length} fitness videos analyzed`,
      `Most common topics: ${data.wordcloud.slice(0, 3).join(', ')}`,
      `${data.facebook_ads.length} Facebook ads analyzed`,
      `Top Reddit post: "${data.reddit_posts[0]?.title || "No Reddit posts available"}"`
    ];
    return insights;
  }
  
  function generateTimelineData(data: RawData): TimelineData[] {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    return months.map(name => ({
      name,
      value: Math.floor(Math.random() * 500) + 300 // Simulated values
    }));
  }
  
  function processWordCloud(wordcloud: string[]): WordCloudItem[] {
    return wordcloud
      .slice(0, 10) // Limit to the top 10 words
      .map((text, index) => ({
        text,
        size: 40 - (index * 3) // Decreasing size for each word
      }));
  }
  