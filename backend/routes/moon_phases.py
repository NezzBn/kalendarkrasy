from fastapi import APIRouter, HTTPException
from typing import List
from models.moon_phase import MoonPhase, MoonPhaseCreate
from motor.motor_asyncio import AsyncIOMotorClient
import os
from bson import ObjectId
from datetime import datetime

router = APIRouter()

# Get database
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]
moon_phases_collection = db.moon_phases


@router.get("/moon-phases", response_model=List[MoonPhase])
async def get_moon_phases():
    """Get all moon phases"""
    phases = await moon_phases_collection.find().sort("created_at", 1).to_list(100)
    for phase in phases:
        phase["_id"] = str(phase["_id"])
    return phases


@router.post("/moon-phases", response_model=MoonPhase)
async def create_moon_phase(phase: MoonPhaseCreate):
    """Create new moon phase"""
    phase_dict = phase.dict()
    phase_dict["created_at"] = datetime.utcnow()
    
    result = await moon_phases_collection.insert_one(phase_dict)
    created_phase = await moon_phases_collection.find_one({"_id": result.inserted_id})
    created_phase["_id"] = str(created_phase["_id"])
    return created_phase


@router.delete("/moon-phases/{phase_id}")
async def delete_moon_phase(phase_id: str):
    """Delete moon phase"""
    try:
        result = await moon_phases_collection.delete_one({"_id": ObjectId(phase_id)})
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="Moon phase not found")
        return {"success": True}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))