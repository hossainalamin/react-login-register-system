// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPZYx0E7ugN3jS-Q_FRXf7s_mRhpgD4ME",
  authDomain: "react-login-register-system.firebaseapp.com",
  projectId: "react-login-register-system",
  storageBucket: "react-login-register-system.appspot.com",
  messagingSenderId: "811668944187",
  appId: "1:811668944187:web:06731885bdaab72a05731e",
  measurementId: "G-3C9P7V6D79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;