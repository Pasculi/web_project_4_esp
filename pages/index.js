import { opacityButtons, initialCards } from "../utils/constants.js";
import Card from "../components/card.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js"
import PopUp from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js"


opacityButtons()


/*Llamamos a la clase Section y poblamos con las cards*/

const newSection = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card('.card', item);
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

const defaultUser = new UserInfo({ nameSelector, jobSelector })
console.log(defaultUser.getUserInfo());

const popupImage = '.popup-image';

const newimage = new PopupWithImage(popupImage)
console.log(newimage.open("San Pedro de Atacama", "https://lh3.googleusercontent.com/p/AF1QipMmZ4UQ2vriACFJVbBRh8sFTZwK6unMKuvMJle6=s680-w680-h510"))



export { nameSelector, jobSelector }
