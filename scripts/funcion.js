function functionCards(card) {
  /******************************************* */
  const containerCard = document.querySelector(".card-container");
  const templateCard = document.querySelector(".card-container").content;
  const elementCard = templateCard.querySelector(".card").cloneNode(true);
  elementCard.querySelector(".card__name").textContent = `${card.name}`;
  elementCard
    .querySelector(".card__image")
    .setAttribute("src", `${card.link}`);
  elementCard
    .querySelector(".btn__delete")
    .addEventListener("click", function (evt) {
      evt.target.parentNode.parentNode.remove();
    });
  /**CLICK EN IMAGEN */
  elementCard.querySelector('.card__image').addEventListener("click", function (evt) {
    console.log('Click en imagen');
    const imagenPlace = document.querySelector('.modal__image-place');
    const namePlace = document.querySelector('.name__place');
    imagenPlace.setAttribute("src", evt.target.src);
    namePlace.textContent = card.name;
    console.log(evt.target);
    console.log(evt.target.src);
    console.log(evt.target.alt);

    const modalImagen = document.querySelector('.modal__image');
    modalImagen.style.display = "flex"
  });
  /**CLICK EN IMAGEN */
  elementCard
    .querySelector(".btn__like")
    .addEventListener("click", function (evt) {
      console.log(evt.target);
      evt.target.classList.toggle("btn__like-active");
    });

  containerCard.prepend(elementCard);
  /******************************************* */
}