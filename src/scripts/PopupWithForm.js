import PopUp from "./Popup.js"
export default class PopupWithForm extends PopUp {
  constructor(selectorPopup, submitCalback) {
    super(selectorPopup);
    this._submitCallback = submitCalback;
    this._formSelector = document.querySelector(`${this.selectorPopup}-form`);
  }
  _getInputValues() {
    this._inputsList = Array.from(this._formSelector.querySelectorAll(`.popup__input`));
    this._inputsElements = {};
    this._inputsList.forEach(input => {
      this._inputsElements[input.name] = (input.value)
    });
    return this._inputsElements;
  }
  setEventListeners() {
    super.setEventListeners();
    this._formSelector.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitCallback(this._getInputValues())
      this.closePopUp();

    })
  }
  closePopUp() {
    super.closePopUp();
  }
}

