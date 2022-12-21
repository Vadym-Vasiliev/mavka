const cross = document.querySelector(".popup__cross");
const links = document.querySelectorAll(".fonts-list__link");
const popup = document.querySelector("#popup");

cross.addEventListener("click", () => {
  popup.classList.remove("popup--visible");
  document.body.classList.remove("popup-visible");
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    popup.classList.add("popup--visible");
    document.body.classList.add("popup-visible");
  });
});
