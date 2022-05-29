const menuBtn = document.querySelector(".header__navMenuBtn");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  console.log("toto");
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});
