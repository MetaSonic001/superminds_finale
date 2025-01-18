import os
import requests
import pandas as pd
from bs4 import BeautifulSoup
from wordcloud import WordCloud
import matplotlib.pyplot as plt

CATEGORY = "fitness app"
BASE_DIR = "./data"
YOUTUBE_API_KEY = "AIzaSyBBS0oyMCgmc_xwLsOUCdSQUSLpSl2tKD0"

# Ensure BASE_DIR exists
if not os.path.exists(BASE_DIR):
    os.makedirs(BASE_DIR)


# YouTube Scraping (Videos and Comments)
def scrape_youtube():
    # Fetch video data from YouTube API
    print("Fetching YouTube video data...")
    url = "https://www.googleapis.com/youtube/v3/search"
    params = {
        "part": "snippet",
        "q": CATEGORY,
        "maxResults": 10,
        "type": "video",
        "key": YOUTUBE_API_KEY,
    }
    response = requests.get(url, params=params)
    if response.status_code != 200:
        print(f"Failed to fetch YouTube data. Status code: {response.status_code}")
        return

    data = response.json()
    videos = []
    comments = []
    for item in data.get("items", []):
        video_id = item["id"].get("videoId", "")
        title = item["snippet"].get("title", "")
        description = item["snippet"].get("description", "")
        videos.append(
            {"video_id": video_id, "title": title, "description": description}
        )

        # Fetch comments for each video
        print(f"Fetching comments for video: {title}")
        comments_url = f"https://www.googleapis.com/youtube/v3/commentThreads"
        comments_params = {
            "part": "snippet",
            "videoId": video_id,
            "maxResults": 10,
            "key": YOUTUBE_API_KEY,
        }
        comments_response = requests.get(comments_url, params=comments_params)
        if comments_response.status_code == 200:
            comments_data = comments_response.json()
            for comment_item in comments_data.get("items", []):
                comment = comment_item["snippet"]["topLevelComment"]["snippet"][
                    "textDisplay"
                ]
                comments.append({"video_id": video_id, "comment": comment})
        else:
            print(f"Failed to fetch comments for video {video_id}.")

    # Save video data
    if videos:
        video_df = pd.DataFrame(videos)
        video_df.to_csv(os.path.join(BASE_DIR, "youtube_videos.csv"), index=False)
        print(f"YouTube video data saved to ./data/youtube_videos.csv")

    # Save comment data
    if comments:
        comments_df = pd.DataFrame(comments)
        comments_df.to_csv(os.path.join(BASE_DIR, "youtube_comments.csv"), index=False)
        print(f"YouTube comments saved to ./data/youtube_comments.csv")


# Reddit Scraping
def scrape_reddit():
    print("Fetching Reddit posts...")
    url = f"https://www.reddit.com/search/?q={CATEGORY.replace(' ', '+')}"
    headers = {"User-Agent": "Mozilla/5.0"}
    response = requests.get(url, headers=headers)
    if response.status_code != 200:
        print(f"Failed to fetch Reddit posts. Status code: {response.status_code}")
        return

    soup = BeautifulSoup(response.text, "html.parser")
    posts = []
    for post in soup.select("a[href^='/r/']"):
        title = post.text.strip()
        link = f"https://www.reddit.com{post['href']}"
        posts.append({"title": title, "link": link})

    if posts:
        reddit_df = pd.DataFrame(posts).drop_duplicates()
        reddit_df.to_csv(os.path.join(BASE_DIR, "reddit_results.csv"), index=False)
        print(f"Reddit posts saved to ./data/reddit_results.csv")
    else:
        print("No Reddit posts found.")


# Word Cloud Generation


# Word Cloud Generation
def generate_word_cloud():
    print("Generating word cloud...")
    try:
        youtube_videos_df = pd.read_csv(os.path.join(BASE_DIR, "youtube_videos.csv"))
        youtube_comments_df = pd.read_csv(
            os.path.join(BASE_DIR, "youtube_comments.csv")
        )
        reddit_df = pd.read_csv(os.path.join(BASE_DIR, "reddit_results.csv"))
    except FileNotFoundError as e:
        print(f"Error: {e}")
        return

    # Combine texts from all sources
    all_texts = []
    if not youtube_videos_df.empty:
        all_texts.extend(youtube_videos_df["title"].dropna().astype(str).tolist())
        all_texts.extend(youtube_videos_df["description"].dropna().astype(str).tolist())
    if not youtube_comments_df.empty:
        all_texts.extend(youtube_comments_df["comment"].dropna().astype(str).tolist())
    if not reddit_df.empty:
        all_texts.extend(reddit_df["title"].dropna().astype(str).tolist())

    # Generate Word Cloud if there's data
    if all_texts:
        text = " ".join(all_texts)
        wordcloud = WordCloud(width=800, height=400, background_color="white").generate(
            text
        )
        plt.figure(figsize=(10, 5))
        plt.imshow(wordcloud, interpolation="bilinear")
        plt.axis("off")
        output_path = os.path.join(BASE_DIR, "wordcloud.png")
        plt.savefig(output_path)
        plt.show()  # Optional: Show the word cloud
        print(f"Word cloud saved to {output_path}")
    else:
        print("No data available to generate the word cloud.")


if __name__ == "__main__":
    scrape_youtube()
    scrape_reddit()
    generate_word_cloud()
