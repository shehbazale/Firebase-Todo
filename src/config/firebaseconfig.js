// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCruLR-zcc12h1jmucnD1fWjhrQjjqQ0qU",
  authDomain: "fir-app-6d211.firebaseapp.com",
  databaseURL: "https://fir-app-6d211.firebaseio.com",
  projectId: "fir-app-6d211",
  storageBucket: "fir-app-6d211.appspot.com",
  messagingSenderId: "676967963366",
  appId: "1:676967963366:web:73738ea66c8f2a8955f927",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
