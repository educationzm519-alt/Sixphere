// ==========================================
// SixMultPhare Education
// Timetable Module
// Version 1.0.0
// ==========================================

import { auth } from "./firebase.js";

import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

// ==========================================
// Check Authentication
// ==========================================

onAuthStateChanged(auth, (user) => {

    if (!user) {

        window.location.href = "login.html";

    } else {

        console.log("Welcome:", user.email);

    }

});

// ==========================================
// Search Timetable
// ==========================================

const searchInput = document.getElementById("searchSubject");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const value = searchInput.value.toLowerCase();

        const rows = document.querySelectorAll("tbody tr");

        rows.forEach(row => {

            const text = row.textContent.toLowerCase();

            if (text.includes(value)) {

                row.style.display = "";

            } else {

                row.style.display = "none";

            }

        });

    });

}

// ==========================================
// Future Firebase Integration
// ==========================================

// Load timetable from Firestore

async function loadTimetable() {

    console.log("Loading timetable...");

    // Future:
    // Read timetable collection
    // Display subjects dynamically

}

loadTimetable();

// ==========================================
// Ready
// ==========================================

console.log("✅ Timetable Module Ready");
