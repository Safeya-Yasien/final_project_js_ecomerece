const isLoggedIn = localStorage.getItem("isLoggedIn");
if (!isLoggedIn) {
  window.location.href = "../login.html";
}

const logoutBtn = document.getElementsByClassName("logout-btn")[0];

logoutBtn.addEventListener("click", function () {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
});
