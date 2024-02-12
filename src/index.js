import { data, config, sectionCard, btnPopupEdit, btnPopupPlace, profileName, profileAbout, inputProfileName, inputProfileAbout, inputNamePlace, inputUrlPlace, popupFormProfile, popupFormPlace } from './scripts/utils.js';
import Card from './scripts/Card.js';
import Section from './scripts/Section.js';
import UserInfo from './scripts/UserInfo.js';
import FormValidator from './scripts/FormValidator.js';
import PopupWithImage from './scripts/PopupWithImage.js';
import PopupWithForm from './scripts/PopupWithForm.js';

const formValidatorProfile = new FormValidator(config, popupFormProfile);
formValidatorProfile.enableValidation();

const formValidatorNewCard = new FormValidator(config, popupFormPlace);
formValidatorNewCard.enableValidation();
const popupImage = new PopupWithImage('.popup-image')
/******************Generamos Las Card y las incorporamos a la seccción de las CARDS*******************/
const sectionContainerCard = new Section(
  {
    items: data,
    renderer: (data) => {
      const cardNew = new Card(
        data,
        '.card',
        function () {
          popupImage.openPopUp({ name: data.name, link: data.link })
        });
      const cardList = cardNew.generateCard();
      sectionContainerCard.addItem(cardList);
    },
  },
  sectionCard
);
sectionContainerCard.rendererItems();

/*********************Creamos al Usuario************************/
const userInfo = new UserInfo(profileName, profileAbout);


/***************************Procesamos formulario de Profile************************************ */
btnPopupEdit.addEventListener('click', () => {
  formProfile.openPopUp();
  formProfile._getInputValues();
})
const formProfile = new PopupWithForm('.popup-profile', () => {
  /*Se actualiza el perfil del usuario*/
  userInfo.setUserInfo({ name: inputProfileName.value, about: inputProfileAbout.value })
})//Revisar

/***************************Procesamos formulario de Place************************************ */

const formPlace = new PopupWithForm('.popup-place', () => {
  const dataImage = { name: inputNamePlace.value, link: inputUrlPlace.value };
  const createOneCard = new Card(
    dataImage, '.card', function () {
      popupImage.openPopUp({ name: dataImage.name, link: dataImage.link })
    }
  );
  const oneCard = createOneCard.generateCard()
  sectionContainerCard.addItem(oneCard);
})
btnPopupPlace.addEventListener('click', () => {
  formPlace.openPopUp()
})
