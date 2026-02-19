from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime


class Article(BaseModel):
    id: Optional[str] = Field(None, alias="_id")
    title: str
    excerpt: str
    content: str
    image: str
    date: str
    category: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        populate_by_name = True
        json_schema_extra = {
            "example": {
                "title": "Рідкісний парад планет",
                "excerpt": "Наприкінці лютого мешканці Землі побачать унікальний парад планет",
                "content": "Повний текст статті...",
                "image": "https://example.com/image.jpg",
                "date": "17 лютого 2026",
                "category": "Астрономія"
            }
        }


class ArticleCreate(BaseModel):
    title: str
    excerpt: str
    content: str
    image: str
    date: str
    category: str


class ArticleUpdate(BaseModel):
    title: Optional[str] = None
    excerpt: Optional[str] = None
    content: Optional[str] = None
    image: Optional[str] = None
    date: Optional[str] = None
    category: Optional[str] = None