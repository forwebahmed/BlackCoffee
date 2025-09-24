document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");
  if (!form) return; // no form found on this page

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop actual submission for validation

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const emailInput = document.getElementById("email"); // may not exist

    const username = usernameInput ? usernameInput.value.trim() : "";
    const password = passwordInput ? passwordInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";

    // If email exists (signup form), validate it
    if (emailInput) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        alert("Please enter a valid email.");
        return;
      }
    }

    // Username validation
    if (!username || username.length < 3) {
      alert("Username must be at least 3 characters long.");
      return;
    }

    // Password validation
    if (!password || password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    alert("Form submitted successfully!");
    this.submit(); // now allow submission
  });
});
