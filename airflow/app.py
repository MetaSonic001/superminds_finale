from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import requests
from bs4 import BeautifulSoup
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

YOUTUBE_API_KEY = "AIzaSyAbjDcxE4Jb4edheOonRn4k9QbB1ajpE3o"
FACEBOOK_ACCESS_TOKEN = "EAAQVDWEGP5gBOzlaOoZAgULUioxjdxIIozbGY9fIYDYD8WRAiy2uXTHI8dBaXiUVWVZA5wYPnP9oh8JgpUn8B0VJI6CVxtdP15gZBaHitjbSvHvmXKjL4MKziIWAFf9dYuEsdst6AQCI9nPGE5rhcZB0vbWc2f1EE8yJifWBPBBbP3xKI3KJUG165Dy6AbJOCIHa6vu6Cb7WkP9P"


def fetch_youtube_data(keywords):
    print("Fetching YouTube data...")
    videos = []
    comments = []

    for keyword in keywords:
        url = "https://www.googleapis.com/youtube/v3/search"
        params = {
            "part": "snippet",
            "q": keyword,
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

                comments_url = "https://www.googleapis.com/youtube/v3/commentThreads"
                comments_params = {
                    "part": "snippet",
                    "videoId": video_id,
                    "maxResults": 2,
                    "key": YOUTUBE_API_KEY,
                }
                comments_response = requests.get(comments_url, params=comments_params)
                if comments_response.status_code == 200:
                    comments_data = comments_response.json()
                    for comment_item in comments_data.get("items", []):
                        comment = comment_item["snippet"]["topLevelComment"][
                            "snippet"
                        ].get("textDisplay", "")
                        comments.append({"video_id": video_id, "comment": comment})
        else:
            print(f"Failed to fetch YouTube data. Status code: {response.status_code}")

        if len(videos) >= 5:
            break

    return videos[:5], comments[:10]


def fetch_reddit_data(keywords):
    print("Fetching Reddit data...")
    posts = []

    for keyword in keywords:
        url = f"https://www.reddit.com/search/?q={keyword.replace(' ', '+')}"
        headers = {"User-Agent": "Mozilla/5.0"}
        response = requests.get(url, headers=headers)

        if response.status_code == 200:
            soup = BeautifulSoup(response.text, "html.parser")
            for post in soup.select("a[href^='/r/']"):
                title = post.text.strip()
                link = f"https://www.reddit.com{post['href']}"
                posts.append({"title": title, "link": link})
                if len(posts) >= 8:
                    break
        else:
            print(f"Failed to fetch Reddit data. Status code: {response.status_code}")

        if len(posts) >= 8:
            break

    return posts[:8]


def fetch_facebook_data(keywords):
    print("Fetching Facebook data...")
    ads = []

    url = "https://graph.facebook.com/v15.0/ads_archive"
    for keyword in keywords:
        params = {
            "search_terms": keyword,
            "ad_type": "ALL",
            "ad_reached_countries": '["US"]',
            "fields": "page_name,page_id,ad_creative_link_titles,ad_creative_bodies,ad_snapshot_url",
            "access_token": FACEBOOK_ACCESS_TOKEN,
        }

        try:
            response = requests.get(url, params=params)

            if response.status_code == 200:
                data = response.json()
                for item in data.get("data", []):
                    ads.append(
                        {
                            "page_name": item.get("page_name"),
                            "page_id": item.get("page_id"),
                            "ad_creative_link_titles": item.get(
                                "ad_creative_link_titles", []
                            ),
                            "ad_creative_bodies": item.get("ad_creative_bodies", []),
                            "ad_snapshot_url": item.get("ad_snapshot_url"),
                        }
                    )
                    if len(ads) >= 10:
                        break
            else:
                error_message = (
                    response.json().get("error", {}).get("message", "Unknown error")
                )
                print(
                    f"Failed to fetch Facebook data. Error: {error_message} (Status code: {response.status_code})"
                )
        except requests.exceptions.RequestException as e:
            print(f"Error fetching Facebook data: {e}")

        if len(ads) >= 10:
            break

    return ads[:10]


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
async def fetch_data(
    keywords: str,
    reddit: bool = True,
    youtube: bool = True,
    facebook: bool = True,
):
    response = {}
    all_texts = []

    keyword_list = keywords.split(",")

    if youtube:
        videos, comments = fetch_youtube_data(keyword_list)
        response["youtube_videos"] = videos
        response["youtube_comments"] = comments
        all_texts.extend([v["title"] for v in videos])
        all_texts.extend([v["description"] for v in videos if v["description"]])
        all_texts.extend([c["comment"] for c in comments])

    if reddit:
        reddit_posts = fetch_reddit_data(keyword_list)
        response["reddit_posts"] = reddit_posts
        all_texts.extend([p["title"] for p in reddit_posts])

    if facebook:
        facebook_ads = fetch_facebook_data(keyword_list)
        response["facebook_ads"] = facebook_ads
        all_texts.extend(
            [" ".join(ad.get("ad_creative_link_titles", [])) for ad in facebook_ads]
        )
        all_texts.extend(
            [" ".join(ad.get("ad_creative_bodies", [])) for ad in facebook_ads]
        )

    response["wordcloud"] = generate_word_cloud_data(all_texts)

    return JSONResponse(content=response)
