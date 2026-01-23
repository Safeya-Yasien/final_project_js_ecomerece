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

//  function to update status
function updateStatus(inputEl, errorEl, isValid, errorMsg) {
  if (inputEl.value === "") {
    errorEl.innerHTML = "this field is required";
    inputEl.style.borderColor = "red";
    errorEl.style.color = "red";
  } else if (isValid) {
    errorEl.innerHTML = "Valid";
    errorEl.style.color = "green";
    inputEl.style.borderColor = "green";
  } else {
    errorEl.innerHTML = errorMsg;
    errorEl.style.color = "red";
    inputEl.style.borderColor = "red";
  }
}
