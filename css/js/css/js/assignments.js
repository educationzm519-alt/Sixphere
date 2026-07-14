// ==========================================
// SixMultPhare Education
// Assignments Module
// Version 1.0.0
// ==========================================

import { auth, db } from "./firebase.js";

import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

// ===============================
// Authentication Check
// ===============================

onAuthStateChanged(auth, (user) => {

    if (!user) {

        window.location.href = "login.html";

    } else {

        console.log("Welcome:", user.email);

        loadAssignments();

    }

});

// ===============================
// Load Assignments
// ===============================

async function loadAssignments() {

    try {

        const snapshot = await getDocs(collection(db, "assignments"));

        console.log("Assignments:", snapshot.size);

    } catch (error) {

        console.error(error);

    }

}

// ===============================
// Search Assignments
// ===============================

const search = document.getElementById("searchAssignment");

if (search) {

    search.addEventListener("keyup", () => {

        const value = search.value.toLowerCase();

        const cards = document.querySelectorAll(".assignment-card");

        cards.forEach(card => {

            const title = card.querySelector("h3").textContent.toLowerCase();

            card.style.display = title.includes(value) ? "block" : "none";

        });

    });

}

// ===============================
// Upload Button
// ===============================

const buttons = document.querySelectorAll(".assignment-card button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        alert("Assignment upload feature will be connected to Firebase Storage.");

    });

});

console.log("Assignments Module Ready");
