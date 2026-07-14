// ========================================
// SixMultPhare Education
// Login Script
// ========================================

import { auth } from "./firebase.js";

import {
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

// =============================
// Show / Hide Password
// =============================

const passwordInput = document.getElementById("password");
const togglePassword = document.querySelector(".toggle-password");

if (togglePassword) {

    togglePassword.addEventListener("click", () => {

        if (passwordInput.type === "password") {

            passwordInput.type = "text";
            togglePassword.setAttribute("name", "eye-off-outline");

        } else {

            passwordInput.type = "password";
            togglePassword.setAttribute("name", "eye-outline");

        }

    });

}

// =============================
// Login
// =============================

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value;

    try {

        await signInWithEmailAndPassword(auth, email, password);

        alert("Welcome to SixMultPhare Education!");

        window.location.href = "dashboard.html";

    } catch (error) {

        alert(error.message);

    }

});
