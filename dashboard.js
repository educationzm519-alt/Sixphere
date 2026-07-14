// ===========================================
// SixMultPhare Education
// Dashboard JavaScript
// Version 1.0.0
// ===========================================

import { auth } from "./firebase.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

// ================================
// Wait for page to load
// ================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Dashboard Loaded");

    initializeDashboard();

});

// ================================
// Initialize Dashboard
// ================================

function initializeDashboard(){

    checkUser();

    setupSidebar();

    setupLogout();

}

// ================================
// Check Logged In User
// ================================

function checkUser(){

    onAuthStateChanged(auth,(user)=>{

        if(user){

            console.log("Logged in:",user.email);

            const title=document.querySelector("header h1");

            if(title){

                title.innerHTML=`Welcome, ${user.email}`;

            }

        }

        else{

            window.location.href="login.html";

        }

    });

}

// ================================
// Sidebar
// ================================

function setupSidebar(){

    const sidebar=document.querySelector(".sidebar");

    const logo=document.querySelector(".logo");

    if(sidebar && logo){

        logo.style.cursor="pointer";

        logo.title="Toggle Sidebar";

        logo.addEventListener("click",()=>{

            sidebar.classList.toggle("collapsed");

        });

    }

}

// ================================
// Logout
// ================================

function setupLogout(){

    const logoutLink=document.querySelector('a[href="index.html"]');

    if(!logoutLink) return;

    logoutLink.addEventListener("click",async(e)=>{

        e.preventDefault();

        try{

            await signOut(auth);

            alert("Logged out successfully.");

            window.location.href="login.html";

        }

        catch(error){

            alert(error.message);

        }

    });

}

console.log("✅ Dashboard Ready");
