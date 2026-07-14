// ===========================================
// SixMultPhare Education
// Registration Script
// Version 1.0.0
// ===========================================

import { auth, db } from "./firebase.js";

import {
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

import {
    doc,
    setDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const role = document.getElementById("role").value;
    const password = document.getElementById("password").value;

    try {

        // Create Firebase Authentication account
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        const user = userCredential.user;

        // Save profile in Firestore
        await setDoc(doc(db, "users", user.uid), {

            uid: user.uid,

            fullname: fullname,

            email: email,

            phone: phone,

            role: role,

            status: "active",

            createdAt: serverTimestamp()

        });

        alert("🎉 Account created successfully!");

        window.location.href = "login.html";

    }

    catch(error){

        alert(error.message);

        console.error(error);

    }

});
