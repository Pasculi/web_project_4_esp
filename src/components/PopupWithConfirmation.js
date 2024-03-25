import PopUp from "./Popup";

export default class PopupWithConfirmation extends PopUp {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._confirm = document.querySelector(selectorPopup);
  }
  openPopUp(){
    this._confirm.classList.add('popup__delete-card-show')
  }
  closePopUp() {
    this._confirm.classList.remove('popup__delete-card-show')
  }
  setEventListeners() {
    super.setEventListeners();
    this._formSelector.addEventListener('submit', this.sendCard)

  }
}


