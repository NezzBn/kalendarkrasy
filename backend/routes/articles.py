from fastapi import APIRouter, HTTPException
from typing import List
from models.article import Article, ArticleCreate, ArticleUpdate
from motor.motor_asyncio import AsyncIOMotorClient
import os
from bson import ObjectId
from datetime import datetime

router = APIRouter()

# Get database
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]
articles_collection = db.articles


@router.get("/articles", response_model=List[Article])
async def get_articles():
    """Get all articles"""
    articles = await articles_collection.find().sort("created_at", -1).to_list(100)
    for article in articles:
        article["_id"] = str(article["_id"])
    return articles


@router.get("/articles/{article_id}", response_model=Article)
async def get_article(article_id: str):
    """Get single article by ID"""
    try:
        article = await articles_collection.find_one({"_id": ObjectId(article_id)})
        if not article:
            raise HTTPException(status_code=404, detail="Article not found")
        article["_id"] = str(article["_id"])
        return article
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.post("/articles", response_model=Article)
async def create_article(article: ArticleCreate):
    """Create new article"""
    article_dict = article.dict()
    article_dict["created_at"] = datetime.utcnow()
    article_dict["updated_at"] = datetime.utcnow()
    
    result = await articles_collection.insert_one(article_dict)
    created_article = await articles_collection.find_one({"_id": result.inserted_id})
    created_article["_id"] = str(created_article["_id"])
    return created_article


@router.put("/articles/{article_id}", response_model=Article)
async def update_article(article_id: str, article: ArticleUpdate):
    """Update article"""
    try:
        update_data = {k: v for k, v in article.dict().items() if v is not None}
        update_data["updated_at"] = datetime.utcnow()
        
        result = await articles_collection.update_one(
            {"_id": ObjectId(article_id)},
            {"$set": update_data}
        )
        
        if result.matched_count == 0:
            raise HTTPException(status_code=404, detail="Article not found")
        
        updated_article = await articles_collection.find_one({"_id": ObjectId(article_id)})
        updated_article["_id"] = str(updated_article["_id"])
        return updated_article
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.delete("/articles/{article_id}")
async def delete_article(article_id: str):
    """Delete article"""
    try:
        result = await articles_collection.delete_one({"_id": ObjectId(article_id)})
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="Article not found")
        return {"success": True, "message": "Article deleted"}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))