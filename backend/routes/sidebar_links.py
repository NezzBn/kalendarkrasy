from fastapi import APIRouter, HTTPException
from typing import List
from models.sidebar_link import SidebarLink, SidebarLinkCreate
from bson import ObjectId

router = APIRouter()


def get_db():
    """Get database instance from server"""
    from server import db
    return db


@router.get("/sidebar-links", response_model=List[SidebarLink])
async def get_sidebar_links():
    """Get all sidebar links"""
    db = get_db()
    links = await db.sidebar_links.find().sort("order", 1).to_list(100)
    for link in links:
        link["_id"] = str(link["_id"])
    return links