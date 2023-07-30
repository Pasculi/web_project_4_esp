import { config } from "./fromValidator.js"
import Card from "./card.js"

/*Función que aplica opacidad a los botones editar, añadir lugar y a las X de cerrar */
const btns = Array.from(document.querySelectorAll('.btn'));
const opacityButtons = () => {
  btns.forEach(btn => {
    function addOpacidad() {
      btn.style.opacity = "0.6";
    }
    function removeAddOpacidad() {
      btn.style.opacity = "1";
    }
    btn.addEventListener("mouseover", addOpacidad);
    btn.addEventListener("mouseout", removeAddOpacidad);
  })

}

/*Funcion para dar like al corazón*/
const buttonLike = (evt) => {
  evt.target.classList.toggle("card__place-button--like-active");
}

/*Función para eliminar una card*/
const buttonDeleteCard = (evt) => {
  evt.target.parentNode.parentNode.remove();
}

/*Abrir y cerrar Popup_Form*/
const editProfile = document.querySelector('.profile__author-button-edit');
const editPlace = document.querySelector('.profile__author-button-add-place');
const popupCloseProfile = document.querySelector('.popup__button-close-profile');
const popupClosePlace = document.querySelector('.popup__button-close-place');
const popupCloseImage = document.querySelector('.popup__button-close-image');
const popupProfile = document.querySelector('.popup-profile');
const popupPlace = document.querySelector('.popup-place');

function showPopupProfile() {
  popupProfile.classList.add('popup--show');
}
function closePopupProfile() {
  popupProfile.classList.remove('popup--show');
  document.querySelector("#popup__input-profile").value = "";
  document.querySelector("#popup__input-about").value = "";
}
function showPopupPlace() {
  popupPlace.classList.add('popup--show');
}
function closePopupPlace() {
  popupPlace.classList.remove('popup--show');
  document.querySelector("#popup__input-place").value = "";
  document.querySelector("#popup__input-url").value = "";
}
editProfile.addEventListener('click', showPopupProfile);
editPlace.addEventListener('click', showPopupPlace);
popupCloseProfile.addEventListener('click', closePopupProfile);
popupClosePlace.addEventListener('click', closePopupPlace);
popupCloseImage.addEventListener('click', closePopupImage);
document.addEventListener('keydown', evt => {
  if (evt.key === 'Escape') {
    closePopup()
  }
});


/*Funcion para desplagar una imagen */
const popupImage = document.querySelector('.popup-image')
function openPopupImage() {
  popupImage.classList.add('popup-image--show')
}
function closePopupImage() {
  popupImage.classList.remove('popup-image--show');

}

document.addEventListener('keydown', evt => {
  if (evt.key === 'Escape') {
    closePopupImage()
  }
});

/*Cambiar Nombre de Perfil y Acerca de en Perfil*/
const buttonProfile = document.querySelector('.popup__button-profile')
function popupEditProfile() {
  const nameProfile = document.querySelector('.profile__author');
  const activitProfile = document.querySelector('.profile__activit');
  const inputsElements = Array.from(document.querySelectorAll(config.inputSelector))
  inputsElements.forEach(inputElement => {
    inputElement.addEventListener('input', evt => {
      if (evt.target.id === 'popup__input-profile') {
        nameProfile.textContent = evt.target.value.trim();
      }
      else if (evt.target.id === 'popup__input-about') {
        activitProfile.textContent = evt.target.value.trim();
      }
    })
  })
}
popupEditProfile()
buttonProfile.addEventListener('click', closePopupProfile)


export { openPopupImage, closePopupImage, showPopupProfile, closePopupProfile, showPopupPlace, closePopupPlace, opacityButtons, buttonLike, buttonDeleteCard };