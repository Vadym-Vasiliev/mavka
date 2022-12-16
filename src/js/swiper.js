import Swiper from "swiper";

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: { el: ".swiper__pagin", clickable: true },
});
