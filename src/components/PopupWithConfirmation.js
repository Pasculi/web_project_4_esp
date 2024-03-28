import PopUp from "./Popup";

export default class PopupWithConfirmation extends PopUp {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._confirm = document.querySelector('.popup__button--delete-confirm');
  }
  setConfirm(confirmHandler) {
    this._confirmHandler = confirmHandler;
    this._confirm.removeEventListener('click', this._handleConfirmation);
    this._handleConfirmation = (evt) => {
      evt.preventDefault();
      this._confirmHandler();
      this.closePopUp();
    }
    this._confirm.addEventListener('click', this._handleConfirmation);

  }

  setEventListeners() {
    super.setEventListeners();


  }
}


