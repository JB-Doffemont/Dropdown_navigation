const menuBtn = document.querySelector(".header__navMenuBtn");
const sideNav = document.querySelector(".header__navBtnBurger");
const dropdown = document.querySelector(".dropdown");

let menuOpen = false;

function showMenu() {
  dropdown.classList.toggle("show");
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
