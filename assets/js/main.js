const menuBtn = document.querySelector(".header__navMenuBtn");
const sideNav = document.querySelector(".header__navBtnBurger");

let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});
