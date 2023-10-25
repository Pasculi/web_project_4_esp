import { closePopupPlace, opacityButtons, initialCards } from "../utils/constants.js";
import Card from "../components/card.js";
import Section from "../components/Section.js"

opacityButtons()


/* const cardElement = document.querySelector('.container-card');
initialCards.forEach(initialCard => {
  const card = new Card('.card', initialCard)
  cardElement.appendChild(card.render())
}) */

const newCard = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card('.card', item);
    newCard.addItem(card);
  }
})

/*Función para Guardar una Imagen*/
const savePlace = document.querySelector(".popup__button-place");
function savePlaces() {
  const name = document.querySelector("#popup__input-place").value;
  const link = document.querySelector("#popup__input-url").value;
  const cardNueva = new Card('.card', { name, link });
  cardElement.prepend(cardNueva.render());
  closePopupPlace();
  render(initialCards);
}

savePlace.addEventListener("click", savePlaces);


