const cross = document.querySelector(".popup__cross");
const links = document.querySelectorAll(".fonts-list__link");
const popup = document.querySelector("#popup");
const numberModal = document.querySelector(".popup-list__number");
const textModal = document.querySelector(".popup-list__text");
const projectModal = document.querySelector(".popup-list__img");

cross.addEventListener("click", () => {
  popup.classList.remove("popup--visible");
  document.body.classList.remove("popup-visible");
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    popup.classList.add("popup--visible");
    document.body.classList.add("popup-visible");

    console.log(
      link.dataset.number,
      link.dataset.text,
      link.dataset.preview,
      link.dataset.project
    );
    // link.dataset.text;
    // link.dataset.preview;
    // link.dataset.project;
  });
});
