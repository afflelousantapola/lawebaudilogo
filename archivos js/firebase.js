// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfmqgBNVsQrY2liFeWbYqhVOS9H_yp0h8",
  authDomain: "tutorial-a8470.firebaseapp.com",
  projectId: "tutorial-a8470",
  storageBucket: "tutorial-a8470.appspot.com",
  messagingSenderId: "953753599262",
  appId: "1:953753599262:web:bee7ad289209c95d709d0f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
