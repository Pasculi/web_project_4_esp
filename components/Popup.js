const editProfile = '.profile__author-button-edit';
const editPlace = '.profile__author-button-add-place';
const popupImage = '.popup-image'

const popupCloseProfile = document.querySelector('.popup__button-close-profile');
const popupClosePlace = document.querySelector('.popup__button-close-place');
const popupCloseImage = document.querySelector('.popup-image__button-close');
const popupProfile = document.querySelector('.popup-profile');
const popupPlace = document.querySelector('.popup-place');


const inputName = document.querySelector("#popup__input-profile").value
const inputJob = document.querySelector("#popup__input-about").value
export default class PopUp{
  constructor(selectorPopup) {
    this.selectorPopup = selectorPopup;
    this.popup = document.querySelector(this.selectorPopup);
  }
  open() {
    this.popup.classList.add('popup--show');
  }
  close() {

    this.popup.classList.remove('popup--show');
  }
  _handleEscClose() {
    if (evt.key === 'Escape') {
      this.close()
    }
  }
  setEventListeners() {
    this.popup.addEventListener('click', this.close)
  }
}


const saludo = "Hola como estas"
console.log(saludo)










