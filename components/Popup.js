const editProfile = '.profile__author-button-edit';
const editPlace = '.profile__author-button-add-place';


const popupCloseProfile = document.querySelector('.popup__button-close-profile');
const popupClosePlace = document.querySelector('.popup__button-close-place');
const popupProfile = document.querySelector('.popup-profile');
const popupPlace = document.querySelector('.popup-place');


const inputName = document.querySelector("#popup__input-profile").value
const inputJob = document.querySelector("#popup__input-about").value
export default class PopUp{
  constructor(selectorPopup) {
    this.selectorPopup = selectorPopup;
    this.popupCloseImage = document.querySelector('.popup-image__close');
    this.popup = document.querySelector(this.selectorPopup);
  }
  openPopUp() {
    this.popup.classList.add('popup--show');
    document.addEventListener('keydown', this._handleEscClose);
    this.setEventListeners();
  }
  closePopUp() {
        this.popup.classList.remove('popup--show');
        document.removeEventListener('keydown', this._handleEscClose);
  }
  _handleEscClose(evt) {
    if (evt.key === 'Escape') { 
      this.closePopUp()
    }
  }
  setEventListeners() {    
    this.popupCloseImage.addEventListener('click', () =>{      
      this.closePopUp()
    })

  }
}

