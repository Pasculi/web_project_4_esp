import './index.css';
import { config, sectionCard, btnPopupEdit, btnPopupPlace, avatar, profileName, profileAbout, inputProfileName, inputProfileAbout, inputNamePlace, inputUrlPlace, popupFormProfile, popupFormPlace, buttonEditProfile, avatarSection } from '../utils/utils.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import { api } from '../components/Api.js';




const formValidatorProfile = new FormValidator(config, popupFormProfile);
formValidatorProfile.enableValidation();

const formValidatorNewCard = new FormValidator(config, popupFormPlace);
formValidatorNewCard.enableValidation();

const popupImage = new PopupWithImage('.popup-img-close-image')


/******************Obtenemos las card desde la API y las incorporamos a la seccción de las CARDS*******************/
api.getInitialCards()
  .then(cards => {
  const sectionContainerCard = new Section(
    {
      items: cards,
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
})



/*********************Creamos al Usuario************************/
api.getUserInfo()
  .then((dataUser) => {
    console.log(dataUser)
    profileName.textContent = dataUser.name;
    profileAbout.textContent = dataUser.about;
    avatar.src = dataUser.avatar;
    avatar.alt = dataUser.avatar;
  })

function addEditAvatar() {
  buttonEditProfile.classList.add('profile__avatar-edit--show');
}
function removeEditAvatar() {
  buttonEditProfile.classList.remove('profile__avatar-edit--show')
}

avatarSection.addEventListener('mouseover', addEditAvatar)

avatarSection.addEventListener('mouseout', removeEditAvatar)
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

const formEditProfile = new PopupWithForm('.popup__edit-profile');
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
