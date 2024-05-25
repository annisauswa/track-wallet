import uvicorn
from fastapi import APIRouter, FastAPI, Request, Path
from fastapi import File, UploadFile, FastAPI
from fastapi.responses import HTMLResponse, Response
from fastapi.templating import Jinja2Templates
# import firebase_admin
# from firebase_admin import credentials
# from firebase_admin import auth
import pickle
import uvicorn
import lib.track_wallet as tw 

description = """
Track Wallet for a smarter expense management.
"""

app = FastAPI(title="Track Wallet API",
              description=description,
              version="0.1.0"
)
templates = Jinja2Templates(directory="templates")

# cred = credentials.Certificate("serviceAccountKey.json")
# firebase_admin.initialize_app(cred)

@app.get("/")
async def root():
    return {"message": "API Track Wallet"}

@app.post("/signup")
async def signup(email: str, password: str):
    try:
        user = auth.create_user(email=email, password=password)
        return {"message": "User created successfully"}
    except:
        return {"message": "User creation failed"}

@app.post("/category")
async def predict_category(data: str):
    data = [data]
    try:
        category = tw.predict_text(data)
        return {"category": category}
    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000, reload=True)