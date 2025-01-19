import { NextResponse } from "next/server";

interface DataResponse {
  youtube_videos: Array<{
    video_id: string;
    title: string;
    description: string;
  }>;
  youtube_comments: Array<{
    video_id: string;
    comment: string;
  }>;
  reddit_posts: Array<{
    title: string;
    link: string;
  }>;
  facebook_ads: Array<{
    page_name: string;
    page_id: string;
    ad_creative_link_titles: string[];
    ad_creative_bodies: string[];
    ad_snapshot_url: string;
  }>;
  wordcloud: string[];
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const keywords = searchParams.get("keywords");
  const includeReddit = searchParams.get("reddit") === "true";
  const includeYoutube = searchParams.get("youtube") === "true";
  const includeFacebook = searchParams.get("facebook") === "true";

  try {
    const response = await fetch(
      `http://192.168.2.239/data?keywords=${keywords}&reddit=${includeReddit}&youtube=${includeYoutube}&facebook=${includeFacebook}`,
    );
    const data: DataResponse = await response.json();

    // Process and analyze the data
    const analysis = {
      youtube: {
        videoCount: data.youtube_videos.length,
        popularVideos: data.youtube_videos.map((video) => ({
          ...video,
          url: `https://youtu.be/${video.video_id}`,
        })),
        commentSentiment: analyzeSentiment(data.youtube_comments),
      },
      reddit: {
        postCount: data.reddit_posts.length,
        subreddits: extractUniqueSubreddits(data.reddit_posts),
        popularTopics: analyzeRedditTitles(data.reddit_posts),
      },
      facebook: {
        adCount: data.facebook_ads.length,
        popularPages: extractUniquePages(data.facebook_ads),
        popularHooks: analyzeAdCreatives(data.facebook_ads),
        callToActions: extractCTAs(data.facebook_ads),
      },
      wordcloud: data.wordcloud,
      marketingInsights: generateMarketingInsights(data),
    };

    return NextResponse.json(analysis);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}

// Helper functions for data analysis
function analyzeSentiment(comments: Array<{ comment: string }>) {
  // Simple sentiment analysis based on keyword matching
  const positiveWords = ["amazing", "great", "love", "awesome", "perfect"];
  const negativeWords = ["bad", "poor", "hate", "terrible", "worst"];

  let positive = 0;
  let negative = 0;
  let neutral = 0;

  comments.forEach(({ comment }) => {
    const hasPositive = positiveWords.some((word) =>
      comment.toLowerCase().includes(word),
    );
    const hasNegative = negativeWords.some((word) =>
      comment.toLowerCase().includes(word),
    );

    if (hasPositive && !hasNegative) positive++;
    else if (hasNegative && !hasPositive) negative++;
    else neutral++;
  });

  return { positive, negative, neutral };
}

function extractUniqueSubreddits(posts: Array<{ link: string }>) {
  return [
    ...new Set(
      posts
        .map((post) => {
          const match = post.link.match(/reddit\.com\/r\/([^/]+)/);
          return match ? match[1] : null;
        })
        .filter(Boolean),
    ),
  ];
}

function analyzeRedditTitles(posts: Array<{ title: string }>) {
  const words = posts.flatMap((post) => post.title.toLowerCase().split(" "));
  return Object.entries(
    words.reduce(
      (acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    ),
  )
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10);
}

function extractUniquePages(ads: Array<{ page_name: string }>) {
  return [...new Set(ads.map((ad) => ad.page_name))];
}

function analyzeAdCreatives(ads: Array<{ ad_creative_bodies: string[] }>) {
  return ads
    .flatMap((ad) => ad.ad_creative_bodies)
    .map((body) => body.split("\n"))
    .flat()
    .filter((line) => line.startsWith("✅"))
    .map((line) => line.replace("✅", "").trim());
}

function extractCTAs(ads: Array<{ ad_creative_link_titles: string[] }>) {
  return [...new Set(ads.flatMap((ad) => ad.ad_creative_link_titles))];
}

function generateMarketingInsights(data: DataResponse) {
  const insights = [];

  if (data.youtube_videos.length > 0) {
    insights.push({
      category: "Content Strategy",
      insight: "Popular video titles focus on rankings and comparisons",
      recommendation:
        "Consider creating content that compares different fitness solutions",
    });
  }

  if (data.facebook_ads.length > 0) {
    insights.push({
      category: "Ad Copy",
      insight:
        "Successful ads emphasize quick results and easy-to-follow programs",
      recommendation: "Highlight convenience and fast results in ad copy",
    });
  }

  return insights;
}
