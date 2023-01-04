import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCnswxwGAsnZoEaJySt6FHuRFIxUSeF1lI",
  authDomain: "company-profile-36e48.firebaseapp.com",
  databaseURL: "https://company-profile-36e48-default-rtdb.firebaseio.com",
  projectId: "company-profile-36e48",
  storageBucket: "company-profile-36e48.appspot.com",
  messagingSenderId: "595328263656",
  appId: "1:595328263656:web:04bea0c386e205f964705d"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
