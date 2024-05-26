import pickle
from sklearn.feature_extraction.text import CountVectorizer, TfidfTransformer
import pandas as pd
from azure.cognitiveservices.vision.computervision import ComputerVisionClient
from azure.cognitiveservices.vision.computervision.models import VisualFeatureTypes
from msrest.authentication import CognitiveServicesCredentials
from azure.cognitiveservices.vision.computervision.models import OperationStatusCodes
import time
import os
import json

import re
import nltk
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
from nltk.tokenize import word_tokenize

# nltk.download('punkt')
# nltk.download('wordnet')
# nltk.download('stopwords')

lemmatizer = WordNetLemmatizer()
stop_words = set(stopwords.words('english'))

def remove_unnecessary_char(text):
    text = re.sub('\n', ' ', text)
    text = re.sub('rt', ' ', text)
    text = re.sub('user', ' ', text)
    text = re.sub('((www\.[^\s]+)|(https?://[^\s]+)|(http?://[^\s]+))', ' ', text)
    text = re.sub('  +', ' ', text)
    return text

def remove_nonaplhanumeric(text):
    text = re.sub("[']", '', text)
    text = re.sub('[^a-zA-Z]+', ' ', text)
    return text

def preprocess(text):
    text = text.lower()
    text = remove_unnecessary_char(text)
    text = remove_nonaplhanumeric(text)
    tokens = [lemmatizer.lemmatize(word, pos='v') for word in word_tokenize(text)]
    return tokens

with open('./model/tfidf_transformer.pkl', 'rb') as f:
    tfidf_transformer = pickle.load(f)
with open("./model/classifierNB.pkl", "rb") as f:
    classifier = pickle.load(f)
# with open('./model/bow_transformer.pkl', 'rb') as f:
#     bow_transformer = pickle.load(f)
df = pd.read_csv('./lib/clean_classification.csv', index_col=0)
bow_transformer = CountVectorizer(analyzer=preprocess).fit(df['Note'])

def predict_text(text):
    text_bow = bow_transformer.transform(text)
    text_tfidf = tfidf_transformer.transform(text_bow)
    category = classifier.predict(text_tfidf)
    return category[0]


# AI SCAN
# with open(".\settings.json", "r") as jsonfile:
#     settings = json.load(jsonfile)
#     print(settings)
# region = settings["ACCOUNT_REGION"]
# key = settings["ACCOUNT_KEY"]
# credentials = CognitiveServicesCredentials(key)
# client = ComputerVisionClient(
#     endpoint="https://ocr-track-wallet.cognitiveservices.azure.com/",
#     credentials=credentials
# )

# def extract_text_from_image(image):
#     rawHttpResponse = client.read_in_stream(image, language="id", raw=True)
#     operation_location = rawHttpResponse.headers["Operation-Location"]
#     id_location = len(operation_location) - 36
#     operation_id = operation_location[id_location:]

#     while True:
#         result = client.get_read_result(operation_id)
#         if result.status not in ['notStarted', 'running']:
#             break
#         time.sleep(1)

#     return result

def extract_text_from_receipt(result):
    receipt_text = ''
    if result.status == OperationStatusCodes.succeeded:
        for line in result.analyze_result.read_results[0].lines:
            # print(line.text)
            receipt_text += line.text + '\n'
    return receipt_text

def extract_items_and_prices(receipt_text):
    items = []
    
    item_pattern = re.compile(r'\.?(.*?)\n')
    price_pattern = re.compile(r'Rp?\.?\s?(\d{1,3}(?:[.,]\d{3})*)')

    item_matches = item_pattern.findall(receipt_text)
    price_matches = price_pattern.findall(receipt_text)

    item_matches = [item for item in item_matches if any(char.isalpha() for char in item)]

    price_matches = [int(price.replace(',', '').replace('.', '')) for price in price_matches]

    for item, price in zip(item_matches, price_matches):
        items = ({'item': item.strip(), 'price': price })
    
    return items

def scan_receipt(result):
    receipt_text = extract_text_from_receipt(result)
    # print(receipt_text)
    items = extract_items_and_prices(receipt_text)
    return items