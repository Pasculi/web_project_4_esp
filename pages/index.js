import { opacityButtons, initialCards } from "../utils/constants.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js"
import PopupWithImage from "../components/PopupWithImage.js"


opacityButtons()

const popupImage = '.popup-image';
/*Llamamos a la clase Section y poblamos con las cards*/
const nuevaImagen = new PopupWithImage(popupImage)


const newSection = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card('.card', item, nuevaImagen);
    const cardGenerate = card.generateCard();
    newSection.addItem(cardGenerate)
  },
}, ".container-card"
)

newSection.rendererItems()

/*Función para Guardar una Imagen*/
const savePlace = document.querySelector(".popup__button-place");
function savePlaces() {
  const name = document.querySelector("#popup__input-place").value;
  const link = document.querySelector("#popup__input-url").value;
  const cardNueva = new Card('.card', { name, link });
  newSection.addItem(cardNueva.generateCard());
  closePopupPlace();

}
savePlace.addEventListener("click", savePlaces);


/*Obtenemos el Dato Usuario y Job */


/*Cambiar Nombre de Perfil y Acerca de en Perfil*/


const nameSelector = '.profile__author';
const jobSelector = '.profile__activit';


export { nameSelector, jobSelector }