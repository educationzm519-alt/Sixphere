// ======================================
// SixMultPhare Education
// Main JavaScript
// Version: 1.0.0
// ======================================

console.log("🚀 SixMultPhare Education Loaded");

// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    console.log("✅ DOM Ready");

    // Login button
    const loginBtn = document.querySelector(".btn-primary");

    if (loginBtn) {
        loginBtn.addEventListener("click", () => {
            console.log("Opening Login Page...");
        });
    }

    // Register button
    const registerBtn = document.querySelector(".btn-secondary");

    if (registerBtn) {
        registerBtn.addEventListener("click", () => {
            console.log("Opening Register Page...");
        });
    }

});