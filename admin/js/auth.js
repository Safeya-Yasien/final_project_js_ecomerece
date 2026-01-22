const logoutBtn = document.querySelector(".logout-btn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    const confirmMessage = confirm("Are you sure you want to logout?");
    if (confirmMessage) {
      // localStorage.clear();
      // window.location.reload();
      console.log("logout");
    }
  });
}
