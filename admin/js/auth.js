const isLoggedIn = localStorage.getItem("isLoggedIn");
if (!isLoggedIn) {
  window.location.href = "../login.html";
}

const logoutBtn = document.querySelector(".logout-btn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    const confirmMessage = confirm("Are you sure you want to logout?");
    if (confirmMessage) {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("user");
      window.location.href = "../login.html";
    }
  });
}
