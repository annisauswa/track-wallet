import pickle
from sklearn.feature_extraction.text import CountVectorizer, TfidfTransformer
import pandas as pd

import re
import nltk
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
from nltk.tokenize import word_tokenize

nltk.download('punkt')
nltk.download('wordnet')
nltk.download('stopwords')

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