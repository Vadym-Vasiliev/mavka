const btn = document.querySelector(".header-content__burger");
const menu = document.querySelector(".header-content__menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("header-content__burger--active");
  menu.classList.toggle("header-content__menu--active");
  document.body.classList.toggle("menu-header--active");
});
