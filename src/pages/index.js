import './index.css';
import { config, sectionCard, btnPopupEdit, btnPopupPlace, avatar, profileName, profileAbout, inputProfileName, inputProfileAbout, inputNamePlace, inputUrlPlace, popupFormProfile, popupFormPlace, buttonEditProfile, avatarSection, overlayAvatar, popupEditAvatar, buttonSaveAvatar, popupFormAvatar, closeFormAvatar, inputUrlAvatar } from '../utils/utils.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import { api } from '../components/Api.js';
/* import PopupWithFormAvatar from '../components/PopupWithFormAvatar.js'; */




const formValidatorProfile = new FormValidator(config, popupFormProfile);
formValidatorProfile.enableValidation();

const formValidatorNewCard = new FormValidator(config, popupFormPlace);
formValidatorNewCard.enableValidation();

const popupImage = new PopupWithImage('.popup-img-close-image')

/***********************************************************************/




/******************Obtenemos las card desde la API y las incorporamos a la seccción de las CARDS*******************/
export function getCardInitials() {

  api.getInitialCards()
    .then(cards => {
      console.log(cards)
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

}

getCardInitials()


/* api.getInitialCards()
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
 */
/*********************Obtenemos al Usuario************************/
api.getUserInfo()
  .then((dataUser) => {
    console.log(dataUser)
    profileName.textContent = dataUser.name;
    profileAbout.textContent = dataUser.about;
    avatar.src = dataUser.avatar;
    avatar.alt = dataUser.avatar;
  })
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

  api.updateAvatar(inputUrlAvatar.value)
    .then((avatarUrl) => {
      console.log(avatarUrl);
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
  api.updateUser(inputProfileName.value, inputProfileAbout.value).then((user) => {
    userInfo.setUserInfo({ name: inputProfileName.value, about: inputProfileAbout.value })
  }).catch(errors => {
    console.error(errors);
  })
})

const formEditProfile = new PopupWithForm('.popup__edit-profile');

/***************************Procesamos formulario de Place************************************ */

/* const formPlace = new PopupWithForm('.popup-place', () => {
  const nameCard = inputNamePlace.value;
  const linkCard = inputUrlPlace.value;
  const createOneCard = new Card(
    { nameCard , linkCard },
    '.card',
    function () {
      popupImage.openPopUp({ nameCard, linkCard })
    }
  );
  const oneCard = createOneCard.generateCard()
  sectionContainerCard.addItem(oneCard);
}); */

const formPlace = new PopupWithForm('.popup-place', () => {
  const nameCard = inputNamePlace.value;
  const linkCard = inputUrlPlace.value;
  api.addCard(linkCard, nameCard)
    .then(newCard => {
      const { nameCard, linkCard } = newCard;
      const createOneCard = new Card(
        { nameCard, linkCard },
        '.card',
        function () {
          popupImage.openPopUp({ nameCard, linkCard })
        }
      );
      createOneCard.generateCard()
    })
  })

  btnPopupPlace.addEventListener('click', () => {
    formPlace.openPopUp()
    getCardInitials()
})