const editProfile = '.profile__author-button-edit';
const editPlace = '.profile__author-button-add-place';


const popupCloseProfile = document.querySelector('.popup__button-close-profile');
const popupClosePlace = document.querySelector('.popup__button-close-place');
const popupCloseImage = document.querySelector('.popup-image__close');
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
    document.addEventListener('Escape', this._handleEscClose);
    this.setEventListeners();
  }
  close() {
        this.popup.classList.remove('popup--show');
        document.addEventListener('Escape', this._handleEscClose);



  }
  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close()
    }
  }
  setEventListeners() {
    this.selectorPopup.querySelector(`${popupCloseImage}`).addEventListener('click', () => {
      this.close();
    });

  }
}

