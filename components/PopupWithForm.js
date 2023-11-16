import PopUp from "./Popup.js"



const inputName = document.querySelector("#popup__input-profile").value
const inputJob = document.querySelector("#popup__input-about").value

export default class PopupWithForm extends PopUp{
  constructor({selectorPopup, callback}) {
    super(selectorPopup)
    this.callback = callback;
    this.form = document.querySelector(selectorPopup);
  }
  _getInputValues(){

    }
  setEventListeners(){
    super.selectorPopup
  }
}

