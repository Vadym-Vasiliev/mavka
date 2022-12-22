const cross = document.querySelector(".popup__cross");
const links = document.querySelectorAll(".fonts-list__link");
const popup = document.querySelector("#popup");
const numberModal = document.querySelector(".popup-list__number");
const textModal = document.querySelector(".popup-list__text");
const projectModal = document.querySelector(".popup-list__img");
const content = document.querySelector(".popup__content");

cross.addEventListener("click", () => {
  popup.classList.remove("popup--visible");
  document.body.classList.remove("popup-visible");
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    popup.classList.add("popup--visible");
    document.body.classList.add("popup-visible");
    const dataPreview = link.dataset.preview;
    const dataProject = link.dataset.project;
    const dataText = link.dataset.text;
    const dataNumber = link.dataset.number;
    const dataPreview2 = link.dataset.preview2;

    const previewImg = dataPreview
      ? `<img class="mockup__img mockup__img--preview" src="${dataPreview}"/>`
      : "";

    const previewImg2 = dataPreview2
      ? `<img class="mockup__img mockup__img--preview2" src="${dataPreview2}"/>`
      : "";

    content.innerHTML = `
      <div class="mockup">
        <div class="mockup__top">
          <span class="mockup__number">${dataNumber}</span>
          <p class="mockup__text">${dataText}</p>
        </div>
        ${previewImg}
        ${previewImg2}
        <img class="mockup__img mockup__img--project" src="${dataProject}"/>
      </div>
    `;
  });
});
