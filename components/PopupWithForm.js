import PopUp from "./Popup.js"



/* const inputName = document.querySelector("#popup__input-profile").value
const inputJob = document.querySelector("#popup__input-about").value */

export default class PopupWithForm extends PopUp {
  constructor(selectorPopup, buttonSelector) {
    super(selectorPopup)
    this.buttonOpen = document.querySelector(buttonSelector);
    this.popupCloseImage = document.querySelector('.popup__close-image');
  }
  _getInputValues() {

  }
  setEventListeners() {
    this.buttonOpen.addEventListener('click', () => {
      super.openPopUp()
    })
    this.popupCloseImage.addEventListener('click', () => {
      super.closePopUp()
    })
  }
}
