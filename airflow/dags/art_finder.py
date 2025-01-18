import os
import requests
import pandas as pd
from wordcloud import WordCloud
import matplotlib.pyplot as plt
from airflow import DAG
from airflow.operators.python import PythonOperator
from datetime import datetime

CATEGORY = "fitness app"
BASE_DIR = "./data"
YOUTUBE_API_KEY = "AIzaSyBBS0oyMCgmc_xwLsOUCdSQUSLpSl2tKD0"

# Ensure BASE_DIR exists
if not os.path.exists(BASE_DIR):
    os.makedirs(BASE_DIR)


# YouTube Scraping
def scrape_youtube():
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
    for item in data.get("items", []):
        video_id = item["id"].get("videoId", "")
        title = item["snippet"].get("title", "")
        description = item["snippet"].get("description", "")
        videos.append(
            {"video_id": video_id, "title": title, "description": description}
        )

    if videos:
        df = pd.DataFrame(videos)
        output_path = os.path.join(BASE_DIR, "youtube_results.csv")
        df.to_csv(output_path, index=False)
        print(f"YouTube results saved to {output_path}")
    else:
        print("No YouTube data found.")


# Reddit Scraping
def scrape_reddit():
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
        df = pd.DataFrame(posts).drop_duplicates()
        output_path = os.path.join(BASE_DIR, "reddit_results.csv")
        df.to_csv(output_path, index=False)
        print(f"Reddit posts saved to {output_path}")
    else:
        print("No Reddit posts found.")


# Word Cloud Generation
def generate_word_cloud():
    try:
        youtube_df = pd.read_csv(os.path.join(BASE_DIR, "youtube_results.csv"))
        reddit_df = pd.read_csv(os.path.join(BASE_DIR, "reddit_results.csv"))
    except FileNotFoundError as e:
        print(f"Error: {e}")
        return

    # Combine texts from all sources
    all_texts = []
    if not youtube_df.empty:
        all_texts.extend(youtube_df["title"].tolist())
        all_texts.extend(youtube_df["description"].tolist())
    if not reddit_df.empty:
        all_texts.extend(reddit_df["title"].tolist())

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
        print(f"Word cloud saved to {output_path}")
    else:
        print("No data available to generate the word cloud.")


# DAG Definition
default_args = {"start_date": datetime(2025, 1, 1)}
dag = DAG(
    "youtube_reddit_wordcloud",
    schedule_interval="@daily",
    default_args=default_args,
    catchup=False,
)

with dag:
    t1 = PythonOperator(task_id="scrape_youtube", python_callable=scrape_youtube)
    t2 = PythonOperator(task_id="scrape_reddit", python_callable=scrape_reddit)
    t3 = PythonOperator(
        task_id="generate_word_cloud", python_callable=generate_word_cloud
    )

    t1 >> t2 >> t3
