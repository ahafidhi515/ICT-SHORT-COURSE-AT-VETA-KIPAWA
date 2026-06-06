import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcEqQTpmnly9aIMnPjyATlnUPVMhMG0ZQ",
  authDomain: "ict-shortcourse-app.firebaseapp.com",
  projectId: "ict-shortcourse-app",
  storageBucket: "ict-shortcourse-app.firebasestorage.app",
  messagingSenderId: "734361281747",
  appId: "1:734361281747:web:ce6c3e4f3db8eea7022026",
};

// initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore database (hapa tutahifadhi notes)
export const db = getFirestore(app);
