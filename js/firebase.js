// ==============================
// SixMultPhare Education
// Firebase Configuration
// ==============================

// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-storage.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPOb6MB6EhKOO1HzxYndE4bYgnmAYJffY",
    authDomain: "my-ecz-app.firebaseapp.com",
    projectId: "my-ecz-app",
    storageBucket: "my-ecz-app.firebasestorage.app",
    messagingSenderId: "37868373162",
    appId: "1:37868373162:web:1e90847733ec1be3cf3cd3",
    measurementId: "G-7VXQ2BLQNK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Services
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export services
export { app, analytics, auth, db, storage };

console.log("✅ SixMultPhare Education connected to Firebase.");