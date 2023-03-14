import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCLi_Kr_coxyMRXkHWlLjtbumDoscWTCYg",
  authDomain: "ice-fb9ba.firebaseapp.com",
  projectId: "ice-fb9ba",
  storageBucket: "ice-fb9ba.appspot.com",
  messagingSenderId: "1008435471773",
  appId: "1:1008435471773:web:7380b13e162e86776cbb74",
  measurementId: "G-S8T59T71PK"
}

const app = initializeApp(firebaseConfig);
export default app;
// const analytics = getAnalytics(app);