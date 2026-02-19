from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime


class MoonPhase(BaseModel):
    id: Optional[str] = Field(None, alias="_id")
    date: str
    phase: str
    created_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        populate_by_name = True
        json_schema_extra = {
            "example": {
                "date": "19 лютого",
                "phase": "Повний місяць"
            }
        }


class MoonPhaseCreate(BaseModel):
    date: str
    phase: str