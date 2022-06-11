const menuBtn = document.querySelector(".header__navMenuBtn");
const sideNav = document.querySelector(".header__navBtnBurger");
const dropdown = document.querySelector(".dropdown");
const dropdownFeatures = document.querySelector(".dropdownFeatures");
const dropdownCompagny = document.querySelector(".dropdownCompagny");
let img = document.querySelector(".down");

let menuOpen = false;

function showMenu() {
  dropdown.classList.toggle("show");
}
function showFeatures() {
  dropdownFeatures.classList.toggle("show");

  if (img.classList == "down") {
    img.classList = "up";
  } else {
    img.classList = "down";
  }
}

function showCompagny() {
  dropdownCompagny.classList.toggle("show");
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
