import PopUp from "./Popup.js"



/* const inputName = document.querySelector("#popup__input-profile").value
const inputJob = document.querySelector("#popup__input-about").value */

export default class PopupWithForm extends PopUp {
  constructor(selectorPopup, buttonSelector) {
    super(selectorPopup)
    this.buttonOpen = document.querySelector(buttonSelector);
    this.popupCloseImage = document.querySelector('.popup-image__close');
  }
  _getInputValues() {

  }
  setEventListeners() {
    super.setEventListeners();
    this.buttonOpen.addEventListener('click', () => {
      super.openPopUp()
    })

  }
}