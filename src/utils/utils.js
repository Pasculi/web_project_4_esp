import  PopupWithConfirmation  from '../components/PopupWithConfirmation.js'

export const initialCards = [
  {
    name: "Santiago",
    link: "https://storage.googleapis.com/chile-travel-newsite-static-content/2021/08/santiago-portada.jpg",
  },
  {
    name: "Valdivia",
    link: "https://storage.googleapis.com/chile-travel-newsite-static-content/2021/07/Encantos_Valdivia-y-Corral_mercado-fluvialjpg-1024x683.jpg",
  },
  {
    name: "Puerto de Valparaíso",
    link: "https://media.istockphoto.com/id/827067390/es/foto/colorido-valparaiso.jpg?s=612x612&w=0&k=20&c=VsJWIW249JHwoSUfpIhCYjl7gELpdCLxa0trOo_nqjk=",
  },
  {
    name: "Calama",
    link: "https://cdnx.jumpseller.com/ad-toma-aerea-banco-de-im/image/21301255/Captura_de_Pantalla_2021-12-17_a_la_s__19.49.20.jpg?1639781545",
  },
  {
    name: "Antofagasta",
    link: "https://www.holidayinnexpress.cl/wp-content/uploads/2017/08/destacada_antofagasta.jpg",
  },
  {
    name: "Ciudad de Arica",
    link: "https://q-xx.bstatic.com/xdata/images/city/600x480/671802.jpg?k=f2af7c265359c6bfef67dd8137aae05a987d3df4208c8423068a807acc405ad3&o=",
  },
];

export const config = ({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button-disabled",
  inputErrorClass: "popup__input-type-error",
  errorClass: "popup__error-visible"
});




export const sectionCard = ".container-card";
export const popupFormProfile = document.querySelector('.popup-profile');
export const popupFormPlace = document.querySelector('.popup-place');
export const btnPopupPlace = document.querySelector('.profile__author-button-add-place');
export const btnPopupEdit = document.querySelector('.profile__author-button-edit');
export const btnPopupDeleteProfile = document.querySelector('.popup__button-close-profile');
export const btnPopupDeletePlace = document.querySelector('.popup__button-close-place');
export const btnPopupDeleteImage = document.querySelector('.popup__image-content');
export let profileName = document.querySelector('.profile__author');
export let profileAbout = document.querySelector('.profile__activit');
export const inputProfileName = document.querySelector('#popup__input-profile');
export const inputProfileAbout = document.querySelector('#popup__input-about');
export const submitPopupProfile = document.querySelector('.popup__button-profile');
export const submitPopupPlace = document.querySelector('.popup__button-place');
export const inputNamePlace = document.querySelector('#popup__input-name-place');
export const inputUrlPlace = document.querySelector('#popup__input-url-place');
export const buttonLike = document.querySelector('.card__place-button--like');
export const avatar = document.querySelector('.profile__avatar-image');
export const avatarSection = document.querySelector('.profile__avatar');
export const buttonEditProfile = document.querySelector('.profile__avatar-edit');
export const overlayAvatar = document.querySelector('.profile__overlay-avatar');
export const popupEditAvatar = document.querySelector('#popup-avatar-edit');
export const buttonSaveAvatar = document.querySelector('.popup__button-save-avatar')
export const inputUrlAvatar = document.querySelector('#popup__input-url-avatar');
export const popupFormAvatar = document.querySelector('.popup__avatar-form-edit');
export const closeFormAvatar = document.querySelector('.popup__avatar-button-close');
export const buttonConfirm = document.querySelector('.popup__button-delete');


export const popupConfirm = new PopupWithConfirmation('.popup-confirm');