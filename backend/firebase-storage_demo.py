import pyrebase

firebaseConfig = {
    "apiKey": "AIzaSyAozQMOEoepa_BeeYTcByCalcLTwHjPBPo",
    "authDomain": "track-wallet-496c8.firebaseapp.com",
    "projectId": "track-wallet-496c8",
    "storageBucket": "track-wallet-496c8.appspot.com",
    "messagingSenderId": "37418860531",
    "appId": "1:37418860531:web:0dd1a46eba0d43918e5c86",
    "measurementId": "G-04RM77MCBN",
    "databaseURL": ""
}

firebase = pyrebase.initialize_app(firebaseConfig)
# storage
storage = firebase.storage()

# uploading file to storage
def upload_file():
    file = input("Enter the file path: ")
    cloudfilename = input("Enter the name of the file on cloud storage: ")
    storage.child(cloudfilename).put(file)
    print("File uploaded successfully")

upload_file()