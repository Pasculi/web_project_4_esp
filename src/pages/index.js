import './index.css';
import { config, sectionCard, btnPopupEdit, btnPopupPlace, avatar, profileName, profileAbout, inputProfileName, inputProfileAbout, inputNamePlace, inputUrlPlace, popupFormProfile, popupFormPlace, buttonEditProfile, avatarSection, overlayAvatar, popupEditAvatar, popupFormAvatar, closeFormAvatar, inputUrlAvatar, submitPopupPlace, submitPopupProfile, initialCards, buttonSaveAvatar, buttonLike } from '../utils/utils.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import { api } from '../components/Api.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';

/* const buttonDelete = document.querySelector('.popup__button--delete-confirm');
const popupConfirm = new PopupWithConfirmation('.popup__delete-card');
buttonDelete.addEventListener('click', () => {
  evt.preventDefault();
  popupConfirm.closePopUp();
}) */
const popupConfirm = new PopupWithConfirmation('.popup__delete-card');

function remoteDeleteCard(idCard) {
  console.log(idCard)
  api.deleteCard(idCard).then(() => {
    /* api.getInitialCards().then(cards => {
      sectionContainerCard.setItems(cards);
      sectionContainerCard.rendererItems();
    }) */
  })
}

function remoteRemoveLike(idCard, buttonLike, callback) {
  return api.deleteLikeCard(idCard).then(() => {
    buttonLike.classList.remove("card__place-button--like-active");
    callback()
  })
    .catch(error => console.warn(error))
}
function remoteLike(idCard, buttonLike) {
  api.likeCard(idCard).then(() => {
    buttonLike.classList.add("card__place-button--like-active");
    buttonLike.querySelector('.card__place-like-counter').textContent = idCard._likes;

  })
    .catch(error => console.warn(error))
}
const formValidatorProfile = new FormValidator(config, popupFormProfile);
formValidatorProfile.enableValidation();

const formValidatorNewCard = new FormValidator(config, popupFormPlace);
formValidatorNewCard.enableValidation();

const popupImage = new PopupWithImage('.popup-img-close-image')


export function getUsers() {
  api.getUserInfo()
    .then((dataUser) => {
      console.log(dataUser)
      profileName.textContent = dataUser.name;
      profileAbout.textContent = dataUser.about;
      avatar.src = dataUser.avatar;
      avatar.alt = dataUser.name;
      const currentUserId = dataUser._id;
      createCard(currentUserId);
      return currentUserId;
    }).catch((error) => {
      console.warn(`Error al obtener la información del usuario: ${error.message}`);
    });
}
getUsers();

let sectionContainerCard;

function createCard(currentUserId) {
  sectionContainerCard = new Section(
    {
      items: initialCards,
      renderer: (data) => {
        const cardNew = new Card(
          data,
          '.card',
          function () {
            popupImage.openPopUp({ name: data.name, link: data.link })
          },
          remoteLike,
          remoteRemoveLike,
          remoteDeleteCard,
          currentUserId,
          popupConfirm

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
}

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
      avatar.src = avatarUrl.avatar;
      avatar.alt = 'Avatar'
      popupEditAvatar.classList.remove('popup__edit-avatar--show');
      buttonSaveAvatar.textContent = "Guardar"
    })
    .catch((error) => {
      console.error("Error al actualizar el Avatar:", error);
    });
})


const userInfo = new UserInfo(profileName, profileAbout);


/***************************Procesamos formulario de Profile************************************ */
btnPopupEdit.addEventListener('click', () => {
  formProfile.openPopUp();
  formProfile._getInputValues();
})
const formProfile = new PopupWithForm('.popup-profile', () => {
  /*Se actualiza el perfil del usuario*/
  submitPopupProfile.textContent = "Guardando...";
  api.updateUser(inputProfileName.value, inputProfileAbout.value).then((user) => {
    userInfo.setUserInfo({ name: inputProfileName.value, about: inputProfileAbout.value })
  })
    .catch((error) => {
      console.error("Error al actualizar el perfil:", error);
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

      /* const { nameCard, linkCard } = newCard; */
      const createOneCard = new Card(
        newCard,
        '.card',
        function () {
          popupImage.openPopUp({ nameCard, linkCard })
        },
        remoteLike,
        remoteRemoveLike,
        remoteDeleteCard,
        currentUserId,
        popupConfirm,
      );
      const cardElement = createOneCard.generateCard()
      sectionContainerCard.addItem(cardElement, true)
      submitPopupPlace.textContent = "Guardar"

      api.getInitialCards().then(cards => {
        console.log(cards)
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

