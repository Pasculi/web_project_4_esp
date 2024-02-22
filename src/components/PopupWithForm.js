import PopUp from "./Popup.js"
export default class PopupWithForm extends PopUp {
  constructor(selectorPopup, submitCallback) {
    super(selectorPopup);
    this._submitCallback = submitCallback;
    this._formSelector = document.querySelector(`${this.selectorPopup}-form`);
    this.sendCard = this.sendCard.bind(this);
  }
  _getInputValues() {
    this._inputsList = Array.from(this._formSelector.querySelectorAll(`.popup__input`));
    this._inputsElements = {};
    this._inputsList.forEach(input => {
      this._inputsElements[input.name] = (input.value)
    });
    return this._inputsElements;
  }
  sendCard(evt) {
    evt.preventDefault();
    this._submitCallback(this._getInputValues())
    this.closePopUp();
  }
  setEventListeners() {
    super.setEventListeners();
    this._formSelector.addEventListener('submit', this.sendCard)
  }
  closePopUp() {
    super.closePopUp();
  }
}

