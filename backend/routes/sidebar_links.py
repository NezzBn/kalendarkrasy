from fastapi import APIRouter, HTTPException
from typing import List
from models.sidebar_link import SidebarLink, SidebarLinkCreate
from motor.motor_asyncio import AsyncIOMotorClient
import os
from bson import ObjectId

router = APIRouter()

# Get database
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]
sidebar_links_collection = db.sidebar_links


@router.get("/sidebar-links", response_model=List[SidebarLink])
async def get_sidebar_links():
    """Get all sidebar links"""
    links = await sidebar_links_collection.find().sort("order", 1).to_list(100)
    for link in links:
        link["_id"] = str(link["_id"])
    return links