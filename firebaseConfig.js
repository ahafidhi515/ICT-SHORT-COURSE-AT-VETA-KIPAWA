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

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
