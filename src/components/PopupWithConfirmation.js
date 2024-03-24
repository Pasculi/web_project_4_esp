import PopUp from "./Popup";

export default class PopupWithConfirmation extends PopUp {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._confirm = document.querySelector(selectorPopup);
    console.log(`Desde PopupWithConfirmation:`)
    console.log(this._confirm)
  }
  openPopUp(){
    this._confirm.classList.add('popup__delete-card-show')
  }
  closePopUp() {
    super.closePopUp();
  }
  setEventListeners() {
    super.setEventListeners();
    this._formSelector.addEventListener('submit', this.sendCard)

  }
}


