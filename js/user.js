// Handle Logout Functionality
var logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", function () {
  var item = localStorage.removeItem("userData");
  console.log(item);
  window.location.href = "login.html";
});
