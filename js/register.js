// Register Form Submission Handler
var registerForm = document.getElementById("registerForm");

// 2. Get Error Elements
var usernameError = document.getElementById("usernameError");
var emailError = document.getElementById("emailError");
var passwordError = document.getElementById("passwordError");

// 4. Validation Checks
var isValid = true;

// 1. Get Values
var usernameInput = document.getElementById("username");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");

// Dynamic Username
["input", "blur"].forEach((event) => {
  usernameInput.addEventListener(event, function () {
    const isValid = validateUsername(this.value);
    updateStatus(
      this,
      usernameError,
      isValid,
      "Use 3-15 letters/numbers only.",
    );
  });
});

// Dynamic Email
["input", "blur"].forEach((event) => {
  emailInput.addEventListener(event, function () {
    const isValidFormat = ValidateEmail(this.value);
    const isExisting = checkExistEmail(this.value);

    if (emailInput.value === "") {
      updateStatus(this, emailError, false, "");
    } else if (!isValidFormat) {
      updateStatus(
        this,
        emailError,
        false,
        "Enter a valid @gmail.com address.",
      );
    } else if (isExisting) {
      updateStatus(this, emailError, false, "Email already exists.");
    } else {
      updateStatus(this, emailError, true, "Valid");
    }
  });
});

// Check Existing Email
function checkExistEmail(email) {
  let user = JSON.parse(localStorage.getItem("userData")) || [];
  if (user && user.email === email) {
    return true;
  }
  return false;
}
// Dynamic Password
["input", "blur"].forEach((event) => {
  passwordInput.addEventListener(event, function () {
    const isValid = PasswordValidation(this.value);
    updateStatus(
      this,
      passwordError,
      isValid,
      "8-15 chars, Uppercase, Lowercase, Digit, & Special Char.",
    );
  });
});

// 3. Form Submission Event
registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Re-validate everything one last time before saving
  var isUserValid = validateUsername(usernameInput.value);
  var isEmailValid = ValidateEmail(emailInput.value);
  var isPassValid = PasswordValidation(passwordInput.value);

  if (
    isUserValid &&
    isEmailValid &&
    isPassValid &&
    !checkExistEmail(emailInput.value)
  ) {
    // console.log("role in register", roleInput.value);
    const userData = {
      username: usernameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };
    // Get existing users array or create new one
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Add new user to array
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = "login.html";
  }
});
