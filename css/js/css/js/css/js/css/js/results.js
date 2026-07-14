// ==========================================
// SixMultPhare Education
// Results Module
// Version 1.0.0
// ==========================================

import { auth } from "./firebase.js";

import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

// ==========================================
// Authentication
// ==========================================

onAuthStateChanged(auth, (user) => {

    if (!user) {

        window.location.href = "login.html";

    } else {

        console.log("Logged in:", user.email);

        calculateAverage();

    }

});

// ==========================================
// Search Results
// ==========================================

const searchInput = document.getElementById("searchResult");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const value = searchInput.value.toLowerCase();

        const rows = document.querySelectorAll("tbody tr");

        rows.forEach(row => {

            const text = row.textContent.toLowerCase();

            row.style.display = text.includes(value) ? "" : "none";

        });

    });

}

// ==========================================
// Calculate Average
// ==========================================

function calculateAverage() {

    const rows = document.querySelectorAll("tbody tr");

    let total = 0;
    let count = 0;

    rows.forEach(row => {

        const exam = row.children[2].innerText.replace("%","");

        total += Number(exam);

        count++;

    });

    const average = (total / count).toFixed(1);

    console.log("Average Marks:", average + "%");

}

// ==========================================
// Future Firebase Functions
// ==========================================

// Load Results

async function loadResults(){

console.log("Loading Results...");

// Firestore results collection

}

// Download Result Slip

function downloadResult(){

console.log("Download PDF Coming Soon");

}

console.log("Results Module Ready");
