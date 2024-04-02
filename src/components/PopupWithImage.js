import PopUp from "./Popup.js";

export default class PopupWithImage extends PopUp {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._popupTitle = this.popup.querySelector('.popup__image-name-place');
    this._popupLink = this.popup.querySelector('.popup__image-url');
  }
  openPopUp(name, link ) {
    this._popupTitle.textContent = name;
    this._popupLink.src = link;
    this._popupLink.alt = name;
    super.openPopUp();
  }
  closePopUp() {
    super.closePopUp();
  }

}


