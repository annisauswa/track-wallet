import uvicorn
from fastapi import APIRouter, FastAPI, Request, Path
from fastapi import File, UploadFile, FastAPI
from fastapi.responses import HTMLResponse, Response
from fastapi.templating import Jinja2Templates
import pickle
import uvicorn
import lib.track_wallet as tw 
from azure.cognitiveservices.vision.computervision import ComputerVisionClient
from azure.cognitiveservices.vision.computervision.models import VisualFeatureTypes
from msrest.authentication import CognitiveServicesCredentials
from azure.cognitiveservices.vision.computervision.models import OperationStatusCodes
import time
import os
import json
from io import BytesIO

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
    

with open(".\settings.json", "r") as jsonfile:
    settings = json.load(jsonfile)
    print(settings)
region = settings["ACCOUNT_REGION"]
key = settings["ACCOUNT_KEY"]
credentials = CognitiveServicesCredentials(key)
client = ComputerVisionClient(
    endpoint="https://ocr-track-wallet.cognitiveservices.azure.com/",
    credentials=credentials
)

@app.post("/extract")
async def extract_text(image: UploadFile = File(...)):
    try:
        image_data = await image.read()
        image_stream = BytesIO(image_data)
        rawHttpResponse = client.read_in_stream(image_stream, language="id", raw=True)
        operation_location = rawHttpResponse.headers["Operation-Location"]
        id_location = len(operation_location) - 36
        operation_id = operation_location[id_location:]

        while True:
            result = client.get_read_result(operation_id)
            if result.status not in ['notStarted', 'running']:
                break
            time.sleep(1)

        result = tw.scan_receipt(result)
        return {"result": result}
    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000, reload=True)