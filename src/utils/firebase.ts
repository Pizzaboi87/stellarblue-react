import { getDatabase, onValue, ref } from "firebase/database";
import { initializeApp } from "firebase/app";
import { TimeSerie } from "../types/types";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHnPJi6Q2HBg7v-uqObEW9--02zTNGqus",
  authDomain: "stellarblue-38de4.firebaseapp.com",
  databaseURL:
    "https://stellarblue-38de4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "stellarblue-38de4",
  storageBucket: "stellarblue-38de4.appspot.com",
  messagingSenderId: "797375544560",
  appId: "1:797375544560:web:804ca1756fad028b5d5635",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

// Fetch data from Firebase
export const getData = () => {
  const dataRef = ref(database, "timeSeries");
  return new Promise<TimeSerie[]>((resolve, reject) => {
    onValue(
      dataRef,
      (snapshot) => {
        const data = snapshot.val();
        resolve(data);
      },
      (error) => {
        reject(error);
      }
    );
  });
};
