const cookieBtn = document.getElementById("cookie-btn");
const cookieCancelBtn = document.getElementById("cookie-cancel");
const cookieContainer = document.getElementById("cookie-container");
const cookieCheck = document.getElementById("cookie-check");
const cookieSave = document.cookie.includes("userName");
cookieCancelBtn.addEventListener("click", () => {
  cookieContainer.classList.remove("slideUp");
  cookieContainer.classList.add("slideDown");
  setTimeout(() => {
    cookieContainer.style.display = "none";
  }, 500);
});

document.addEventListener("DOMContentLoaded", () => {
  if (!cookieSave) {
    setTimeout(() => {
      cookieContainer.style.display = "block";
      cookieContainer.classList.add("slideUp");
    }, 1000);
    cookieBtn.addEventListener("click", () => {
      cookieContainer.classList.remove("slideUp");
      cookieContainer.classList.add("slideDown");
      document.cookie =
        "userName=JohnDoe; expires=Fri, 05 Apr 2026 14:43:00 GMT; path=/";
      cookieCheck.innerHTML =
        "Now refresh the page to see the cookie set in the application tab.";
      setTimeout(() => {
        cookieContainer.style.display = "none";
      }, 500);
    });
    return;
  } else {
    cookieContainer.style.display = "none";
  }
});

if (cookieSave) {
  cookieCheck.innerHTML = "Your cookie is now set";
} else {
  cookieCheck.innerHTML = "Your cookie consent is not set yet.";
}
