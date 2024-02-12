import PopUp from "./Popup.js";

export default class PopupWithImage extends PopUp {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._popupTitle = this.popup.querySelector('.popup-image__name-place');
    this._pupupLink = this.popup.querySelector('.popup-image__url');
  }
  openPopUp({ name, link }) {
    this._popupTitle.textContent = name;
    this._pupupLink.src = link;
    this._popupTitle.alt = name;
    super.openPopUp();
  }

}


