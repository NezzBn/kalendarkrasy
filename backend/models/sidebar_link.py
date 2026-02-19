from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime


class SidebarItem(BaseModel):
    text: str
    link: str


class SidebarLink(BaseModel):
    id: Optional[str] = Field(None, alias="_id")
    title: str
    items: List[SidebarItem]
    order: int = 0
    created_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        populate_by_name = True


class SidebarLinkCreate(BaseModel):
    title: str
    items: List[SidebarItem]
    order: int = 0