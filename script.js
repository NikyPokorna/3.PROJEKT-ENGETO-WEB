// Menu
let menuIcon = document.querySelector(".menu-icon");
let menuList = document.querySelector("nav");
let hamburgerIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.add("fa-circle-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    menuList.style.display = "block";
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-circle-xmark");
    menuList.style.display = "none";
  }
});

// Tlačítko scroll-up
const scrollUp = document.querySelector(".scroll-up-div");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    scrollUp.style.display = "block";
  } else {
    scrollUp.style.display = "none";
  }
});

// Formulář
const formular = document.querySelector("form");
const fullName = document.querySelector(".fullName");
const email = document.querySelector(".email");
const destination = document.querySelector(".destination");
const heslo1 = document.querySelector(".heslo1");
const heslo2 = document.querySelector(".heslo2");

const notName = document.querySelector(".notificationName");
const notEmail = document.querySelector(".notificationEmail");
const notDestination = document.querySelector(".notificationDestination");
const notHeslo1 = document.querySelector(".notificationHeslo1");
const notHeslo2 = document.querySelector(".notificationHeslo2");
const notHesloHlaska = document.querySelector(".notificationHesloHlaska");

formular.addEventListener("submit", (event) => {
  event.preventDefault();
  let valid = true;

  if (fullName.value === "") {
    notName.style.display = "inline";
    valid = false;
  } else {
    notName.style.display = "none";
  }

  if (email.value === "") {
    notEmail.style.display = "inline";
    valid = false;
  } else {
    notEmail.style.display = "none";
  }

  if (destination.value === "") {
    notDestination.style.display = "inline";
    valid = false;
  } else {
    notDestination.style.display = "none";
  }

  if (heslo1.value === "") {
    notHeslo1.style.display = "inline";
    valid = false;
  } else {
    notHeslo1.style.display = "none";
  }

  if (heslo2.value === "") {
    notHeslo2.style.display = "inline";
    valid = false;
  } else {
    notHeslo2.style.display = "none";
  }

  if (heslo1.value !== heslo2.value) {
    notHesloHlaska.style.display = "block";
    valid = false;
  } else {
    notHesloHlaska.style.display = "none";
  }
});

// Light a dark mode
const switcher = document.querySelector(".switch input");
const themeText = document.querySelector(".switcher-description p");
const themeIcon = document.querySelector(".switcher-description i");

const darkMode = () => {
  themeText.textContent = "Dark Mode";
  themeIcon.classList.replace("fa-sun", "fa-moon");
};

const lightMode = () => {
  themeText.textContent = "Light Mode";
  themeIcon.classList.replace("fa-moon", "fa-sun");
};

const switchTheme = (event) => {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    lightMode();
  }
};

switcher.addEventListener("change", switchTheme);
