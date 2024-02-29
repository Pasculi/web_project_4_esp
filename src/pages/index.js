import './index.css';
import { initialCards, config, sectionCard, btnPopupEdit, btnPopupPlace, profileName, profileAbout, inputProfileName, inputProfileAbout, inputNamePlace, inputUrlPlace, popupFormProfile, popupFormPlace } from '../utils/utils.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Api from '../components/Api.js';


const api = new Api('https://around.nomoreparties.co/v1/web_es_11', {
  headers: {
    authorization: "962f1eb6-c335-46ac-b3a5-7d22c2a5fd9a"
  }
});



const formValidatorProfile = new FormValidator(config, popupFormProfile);
formValidatorProfile.enableValidation();

const formValidatorNewCard = new FormValidator(config, popupFormPlace);
formValidatorNewCard.enableValidation();

const popupImage = new PopupWithImage('.popup-img-close-image')
/******************Generamos Las Card y las incorporamos a la seccción de las CARDS*******************/
const dataCards = api.getInitialCards().then(res => {
  if (res.ok) {
    const result = res.json();
    return result
  }
})
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    return `Error: ${err}`
  })
;

dataCards.forEach(card => {
console.log(card);
})

const sectionContainerCard = new Section(
  {
    items: initialCards,
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
})

/***************************Procesamos formulario de Place************************************ */

const formPlace = new PopupWithForm('.popup-place', () => {
  const dataImage = { name: inputNamePlace.value, link: inputUrlPlace.value };
  const createOneCard = new Card(
    dataImage,
    '.card',
    function () {
      popupImage.openPopUp({ name: dataImage.name, link: dataImage.link })
    }
  );
  const oneCard = createOneCard.generateCard()
  sectionContainerCard.addItem(oneCard);
});

btnPopupPlace.addEventListener('click', () => {
  formPlace.openPopUp()
})
