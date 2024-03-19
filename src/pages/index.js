import './index.css';
import { config, sectionCard, btnPopupEdit, btnPopupPlace, avatar, profileName, profileAbout, inputProfileName, inputProfileAbout, inputNamePlace, inputUrlPlace, popupFormProfile, popupFormPlace, buttonEditProfile, avatarSection, overlayAvatar, popupEditAvatar, popupFormAvatar, closeFormAvatar, inputUrlAvatar, submitPopupPlace, submitPopupProfile, initialCards, buttonSaveAvatar, buttonLike, } from '../utils/utils.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import { api } from '../components/Api.js';
/* import PopupWithConfirmation from '../components/PopupWithConfirmation.js'; */

let dataUsers;

function remoteDeleteCard(idCard) {

  api.deleteCard(idCard).then(() => {
    api.getInitialCards().then(cards => {
      sectionContainerCard.setItems(cards);
      sectionContainerCard.rendererItems();
    })
  })
}

function remoteRemoveLike(idCard) {
  api.deleteLikeCard(idCard).then(() => {
    buttonLike.classList.remove("card__place-button--like-active")
  })
}
function remoteLike(idCard, buttonLike) {
  api.likeCard(idCard).then(() => {
    buttonLike.classList.add("card__place-button--like-active")
  })
}
const formValidatorProfile = new FormValidator(config, popupFormProfile);
formValidatorProfile.enableValidation();

const formValidatorNewCard = new FormValidator(config, popupFormPlace);
formValidatorNewCard.enableValidation();

const popupImage = new PopupWithImage('.popup-img-close-image')

/***********************************************************************/
/******************Obtenemos las card desde la API y las incorporamos a la seccción de las CARDS*******************/

const sectionContainerCard = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      const cardNew = new Card(
        data,
        '.card',
        function () {
          popupImage.openPopUp({ name: data.name, link: data.link })
        },
        remoteRemoveLike,
        remoteLike,
        remoteDeleteCard,
        data

      );
      const cardList = cardNew.generateCard();
      sectionContainerCard.addItem(cardList);
    },
  },
  sectionCard
);
api.getInitialCards()
.then((cards) => {
  sectionContainerCard.setItems(cards);


}).finally(() => {
    sectionContainerCard.rendererItems();
})

/*********************Obtenemos al Usuario************************/
export  const userCurrent = (dataUser)=> {
  console.log(dataUser.name);

}


export function getUsers() {
  api.getUserInfo()
    .then((dataUser) => {
      userCurrent(dataUser);
      profileName.textContent = dataUser.name;
      profileAbout.textContent = dataUser.about;
      avatar.src = dataUser.avatar;
      avatar.alt = dataUser.name;
      console.log(dataUser._id);
    })
}
getUsers();


/*Mostrar sombra edit Avatar*/
function addOverlayAvatar() {
  buttonEditProfile.classList.add('profile__avatar-edit--show');
  overlayAvatar.classList.add('profile__overlay-avatar--show')
}
function removeOverlayAvatar() {
  buttonEditProfile.classList.remove('profile__avatar-edit--show')
  overlayAvatar.classList.remove('profile__overlay-avatar--show')
}

avatarSection.addEventListener('mouseover', addOverlayAvatar)
avatarSection.addEventListener('mouseout', removeOverlayAvatar)

/***************Mostrar Formulario Edit Avatar******************/


buttonEditProfile.addEventListener('click', () => {
  popupEditAvatar.classList.add('popup__edit-avatar--show');
})
closeFormAvatar.addEventListener('click', () => {
  popupEditAvatar.classList.remove('popup__edit-avatar--show');
})



popupFormAvatar.addEventListener('submit', (evt) => {
  evt.preventDefault();
  buttonSaveAvatar.textContent = "Guardando..."
  api.updateAvatar(inputUrlAvatar.value)
    .then((avatarUrl) => {
      avatar.src = avatarUrl;
      avatar.alt = 'Avatar'
      popupEditAvatar.classList.remove('popup__edit-avatar--show');
        buttonSaveAvatar.textContent= "Guardar"
      getUsers()
    })
})


const userInfo = new UserInfo(profileName, profileAbout);


/***************************Procesamos formulario de Profile************************************ */
btnPopupEdit.addEventListener('click', () => {
  formProfile.openPopUp();
  formProfile._getInputValues();
})
const formProfile = new PopupWithForm('.popup-profile', () => {
  /*Se actualiza el perfil del usuario*/
  submitPopupProfile.textContent="Guardando...";
  api.updateUser(inputProfileName.value, inputProfileAbout.value).then((user) => {
    userInfo.setUserInfo({ name: inputProfileName.value, about: inputProfileAbout.value })
  }).catch(errors => {
    console.error(errors);
  })
})
const formValidatorAvatar = new FormValidator(config, popupFormAvatar);
formValidatorAvatar.enableValidation();

/* const formConfirm = new PopupWithConfirmation('popup__delete-card'); */



/***************************Procesamos formulario de Place************************************ */

btnPopupPlace.addEventListener('click', () => {
  formPlace.openPopUp()
})


const formPlace = new PopupWithForm('.popup-place', () => {
  const nameCard = inputNamePlace.value;
  const linkCard = inputUrlPlace.value;
  submitPopupPlace.textContent = "Guardando..."
  api.addCard(linkCard, nameCard)
    .then(newCard => {
      console.log(newCard)
      const { nameCard, linkCard } = newCard;
      const createOneCard = new Card(
        { nameCard, linkCard },
        '.card',
        function () {
          popupImage.openPopUp({ nameCard, linkCard })
        },
        remoteRemoveLike,
        remoteLike,
        remoteDeleteCard,

      );
      const cardElement = createOneCard.generateCard()
      sectionContainerCard.addItem(cardElement, true)
      submitPopupPlace.textContent = "Guardar"

      api.getInitialCards().then(cards => {
        sectionContainerCard.setItems(cards);
        sectionContainerCard.rendererItems();
      })
        .finally(() => {
          sectionContainerCard.rendererItems();
        })
    })
})

submitPopupPlace.addEventListener('click', () => {
  formPlace.closePopUp();
})