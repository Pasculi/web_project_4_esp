import PopUp from "./Popup";

export default class PopupWithConfirmation extends PopUp {
  constructor(selectorPopup) {
    super(selectorPopup);
    this.confirmButton = document.querySelector(`${this.selectorPopup}`);
  }

}


