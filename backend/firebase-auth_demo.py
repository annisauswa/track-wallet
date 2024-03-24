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
auth = firebase.auth()

def signup():
    print("Signing up...")
    email = input("Enter your email: ")
    password = input("Enter your password: ")
    try:
        user = auth.create_user_with_email_and_password(email, password)
        print("User created successfully")
        ask = input("Do you want to login?[y/n]: ")
        if ask == 'y':
            login()
    except:
        print("User creation failed.")

def login():
    print("Logging in...")
    email = input("Enter your email: ")
    password = input("Enter your password: ")
    try:
        login = auth.sign_in_with_email_and_password(email, password)
        print("Successfully logged in")
        print(auth.get_account_info(login['idToken']))
    except:
        print("Invalid email or password")

ans = input("Do you have an account?[y/n]: ")
if ans == 'y':
    login()
elif ans == 'n':
    signup()