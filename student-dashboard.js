// ==========================================
// SixMultPhare Education
// Student Dashboard
// ==========================================

import { auth } from "./firebase.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

// ===============================
// Check if user is logged in
// ===============================

onAuthStateChanged(auth, (user) => {

    if (user) {

        console.log("Student Logged In:", user.email);

        const welcome = document.getElementById("studentName");

        if (welcome) {

            welcome.innerHTML = user.email;

        }

    } else {

        window.location.href = "login.html";

    }

});

// ===============================
// Logout
// ===============================

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", async () => {

        try {

            await signOut(auth);

            alert("Logged out successfully.");

            window.location.href = "login.html";

        }

        catch (error) {

            alert(error.message);

        }

    });

}

// ===============================
// Dashboard Statistics
// ===============================

const dashboardData = {

    courses: 6,

    assignments: 3,

    notifications: 5,

    results: 12

};

console.log("Dashboard Loaded", dashboardData);

// ===============================
// Future Modules
// ===============================

// Load Courses

// Load Timetable

// Load Results

// Load Attendance

// Load Notifications

// Load Messages

// Load Certificates
