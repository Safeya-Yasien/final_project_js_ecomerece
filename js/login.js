// Get the login form element
var loginForm = document.getElementById("loginForm");

// Get the email and password input fields
var emailTxt = document.getElementById("email");
var passwordTxt = document.getElementById("password");
console.log(emailTxt);

var data = JSON.parse(localStorage.getItem("usernameInput.value"));
// console.log(data.email);
// console.log(data.password);
// console.log(data.role);

//  Get error display elements
var passwordError = document.getElementById("passwordError");
var emailError = document.getElementById("emailError");

// Add an event listener to handle form submission
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var validatedEmail = ValidateEmail(emailTxt.value);
  var validatedPassword = PasswordValidation(passwordTxt.value);

  const userRole = data.role.trim().toLowerCase();
  console.log("role from login", userRole);

  if (validatedEmail && validatedPassword) {
    if (userRole == "user") {
      window.location.href = "user.html";
    } else if (userRole == "admin") {
      window.location.href = "admin.html";
    }
  }
});

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
