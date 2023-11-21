import { opacityButtons, initialCards } from "../utils/constants.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
/* import UserInfo from "../components/UserInfo.js" */
import PopupWithImage from "../components/PopupWithImage.js"
import PopupWithForm from "../components/PopupWithForm.js";


opacityButtons()

const popupImage = '.popup-image';
/*Llamamos a la clase Section y poblamos con las cards*/
const nuevaImagen = new PopupWithImage(popupImage)



/*Instancia a PopUpForm */

/* const popupForm = new PopupWithForm({popupSelector:'.popup-place', handleFromData:(fromData)=>{
  const UserData = new UserInfo({
    nameSelector:'#popup__input-profile',
    jobSelector:'#popup__input-about',
  }  )
  UserData.setUserInfo({
    name:fromData.nombre,
    job:fromData.trabajo
  })
}
}); */



/********************PASAR A POPUPWITHFORM SETEVENTLISTENERS****************************** */

const popupProfile = '.popup-profile';
const buttonProfile = '.profile__author-button-edit';

const popUpFormProfile = new PopupWithForm(popupProfile, buttonProfile)
popUpFormProfile.setEventListeners();

const popupPlace = '.popup-place';
const buttonPlace = '.profile__author-button-add-place';

const popUpFormPlace = new PopupWithForm(popupPlace, buttonPlace)
popUpFormPlace.setEventListeners();



/* const editProfile = document.querySelector('.profile__author-button-edit');
const popupCloseProfile = document.querySelector('.popup__button-close-profile');
editProfile.addEventListener('click', (evt) => {
  console.log(document.querySelector(`.popup-${evt.target.id}`))
  popupProfile.classList.add('popup--show')
})
popupCloseProfile.addEventListener('click', () => {
  popupProfile.classList.remove('popup--show')
}) */

/************************************************** */

/* const popupPlace = document.querySelector('.popup-place');
const editPlace = document.querySelector('.profile__author-button-add-place');
const popupClosePlace = document.querySelector('.popup__button-close-place');
editPlace.addEventListener('click', (evt) => {
  console.log(document.querySelector(`.popup-${evt.target.id}`))
  popupPlace.classList.add('popup--show')
})

popupClosePlace.addEventListener('click', () => {
  popupPlace.classList.remove('popup--show')
}) */

/* popupForm.openPopUp(); */
/* popupForm.closePopUp(); */




/*Instancia a Section */
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