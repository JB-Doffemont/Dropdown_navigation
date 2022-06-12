const menuBtn = document.querySelector(".header__navMenuBtn");
const sideNav = document.querySelector(".header__navBtnBurger");
const dropdown = document.querySelector(".dropdown");
const dropdownFeatures = document.querySelector(".dropdownFeatures");
const dropdownCompagny = document.querySelector(".dropdownCompagny");
let imgFeatures = document.querySelector("#imgFeatures");
let imgCompagny = document.querySelector("#imgCompagny");
let container = document.querySelector(".container");

let menuOpen = false;

function showMenu() {
  dropdown.classList.toggle("show");
  container.classList.toggle("overlay");
}
function showFeatures() {
  dropdownFeatures.classList.toggle("show");

  if (imgFeatures.classList == "down") {
    imgFeatures.classList = "up";
  } else {
    imgFeatures.classList = "down";
  }
}

function showCompagny() {
  dropdownCompagny.classList.toggle("show");

  if (imgCompagny.classList == "down") {
    imgCompagny.classList = "up";
  } else {
    imgCompagny.classList = "down";
  }
}

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});
