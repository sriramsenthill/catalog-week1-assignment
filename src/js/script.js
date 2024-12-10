const navEl = document.querySelector(".nav");
const hamburgerToggleEl = document.querySelector(".nav__hamburger-menu");

hamburgerToggleEl.addEventListener("click", () => {
  navEl.classList.toggle("nav--hamburger-active");
});
