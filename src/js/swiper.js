import Swiper from "swiper";

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  rewind: true,
  pagination: { el: ".swiper-pagination" },
});
