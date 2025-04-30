const rootElem = document.documentElement;
const navbar = document.querySelector(".navbar");
const themeBtn = document.querySelector(".theme__container");
const darkIcon = document.querySelector(".theme-icon__moon");
const lightIcon = document.querySelector(".theme-icon__sun");

const goTopBtn = document.querySelector(".go-top-btn");

// Sticky navbar------------------
window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    navbar.classList.add("sticky");
    goTopBtn.classList.add("show");
  } else {
    navbar.classList.remove("sticky");
    goTopBtn.classList.remove("show");
  }
});

// Dark mode ----------------------
function switchTheme() {
  let htmlTheme = rootElem.getAttribute("data-bs-theme"),
    newTheme;
  newTheme = htmlTheme === "light" ? "dark" : "light";
  rootElem.setAttribute("data-bs-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  if (newTheme === "dark") {
    lightIcon.classList.add("show-icon");
    darkIcon.classList.remove("show-icon");
  } else {
    lightIcon.classList.remove("show-icon");
    darkIcon.classList.add("show-icon");
  }
}

themeBtn.addEventListener("click", switchTheme);

// Go top Btn
goTopBtn.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});

// Active navbar Links
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const navbarNav = document.querySelector(".navbar-nav");
const windowPathName = window.location.pathname;

navLinks.forEach((nav) => {
  const navLinksPathName = new URL(nav.href).pathname;
  if (windowPathName === navLinksPathName || (windowPathName === "/index.html" && navLinksPathName === "/")) {
    nav.classList.add("active");
  }
});

// Implement Local Storage Theme
function getStorageTheme() {
  const storageTheme = localStorage.getItem("theme");
  if (storageTheme) {
    rootElem.setAttribute("data-bs-theme", storageTheme);
  } else {
    rootElem.setAttribute("data-bs-theme", "light");
  }
  if (storageTheme == "dark") {
    lightIcon.classList.add("show-icon");
    darkIcon.classList.remove("show-icon");
  } else {
    lightIcon.classList.remove("show-icon");
    darkIcon.classList.add("show-icon");
  }
}
window.addEventListener("DOMContentLoaded", getStorageTheme);
