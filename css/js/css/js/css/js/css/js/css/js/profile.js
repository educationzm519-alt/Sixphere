// ==========================================
// SixMultPhare Education
// Student Profile
// Version 1.0.0
// ==========================================

import { auth, db } from "./firebase.js";

import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

import {
    doc,
    getDoc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

// ==========================================
// Authentication
// ==========================================

onAuthStateChanged(auth, async (user) => {

    if (!user) {

        window.location.href = "login.html";
        return;

    }

    document.getElementById("email").value = user.email;

    try {

        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {

            const data = userSnap.data();

            document.getElementById("fullname").value = data.fullname || "";
            document.getElementById("phone").value = data.phone || "";
            document.getElementById("school").value = data.school || "";
            document.getElementById("grade").value = data.grade || "";

        }

    } catch (error) {

        console.error(error);

    }

});

// ==========================================
// Save Profile
// ==========================================

const profileForm = document.getElementById("profileForm");

profileForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const user = auth.currentUser;

    if (!user) return;

    try {

        await updateDoc(doc(db, "users", user.uid), {

            fullname: document.getElementById("fullname").value,
            phone: document.getElementById("phone").value,
            school: document.getElementById("school").value,
            grade: document.getElementById("grade").value

        });

        alert("✅ Profile updated successfully!");

    } catch (error) {

        alert(error.message);

    }

});

console.log("Profile Module Ready");
