import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDaxgJGwu9rZ26kc0mRpXiMK8aE_xZW8CU",
  authDomain: "ecommerce-react-7bf18.firebaseapp.com",
  projectId: "ecommerce-react-7bf18",
  storageBucket: "ecommerce-react-7bf18.appspot.com",
  messagingSenderId: "185656403611",
  appId: "1:185656403611:web:1bca26a629ad91cbd7c83e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)