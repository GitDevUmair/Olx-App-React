import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDivxx-Bak-MvNXxwEjKZxDq7dIc_MfP8E",
  authDomain: "firstproject-19-34bd1.firebaseapp.com",
  projectId: "firstproject-19-34bd1",
  storageBucket: "firstproject-19-34bd1.appspot.com",
  messagingSenderId: "522542515739",
  appId: "1:522542515739:web:e558ebfb8b54d700c59abe",
  measurementId: "G-8KCC5DSNF3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db }
