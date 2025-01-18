from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import requests
from bs4 import BeautifulSoup
import pandas as pd
from wordcloud import WordCloud

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

YOUTUBE_API_KEY = "AIzaSyBBS0oyMCgmc_xwLsOUCdSQUSLpSl2tKD0"


def fetch_youtube_data(category):
    print("Fetching YouTube data...")
    videos = []
    comments = []

    # Fetch video data
    url = "https://www.googleapis.com/youtube/v3/search"
    params = {
        "part": "snippet",
        "q": category,
        "maxResults": 5,
        "type": "video",
        "key": YOUTUBE_API_KEY,
    }
    response = requests.get(url, params=params)

    if response.status_code == 200:
        data = response.json()
        for item in data.get("items", []):
            video_id = item["id"].get("videoId", "")
            title = item["snippet"].get("title", "")
            description = item["snippet"].get("description", "")
            videos.append(
                {"video_id": video_id, "title": title, "description": description}
            )

            # Fetch comments
            comments_url = "https://www.googleapis.com/youtube/v3/commentThreads"
            comments_params = {
                "part": "snippet",
                "videoId": video_id,
                "maxResults": 3,
                "key": YOUTUBE_API_KEY,
            }
            comments_response = requests.get(comments_url, params=comments_params)
            if comments_response.status_code == 200:
                comments_data = comments_response.json()
                for comment_item in comments_data.get("items", []):
                    comment = comment_item["snippet"]["topLevelComment"]["snippet"].get(
                        "textDisplay", ""
                    )
                    comments.append({"video_id": video_id, "comment": comment})
    else:
        print(f"Failed to fetch YouTube data. Status code: {response.status_code}")

    return videos, comments


def fetch_reddit_data(category):
    print("Fetching Reddit data...")
    posts = []
    url = f"https://www.reddit.com/search/?q={category.replace(' ', '+')}"
    headers = {"User-Agent": "Mozilla/5.0"}
    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, "html.parser")
        for post in soup.select("a[href^='/r/']"):
            title = post.text.strip()
            link = f"https://www.reddit.com{post['href']}"
            posts.append({"title": title, "link": link})
    else:
        print(f"Failed to fetch Reddit data. Status code: {response.status_code}")

    return posts


def generate_word_cloud_data(texts):
    print("Generating word cloud data...")
    if texts:
        text = " ".join(texts)
        wordcloud = WordCloud(width=800, height=400, background_color="white").generate(
            text
        )
        return list(wordcloud.words_.keys())
    return []


@app.get("/data")
async def fetch_data(query: str, reddit: bool = True, youtube: bool = True):
    response = {}
    all_texts = []

    if youtube:
        videos, comments = fetch_youtube_data(query)
        response["youtube_videos"] = videos
        response["youtube_comments"] = comments
        all_texts.extend([v["title"] for v in videos])
        all_texts.extend([v["description"] for v in videos if v["description"]])
        all_texts.extend([c["comment"] for c in comments])

    if reddit:
        reddit_posts = fetch_reddit_data(query)
        response["reddit_posts"] = reddit_posts
        all_texts.extend([p["title"] for p in reddit_posts])

    response["wordcloud"] = generate_word_cloud_data(all_texts)

    return JSONResponse(content=response)
