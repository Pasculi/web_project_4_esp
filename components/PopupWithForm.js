import PopUp from "./Popup.js"


const editProfile = '.profile__author-button-edit';
const editPlace = '.profile__author-button-add-place';


const popupCloseProfile = document.querySelector('.popup__button-close-profile');
const popupClosePlace = document.querySelector('.popup__button-close-place');
const popupProfile = document.querySelector('.popup-profile');
const popupPlace = document.querySelector('.popup-place');


const inputName = document.querySelector("#popup__input-profile").value
const inputJob = document.querySelector("#popup__input-about").value

export default class PopupWithForm extends PopUp{
  constructor({selectorPopup, callback}) {
    super(selectorPopup)
    this.callback = callback;
    this.form = document.querySelector(selectorPopup)
  }
  _getInputValues(){

    }
  setEventListeners(){

  }
}

