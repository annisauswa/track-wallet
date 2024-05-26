import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDruGRxxOKcMr9SJw2Aq36rOtnpwbIgNJU",
  authDomain: "contoh-39a80.firebaseapp.com",
  projectId: "contoh-39a80",
  storageBucket: "contoh-39a80.appspot.com",
  messagingSenderId: "28671407290",
  appId: "1:28671407290:web:bb6c9804e63e7d20407e83"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider}
