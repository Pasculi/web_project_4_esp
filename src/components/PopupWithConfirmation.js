import PopUp from "./Popup";

export default class PopupWithConfirmation extends PopUp{
  constructor(selectorPopup) {
    super(selectorPopup);
    this._confirmButton = this.popup.querySelector('.popup__button-delete')
  }
  setConfirmAction(confirmHandler) {
    this._confirmHandler = confirmHandler;
    this._confirmButton.removeEventListener("click", this._handleConfirm);
    this._handleConfirm = (event) => {
      event.preventDefault();
      this._confirmHandler();
      this.close();
    };
    this._confirmButton.addEventListener("click", this._handleConfirm);
  }

  setEventListeners() {
    super.setEventListeners();
  }
}