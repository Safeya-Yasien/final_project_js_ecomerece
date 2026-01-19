// Register Form Submission Handler
var registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // 1. Get Values
  var username = document.getElementById("username").value;
  var emailValue = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var role = document.getElementById("role").value;

  // 2. Get Error Elements
  var usernameError = document.getElementById("usernameError");
  var emailError = document.getElementById("emailError");
  var passwordError = document.getElementById("passwordError");

  // 3. Reset Errors (Clears previous messages)
  usernameError.innerHTML = "";
  emailError.innerHTML = "";
  passwordError.innerHTML = "";

  // 4. Validation Checks
  var isValid = true;

  if (!validateUsername(username)) {
    usernameError.innerHTML = "Invalid Username. Use letters/numbers only.";
    isValid = false;
  }

  if (!ValidateEmail(emailValue)) {
    emailError.innerHTML = "Please enter a valid @gmail.com address.";
    isValid = false;
  }

  if (!PasswordValidation(password)) {
    passwordError.innerHTML =
      "Invalid Password. Must be 8-15 characters, include Uppercase, Lowercase, Digit, and Special Character.";
    isValid = false;
  }

  // 5. Final Submission
  if (isValid) {
    const userData = {
      username: username,
      password: password, // Note: In real apps, never store plain text passwords!
      role: role,
    };

    localStorage.setItem(username, JSON.stringify(userData));
    window.location.href = "login.html";
  }
});

// --- Validation Functions ---

function validateUsername(username) {
  // Simple: Letters and numbers, 3-15 chars
  return /^[a-zA-Z0-9]{3,15}$/.test(username);
}

function ValidateEmail(email) {
  // Simplified Gmail pattern
  // Requirements: characters + @gmail.com
  return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
}

function PasswordValidation(password) {
  // Your requested strong pattern
  var passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
  return passwordRegex.test(password);
}
