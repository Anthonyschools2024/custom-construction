// Import the functions you need from the SDKs you need
// Using CDN links so this runs in the browser without a build step
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiWqdCFY3N3sMG0hPDXHBvvZTSaeKqVNE",
  authDomain: "custom-construction-2025.firebaseapp.com",
  databaseURL: "https://custom-construction-2025-default-rtdb.firebaseio.com",
  projectId: "custom-construction-2025",
  storageBucket: "custom-construction-2025.firebasestorage.app",
  messagingSenderId: "1011209975106",
  appId: "1:1011209975106:web:223538f2441047560184db",
  measurementId: "G-HJ075RPVN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (since it was in your snippet)
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and export it so index.html can use it
export const db = getFirestore(app);

// Log to console to confirm this file ran
console.log("Firebase initialized successfully with Custom Construction 2025 keys!");
